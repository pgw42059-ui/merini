import { Link } from "react-router-dom";
import { Keyboard, Info, ChevronLeft, ChevronRight } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const shortcutGroups = [
  {
    category: "차트 조작",
    color: "text-blue-400",
    shortcuts: [
      { keys: ["F8"], desc: "차트 설정 창 열기" },
      { keys: ["F9"], desc: "새 주문 창 열기" },
      { keys: ["+", "-"], desc: "차트 확대 / 축소" },
      { keys: ["←", "→"], desc: "차트 좌우 이동" },
      { keys: ["Home"], desc: "차트 처음으로 이동" },
      { keys: ["End"], desc: "차트 현재(오른쪽 끝)로 이동" },
      { keys: ["Scroll"], desc: "차트 좌우 스크롤" },
      { keys: ["Ctrl", "Scroll"], desc: "차트 확대/축소" },
      { keys: ["A"], desc: "자동 스케일 전환 (Auto Scroll)" },
      { keys: ["G"], desc: "그리드 표시/숨기기" },
    ],
  },
  {
    category: "시간프레임 변경",
    color: "text-green-400",
    shortcuts: [
      { keys: ["M1"], desc: "1분봉 (단축키: 1)" },
      { keys: ["M5"], desc: "5분봉 (단축키: 2)" },
      { keys: ["M15"], desc: "15분봉 (단축키: 3)" },
      { keys: ["M30"], desc: "30분봉 (단축키: 4)" },
      { keys: ["H1"], desc: "1시간봉 (단축키: 5)" },
      { keys: ["H4"], desc: "4시간봉 (단축키: 6)" },
      { keys: ["D1"], desc: "일봉 (단축키: 7)" },
      { keys: ["W1"], desc: "주봉 (단축키: 8)" },
      { keys: ["MN"], desc: "월봉 (단축키: 9)" },
    ],
  },
  {
    category: "창 관리",
    color: "text-orange-400",
    shortcuts: [
      { keys: ["Ctrl", "T"], desc: "터미널(Terminal) 창 열기/닫기" },
      { keys: ["Ctrl", "N"], desc: "네비게이터(Navigator) 열기/닫기" },
      { keys: ["Ctrl", "D"], desc: "데이터 창(Data Window) 열기/닫기" },
      { keys: ["Ctrl", "M"], desc: "마켓 워치(Market Watch) 열기/닫기" },
      { keys: ["Ctrl", "G"], desc: "차트 도구 모음 표시/숨기기" },
      { keys: ["Ctrl", "R"], desc: "전략 테스터(Strategy Tester) 열기/닫기" },
      { keys: ["Ctrl", "I"], desc: "지표 목록(Indicators List) 열기" },
    ],
  },
  {
    category: "차트 그리기 도구",
    color: "text-purple-400",
    shortcuts: [
      { keys: ["Ctrl", "F"], desc: "십자 커서(Crosshair) 전환" },
      { keys: ["Ctrl", "Z"], desc: "마지막 그리기 취소" },
      { keys: ["Delete"], desc: "선택한 그리기 오브젝트 삭제" },
      { keys: ["Esc"], desc: "도구 선택 해제" },
      { keys: ["Backspace"], desc: "마지막 오브젝트 취소" },
    ],
  },
  {
    category: "자동매매 관련",
    color: "text-red-400",
    shortcuts: [
      { keys: ["Ctrl", "E"], desc: "자동매매(Algo Trading) 활성화/비활성화" },
    ],
  },
];

const Shortcuts = () => {
  return (
    <div className="max-w-3xl">
      <PageSEO title="MT5 단축키 모음 — 트레이딩 속도 높이기" description="MetaTrader 5 필수 단축키와 커스터마이징 방법으로 차트 분석과 주문 속도를 높이세요." path="/guides/shortcuts" />

      {/* 브레드크럼 */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-5">
        <Link to="/guides" className="hover:text-foreground transition-colors">가이드 홈</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-foreground font-medium">단축키 모음</span>
      </div>

      {/* 뱃지 */}
      <div className="flex items-center gap-2 mb-6">
        <span className="px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold">
          도구 & 참고
        </span>
        <span className="text-xs text-muted-foreground">참고용 — 필요할 때 찾아보세요</span>
      </div>

      {/* 헤더 */}
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg bg-purple-500/10">
          <Keyboard className="w-6 h-6 text-purple-400" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">MT5 단축키</h1>
      </div>
      <p className="text-muted-foreground mb-8 leading-relaxed">
        MT5의 주요 단축키를 익혀두면 차트 조작, 주문, 창 관리를 훨씬 빠르게 할 수 있습니다.
      </p>

      {/* 안내 */}
      <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/20 text-xs text-muted-foreground mb-8">
        <Info className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
        <span>
          단축키는 MT5 차트 창이 활성화된 상태에서 작동합니다.
          다른 창(터미널, 마켓 워치 등)이 선택된 상태에서는 일부 단축키가 동작하지 않습니다.
        </span>
      </div>

      {/* 단축키 그룹 */}
      <div className="space-y-6 mb-10">
        {shortcutGroups.map((group, i) => (
          <section key={i}>
            <h2 className={`text-sm font-semibold uppercase tracking-wide ${group.color} mb-3`}>
              {group.category}
            </h2>
            <div className="glass-card border border-border/50 rounded-xl overflow-hidden">
              <table className="w-full">
                <tbody>
                  {group.shortcuts.map((sc, j) => (
                    <tr
                      key={j}
                      className={`${
                        j < group.shortcuts.length - 1 ? "border-b border-border/30" : ""
                      }`}
                    >
                      <td className="px-4 py-3 w-44">
                        <div className="flex items-center gap-1 flex-wrap">
                          {sc.keys.map((key, k) => (
                            <span key={k}>
                              <kbd className="inline-flex items-center px-2 py-0.5 text-xs font-mono font-medium text-foreground bg-secondary border border-border/70 rounded shadow-sm">
                                {key}
                              </kbd>
                              {k < sc.keys.length - 1 && (
                                <span className="text-muted-foreground text-xs mx-0.5">+</span>
                              )}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{sc.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
      <RelatedContent items={[
          { title: "주문 방법", description: "빠른 주문을 위한 주문 가이드", href: "/guides/orders", badge: "가이드" },
          { title: "지표 사용법", description: "차트 분석 속도 높이는 지표 설정", href: "/guides/indicators", badge: "가이드" },
          { title: "MT5 PC 설치", description: "MT5 기본 설정과 환경 구성", href: "/guides/mt5-pc", badge: "설치" }
        ]} />

          </section>
        ))}
      </div>

      {/* 자주 쓰는 단축키 */}
      <div className="mb-10 p-4 rounded-lg bg-secondary/30 border border-border/50 text-sm text-muted-foreground">
        <span className="text-foreground font-medium">자주 사용하는 단축키: </span>
        F9(주문창), Ctrl+T(터미널), Ctrl+E(자동매매 on/off), End(현재 가격). 이 4개만 익혀도 트레이딩 속도가 크게 올라갑니다.
      </div>

      {/* 이전 / 다음 네비게이션 */}
      <div className="flex items-center justify-between pt-6 border-t border-border/30">
        <Link
          to="/guides/account-types"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>계좌 유형</span>
        </Link>
        <Link
          to="/ea"
          className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <span>다음: EA 자동매매 가이드</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default Shortcuts;
