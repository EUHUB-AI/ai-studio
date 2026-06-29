# Case studies — how to add one

The **Case Studies** section on the homepage ("Outcomes, not slideware") is
**invisible until you add real entries.** This is deliberate: it stops any
placeholder or fabricated result from ever shipping. As soon as you add one
approved case study to the dictionaries, the section appears automatically.

## Where the data lives

Each language has its own copy of the content:

- `src/dictionaries/en.json` → `caseStudies.items`
- `src/dictionaries/sk.json` → `caseStudies.items`
- `src/dictionaries/de.json` → `caseStudies.items`

Today every `items` array is empty (`"items": []`). To publish a case study,
add the **same** entry (translated) to **all three** files.

## Field reference

Every field except `client` is optional — include what you have, omit the rest.

| Field         | Required | Example                                                        |
|---------------|----------|----------------------------------------------------------------|
| `client`      | yes      | `"EU motor insurer"` or `"Confidential — DACH manufacturer"`   |
| `sector`      | no       | `"Insurance · 400+ staff"` (shown as the small mono label)     |
| `metric`      | no       | `"−62%"` (the big highlighted number)                          |
| `metricLabel` | no       | `"average claim-triage time"`                                  |
| `challenge`   | no       | One or two sentences on the problem.                           |
| `approach`    | no       | One or two sentences on what you built.                        |
| `result`      | no       | The measurable outcome (the proof).                            |
| `quote`       | no       | A client testimonial (only with their written permission).     |
| `quoteAuthor` | no       | `"Head of Claims, [Company]"`                                  |

## Example entry (EN)

Paste inside the `items` array in `en.json` (mind the 2-space indentation),
then add the SK and DE translations to their files:

```json
{
  "client": "Confidential — EU motor insurer",
  "sector": "Insurance · 400+ staff",
  "metric": "−62%",
  "metricLabel": "average claim-triage time",
  "challenge": "Tier-1 claims triage was fully manual and couldn't absorb seasonal peaks without temporary headcount.",
  "approach": "A human-in-the-loop agent over the existing claims system via a compliant API bridge, with full audit trails and EU AI Act Article 14 oversight controls.",
  "result": "62% faster triage, zero compliance findings in the internal audit, and adjusters refocused on complex cases.",
  "quote": "It paid for itself within the first quarter — and our auditors were comfortable from day one.",
  "quoteAuthor": "Head of Claims"
}
```

## Rules before publishing

1. **Only real, delivered outcomes.** No projected or illustrative numbers.
2. **Get written sign-off** from the client for any named logo, quote, or
   attributable metric. Anonymise (`"Confidential — <sector>"`) when you don't
   have it.
3. **Keep all three languages in sync** — add/edit the entry in `en`, `sk` and
   `de` together, or the section will differ by locale.
4. The cards render in array order; put the strongest story first.

After editing, run `npm run build` to confirm the JSON is valid before deploy.
