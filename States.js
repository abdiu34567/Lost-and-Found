// find message Id to edit for , edit status to null
function Back(id, messageId) {
  const data = Status(id);
  const msg_id = data.Col2.getValue();
  Bot.editText(id, msg_id, Message().FoundLost, Inline().item);
  return data.Col1.setValue("");
}

// exit if id/atm/other are already registered
function Next(id, text, messageId) {
  const api = Status(id);
  const status = api.Col3.getValue();
  const msg_id = api.Col2.getValue();

  const dataobj = PasreIdObject(id, status);
  var obj = dataobj.Toparse;
  var date = new Date();

  if (!obj[dataobj.Type]) return Bot.deleteText(id, messageId);

  try {
    Bot.deleteText(id, msg_id);
    Bot.deleteText(id, messageId);
  } catch (err) {}

  if (status == "ID") var item = obj["ID"];
  else if (status == "ATM") var item = obj["ATM"];
  else var item = obj["ITEM"];

  Bot.sendText(
    id,
    Message_Next(status, obj, item, date).Next,
    Reply().phoneshare
  );

  api.Col1.setValue("phone");
  api.Col4.setValue("none");
  api.Col2.setValue(messageId + 1);
  return null;
}
