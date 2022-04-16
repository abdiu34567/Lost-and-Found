// Print ID/ATM/ITEM form -- Tested(updated)*
function Ask(dota, id, msg_id) {
  const api = Api(id);
  const row = api.Row;
  const statTable = api.ManagerTable;
  const status = statTable.getCell(row, 1).getValue(); //find/lost

  var dataTable = api.DataTable;
  var qesn = Questions();

  if (dota == "ID") qesn = qesn.ID;
  else if (dota == "ATM") qesn = qesn.ATM;
  else {
    qesn = qesn.ITEM;
    dota = "ITEM";
  }
  Bot.editText(id, msg_id, Message_Ask(dota, status, qesn).Ask);

  dataTable = dataTable.getCell(row, qesn.Col);

  if (dataTable.getValue()) var obj = JSON.parse(dataTable.getValue());
  else var obj = new Object();

  obj["Status"] = status;
  obj = JSON.stringify(obj, undefined, 1);
  dataTable.setValue(obj);

  statTable.getCell(row, 1).setValue(dota);
  statTable.getCell(row, 2).setValue(msg_id);
  statTable.getCell(row, 3).setValue(dota);
  return null;
}

/* Saves Id/ATM/ITEM from user Input --- Tested */
function SaveItem(id, text, messageId, status) {
  const dataobj = PasreIdObject(id, status);
  const statuss = Status(id);

  var obj = dataobj.Toparse;
  var date = new Date();
  var msg_id = statuss.Col2.getValue();

  Bot.editText(
    id,
    msg_id,
    Message_SaveItem(status, obj, dataobj, text, date).SaveItem
  );
  try {
    Bot.deleteText(id, messageId);
  } catch (err) {}

  if (status == "ID") obj["ID"] = text;
  else if (status == "ATM") obj["ATM"] = text;
  else obj["ITEM"] = text;

  obj["Time"] = date.toLocaleDateString("en-US");
  obj = JSON.stringify(obj, undefined, 1);
  dataobj.DataTable.setValue(obj);

  return statuss.Col1.setValue("photo");
}
