function Callbacks(contents) {
  const callbackcontents = CallbackContent(contents);
  var dota = callbackcontents.Dota;
  var id = callbackcontents.Id;
  var msg_id = callbackcontents.MsgId;
  var message = Message();

  switch (dota) {
    case "register":
    case "backtoregister":
      return Bot.editText(id, msg_id, message.Regsister, Inline().register);

    case "found":
    case "lost":
      Bot.editText(id, msg_id, message.FoundLost, Inline().item);
      return CatchStatus(id, msg_id, dota);

    case "ID":
    case "ATM":
    case "ITEM":
      return Step1(dota, id, msg_id, message);

    case "exit":
      return Bot.editText(id, msg_id, message.Welcome, Inline().setup);

    case "dev":
      return Bot.editText(id, msg_id, message.Dev, Inline().home);

    case "search":
      return Bot.editText(id, msg_id, message.Search, Inline().search);

    case "about":
      return Bot.editText(id, msg_id, message.About, Inline().home);

    case "profile":
      return Profile(id, msg_id);

    case "delete":
      return DeleteData(id, msg_id);

    default:
      return ConfirmtoChannel(id, dota, contents);
  }
}
