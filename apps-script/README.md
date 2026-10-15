# Apps Script component

`src/Code.gs`, `src/funcs.gs`, `src/uform.html` and `src/appsscript.json` are exact
copies of editor HEAD retrieved at `2026-10-14T22:52:28.4169940Z`. No application
behaviour has been changed; both `addNewRow` definitions remain intact.

`baselines.json` records the script/deployment identifiers, retrieval time,
migration provenance and SHA-256 hashes of editor HEAD and deployed version 3.
It contains no access token, private spreadsheet cells, author email, machine
path or raw API response. The temporary import repository, raw intake and backup
were deliberately deleted after preservation checks. The index retains historical
provenance, not a promise that those records or the old source commit can still
be retrieved. This repository is the sole local project source location.

- Editor HEAD is the editor snapshot used to seed this component.
- Version 3 is the source baseline for the website's verified submission
  deployment at retrieval. It is not an assertion that cloud state never changes.
- `../scripts/submit-run-webapp.gs` is an unchanged Git reference with additional
  validation, not an authoritative replacement for the complete cloud project.

The three application files match between HEAD and version 3. Their manifests
differ in `webapp.access`: HEAD `ANYONE_ANONYMOUS`, version 3 `ANYONE`. Deployment
metadata independently reports `ANYONE_ANONYMOUS`. Do not normalize these facts
or silently change the working manifest.

During cleanup, replacing only that access value in the preserved HEAD manifest
reconstructed the exact recorded version 3 manifest hash in memory. No alternate
manifest was written or deployed. For current Google state, retrieve fresh
read-only evidence when a future task requires it; a historical hash is not a
live-state check.

`.gitattributes` preserves the exact source bytes without text conversion or
filters. Existing source whitespace is retained. There is no `.clasp.json`,
`.claspignore` or automatic upload. No active Google-side development is planned.
Before any future editor/source changes, establish the
[controlled synchronization requirement](../docs/development-workflow.md#2-controlled-apps-script-source-synchronization).
Any future upload must separately approve
the target script, credentials/scopes and complete file set, with its root
restricted to `apps-script/src`. Documentation, the website helper, intake and
other project files must not become part of the Google source upload.

See [source review](../docs/apps-script-source-review.md) and
[development workflow](../docs/development-workflow.md).
