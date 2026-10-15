# Deferred development and production requirements

## Current scope

Website and Apps Script source share this one repository. The temporary import
repository and backup were removed after preservation checks; they are not active
source locations. Original raw intake is no longer retained. Future authorized
retrievals must choose their own private location and retention policy outside
this public checkout, rather than relying on a deleted workspace.

No active application development is planned. This document records requirements
for later approved work; it does not authorize tooling installation, new OAuth
scopes, Google inspection/changes or production promotion now. Completing local
documentation does not require implementing these deferred integrations.

| Requirement | Becomes relevant when | Present status |
|---|---|---|
| Pages publishing boundary | A change is proposed for production promotion or publishing configuration | Main/root publishing verified; artifact boundary not implemented |
| Apps Script source synchronization | Google-side source development, editor changes or upload is proposed | Historical source imported; no managed sync or upload configuration |
| Scoped Sheets access | An approved task needs actual spreadsheet structure or cell data | No Sheets inspection authorization/setup established by onboarding |

`dev` tracks `origin/dev`; `main` is the existing production source branch.
Development, testing and production are lifecycle stages, not components, branches
or environments. No three-branch/three-environment rule is imposed. A local branch
is not an isolated Google script or spreadsheet.

## 1. Safe GitHub Pages publishing boundaries

**Trigger:** before future production promotion, publishing-source changes or any
push whose actual configuration could publish site content. Routine approved dev
documentation pushes should first confirm that dev is not a publishing source.

Read-only inspection on 2026-10-15 verified Pages `build_type = legacy`, source
`main`, folder `/`. The successful production build used
`1f9bd512622b192f01d831cda9fa069a76a658c9`. After the initial dev push, no dev
workflow run or deployment was observed through `2026-10-15T00:17:44Z`. This
supersedes the earlier unauthenticated settings uncertainty, not a guarantee that
future settings or workflows cannot change. Deployment protection rules were not
assessed.

Before promotion:

- Recheck the actual Pages source, workflows, production target and approval gates.
- Decide and validate which files enter the site artifact. Prefer a reviewed
  website-only artifact boundary; Apps Script source and internal integration
  documentation must not be unintentionally published as Pages content.
- Account for root publishing: new tracked source/docs may become downloadable or
  rendered pages. `.gitignore` is not a Pages exclusion mechanism. Source already
  being visible in public Git does not approve its inclusion in a deployed site.
- Validate the proposed build/output and site behaviour, then obtain explicit
  human approval for the production change. A commit or dev push is not promotion.

No build filter, `_config.yml`, workflow, deployment setting or new environment is
implemented here. Any later publishing-boundary change needs its own reviewed
implementation; it must not silently restructure the existing website.

## 2. Controlled Apps Script source synchronization

**Trigger:** before future Google-side source development, including direct editor
changes, local changes intended for upload or any source push. Read-only historical
inspection and local documentation do not by themselves require write tooling.

Before that work:

1. Confirm the intended script/deployment IDs and stewardship. Retrieve fresh HEAD,
   metadata and relevant deployed source using explicitly approved read-only
   project/deployment access. Store any necessary new intake privately outside Git.
2. Compare fresh cloud HEAD, the preserved baseline hashes and local source. Resolve
   editor/local drift and choose the reviewed development authority explicitly.
   Coordinate editor changes; a fresh comparison alone is not a concurrency lock.
3. Agree a manual pull/review/push workflow and validation/test targets. Preserve
   historical interfaces until separately reviewed; a dev branch does not isolate
   live Google execution. Inspection of actual sheet schemas activates requirement 3.
4. Before writes, separately approve tooling, authentication, write scopes and the
   complete target file set. If clasp is chosen, pin/review it, restrict upload root
   to `apps-script/src`, retain `.gs` names and allowlist only approved source and
   manifest files. Never upload the website helper as an extra handler or include
   documentation, credentials or private evidence. No watch/automatic synchronization.
5. Review upload effects: replacing the source set can delete omitted cloud files
   and affect triggers or HEAD-based execution even without updating a versioned
   deployment. Obtain production approval where those effects reach live use.
6. Treat version creation and deployment changes as separately approved release
   actions, with appropriate validation and a rollback plan. A source push does not
   automatically update the website's version 3 deployment.

No clasp installation/configuration, new authentication, source reconciliation or
cloud write is performed by this documentation. Historical HEAD/version 3 findings
are not assertions about today's editor state.

## 3. Appropriately scoped Google Sheets access

**Trigger:** only when a future approved task needs actual tab names, schemas,
headers or cell values. This is not needed for present documentation, source-only
review or recording a resource URL. Apps Script read-only source/deployment scopes
do not authorize Sheets API reads.

- Confirm the account's legitimate access and explicit inspection scope for the
  spreadsheet identified in [integration documentation](google-integration.md).
  Any required API enablement or OAuth setup needs interactive user approval;
  never request credentials or tokens in chat.
- For authenticated read-only inspection, request
  `https://www.googleapis.com/auth/spreadsheets.readonly` where supported. It is
  account-wide, not a single-tab/range permission. Restrict requests to the approved
  spreadsheet ID and purpose; do not enumerate other spreadsheets or request
  broad Drive/Sheets write access. Google's per-file `drive.file` scope also allows
  writes, so it is not automatically a better read-only choice.
- Start with spreadsheet/tab metadata through `spreadsheets.get`, using a field
  mask limited to needed properties and no grid data fields. Headers are cell data,
  not mere metadata; request named tabs/ranges with `spreadsheets.values.get` only
  after approval of the necessary data subset. Avoid whole-sheet exports by default.
- Keep credentials outside project directories/Git. Minimize retained private
  values and protect/redact any necessary local evidence; never commit private
  data. Existing public CSV integration is not blanket inspection authorization.

Task-limited IDs, fields and ranges narrow requests; they are not OAuth enforcement
of per-range permissions. Any write, test submission, sharing change or production
data operation needs separate authorization. No Sheets connection or data read is
established here.

## Separate maintenance observations

[Submission-handler observations](apps-script-source-review.md) document confirmed
source facts and unverified runtime risks. They are not integration requirements
or confirmed outages, and no maintenance implementation is currently scheduled.
Revisit relevant observations only when an approved task depends on that behaviour
or new evidence warrants a targeted investigation. Project registration remains
unstarted and does not grant access, execution or production approval.

References: [Pages publishing sources](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site),
[Apps Script source replacement](https://developers.google.com/apps-script/api/reference/rest/v1/projects/updateContent),
[Sheets scopes](https://developers.google.com/workspace/sheets/api/scopes),
[spreadsheet metadata](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/get),
[range reads](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/get).
