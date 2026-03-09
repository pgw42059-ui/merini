import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Upload, 
  Calculator, 
  LogOut, 
  FileSpreadsheet, 
  Calendar,
  AlertTriangle,
  CheckCircle,
  Loader2,
  RefreshCw
} from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { format } from 'date-fns';

// --- Helpers
// Project-wide symbol normalization (UI/DB standard)
// Primary symbols used across the site: ES, NQ, GC, CL, ZN, SOFR
const normalizeSymbol = (raw: string) => {
  const s = (raw || '').trim().toUpperCase();
  const map: Record<string, string> = {
    // Indices
    NAS100: 'NQ',
    NDX: 'NQ',
    'NQ1!': 'NQ',
    US500: 'ES',
    SPX: 'ES',
    'ES1!': 'ES',
    // Metals/Energy
    XAUUSD: 'GC',
    GOLD: 'GC',
    'GC1!': 'GC',
    USOIL: 'CL',
    WTI: 'CL',
    OIL: 'CL',
    'CL1!': 'CL',
    // Rates
    US10Y: 'ZN',
    'ZN1!': 'ZN',
    // Leave as-is for already-standard symbols
    ES: 'ES',
    NQ: 'NQ',
    GC: 'GC',
    CL: 'CL',
    ZN: 'ZN',
    SOFR: 'SOFR',
  };

  // Strip common prefixes used by charting providers (e.g., CME_MINI:NQ1!)
  const providerStripped = s.includes(':') ? s.split(':').pop() || s : s;
  return map[providerStripped] || providerStripped;
};

const normalizeDay = (raw: string) => {
  // Accept YYYY-MM-DD, YYYY/MM/DD, or ISO datetime; normalize to YYYY-MM-DD
  const v = (raw || '').trim();
  if (!v) return '';
  const iso = v.includes('T') ? v.split('T')[0] : v;
  return iso.replaceAll('/', '-');
};

const normalizeTimeUtc = (raw: string | null | undefined) => {
  // Supabase TIME expects HH:MM[:SS]
  const v = (raw || '').trim();
  if (!v) return '00:00:00';
  const parts = v.split(':').map(p => p.trim());
  if (parts.length === 1) return `${parts[0].padStart(2, '0')}:00:00`;
  if (parts.length === 2) return `${parts[0].padStart(2, '0')}:${parts[1].padStart(2, '0')}:00`;
  return `${parts[0].padStart(2, '0')}:${parts[1].padStart(2, '0')}:${parts[2].padStart(2, '0')}`;
};

type TodaySummary = {
  day: string;
  keyLevelsCount: number;
  keyLevelsBySymbol: Record<string, number>;
  eventsCount: number;
  cautionHighCount: number;
};

export function AdminDashboard() {
  const { user, signOut } = useAuth();
  const [ohlcData, setOhlcData] = useState('');
  const [eventData, setEventData] = useState('');
  const [loading, setLoading] = useState<string | null>(null);
  const [todaySummary, setTodaySummary] = useState<TodaySummary | null>(null);

  const fetchTodaySummary = async () => {
    const today = format(new Date(), 'yyyy-MM-dd');

    const [{ data: keyLevels, error: keyLevelsError }, { data: events, error: eventsError }] = await Promise.all([
      supabase.from('key_levels').select('symbol,method,session').eq('day', today),
      supabase.from('economic_events').select('impact,is_caution_window').eq('day', today),
    ]);

    if (keyLevelsError) throw keyLevelsError;
    if (eventsError) throw eventsError;

    const keyLevelsBySymbol: Record<string, number> = {};
    (keyLevels || []).forEach((r: any) => {
      const sym = r?.symbol || 'UNKNOWN';
      keyLevelsBySymbol[sym] = (keyLevelsBySymbol[sym] || 0) + 1;
    });

    const cautionHighCount = (events || []).filter((e: any) => e?.impact === 'high' && e?.is_caution_window).length;

    setTodaySummary({
      day: today,
      keyLevelsCount: (keyLevels || []).length,
      keyLevelsBySymbol,
      eventsCount: (events || []).length,
      cautionHighCount,
    });
  };

  // Load today's status on enter (so you can confirm reflection immediately)
  useEffect(() => {
    fetchTodaySummary().catch(() => {
      // ignore initial load errors; user can manually refresh
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignOut = async () => {
    await signOut();
    toast.success('로그아웃되었습니다');
  };

  const handleOhlcUpload = async () => {
    if (!ohlcData.trim()) {
      toast.error('OHLC 데이터를 입력해주세요');
      return;
    }

    setLoading('ohlc');
    try {
      // Parse CSV data
      const lines = ohlcData.trim().split('\n');
      const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
      
      // Expected format: symbol, day, open, high, low, close
      const records = lines.slice(1).map(line => {
        const values = line.split(',').map(v => v.trim());
        return {
          symbol: normalizeSymbol(values[headers.indexOf('symbol')] || values[0]),
          day: normalizeDay(values[headers.indexOf('day')] || values[1]),
          open: parseFloat(values[headers.indexOf('open')] || values[2]),
          high: parseFloat(values[headers.indexOf('high')] || values[3]),
          low: parseFloat(values[headers.indexOf('low')] || values[4]),
          close: parseFloat(values[headers.indexOf('close')] || values[5]),
        };
      }).filter(r => r.symbol && r.day && !isNaN(r.close));

      // Calculate key_levels for each record
      for (const record of records) {
        const pivot = (record.high + record.low + record.close) / 3;
        const r1 = 2 * pivot - record.low;
        const r2 = pivot + (record.high - record.low);
        const s1 = 2 * pivot - record.high;
        const s2 = pivot - (record.high - record.low);

        // Upsert to key_levels
        const { error } = await supabase
          .from('key_levels')
          .upsert({
            symbol: record.symbol,
            day: record.day,
            pivot,
            r1,
            r2,
            s1,
            s2,
            prior_high: record.high,
            prior_low: record.low,
            prior_close: record.close,
            method: 'pivot',
            // IMPORTANT: avoid NULL session with UNIQUE constraint (NULLs would allow duplicates)
            session: 'all',
            updated_at: new Date().toISOString(),
          }, {
            // Must match DB UNIQUE(day, symbol, method, session)
            onConflict: 'day,symbol,method,session'
          });

        if (error) throw error;
      }

      toast.success(`${records.length}개 종목의 OHLC 데이터가 업로드되었습니다`);
      await fetchTodaySummary();
      setOhlcData('');
    } catch (error: any) {
      console.error('OHLC upload error:', error);
      toast.error(`업로드 실패: ${error.message}`);
    } finally {
      setLoading(null);
    }
  };

  const handleEventUpload = async () => {
    if (!eventData.trim()) {
      toast.error('이벤트 데이터를 입력해주세요');
      return;
    }

    setLoading('events');
    try {
      // Parse CSV data
      const lines = eventData.trim().split('\n');
      const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
      
      // Expected format: day, time_utc, currency, event_name, impact, forecast, previous_value, is_caution_window
      const records = lines.slice(1).map(line => {
        const values = line.split(',').map(v => v.trim());
        return {
          day: normalizeDay(values[headers.indexOf('day')] || values[0]),
          // NOTE: enforce non-null time_utc to support UNIQUE(day,time_utc,currency,event_name)
          time_utc: normalizeTimeUtc(values[headers.indexOf('time_utc')] || values[1] || null),
          currency: values[headers.indexOf('currency')] || values[2],
          event_name: values[headers.indexOf('event_name')] || values[3],
          impact: values[headers.indexOf('impact')] || values[4],
          forecast: values[headers.indexOf('forecast')] || values[5] || null,
          previous_value: values[headers.indexOf('previous_value')] || values[6] || null,
          is_caution_window: (values[headers.indexOf('is_caution_window')] || values[7] || 'false').toLowerCase() === 'true',
        };
      }).filter(r => r.day && r.currency && r.event_name);

      // Insert events
      const { error } = await supabase
        .from('economic_events')
        .upsert(records.map(r => ({
          ...r,
          updated_at: new Date().toISOString(),
        })), {
          // Requires DB unique constraint/index on these columns
          onConflict: 'day,time_utc,currency,event_name'
        });

      if (error) throw error;

      toast.success(`${records.length}개 이벤트가 업로드되었습니다`);
      await fetchTodaySummary();
      setEventData('');
    } catch (error: any) {
      console.error('Event upload error:', error);
      toast.error(`업로드 실패: ${error.message}`);
    } finally {
      setLoading(null);
    }
  };

  const handleRecalculateAll = async () => {
    setLoading('recalculate');
    const today = format(new Date(), 'yyyy-MM-dd');
    
    try {
      // 1. Fetch key_levels for today
      const { data: keyLevels, error: keyLevelsError } = await supabase
        .from('key_levels')
        .select('*')
        .eq('day', today);

      if (keyLevelsError) throw keyLevelsError;

      // 2. Fetch economic_events for today
      const { data: events, error: eventsError } = await supabase
        .from('economic_events')
        .select('*')
        .eq('day', today);

      if (eventsError) throw eventsError;

      // 3. Fetch execution_reference for today
      const { data: execRef, error: execRefError } = await supabase
        .from('execution_reference')
        .select('*')
        .eq('day', today);

      if (execRefError) throw execRefError;

      // 4. Calculate market_daily_bias for each symbol (project standard)
      const symbols = ['NQ', 'ES', 'GC', 'CL', 'ZN', 'SOFR'];
      const biasRecords = [];

      // Check for high-impact caution windows
      const cautionEvents = events?.filter(e => 
        e.impact === 'high' && e.is_caution_window
      ) || [];
      const hasCautionWindow = cautionEvents.length > 0;

      for (const symbol of symbols) {
        const symbolKeyLevel = keyLevels?.find(k => normalizeSymbol(k.symbol) === symbol && (k.method || 'pivot') === 'pivot' && (k.session || 'all') === 'all');
        const symbolExecRef = execRef?.find(e => normalizeSymbol(e.symbol) === symbol);
        
        let biasLabel = 'Neutral';
        const reasons: string[] = [];

        // Rule 1: If caution window, set to Two-way
        if (hasCautionWindow) {
          biasLabel = 'Two-way';
          reasons.push(`고위험 이벤트 대기 (${cautionEvents.map(e => e.event_name).slice(0, 2).join(', ')})`);
        } else if (symbolKeyLevel) {
          const { current_price, pivot, s1, r1 } = symbolKeyLevel;
          
          // Rule 2: Price relative to pivot
          if (current_price && pivot) {
            if (current_price > pivot) {
              if (r1 && current_price > r1) {
                biasLabel = 'Buy-side favorable';
                reasons.push('가격이 R1 위에 위치');
              } else {
                biasLabel = 'Buy-side favorable';
                reasons.push('가격이 피벗 위에 위치');
              }
            } else if (current_price < pivot) {
              if (s1 && current_price < s1) {
                biasLabel = 'Sell-side favorable';
                reasons.push('가격이 S1 아래에 위치');
              } else {
                biasLabel = 'Sell-side favorable';
                reasons.push('가격이 피벗 아래에 위치');
              }
            } else {
              biasLabel = 'Neutral';
              reasons.push('가격이 피벗 근처에 위치');
            }
          }
        }

        // Rule 3: Volatility check
        if (symbolExecRef) {
          const { volatility_state, range_pct } = symbolExecRef;
          if (volatility_state === 'elevated' || (range_pct && range_pct >= 2.0)) {
            biasLabel = 'Two-way';
            reasons.push('변동성 확대 구간');
          }
        }

        biasRecords.push({
          day: today,
          symbol,
          bias_label: biasLabel,
          reasons,
          updated_at: new Date().toISOString(),
        });
      }

      // 5. Upsert market_daily_bias
      const { error: biasError } = await supabase
        .from('market_daily_bias')
        .upsert(biasRecords, {
          onConflict: 'day,symbol'
        });

      if (biasError) throw biasError;

      toast.success('모든 계산이 완료되었습니다', {
        description: `${symbols.length}개 종목의 바이어스가 업데이트되었습니다`
      });
    } catch (error: any) {
      console.error('Recalculate error:', error);
      toast.error(`계산 실패: ${error.message}`);
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-foreground">관리자 대시보드</h1>
            <p className="text-sm text-muted-foreground">{user?.email}</p>
          </div>
          <Button variant="outline" size="sm" onClick={handleSignOut}>
            <LogOut className="w-4 h-4 mr-2" />
            로그아웃
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          {/* OHLC Upload Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-primary" />
                오늘 OHLC 업로드
              </CardTitle>
              <CardDescription>
                CSV 형식으로 OHLC 데이터를 입력하세요
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="ohlc">CSV 데이터</Label>
                <Textarea
                  id="ohlc"
                  placeholder={`symbol,day,open,high,low,close
NAS100,2025-01-15,21000,21200,20900,21150
XAUUSD,2025-01-15,2620,2640,2610,2635`}
                  value={ohlcData}
                  onChange={(e) => setOhlcData(e.target.value)}
                  className="min-h-[150px] font-mono text-sm"
                />
              </div>
              <Button 
                onClick={handleOhlcUpload} 
                disabled={loading === 'ohlc'}
                className="w-full"
              >
                {loading === 'ohlc' ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    업로드 중...
                  </>
                ) : (
                  <>
                    <Upload className="w-4 h-4 mr-2" />
                    OHLC 업로드
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Events Upload Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                이벤트 업로드
              </CardTitle>
              <CardDescription>
                CSV 형식으로 경제 이벤트를 입력하세요
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="events">CSV 데이터</Label>
                <Textarea
                  id="events"
                  placeholder={`day,time_utc,currency,event_name,impact,forecast,previous_value,is_caution_window
2025-01-15,14:30,USD,Core CPI m/m,high,0.3%,0.3%,true
2025-01-15,15:00,USD,FOMC Statement,high,,,true`}
                  value={eventData}
                  onChange={(e) => setEventData(e.target.value)}
                  className="min-h-[150px] font-mono text-sm"
                />
              </div>
              <Button 
                onClick={handleEventUpload}
                disabled={loading === 'events'}
                className="w-full"
              >
                {loading === 'events' ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    업로드 중...
                  </>
                ) : (
                  <>
                    <Upload className="w-4 h-4 mr-2" />
                    이벤트 업로드
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Immediate reflection / status check */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              오늘 반영 상태 확인
            </CardTitle>
            <CardDescription>
              업로드 후 DB에 저장되었는지 즉시 확인합니다 (오늘 날짜 기준)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <div className="text-sm text-muted-foreground">
                <p>
                  날짜: <span className="text-foreground font-medium">{todaySummary?.day || format(new Date(), 'yyyy-MM-dd')}</span>
                </p>
                <p className="mt-1">
                  key_levels: <span className="text-foreground font-medium">{todaySummary?.keyLevelsCount ?? 0}</span>건 · 경제 이벤트:{' '}
                  <span className="text-foreground font-medium">{todaySummary?.eventsCount ?? 0}</span>건 · 고위험 주의창:{' '}
                  <span className="text-foreground font-medium">{todaySummary?.cautionHighCount ?? 0}</span>건
                </p>
              </div>
              <Button
                onClick={async () => {
                  try {
                    setLoading('summary');
                    await fetchTodaySummary();
                    toast.success('오늘 반영 상태를 새로고침했습니다');
                  } catch (e: any) {
                    toast.error(`새로고침 실패: ${e?.message || 'unknown error'}`);
                  } finally {
                    setLoading(null);
                  }
                }}
                disabled={loading === 'summary'}
                variant="outline"
                className="min-w-[180px]"
              >
                {loading === 'summary' ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    확인 중...
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2" />
                    반영 상태 새로고침
                  </>
                )}
              </Button>
            </div>

            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-1">key_levels (심볼별)</p>
              <div className="flex flex-wrap gap-2">
                {todaySummary && Object.keys(todaySummary.keyLevelsBySymbol).length > 0 ? (
                  Object.entries(todaySummary.keyLevelsBySymbol)
                    .sort((a, b) => a[0].localeCompare(b[0]))
                    .map(([sym, cnt]) => (
                      <span key={sym} className="px-2 py-1 rounded bg-muted text-xs">
                        {sym}: {cnt}
                      </span>
                    ))
                ) : (
                  <span className="text-xs">저장된 데이터가 아직 없습니다.</span>
                )}
              </div>
              <p className="text-xs mt-2">
                심볼 표준: <span className="text-foreground font-medium">ES, NQ, GC, CL, ZN, SOFR</span> (업로드 시 자동 변환)
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Recalculate Card */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-primary" />
              전체 계산 실행
            </CardTitle>
            <CardDescription>
              key_levels, execution_reference, market_daily_bias를 오늘 날짜 기준으로 재계산합니다
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p>이 작업은 다음을 수행합니다:</p>
                  <ul className="list-disc list-inside mt-1 space-y-0.5">
                    <li>오늘의 key_levels 데이터 조회</li>
                    <li>오늘의 경제 이벤트 조회</li>
                    <li>6개 핵심 종목(ES, NQ, GC, CL, ZN, SOFR)의 market_daily_bias 계산 및 저장</li>
                  </ul>
                </div>
              </div>
              <Button 
                onClick={handleRecalculateAll}
                disabled={loading === 'recalculate'}
                variant="default"
                className="min-w-[180px]"
              >
                {loading === 'recalculate' ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    계산 중...
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2" />
                    전체 계산 실행
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Status Info */}
        <div className="mt-6 p-4 bg-secondary/30 rounded-lg">
          <h3 className="text-sm font-medium text-foreground mb-2">CSV 형식 안내</h3>
          <div className="grid gap-4 md:grid-cols-2 text-sm text-muted-foreground">
            <div>
              <p className="font-medium text-foreground mb-1">OHLC 데이터:</p>
              <code className="text-xs bg-muted p-1 rounded">symbol,day,open,high,low,close</code>
            </div>
            <div>
              <p className="font-medium text-foreground mb-1">이벤트 데이터:</p>
              <code className="text-xs bg-muted p-1 rounded">day,time_utc,currency,event_name,impact,forecast,previous_value,is_caution_window</code>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
