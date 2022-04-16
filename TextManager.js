function TextManager(contents) {
  const data = TextContents(contents);
  const id = data.Id;
  const text = data.Text;
  const messageId = data.MsgId;

  switch (text) {
    case "/start":
    case "❌ Exit":
      Bot.sendText(id, Message().Welcome, Inline().setup);
      return null;

    case "💫 RESTART":
      return Restart(id);

    case "➡️ NEXT":
      return EscapePhoto(id);

    default:
      const catchdata = Api().catches;
      var catched = catchdata.get(id);
      if (catched != null) {
        var obj = JSON.parse(catched);
        switch (obj["State"]) {
          case "ID":
          case "ATM":
          case "ITEM":
            return Step2(id, text, catchdata);

          case "phone":
            if (Number(text) && text.length < 14) {
              return SaveContact(id, text);
            }
            return null; //if catch exist and the input not satistfied the condition , it does not need to redirect home

          default: //if no catch
            return Bot.sendText(id, Message().Welcome, Inline().setup);
            break;
        }
      }
      return Bot.sendText(id, Message().Welcome, Inline().setup); //if no catch
  }
}
