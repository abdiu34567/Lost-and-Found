function SavePhoto(contents) {
  const photo = contents.message.photo[0].file_id;

  const textcontent = TextContents(contents);
  const id = textcontent.Id;
  const text = textcontent.Text;
  const messageId = textcontent.MsgId;
  const status = Status(id);
  var type = status.Col3.getValue();

  if (status.Col1.getValue() != "photo") return Bot.deleteText(id, messageId);

  var dataobj = PasreIdObject(id, type);
  var obj = dataobj.Toparse;
  var date = new Date();
  var msg_id = status.Col2.getValue();

  if (type == "ID") var item = obj["ID"];
  else if (type == "ATM") var item = obj["ATM"];
  else var item = obj["ITEM"];

  try {
    Bot.deleteText(id, msg_id);
    Bot.deleteText(id, messageId);
  } catch (err) {}

  Bot.sendText(
    id,
    Message_PhotoSave(type, obj, dataobj, item, date, photo).PhotoSave,
    Reply().phoneshare
  );

  obj["Image"] = photo;
  obj = JSON.stringify(obj, undefined, 1);
  dataobj.DataTable.setValue(obj);

  status.Col2.setValue(messageId + 1);
  status.Col1.setValue("phone");
  status.Col4.setValue("ok");
  return Bot.sendPhoto(Admins().DataBase, photo);
}
