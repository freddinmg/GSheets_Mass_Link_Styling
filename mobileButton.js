//Place this function AFTER styleLinks3() or it won't work!
function onEdit() {
  let activeCell = SS.getActiveCell();
  let reference = activeCell.getA1Notation();
  let refVal = activeCell.getValue();
  let sheetName = activeCell.getSheet().getName();

if(activeCell.isPartOfMerge && reference === "E3" && refVal === true && sheetName ==="Mobile_Version"){
  stylePageLinks3();
  activeCell.setValue(false);
  };
}
