import re

files = [
    'src/pages/About.tsx',
    'src/pages/Resources.tsx',
    'src/pages/ea/UsageGuide.tsx',
    'src/pages/education/Orders.tsx',
]

SEO_IMPORT = 'import { PageSEO } from "@/components/PageSEO";'

for fp in files:
    with open(fp, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove broken PageSEO import line
    lines = content.split('\n')
    cleaned = [l for l in lines if l.strip() != SEO_IMPORT]
    content = '\n'.join(cleaned)

    # Find the last line index that ends with ; and contains 'from'
    lines = content.split('\n')
    last_from_idx = -1
    for i, line in enumerate(lines):
        stripped = line.rstrip()
        if stripped.endswith(';') and 'from' in stripped:
            last_from_idx = i
        # also catch multi-line imports: line is just ); or ends with ;
        if stripped in (');', "';", '";') and last_from_idx >= 0:
            last_from_idx = i

    if last_from_idx >= 0:
        lines.insert(last_from_idx + 1, SEO_IMPORT)
        with open(fp, 'w', encoding='utf-8') as f:
            f.write('\n'.join(lines))
        print(f'Fixed: {fp}')
    else:
        print(f'Could not fix: {fp}')

print('Done')
