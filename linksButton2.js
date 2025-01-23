//onChange MUST be declared before both button scripts.
//consult the previous button script for commentary, it's identical to it as of 23/01/25. It's going to be revised if I can find out what occasions makes the merged ranges give a "mismatched size of arrays" error. Watch this space!

//Play with link colors without going into the code to do so. This script is attached to a button.
function stylePageLinks3(arg1 = "Merged_Cells", arg2 = "A2:A7", arg3 = "J3") {
  var targetSheetName = arg1;
  var targetSheet = SS.getSheetByName(targetSheetName);
  var sheetData = targetSheet.getDataRange();
  var sheetRange = targetSheet.getRange(arg2);
  const valuesData = sheetRange.getRichTextValues();
  var colorCell = targetSheet.getRange(arg3);
  var targetColor = colorCell.getValue();
  var resultColor;

  if(isHexColor(targetColor) == true){ resultColor = targetColor} else {resultColor = "#0000EE"};

function getLinks2(arg1 = richTextValue,arg2 = resultColor){
  var richTextValue = arg1;
  var linkColor = arg2;
  var runsArr = [];
  var startIndexArr = [];
  var endIndexArr = [];
  //urlArr1 gets URL from ALL runs.
  var urlArr1 = [];
  //urlArr2 is an array of only urls with no other values.
  var urlArr2 = [];
  

  var richTextValue = arg1;
  var richText = richTextValue.getText();
  var richTextValue2 = SpreadsheetApp.newRichTextValue().setText(richText);
  var linkColorRtf = SpreadsheetApp.newTextStyle().setForegroundColor(linkColor).build();

  var runs = richTextValue.getRuns()

    for (var i = 0; i < runs.length; i++) {
        var runsText = runs[i].getText();
        runsArr.push(runsText);
        var startIndex = runs[i].getStartIndex();
        startIndexArr.push(startIndex);
        var endIndex = runs[i].getEndIndex();
        endIndexArr.push(endIndex);
        var url = runs[i].getLinkUrl(); // Get the URL from the text run
          urlArr1.push(url);
        if(url){
          urlArr2.push(url);
        }
        
      }

//This is such a frustrating fix; my current attempts to work directly from the URL array all piss off the code. It really doesn't wanna touch null values. So, I converted them into something else in a helper array.
function linkBool(item) {
  if(item === null) { return false } else { return true };
}
let linksBool = urlArr1.map(linkBool);

//console.log("runsArr:");
//Logger.log(runsArr);
//console.log("urlArr1:")
//Logger.log(urlArr1);
//console.log("linksBool:")
//Logger.log(linksBool);
//console.log("urlArr2: [ " + urlArr2+" ]");

for (let i = 0; i < linksBool.length; i++) {
{if(linksBool[i] === true){
  richTextValue2.setLinkUrl(startIndexArr[i], endIndexArr[i], urlArr1[i]);
  richTextValue2.setTextStyle(startIndexArr[i], endIndexArr[i], linkColorRtf);
  }   
  }
}

return richTextValue2.build();

 }

 const newValues = valuesData.map(rowValues => {
  return rowValues.map(value => getLinks2(value,targetColor))
  });

sheetRange.setRichTextValues(newValues);
}
