//This onChange was created to make getting a color for a link easier; with the fill color feature, it acts like a color picker. If you already have a hex value, you simply have to type it in the picker dialog!
//Be sure this function is BEFORE both button functions!
function onChange(e) {
    //Sheet1's color hex value cell.
    var cell1 = SS.getSheetByName("Sheet1").getRange("D3");
    //Merged_Cell's hex value cell.
    var cell2 = SS.getSheetByName("Merged_Cells").getRange("J3");

  //Here's a tip; onChange doesn't have an e.range property; var range's value is a fix for this oversight. Pretty sure it also works with ".getActiveCell."
    var range = e.source.getCurrentCell();
    var activeCellR = range.getRow();
    var activeCellC = range.getColumn();
  //Idk why I can't just use the gd raw ass address, I gotta do this roundabout garbage (in the "if" statements.)

  //Cell row and column intersection is cell D3, aka cell1.
    if (activeCellR === 5 && activeCellC === 4) {
        var hex1 = getHex2("Sheet1", "D5");
        cell1.setValue(hex1);
    }

  //Cell row and column intersection is cell J3, aka cell2.
    if (activeCellR === 5 && activeCellC === 10) {
        var hex2 = getHex2("Merged_Cells", "J5");
        cell2.setValue(hex2);
    }

}
