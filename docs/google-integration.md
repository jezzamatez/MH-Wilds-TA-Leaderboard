# Google resources and verified relationships

These findings describe the read-only retrieval at
`2026-10-14T22:52:28.4169940Z`. Raw source/API snapshots stay in the private
temporary companion backup, not this public-source repository.

## Project components

- Website source: `../index.html`, assets and existing scripts in this repository.
- GitHub origin: `https://github.com/jezzamatez/MH-Wilds-TA-Leaderboard.git`.
- Website main baseline: `1f9bd512622b192f01d831cda9fa069a76a658c9`.
- Published site: `https://jezzamatez.github.io/MH-Wilds-TA-Leaderboard/`.
- Google source: `../apps-script/src/`, part of the same project repository.
- Spreadsheet ID: `1H6wf4FxwHntdQvsy5DSMXxaEpgLPeX7NQ7SQ51KaU04`.
- Spreadsheet URL:
  `https://docs.google.com/spreadsheets/d/1H6wf4FxwHntdQvsy5DSMXxaEpgLPeX7NQ7SQ51KaU04/edit`.
- Website CSV integration uses gids `0`, `73280311` and `2020437619`. These are
  integration identifiers, not local copies of spreadsheet data.
- Script title: `Wilds TA Leaderboard`.
- Script project ID:
  `1I8OOMVV2VU6cjnzpKJDL8Vw_Qfrc6ZmdObdochBAIy-TwQXVekigbL4L`.
- Editor URL:
  `https://script.google.com/home/projects/1I8OOMVV2VU6cjnzpKJDL8Vw_Qfrc6ZmdObdochBAIy-TwQXVekigbL4L/edit`.

The script's API `parentId` exactly matches the spreadsheet ID, establishing its
bound relationship. Neither these identifiers nor OAuth inspection approval
establish exclusive ownership or authority to edit Google resources.

## Website submission deployment

- Deployment ID:
  `AKfycbws8Ia_eSpxe7KsAhGF6wmRSkkM6vqy2oy8JYiyfAOx-MMqLgZ6miybhILnXmUiHlrDVQ`.
- URL:
  `https://script.google.com/macros/s/AKfycbws8Ia_eSpxe7KsAhGF6wmRSkkM6vqy2oy8JYiyfAOx-MMqLgZ6miybhILnXmUiHlrDVQ/exec`.
- Exact match with `SUBMIT_RUN_ENDPOINT` in `../index.html:1785`.
- API version `3`, description `Submit Run`, update time
  `2026-04-17T05:08:20.627Z`.
- API access `ANYONE_ANONYMOUS`, execute-as `USER_DEPLOYING`.

The second returned deployment ID is
`AKfycbzXMDpVIEREazSl3HfoGnYOVIjDDUXteHjhuQp00l8p`. Its response has no version
number/description and an epoch update time. Its purpose remains unverified; it
is not the website's submission endpoint. No endpoint was invoked to test an
append, and no spreadsheet cells or installed triggers were inspected.

## Baselines and limits

HEAD and version 3 have identical application files but different manifest access
values. The Git helper is a distinct implementation, not a retrieved cloud file.
See [source review](apps-script-source-review.md) and the
[baseline index](../apps-script/baselines.json).

The user attributes the original sidebar to their brother and subsequent website
development/direct submission to themselves. This is important historical
context, not a reason to discard the older interface or infer specific function
authorship. Ownership/stewardship, the sidebar destination, live runtime health,
the manifest/access difference and the second deployment remain review questions.
