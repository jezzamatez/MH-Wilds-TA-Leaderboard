# Submission flow and historical source review

Static inspection only: no application function, endpoint or spreadsheet query
was executed. Line references are to `../apps-script/src/` unless stated otherwise.

## Historical context

The user reports that their brother developed the original Google Sheets sidebar
submission form. The user later built a dedicated leaderboard website because
they preferred that interface, then added website submission. Individual function
authorship and the exact evolution of the duplicate definitions were not verified.
Both `addNewRow` implementations and the sidebar remain unchanged. Do not assume
the older functionality is disposable or obsolete; removal, renaming or merging
requires explicit review of intended users, schemas and historical behaviour.

## Existing Git helper versus cloud source

Cloud `Code.gs:126` and `../scripts/submit-run-webapp.gs` both append Player,
RunType, Monster, Weapon, Difficulty, Duration, Link and a server timestamp to
`RunData`. Cloud code uses `e.parameter` directly. The existing Git helper adds
trimming, first-letter lowercase aliases, six required-field checks and a
missing-sheet response, plus `cleanParam` and `jsonResponse` functions absent
from the retrieved cloud project. It remains separately preserved, not reconciled.

Cloud code also contains spreadsheet menus, a sidebar, dropdown loading, a
leaderboard link and `doGet`. The helper is not a complete cloud project. Adding
it unchanged to the upload set would introduce a second `doPost` definition.
Neither inspected handler provides authentication, server-side enum/duration
validation, formula-input protection or deduplication in its own code. Other
controls, if any, were not inspected.

## Website submission

`../index.html:2188` normalizes/validates duration, monster and weapon in the
browser, sets five-star Difficulty and POSTs URL-encoded fields with `no-cors` to
the verified version 3 endpoint. Cloud `doPost` directly appends to `RunData`;
it never calls `addNewRow`. The duplicate sidebar functions therefore do not
select the direct HTTP submission path.

Client checks can be bypassed, and an opaque response means "Sent" is not proof
of an appended row. Missing fields or repeated requests could produce incomplete
or duplicate rows if execution succeeds. These are source-derived risks, not
observed data corruption or a tested live execution result.

## Sidebar submission and duplicate functions

`onOpen` creates a menu, `showSidebar` loads `uform.html`, and `getDropdownData`
references `MonsterInfo` column B, `WeaponInfo` column A and static lists. At
`uform.html:173`, the sidebar calls `google.script.run.addNewRow(rowData)`.

| Definition | Destination | Column order | Return |
|---|---|---|---|
| `Code.gs:72` | `Leaderboard` | timestamp, Player, Monster, Weapon, RunType, Difficulty, Duration, Link | `"Success"` |
| `funcs.gs:1` | `RunData` | Player, RunType, Monster, Weapon, Difficulty, Duration, Link, timestamp | `true` |

Apps Script files share global scope. The definitions compete for the same name;
their effective winner has not been established and must not be guessed from
filenames or API order. Reordering/uploading files could change the selected
implementation and destination/schema. One call does not necessarily call both
functions or append two rows. The sidebar ignores returned values and has no
explicit failure handler, so errors can leave its button disabled. The unused
`returnWeaponArray` references `Options`; tab existence/data were not verified.

## Other preserved concerns

- HEAD and version 3 application files are identical. Manifest access differs:
  HEAD `ANYONE_ANONYMOUS`, version 3 `ANYONE`; deployment metadata independently
  reports `ANYONE_ANONYMOUS`.
- Both deployed `doPost` and the Git helper use `getActiveSpreadsheet()`. Google
  documents that bound-script special methods are unavailable in web-app
  execution. This is a compatibility concern, not a demonstrated live outage.
- Existing static player names are source constants, not retrieved spreadsheet
  cells. They remain unchanged and will be visible if this code is published.

Resolve intended sidebar destinations, compatibility, validation/abuse policy,
formula handling, duplicate policy and deployment access only in separately
approved work. Do not silently reconcile sources during migration.

References: [V8 global scope](https://developers.google.com/apps-script/guides/v8-runtime#module_limitations),
[sidebar callbacks](https://developers.google.com/apps-script/guides/html/reference/run),
[bound-script methods](https://developers.google.com/apps-script/guides/bound#special_methods).
