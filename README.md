# Monster Hunter Wilds TA Leaderboard

One logical project, one source repository, several components:

- `index.html` and `assets/`: the existing GitHub Pages website.
- `apps-script/src/`: the Google Apps Script source and manifest, copied unchanged
  from the reviewed editor HEAD snapshot.
- `scripts/submit-run-webapp.gs`: the existing website Git helper, preserved
  separately and unchanged; it is not the deployed handler or a complete script
  project. Do not upload it alongside the cloud handler without reconciliation.
- Google Sheets: externally hosted data, not a copied local database.

The user approved a single-repository arrangement, superseding the earlier
separate companion source-management proposal. Cohesive history and review of
website/script changes motivate this arrangement; public source exposure and
Pages packaging still require care. The sibling `MH-Wilds-TA-Leaderboard-Google`
directory, its local commit `752cc2ae6e9097a5de50bd25ef0663f2119a1658`, Git history
and private intake remain untouched as a temporary migration backup. This import
copies reviewed source; it does not merge or rewrite either repository's history.

The original Sheets sidebar was developed by the user's brother. The user later
built the dedicated website and subsequently added direct website submission.
Both sidebar implementations are retained: older functionality is not disposable
merely because a newer interface exists. Individual function provenance and the
intended `addNewRow` selection remain unresolved.

## Documentation

- [Google resources and verified deployments](docs/google-integration.md)
- [Submission flow, differences and historical context](docs/apps-script-source-review.md)
- [Local development, public-source review and production gates](docs/development-workflow.md)
- [Apps Script baseline and upload boundaries](apps-script/README.md)

Migration is local on `dev`, created from the existing `main`. No push, Pages
configuration change, Google source update or deployment is authorized by this
import. Production approval is separate from a branch name or successful commit.
No clasp configuration, automatic synchronization or new lifecycle machinery is
introduced. Project registration remains a later explicitly reviewed step.

Private intake, credentials and diagnostics stay outside this checkout, even when
ignore rules would exclude them. They are not part of the public project source
and must not be bundled into future website deployment artifacts.
