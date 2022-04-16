function ConfirmtoChannel(id, dota, contents) {
  var split = dota.split("-");
  var col = split[2];
  var user = split[1];

  var api = Api(user);
  var data = api.DataTable.getCell(api.Row, col).getValue();
  var obj = JSON.parse(data);

  if (col == "4") {
    var type = "💳 ID";
    var item = obj["ID"];
  } else if (col == "2") {
    var type = "🏧 ATM";
    var item = obj["ATM"];
  } else {
    var type = "🗑 ITEM";
    var item = obj["ITEM"];
  }

  if (contents.callback_query.message.photo) {
    Bot.sendPhoto(
      Admins().Channel,
      obj["Image"],
      Message_ConfirmTOChannel(type, obj, item).ConfirmTOChannel,
      Inline().bot
    );
  } else {
    Bot.sendText(
      Admins().Channel,
      Message_ConfirmTOChannel(type, obj, item).ConfirmTOChannel,
      Inline().bot
    );
  }

  if (id != Admins().Abdi) {
    return Bot.deleteText(id, CallbackContent(contents).MsgId);
  }

  return null;
}
