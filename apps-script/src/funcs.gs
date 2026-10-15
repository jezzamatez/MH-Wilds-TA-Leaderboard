function addNewRow(rowData) {
 
const runDate = new Date();

					

var ss = SpreadsheetApp.getActiveSpreadsheet();
var ws = ss.getSheetByName("RunData");
ws.appendRow([rowData.Player,rowData.RunType, rowData.Monster,rowData.Weapon,rowData.Difficulty,rowData.Duration,rowData.Link, runDate]);

return true;
}


function returnWeaponArray(){
var ss = SpreadsheetApp.getActiveSpreadsheet();
var ws = ss.getSheetByName("Options");
return ws.getRange(2,1,ws.getLastRow()-1,1).getValues();
}
