import { Settings, FileCheck } from "lucide-react";

const features = [
  {
    icon: Settings,
    text: "MT5 설치, 차트 설정, 주문 구조 안내",
  },
  {
    icon: FileCheck,
    text: "전략 조건, 리스크, 백테스트 결과 공개",
  },
];

export function WhatWeProvideSection() {
  return (
    <section className="py-12 border-t border-border">
      <div className="container px-4">
        <div className="max-w-md mx-auto">
          <h2 className="text-lg font-semibold text-foreground mb-6 text-center">
            이 사이트에서 제공하는 것
          </h2>

          <ul className="space-y-4">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
