# Deferred submission-maintenance observations

Static inspection only: no application function, endpoint or spreadsheet query
was executed. "Confirmed" means observed in preserved source or retrieved metadata,
not successful end-to-end runtime behaviour. Line references are to
`../apps-script/src/` unless stated otherwise. No active application development
or maintenance implementation is planned. These observations are separate from
the [deferred integration requirements](development-workflow.md).

## Historical context

The user reports that their brother developed the original Google Sheets sidebar
submission form. The user later built the dedicated website and added direct
website submission. Specific function authorship and the evolution of the duplicate
definitions were not independently verified. Both implementations and the sidebar
are preserved unchanged. Older functionality is not disposable merely because a
newer interface exists; removal, renaming or merging needs explicit review of
intended users, schemas and history.

## Confirmed source and historical metadata facts

### Git helper versus retrieved cloud source

Cloud `Code.gs:126` and `../scripts/submit-run-webapp.gs` both contain an append
to `RunData` in the order Player, RunType, Monster, Weapon, Difficulty, Duration,
Link and server timestamp. Cloud code uses `e.parameter` directly. The Git helper
adds trimming, first-letter lowercase aliases, six required-field checks and a
missing-sheet response, plus `cleanParam` and `jsonResponse` absent from cloud
source. They remain separate and unreconciled.

Cloud source also contains menus, a sidebar, dropdown loading, a leaderboard link
and `doGet`. The helper is not a complete cloud project; adding it unchanged to
the upload set would introduce another `doPost`. No authentication, server-side
enum/duration validation, formula-input protection or deduplication appears in
either inspected handler. This does not establish whether other controls exist.

### Website HTTP submission

`../index.html:2188` normalizes/validates duration, monster and weapon in browser
code, sets five-star Difficulty and POSTs URL-encoded fields with `no-cors` to the
verified version 3 endpoint. Cloud `doPost` directly calls `appendRow`; it does not
call `addNewRow`. Thus duplicate sidebar definitions do not select this direct
HTTP path in the inspected source. No successful append was tested.

### Spreadsheet sidebar

The source menu loads `uform.html`. `getDropdownData` references `MonsterInfo`
column B, `WeaponInfo` column A and static lists. At `uform.html:173`, the sidebar
calls `google.script.run.addNewRow(rowData)`.

| Definition | Destination named in code | Column order | Return |
|---|---|---|---|
| `Code.gs:72` | `Leaderboard` | timestamp, Player, Monster, Weapon, RunType, Difficulty, Duration, Link | `"Success"` |
| `funcs.gs:1` | `RunData` | Player, RunType, Monster, Weapon, Difficulty, Duration, Link, timestamp | `true` |

The sidebar ignores return values and has no explicit failure handler. No caller
of `returnWeaponArray` appears in the retrieved source; it names an `Options`
sheet. This is not proof that the function has no historical/external use. Actual
tab existence, schemas and data have not been inspected.

### Baselines and deployment

HEAD/version 3 application files match. Manifest access differs: HEAD
`ANYONE_ANONYMOUS`, version 3 `ANYONE`; retrieved deployment metadata independently
reports `ANYONE_ANONYMOUS`. The website endpoint ID matched this script's version 3
deployment at retrieval. These historical facts do not verify current Google state.
Both HTTP handlers use `getActiveSpreadsheet()`. Static player names are source
constants, not retrieved spreadsheet cells, and remain unchanged.

## Unverified runtime behaviour and risks

- **Duplicate function selection:** Apps Script files share global scope, but the
  effective `addNewRow` winner and live destination were not established. Ordering
  changes could alter the selected implementation/schema. One call does not imply
  both implementations execute or two rows are appended.
- **HTTP spreadsheet lookup:** Google documents bound-script special methods as
  unavailable in web-app execution. The current `getActiveSpreadsheet()` use is a
  compatibility concern, not a demonstrated outage.
- **Success indication:** an opaque HTTP response cannot confirm an append. No
  successful, missing or failed website submission was observed through this review.
- **Validation/abuse:** bypassed browser checks, incomplete/repeated submissions or
  formula-like inputs could matter if the handler executes. No incident, data
  corruption or effectiveness of other protections was demonstrated.
- **Sidebar errors:** a thrown error could leave the submit button disabled because
  no failure handler resets it. That consequence was not observed live.
- **Access and other deployment:** the manifest/metadata discrepancy and purpose
  of the second deployment remain unresolved. Current effective access was not tested.

## When to revisit

Only schedule targeted maintenance when approved future work depends on these
paths or new evidence suggests a problem. Confirm intended schemas and historical
users before reconciling functions; establish controlled source synchronization
before Google code changes. If actual sheet structure/data is needed, obtain the
separately scoped Sheets inspection approval first. Do not infer that these
observations make code disposable, prove a live failure or grant write authority.

References: [V8 global scope](https://developers.google.com/apps-script/guides/v8-runtime#module_limitations),
[sidebar callbacks](https://developers.google.com/apps-script/guides/html/reference/run),
[bound-script methods](https://developers.google.com/apps-script/guides/bound#special_methods).
