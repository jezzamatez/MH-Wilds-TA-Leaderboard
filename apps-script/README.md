# Apps Script component

`src/Code.gs`, `src/funcs.gs`, `src/uform.html` and `src/appsscript.json` are exact
copies of editor HEAD retrieved at `2026-10-14T22:52:28.4169940Z`. No application
behaviour has been changed; both `addNewRow` definitions remain intact.

`baselines.json` records the script/deployment identifiers, retrieval time,
migration provenance and SHA-256 hashes of editor HEAD and deployed version 3.
It contains no access token, private spreadsheet cells, author email, machine
path or raw API response. The original snapshots remain outside this repository
in the temporary companion backup; the index is provenance, not authorization.

- Editor HEAD is the editor snapshot used to seed this component.
- Version 3 is the source baseline for the website's verified submission
  deployment at retrieval. It is not an assertion that cloud state never changes.
- `../scripts/submit-run-webapp.gs` is an unchanged Git reference with additional
  validation, not an authoritative replacement for the complete cloud project.

The three application files match between HEAD and version 3. Their manifests
differ in `webapp.access`: HEAD `ANYONE_ANONYMOUS`, version 3 `ANYONE`. Deployment
metadata independently reports `ANYONE_ANONYMOUS`. Do not normalize these facts
or silently change the working manifest.

`.gitattributes` preserves the exact source bytes without text conversion or
filters. Existing source whitespace is retained. There is no `.clasp.json`,
`.claspignore` or automatic upload. Any future upload must separately approve
the target script, credentials/scopes and complete file set, with its root
restricted to `apps-script/src`. Documentation, the website helper, intake and
other project files must not become part of the Google source upload.

See [source review](../docs/apps-script-source-review.md) and
[development workflow](../docs/development-workflow.md).
