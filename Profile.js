function Profile(id, msg_id) {
  var table = Table();
  var row = table.UserTable.createTextFinder(id).findNext().getRow();
  var table = table.DataTable;
  var idData = table.getCell(row, 4).getValue();
  var atmData = table.getCell(row, 2).getValue();
  var otherData = table.getCell(row, 3).getValue();
  var obj = "{}";
  var idtoprse = JSON.parse(obj);
  var atmtoprse = JSON.parse(obj);
  var othertoprse = JSON.parse(obj);

  if (idData) idtoprse = JSON.parse(idData);

  if (atmData) atmtoprse = JSON.parse(atmData);

  if (otherData) othertoprse = JSON.parse(otherData);

  Bot.editText(
    id,
    msg_id,
    Message_Profile(id, idtoprse, atmtoprse, othertoprse).Profile,
    Inline().profile
  );

  return null;
}

// Deleting Data From Profile
function DeleteData(id, msg_id) {
  var table = Table();
  var row = table.UserTable.createTextFinder(id).findNext().getRow();

  table.DataTable.getCell(row, 2).clear();
  table.DataTable.getCell(row, 3).clear();
  table.DataTable.getCell(row, 4).clear();
  Profile(id, msg_id);
  return null;
}
