import re, os

BASE = r"C:\Users\pgw42\Desktop\랩매리니\lab.merini-main\metachild-c778c2a9-main\src\pages"

PAGES = {
    "Index.tsx":                  ("MT5 해외선물 트레이딩 가이드 플랫폼", "MetaTrader 5 설치부터 EA 자동매매, 브로커 비교까지. 해외선물 입문자를 위한 단계별 가이드 플랫폼입니다.", "/"),
    "basics/Overview.tsx":        ("해외선물 기초 교육 — MT5 입문 가이드", "선물거래, FX, 레버리지 등 해외선물 핵심 개념을 초보자 눈높이로 설명합니다.", "/basics"),
    "basics/Futures.tsx":         ("선물거래란? 해외선물 기초 완전 정복", "선물 계약의 개념, 만기일, 롤오버까지 해외선물 입문자가 알아야 할 모든 것을 설명합니다.", "/basics/futures"),
    "basics/FX.tsx":              ("FX 외환거래 기초 완전 이해", "외환시장의 구조, 환율, 통화쌍 개념부터 MT5에서의 FX 거래 방법까지 안내합니다.", "/basics/fx"),
    "basics/Leverage.tsx":        ("레버리지란? 해외선물 레버리지 완전 이해", "레버리지의 개념, 증거금 계산 방법, 리스크 관리까지 해외선물 레버리지의 모든 것.", "/basics/leverage"),
    "basics/Glossary.tsx":        ("해외선물 MT5 용어 사전", "해외선물과 MT5에서 자주 쓰이는 전문 용어를 한눈에 정리한 트레이더 용어 사전.", "/basics/glossary"),
    "Education.tsx":              ("MT5 가이드 — 설치부터 주문까지 완전 정복", "MetaTrader 5 가이드, 주문 방법, 지표 설정, 차트 분석까지 실전 트레이딩 가이드.", "/guides"),
    "MT5PCGuide.tsx":             ("MT5 PC 설치 방법 — 7단계 완전 가이드", "MetaTrader 5 PC 버전 무료 다운로드부터 브로커 서버 연결, 첫 로그인까지 단계별로 안내합니다.", "/guides/mt5-pc"),
    "MT5MobileGuide.tsx":         ("MT5 모바일 앱 설치 및 사용법", "iPhone·Android에서 MetaTrader 5 앱 설치와 기본 설정, 모바일 주문 방법을 안내합니다.", "/guides/mt5-mobile"),
    "MT5Manual.tsx":              ("MT5 사용 설명서 — 화면 구성 완전 정복", "MetaTrader 5 화면 구성, 메뉴, 차트 설정 방법을 처음부터 차근차근 설명합니다.", "/guides/mt5-manual"),
    "education/Orders.tsx":       ("MT5 주문 방법 — 시장가·지정가·SL/TP 완전 가이드", "MetaTrader 5에서 시장가, 지정가, 스톱 주문, 손절/익절 설정 방법을 상세히 설명합니다.", "/guides/orders"),
    "education/Indicators.tsx":   ("MT5 지표 사용법 완전 가이드", "MetaTrader 5 내장 지표 추가·설정·삭제 방법과 이동평균, MACD, RSI 활용법을 안내합니다.", "/guides/indicators"),
    "education/MarketBasics.tsx": ("해외선물 시장 기초 — 나스닥·금·오일 선물 이해", "나스닥, S&P500, 골드, 오일 선물 시장의 구조와 거래 시간, 특성을 설명합니다.", "/guides/market-basics"),
    "education/WhyMT5.tsx":       ("왜 MT5인가? MetaTrader 5 선택 이유", "MT4 vs MT5 차이점, MT5를 선택해야 하는 이유, 해외선물 트레이더에게 최적인 이유를 설명합니다.", "/guides/why-mt5"),
    "education/BeforeMT5.tsx":    ("MT5 시작 전 준비사항 — 브로커 계좌 개설", "MetaTrader 5 설치 전 필요한 브로커 선택, 계좌 개설, 데모 계좌 만드는 방법을 안내합니다.", "/guides/before-mt5"),
    "education/Strategy.tsx":     ("해외선물 트레이딩 전략 기초", "추세 추종, 역추세, 스캘핑 등 해외선물 기본 트레이딩 전략과 진입·청산 원칙을 설명합니다.", "/guides/strategy"),
    "education/Risk.tsx":         ("해외선물 리스크 관리 — 자산 보호 전략", "포지션 사이징, 손절 설정, 최대 손실 관리 등 해외선물 리스크 관리 방법을 안내합니다.", "/guides/risk"),
    "education/AccountTypes.tsx": ("MT5 계좌 유형 — Standard·ECN·Prime 차이", "MetaTrader 5 Standard, ECN, Prime 계좌의 차이점과 트레이딩 스타일별 최적 계좌 선택 가이드.", "/guides/account-types"),
    "education/Shortcuts.tsx":    ("MT5 단축키 모음 — 트레이딩 속도 높이기", "MetaTrader 5 필수 단축키와 커스터마이징 방법으로 차트 분석과 주문 속도를 높이세요.", "/guides/shortcuts"),
    "Resources.tsx":              ("해외선물 MT5 추천 리소스 — 도서·사이트·도구", "해외선물 트레이딩 학습에 도움이 되는 추천 도서, 웹사이트, 분석 도구를 모아놓은 가이드.", "/guides/resources"),
    "Roadmap.tsx":                ("해외선물 MT5 학습 로드맵 — 입문부터 EA까지", "해외선물 완전 초보자가 MT5 설치, 주문, EA 자동매매까지 도달하는 단계별 학습 로드맵.", "/guides/roadmap"),
    "ea/Overview.tsx":            ("EA 자동매매 완전 정복 — MT5 Expert Advisor", "MetaTrader 5 EA 자동매매 설치, 설정, 백테스트, VPS 운영까지 완전 가이드.", "/ea"),
    "ea/Install.tsx":             ("EA 설치 방법 — MT5 Expert Advisor 설치 가이드", "MT5에 EA 파일(.ex5) 설치하고 차트에 적용하는 방법을 단계별 스크린샷과 함께 안내합니다.", "/ea/install"),
    "ea/UsageGuide.tsx":          ("EA 사용 가이드 — MT5 자동매매 설정 방법", "EA 파라미터 설정, 리스크 설정, 자동매매 활성화 방법 등 MT5 EA 운영 완전 가이드.", "/ea/usage-guide"),
    "ea/Backtest.tsx":            ("EA 백테스트 방법 — MT5 전략 테스터 가이드", "MetaTrader 5 전략 테스터로 EA 백테스트 실행, 결과 분석, 최적화 방법을 안내합니다.", "/ea/backtest"),
    "ea/VPS.tsx":                 ("EA VPS 설정 — 24시간 자동매매 운영 가이드", "MT5 EA를 24시간 중단 없이 운영하기 위한 VPS 선택, 설치, MT5 연동 방법을 안내합니다.", "/ea/vps"),
    "ea/MQL5Market.tsx":          ("MQL5 마켓 — EA·인디케이터 구매 가이드", "MQL5 마켓에서 EA와 인디케이터를 구매하고 MT5에 설치하는 방법을 단계별로 안내합니다.", "/ea/mql5-market"),
    "BrokerList.tsx":             ("해외선물 브로커 비교 추천 — MT5 지원 브로커", "MT5를 지원하는 해외선물 브로커를 수수료, 레버리지, 안전성, 한국어 지원으로 비교 분석합니다.", "/brokers"),
    "Consult.tsx":                ("무료 상담 신청 — MT5·해외선물 1:1 상담", "해외선물 시작 방법, MT5 설정, 브로커 선택 등 트레이딩 입문 관련 무료 1:1 상담을 신청하세요.", "/consult"),
    "About.tsx":                  ("메린이 소개 — 선물 트레이더를 위한 플랫폼", "메린이는 해외선물·FX 입문자를 위한 MT5 가이드, 브로커 비교, EA 자동매매 정보 플랫폼입니다.", "/about"),
    "Terms.tsx":                  ("이용약관 — 메린이 서비스 이용약관", "메린이 서비스 이용약관입니다. 서비스 이용 전 반드시 확인해 주세요.", "/terms"),
    "Privacy.tsx":                ("개인정보처리방침 — 메린이", "메린이의 개인정보 수집 및 이용에 관한 처리방침입니다.", "/privacy"),
}

IMPORT_LINE = 'import { PageSEO } from "@/components/PageSEO";\n'

def add_seo(filepath, title, description, path):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Skip if already has PageSEO
    if "PageSEO" in content:
        print(f"SKIP (already has PageSEO): {filepath}")
        return

    # Add import after last import line
    lines = content.split("\n")
    last_import_idx = -1
    for i, line in enumerate(lines):
        if line.startswith("import "):
            last_import_idx = i

    if last_import_idx >= 0:
        lines.insert(last_import_idx + 1, IMPORT_LINE.rstrip())
        content = "\n".join(lines)

    # Add <PageSEO> as first child inside the first JSX element after return
    seo_tag = f'      <PageSEO title="{title}" description="{description}" path="{path}" />'

    # Find "return (" and insert after the first opening tag
    # Pattern: find the first < after return (
    return_match = re.search(r'(  return \(\n\s+<)', content)
    if return_match:
        insert_pos = return_match.end() - 1  # position of <
        # Find end of this opening tag
        tag_end = content.find('>', insert_pos)
        if tag_end != -1:
            # Check if self-closing
            if content[tag_end-1] == '/':
                # Self-closing, wrap in fragment
                content = content[:insert_pos] + f'<>\n{seo_tag}\n      ' + content[insert_pos:tag_end+1] + '\n    </>' + content[tag_end+1:]
            else:
                insert_after = tag_end + 1
                content = content[:insert_after] + f'\n{seo_tag}' + content[insert_after:]

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"OK: {filepath}")

for rel_path, (title, desc, url_path) in PAGES.items():
    full_path = os.path.join(BASE, rel_path)
    if os.path.exists(full_path):
        add_seo(full_path, title, desc, url_path)
    else:
        print(f"NOT FOUND: {full_path}")

print("\nDone!")
