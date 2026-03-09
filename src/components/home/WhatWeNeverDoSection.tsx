const trustStatements = [
  "우리는 리딩하지 않습니다",
  "우리는 수익을 보장하지 않습니다",
  "우리는 계좌를 대신 관리하지 않습니다",
];

export function WhatWeNeverDoSection() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container px-6 md:px-4">
        <div className="max-w-2xl mx-auto text-center space-y-5 md:space-y-6">
          {/* Trust statements - minimal vertical list */}
          <ul className="space-y-4 md:space-y-3">
            {trustStatements.map((statement, idx) => (
              <li
                key={idx}
                className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed"
              >
                {statement}
              </li>
            ))}
          </ul>

          {/* Closing statement */}
          <p className="text-xs text-muted-foreground/70 pt-4 leading-relaxed">
            This site focuses on education, structure, and decision-making frameworks.
          </p>
        </div>
      </div>
    </section>
  );
}
