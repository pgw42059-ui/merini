# Add isHowTo flag to step-by-step guide pages
import re

HOW_TO_PAGES = [
    "src/pages/MT5PCGuide.tsx",
    "src/pages/MT5MobileGuide.tsx",
    "src/pages/ea/Install.tsx",
    "src/pages/ea/Backtest.tsx",
    "src/pages/ea/VPS.tsx",
    "src/pages/education/Orders.tsx",
    "src/pages/education/Indicators.tsx",
]

for fp in HOW_TO_PAGES:
    with open(fp, "r", encoding="utf-8") as f:
        content = f.read()

    # Add isHowTo={true} to PageSEO tag
    updated = re.sub(
        r'(<PageSEO\s+title="[^"]*"\s+description="[^"]*"\s+path="[^"]*"\s*/>)',
        lambda m: m.group(0).replace(" />", " isHowTo={true} />"),
        content
    )

    if updated != content:
        with open(fp, "w", encoding="utf-8") as f:
            f.write(updated)
        print(f"Added isHowTo: {fp}")
    else:
        print(f"Pattern not found: {fp}")

print("Done")
