// Register Telegram ID First time on start - Tested(updated)
function OneTimeRegisterId(id) {
  const api = Api(id);
  const checkId = api.UserTable;

  const rowData = api.DataShet;
  const last_row = rowData.getLastRow();

  if (checkId.getValue()) {
    var obj = checkId.getValue();
    var obj = JSON.parse(obj);

    if (obj[id] == null) obj[id] = last_row + 1;
    else return null;
  } else {
    var obj = new Object();
    obj[id] = last_row + 1;
  }

  Table()
    .DataTable.getCell(last_row + 1, 1)
    .setValue(new Date());
  var tostring = JSON.stringify(obj, undefined, 1);
  return checkId.setValue(tostring);
}
