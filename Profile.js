function Profile(id, msg_id) {
  var api = Api(id);
  var row = api.Row;
  var table = api.DataTable;
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

  return api.ManagerTable.getCell(row, 2).setValue(msg_id);
}

// Deleting Data From Profile
function DeleteData(id) {
  const data = Status(id);
  const row = data.Row;
  const msg_id = data.Col2.getValue();

  data.DataTable.getCell(row, 2).clear();
  data.DataTable.getCell(row, 3).clear();
  data.DataTable.getCell(row, 4).clear();
  Profile(id, msg_id);
  return null;
}
