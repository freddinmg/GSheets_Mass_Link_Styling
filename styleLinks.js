//Normal complete code below:
function stylePageLinks(arg1 = "Sheet1", arg2 = "A1:A7", arg3 = "#0000EE") {
  var targetSheetName = arg1;
  var targetSheet = SS.getSheetByName(targetSheetName);
  //var sheetData = targetSheet.getDataRange();
  var sheetRange = targetSheet.getRange(arg2);
  const valuesData = sheetRange.getRichTextValues();
  var targetColor = arg3;


function getLinks2(arg1 = richTextValue,arg2 = targetColor){
  var richTextValue = arg1;
  var linkColor = arg2;
  var runsArr = [];
  var startIndexArr = [];
  var endIndexArr = [];
  //urlArr1 gets URL from ALL runs.
  var urlArr1 = [];
  //urlArr2 is an array of only urls with no other values. May be useful feature one day.
  var urlArr2 = [];
  

  var richTextValue = arg1;
  var richText = richTextValue.getText();
  var richTextValue2 = SpreadsheetApp.newRichTextValue().setText(richText);
  var linkColorRtf = SpreadsheetApp.newTextStyle().setForegroundColor(linkColor).build();

  var runs = richTextValue.getRuns()

    for (var i = 0; i < runs.length; i++) {
      //For some reason, you can't read the runs directly from "runs" object. You need the ".getText()".
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

//This is such a frustrating fix; my current attempts to work directly from the URL array all piss off the code. It really doesn't wanna touch null values.
function linkBool(item) {
  if(item === null) { return false } else { return true };
}
let linksBool = urlArr1.map(linkBool);

//Bunch of testing arrays section.
//-------------------------------
//console.log("runsArr:");
//Logger.log(runsArr);
//console.log("urlArr1:")
//Logger.log(urlArr1);
//console.log("linksBool:")
//Logger.log(linksBool);
//console.log("urlArr2: [ " + urlArr2+" ]");
//-------------------------------

//I tried just using one of the reference codes in an embedded loop, but it would only style the first link in a cell and completely erase the other.
for (let i = 0; i < linksBool.length; i++) {
{if(linksBool[i] === true){
  richTextValue2.setLinkUrl(startIndexArr[i], endIndexArr[i], urlArr1[i]);
  richTextValue2.setTextStyle(startIndexArr[i], endIndexArr[i], linkColorRtf);
  }   
  }
}

return richTextValue2.build();

 }

//Had to really rehash the original function, which didn't spit out a rich text value. It spit out a cell with formatting.
 const newValues = valuesData.map(rowValues => {
  return rowValues.map(value => getLinks2(value,targetColor))
  });

//Note the lack of ".build()" to the end of "newValues." The returned value already has ".build()" in it.
sheetRange.setRichTextValues(newValues);

}
