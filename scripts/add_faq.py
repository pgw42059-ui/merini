import re

FAQS = {
    "src/pages/BrokerList.tsx": {
        "old": 'path="/brokers" />',
        "new": '''path="/brokers"
        faqs={[
          { question: "해외선물 브로커 선택 시 가장 중요한 기준은?", answer: "규제 기관 등록 여부(FCA, ASIC, CySEC 등), 수수료와 스프레드, MT5 지원 여부, 한국어 고객 지원을 우선 확인하세요." },
          { question: "MT5를 지원하는 브로커는 어디인가요?", answer: "Pepperstone, IC Markets, XM, FP Markets 등 주요 국제 브로커들이 MT5를 지원합니다. 각 브로커의 계좌 유형과 수수료 구조가 다르므로 비교 후 선택하세요." },
          { question: "데모 계좌로 연습할 수 있나요?", answer: "네, 대부분의 브로커는 무료 데모 계좌를 제공합니다. 실제 시장 데이터로 리스크 없이 MT5 거래를 연습할 수 있습니다." },
          { question: "브로커 계좌 개설에 최소 입금액은 얼마인가요?", answer: "브로커마다 다르지만, 많은 브로커들이 $200~$500의 최소 입금액을 요구합니다. 일부는 최소 입금액이 없거나 $100 이하인 경우도 있습니다." },
        ]}
      />'''
    },
    "src/pages/ea/Overview.tsx": {
        "old": 'path="/ea" />',
        "new": '''path="/ea"
        faqs={[
          { question: "EA 자동매매란 무엇인가요?", answer: "EA(Expert Advisor)는 MetaTrader 5에서 실행되는 자동매매 프로그램입니다. 미리 설정한 조건에 따라 자동으로 매수/매도 주문을 실행합니다." },
          { question: "EA 사용에 코딩 지식이 필요한가요?", answer: "아닙니다. MQL5 마켓에서 이미 만들어진 EA를 구매하거나 무료로 다운로드해 사용할 수 있습니다. 코딩 없이 MT5에 설치하고 파라미터만 설정하면 됩니다." },
          { question: "EA를 24시간 운영하려면 어떻게 해야 하나요?", answer: "VPS(가상 사설 서버)를 사용하면 컴퓨터를 끄더라도 24시간 EA를 운영할 수 있습니다. 월 $10~30 수준의 비용으로 안정적인 자동매매 환경을 구축할 수 있습니다." },
          { question: "백테스트란 무엇이고 왜 필요한가요?", answer: "백테스트는 EA 전략을 과거 가격 데이터로 시뮬레이션해 성과를 검증하는 과정입니다. 실제 자금을 투입하기 전에 반드시 백테스트로 전략의 수익성과 리스크를 확인해야 합니다." },
        ]}
      />'''
    },
    "src/pages/basics/Overview.tsx": {
        "old": 'path="/basics" />',
        "new": '''path="/basics"
        faqs={[
          { question: "해외선물 거래란 무엇인가요?", answer: "해외선물은 나스닥, S&P500, 골드, 오일 등 해외 자산의 미래 가격을 약속하는 계약을 거래하는 것입니다. 레버리지를 활용해 적은 증거금으로 큰 규모의 거래가 가능합니다." },
          { question: "해외선물 거래를 시작하려면 무엇이 필요한가요?", answer: "브로커 계좌 개설, MetaTrader 5(MT5) 설치, 증거금 입금이 필요합니다. 먼저 데모 계좌로 충분히 연습한 후 실거래를 시작하는 것을 권장합니다." },
          { question: "MT5와 MT4의 차이는 무엇인가요?", answer: "MT5는 MT4보다 더 많은 주문 유형, 더 많은 기술 지표, 더 빠른 백테스트 엔진을 제공합니다. 해외선물 거래에는 MT5가 더 적합하며, 대부분의 브로커들이 MT5를 권장합니다." },
          { question: "레버리지는 얼마나 높은가요?", answer: "브로커와 상품에 따라 다르지만, 해외선물은 일반적으로 1:20~1:100의 레버리지를 제공합니다. 레버리지가 높을수록 수익과 손실이 모두 확대되므로 신중한 리스크 관리가 필요합니다." },
        ]}
      />'''
    },
    "src/pages/Consult.tsx": {
        "old": 'path="/consult" />',
        "new": '''path="/consult"
        faqs={[
          { question: "상담은 무료인가요?", answer: "네, 메린이의 1:1 상담은 완전 무료입니다. MT5 설정, 브로커 선택, 해외선물 입문 관련 질문을 자유롭게 남겨주세요." },
          { question: "상담 답변은 얼마나 걸리나요?", answer: "일반적으로 영업일 기준 1~2일 이내에 답변을 드립니다. 카카오톡 채널을 통해 더 빠른 답변을 받으실 수 있습니다." },
          { question: "어떤 내용을 상담할 수 있나요?", answer: "MT5 설치 및 설정 방법, 브로커 선택 기준, EA 자동매매 설치, 해외선물 기초 개념, 리스크 관리 방법 등 트레이딩 입문에 관한 모든 질문을 받습니다." },
        ]}
      />'''
    },
    "src/pages/MT5PCGuide.tsx": {
        "old": 'path="/guides/mt5-pc" isHowTo={true} />',
        "new": '''path="/guides/mt5-pc" isHowTo={true}
        faqs={[
          { question: "MT5는 어디서 무료로 다운로드할 수 있나요?", answer: "MetaQuotes 공식 사이트(metaquotes.net) 또는 브로커 홈페이지에서 무료로 다운로드할 수 있습니다. 브로커에서 제공하는 버전을 사용하면 브로커 서버가 자동으로 설정됩니다." },
          { question: "MT5 설치 후 어떤 브로커 서버를 선택해야 하나요?", answer: "이미 계좌를 개설한 브로커의 서버를 검색해 선택하세요. 실계좌는 Live 서버, 데모 계좌는 Demo 서버를 선택합니다." },
          { question: "MT5가 실행되지 않을 때 어떻게 하나요?", answer: "Windows Defender나 백신 프로그램이 MT5를 차단하는 경우가 있습니다. 백신 예외 처리에 MT5를 추가하거나, 관리자 권한으로 실행해보세요." },
        ]}
      />'''
    },
}

for fp, data in FAQS.items():
    with open(fp, "r", encoding="utf-8") as f:
        content = f.read()

    if data["old"] in content:
        content = content.replace(data["old"], data["new"])
        with open(fp, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"OK: {fp}")
    else:
        print(f"NOT FOUND: {fp}")

print("Done")
