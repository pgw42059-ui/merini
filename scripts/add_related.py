import re

# Pages needing RelatedContent + their related items [title, desc, href, badge]
PAGES = {
    "src/pages/basics/Futures.tsx": [
        ("FX 외환거래 기초", "환율, 통화쌍, FX 시장 구조 이해", "/basics/fx", "기초"),
        ("레버리지란?", "증거금과 레버리지 계산 방법", "/basics/leverage", "기초"),
        ("해외선물 시장 기초", "나스닥·금·오일 선물 시장 이해", "/guides/market-basics", "가이드"),
    ],
    "src/pages/basics/FX.tsx": [
        ("선물거래 기초", "선물 계약 개념과 만기일 이해", "/basics/futures", "기초"),
        ("레버리지란?", "증거금 계산과 리스크 관리", "/basics/leverage", "기초"),
        ("MT5 선택 이유", "왜 MT5가 최적의 플랫폼인가", "/guides/why-mt5", "가이드"),
    ],
    "src/pages/basics/Leverage.tsx": [
        ("선물거래 기초", "선물 계약 개념부터 이해하기", "/basics/futures", "기초"),
        ("리스크 관리", "포지션 사이징과 손절 설정법", "/guides/risk", "가이드"),
        ("주문 방법", "시장가·지정가·SL/TP 설정", "/guides/orders", "가이드"),
    ],
    "src/pages/basics/Glossary.tsx": [
        ("선물거래 기초", "선물 핵심 개념 완전 정복", "/basics/futures", "기초"),
        ("FX 외환거래 기초", "FX 시장과 통화쌍 이해", "/basics/fx", "기초"),
        ("MT5 사용 설명서", "MT5 화면 구성 완전 정복", "/guides/mt5-manual", "가이드"),
    ],
    "src/pages/education/Orders.tsx": [
        ("MT5 PC 설치", "MT5 설치부터 로그인까지 7단계", "/guides/mt5-pc", "설치"),
        ("지표 사용법", "MT5 내장 지표 추가 및 설정", "/guides/indicators", "가이드"),
        ("계좌 유형", "Standard·ECN·Prime 차이 비교", "/guides/account-types", "가이드"),
    ],
    "src/pages/education/Indicators.tsx": [
        ("주문 방법", "시장가·지정가·SL/TP 완전 가이드", "/guides/orders", "가이드"),
        ("트레이딩 전략", "추세 추종과 스캘핑 전략 기초", "/guides/strategy", "가이드"),
        ("리스크 관리", "자산 보호를 위한 리스크 전략", "/guides/risk", "가이드"),
    ],
    "src/pages/education/WhyMT5.tsx": [
        ("MT5 시작 전 준비", "브로커 선택과 계좌 개설 방법", "/guides/before-mt5", "준비"),
        ("MT5 PC 설치", "MT5 설치부터 로그인까지", "/guides/mt5-pc", "설치"),
        ("해외선물 기초", "선물거래 개념부터 시작하기", "/basics/futures", "기초"),
    ],
    "src/pages/education/BeforeMT5.tsx": [
        ("MT5 PC 설치", "MT5 설치부터 로그인까지 7단계", "/guides/mt5-pc", "설치"),
        ("브로커 비교", "MT5 지원 브로커 수수료·레버리지 비교", "/brokers", "브로커"),
        ("MT5 선택 이유", "MT5가 최적인 이유", "/guides/why-mt5", "가이드"),
    ],
    "src/pages/education/AccountTypes.tsx": [
        ("브로커 비교", "계좌 유형별 최적 브로커 추천", "/brokers", "브로커"),
        ("주문 방법", "계좌 개설 후 첫 주문 방법", "/guides/orders", "가이드"),
        ("EA 자동매매", "계좌 설정 후 EA 자동매매 시작", "/ea", "EA"),
    ],
    "src/pages/education/Shortcuts.tsx": [
        ("주문 방법", "빠른 주문을 위한 주문 가이드", "/guides/orders", "가이드"),
        ("지표 사용법", "차트 분석 속도 높이는 지표 설정", "/guides/indicators", "가이드"),
        ("MT5 PC 설치", "MT5 기본 설정과 환경 구성", "/guides/mt5-pc", "설치"),
    ],
    "src/pages/ea/Overview.tsx": [
        ("EA 설치 방법", "EA 파일 설치부터 차트 적용까지", "/ea/install", "설치"),
        ("백테스트 가이드", "전략 테스터로 EA 성과 검증", "/ea/backtest", "검증"),
        ("VPS 설정", "24시간 자동매매를 위한 VPS", "/ea/vps", "운영"),
    ],
    "src/pages/ea/Install.tsx": [
        ("EA 사용 가이드", "파라미터 설정과 자동매매 활성화", "/ea/usage-guide", "다음"),
        ("백테스트 가이드", "설치 후 EA 성과 검증 방법", "/ea/backtest", "검증"),
        ("MT5 PC 설치", "MT5 먼저 설치하기", "/guides/mt5-pc", "설치"),
    ],
    "src/pages/ea/UsageGuide.tsx": [
        ("EA 설치 방법", "EA 파일 설치부터 시작하기", "/ea/install", "이전"),
        ("백테스트 가이드", "EA 운영 전 백테스트 필수", "/ea/backtest", "검증"),
        ("VPS 설정", "24시간 안정적 운영을 위한 VPS", "/ea/vps", "운영"),
    ],
    "src/pages/ea/Backtest.tsx": [
        ("EA 설치 방법", "백테스트할 EA 설치 방법", "/ea/install", "설치"),
        ("EA 사용 가이드", "백테스트 후 실전 운영 설정", "/ea/usage-guide", "운영"),
        ("VPS 설정", "검증된 EA를 VPS로 24시간 운영", "/ea/vps", "운영"),
    ],
    "src/pages/ea/VPS.tsx": [
        ("백테스트 가이드", "VPS 전에 반드시 백테스트 먼저", "/ea/backtest", "검증"),
        ("EA 사용 가이드", "VPS에서 EA 파라미터 최종 설정", "/ea/usage-guide", "운영"),
        ("브로커 비교", "VPS 최적화된 브로커 선택", "/brokers", "브로커"),
    ],
    "src/pages/ea/MQL5Market.tsx": [
        ("EA 설치 방법", "구매한 EA 설치하는 방법", "/ea/install", "설치"),
        ("EA 사용 가이드", "EA 파라미터 설정 완전 가이드", "/ea/usage-guide", "운영"),
        ("백테스트 가이드", "구매 전 백테스트로 검증하기", "/ea/backtest", "검증"),
    ],
    "src/pages/BrokerList.tsx": [
        ("계좌 유형", "브로커별 계좌 유형 이해하기", "/guides/account-types", "가이드"),
        ("MT5 시작 전 준비", "브로커 계좌 개설 준비사항", "/guides/before-mt5", "준비"),
        ("무료 상담 신청", "브로커 선택 1:1 무료 상담", "/consult", "상담"),
    ],
    "src/pages/Resources.tsx": [
        ("학습 로드맵", "단계별 학습 순서 확인하기", "/guides/roadmap", "로드맵"),
        ("해외선물 기초", "기초 개념부터 다시 확인하기", "/basics", "기초"),
        ("MT5 가이드", "실전 가이드 전체 목록", "/guides", "가이드"),
    ],
    "src/pages/Roadmap.tsx": [
        ("MT5 PC 설치", "STEP 1: MT5 설치부터 시작", "/guides/mt5-pc", "설치"),
        ("주문 방법", "STEP 2: 실전 주문 방법", "/guides/orders", "가이드"),
        ("EA 설치 방법", "STEP 3: EA 자동매매 시작", "/ea/install", "EA"),
    ],
}

IMPORT_LINE = 'import { RelatedContent, RelatedItem } from "@/components/RelatedContent";\n'

def make_related_jsx(items):
    item_lines = []
    for title, desc, href, badge in items:
        item_lines.append(
            f'          {{ title: "{title}", description: "{desc}", href: "{href}", badge: "{badge}" }}'
        )
    items_str = ",\n".join(item_lines)
    return f'''      <RelatedContent items={{[
{items_str}
        ]}} />'''

def process(fp, items):
    with open(fp, "r", encoding="utf-8") as f:
        content = f.read()

    if "RelatedContent" in content:
        print(f"SKIP (already has RelatedContent): {fp}")
        return

    # Add import after last import line ending with ;
    lines = content.split("\n")
    last_from_idx = -1
    for i, line in enumerate(lines):
        stripped = line.rstrip()
        if stripped.endswith(";") and "from" in stripped and stripped.startswith("import"):
            last_from_idx = i
        # multi-line import closing
        if stripped in ("});", '";', "';") and last_from_idx >= 0:
            last_from_idx = i

    if last_from_idx < 0:
        print(f"No import found: {fp}")
        return

    lines.insert(last_from_idx + 1, IMPORT_LINE.rstrip())
    content = "\n".join(lines)

    # Insert RelatedContent before the last </div> before </> or before Footer or before the final return closing
    related_jsx = make_related_jsx(items)

    # Try to insert before </main> or before <Footer or before the last significant </div>
    # Strategy: insert before the last </div>\n    ) or </>\n    )
    patterns = [
        r'(\s+<Footer\s*/?>)',
        r'(\s+</main>)',
        r'(\s+</section>\n\s*\))',
    ]
    inserted = False
    for pattern in patterns:
        match = list(re.finditer(pattern, content))
        if match:
            m = match[-1]
            content = content[:m.start()] + "\n" + related_jsx + "\n" + content[m.start():]
            inserted = True
            break

    if not inserted:
        # Fallback: insert before the last </div> followed by );
        matches = list(re.finditer(r'\n(\s+</div>\n\s+\);)', content))
        if matches:
            m = matches[-1]
            content = content[:m.start()] + "\n" + related_jsx + content[m.start():]
            inserted = True

    if inserted:
        with open(fp, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"OK: {fp}")
    else:
        print(f"FAIL (no insertion point): {fp}")

for fp, items in PAGES.items():
    process(fp, items)

print("\nDone!")
