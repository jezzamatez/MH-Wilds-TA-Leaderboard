# Monster Hunter Wilds TA Leaderboard

One logical project, one source repository, several components:

- `index.html` and `assets/`: the existing GitHub Pages website.
- `apps-script/src/`: the Google Apps Script source and manifest, copied unchanged
  from the reviewed editor HEAD snapshot.
- `scripts/submit-run-webapp.gs`: the existing website Git helper, preserved
  separately and unchanged; it is not the deployed handler or a complete script
  project. Do not upload it alongside the cloud handler without reconciliation.
- Google Sheets: externally hosted data, not a copied local database.

The project uses this one repository for website and Google source. Cohesive
history and review motivate that arrangement; public source exposure and Pages
packaging still require care. The temporary import repository and its backup were
deliberately removed after source-preservation checks. Original raw intake is no
longer retained; the source, identifiers, baseline hashes and integration findings
remain here. There is no second project checkout or backup dependency.

The original Sheets sidebar was developed by the user's brother. The user later
built the dedicated website and subsequently added direct website submission.
Both sidebar implementations are retained: older functionality is not disposable
merely because a newer interface exists. Individual function provenance and the
intended `addNewRow` selection remain unresolved.

## Documentation

- [Google resources and verified deployments](docs/google-integration.md)
- [Separate deferred submission-maintenance observations](docs/apps-script-source-review.md)
- [Deferred publishing, source-sync and Sheets-access requirements](docs/development-workflow.md)
- [Apps Script baseline and upload boundaries](apps-script/README.md)

## Current status and deferred work

The reviewed import is on `dev` and `origin/dev`; production `main` is unchanged.
No active application development is planned. The following requirements are
recorded for the point at which relevant work is separately approved, not as an
instruction to implement integrations now:

1. Establish safe Pages publishing boundaries before future production promotion.
2. Establish controlled Apps Script source synchronization before Google-side
   source development, including before direct editor changes or uploads.
3. Obtain appropriately scoped Sheets access only when an approved task needs
   actual spreadsheet structure or data inspection.

See [the trigger and readiness details](docs/development-workflow.md). Existing
submission-handler ambiguities are separate maintenance observations, not new
integration requirements or confirmed live failures. Production approval remains
separate from a branch name, commit, registration or successful validation.
No deployment configuration, clasp setup, synchronization or Sheets integration
is implemented. EmergentWorks project registration is complete; see below.

Private intake, credentials and diagnostics stay outside this checkout, even when
ignore rules would exclude them. They are not part of the public project source
and must not be bundled into future website deployment artifacts.

## EmergentWorks registration

This project is registered as `b990c400-277d-4c1e-bfbc-424c44951469`. The local,
framework-managed record resides under the EmergentWorks root at
`work/registry/b990c400-277d-4c1e-bfbc-424c44951469.json`. It is Git-ignored and
outside this project repository, not included in a project clone; it needs separate
backup. External resource ownership remains unresolved.

From the EmergentWorks root, read the current record with:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\tools\Manage-ProjectRegistry.ps1 -Operation Show -ProjectId b990c400-277d-4c1e-bfbc-424c44951469 -Json
```

A future agent should use the record to identify the reviewed resources and
documentation pointers, confirm the authorized task scope and `dev` checkout,
then consult those documents within that scope. If the local record is unavailable,
ask the maintainer to locate or restore it rather than infer a new ID.
Registration grants no permission to inspect, modify, execute or deploy resources.
The deferred requirements above and their approval boundaries remain unchanged.
