/* @OnlyCurrentDoc */
var SS = SpreadsheetApp.getActiveSpreadsheet();

function isHexColor(color) {
  const regex = /^#[a-f0-9]{6}$/i;
  return regex.test(color);
}

//Below is original code; takes the hex of the active cell from anywhere on the file.
function getHex(input) {
  return SpreadsheetApp.getActiveSpreadsheet().getRange(input).getBackgrounds();
}

function getHex2(sheet, input) {
  return SS.getSheetByName(sheet).getRange(input).getBackgrounds();
}
