# Development, source review and production gates

## One repository, several components

The user-approved arrangement keeps website and Apps Script source in this
repository. It supersedes the earlier separate-companion recommendation. The
old companion remains an unchanged temporary migration backup, not a second
active source authority. Private intake must be backed up separately from Git.

`dev` is a local branch created from the existing `main` for this migration.
Development/testing/production are lifecycle stages, not these components, Git
branches or deployed environments. No three-branch or three-environment rule is
imposed. A local branch is not an isolated Google spreadsheet or script project.

## Public-source review

The import includes reviewed source, a manifest, selected baseline hashes and
integration documentation. No credentials, access tokens, private spreadsheet
cells, raw API author metadata, private intake or absolute machine paths are
included. Integration IDs/URLs are locators, not secrets or permissions. The
endpoint was already in public website source. Static player names and sidebar
history are intentionally retained as part of the existing source/context.

The repository is public on GitHub, so any future pushed branch can expose these
files even without a Pages deployment. Ignore rules are a fallback, not secret
detection, access control or Pages exclusions. Keep private data and verification
outside the checkout entirely; never copy the companion's `.git`, intake or
credentials into it. No Google credentials should be stored in any project.

## GitHub Pages implications

Public metadata shows the default branch is `main` and the latest successful
`pages build and deployment` run used main commit
`1f9bd512622b192f01d831cda9fa069a76a658c9`. The local main tree has no custom
`.github/workflows` configuration. An unauthenticated Pages-settings GET returned
404, so the exact publishing branch/folder and current protection rules were not
verified. Do not infer a guaranteed future dev push is deployment-safe.

Creating a local branch and commit does not send an event to GitHub. This
migration performs no push, workflow dispatch, remote/settings change, build,
Google invocation or deploy, and disables local Git hooks for its branch/commit
operations. Local main remains unchanged. No `_config.yml`, `.nojekyll` or
workflow is added: production packaging is deliberately not changed here.

Before a future push or promotion, explicitly review publication scope and actual
Pages configuration. A merge/push to a publishing branch may trigger deployment.
With root publishing, new source/docs can also become downloadable or rendered
site content; `.gitignore` does not exclude tracked files from Pages. An eventual
approved build/packaging rule should decide whether only website assets enter
the production artifact. That rule is not implemented by this migration.

## Controlled Google workflow (future, separate approval)

1. Retrieve fresh HEAD, metadata, deployment information and relevant versioned
   source into a new private intake outside this checkout using read-only scopes.
2. Compare cloud HEAD, its previous baseline and local source; resolve editor/local
   drift explicitly. Preserve the known manifest discrepancy pending review.
3. Develop only approved changes, retaining historical interfaces until their
   intended behaviour is understood. Review/test with authorized test resources;
   do not assume a local `dev` branch makes live Google writes safe.
4. Review the exact public Git diff, source-set integrity and validation evidence
   before committing or requesting any remote push/production promotion.
5. Separately approve Google write scopes, tooling and upload target. Future clasp
   setup must restrict its upload root to `apps-script/src`, retain `.gs` names
   and allowlist exactly the reviewed source/manifest files. Do not upload the
   website helper as an extra handler or include documentation/private evidence.
6. Source upload replaces editor HEAD's complete file set; omissions can delete
   cloud files and changes can affect triggers or HEAD-based execution. It does
   not automatically update the website's version 3 deployment. Version creation
   and deployment updates require separate explicit production approval, suitable
   validation and a reviewed rollback plan.

No clasp installation/configuration, source reconciliation, new environment,
automatic sync or project registration is included. Confirm stewardship and
runtime/access ambiguities before future Google changes.

References: [Pages publishing sources](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site),
[Apps Script source replacement](https://developers.google.com/apps-script/api/reference/rest/v1/projects/updateContent).
