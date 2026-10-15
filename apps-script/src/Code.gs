/**
 * 1. THE MENU
 * Adds the 'Wilds TA' menu to the spreadsheet.
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('🏆 Wilds TA')
      .addItem('Submit Run', 'showSidebar')
      .addSeparator()
      .addItem('Leaderboard', 'goToRules')
      .addToUi();
}

/**
 * 2. OPEN THE SIDEBAR
 * Triggers the 'uform.html' sidebar.
 */
function showSidebar() {
  try {
    const html = HtmlService.createHtmlOutputFromFile('uform')
        .setTitle('Submission Form')
        .setWidth(400);
    SpreadsheetApp.getUi().showSidebar(html);
  } catch (e) {
    SpreadsheetApp.getUi().alert("Error: Ensure your HTML file is named exactly 'uform' in the script editor.");
  }
}

/**
 * 3. FETCH DATA
 * Grabs the Monsters and Weapons for your dropdowns.
 */
function getDropdownData() {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // 1. Monster Fetching (MonsterInfo Sheet - Column B)
    // Updated to pull from Column B
    const monsterSheet = ss.getSheetByName("MonsterInfo");
    const monsters = monsterSheet 
      ? monsterSheet.getRange("B2:B" + monsterSheet.getLastRow()).getValues().flat().filter(String)
      : ["Sheet 'MonsterInfo' Not Found"];

    // 2. Weapon Fetching (WeaponInfo Sheet - Column A)
    const weaponSheet = ss.getSheetByName("WeaponInfo");
    const weapons = weaponSheet 
      ? weaponSheet.getRange("A2:A" + weaponSheet.getLastRow()).getValues().flat().filter(String) 
      : ["Sheet 'WeaponInfo' Not Found"];

    // 3. Static Lists
    const players = ["Matt", "Jeremy"];
    const runTypes = ["TA", "Freestyle"];
    const difficulty = ["★", "★★", "★★★", "★★★★", "★★★★★"];

    return {
      players: players,
      runTypes: runTypes,
      monsters: monsters,
      weapons: weapons,
      difficulty: difficulty
    };
  } catch (e) {
    console.error("Error in getDropdownData: " + e.toString());
    return { error: e.toString() };
  }
}

/**
 * 4. SUBMIT DATA
 * Takes form data and adds it to the Leaderboard.
 */
function addNewRow(data) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("Leaderboard");
    
    const row = [
      new Date(),         // Timestamp
      data.Player,
      data.Monster,
      data.Weapon,
      data.RunType,
      data.Difficulty,
      data.Duration,
      data.Link
    ];
    
    sheet.appendRow(row);
    return "Success";
  } catch (e) {
    throw new Error("Submission failed: " + e.message);
  }
}

/**
 * 5. EXTERNAL LINK (POPUP BLOCKER FRIENDLY)
 * Opens a dialog with a button to ensure the browser allows the new tab.
 */
function goToRules() {
  const url = "https://jezzamatez.github.io/MH-Wilds-TA-Leaderboard/"; // Change to your specific rules URL
  const html = `
    <html>
      <body style="font-family: sans-serif; text-align: center; padding: 20px;">
        <p style="margin-bottom: 20px; color: #333;">Click the button below to open the leaderboard in new window.</p>
        <a href="${url}" target="_blank" 
           style="background-color: #0d6efd; color: white; padding: 12px 24px; 
                  text-decoration: none; border-radius: 6px; display: inline-block;
                  font-weight: bold; font-family: Arial, sans-serif;"
           onclick="google.script.host.close()">
           Show Leaderboard
        </a>
      </body>
    </html>
  `;
  const output = HtmlService.createHtmlOutput(html)
      .setWidth(350)
      .setHeight(150);
  SpreadsheetApp.getUi().showModalDialog(output, "External Link");
}

function doGet(e) {
  return ContentService
    .createTextOutput("Wilds TA submit endpoint is live. Use POST to submit runs.")
    .setMimeType(ContentService.MimeType.TEXT);
}
function doPost(e) {
  const params = e.parameter || {};
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("RunData");

  ws.appendRow([
    params.Player,
    params.RunType,
    params.Monster,
    params.Weapon,
    params.Difficulty,
    params.Duration,
    params.Link,
    new Date()
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}