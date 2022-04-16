function TextManager(contents) {
  const data = TextContents(contents);
  const id = data.Id;
  const text = data.Text;
  const messageId = data.MsgId;

  switch (text) {
    case "/start":
      try {
        Bot.deleteText(id, messageId);
      } catch (err) {}
      Bot.sendText(id, Message().Welcome, Inline().setup);
      return OneTimeRegisterId(id);

    case "❌ Exit":
    case "#Exit":
    case "#exit":
    case "Exit":
    case "exit":
      const data = Status(id);
      const msg_id = data.Col2.getValue();

      try {
        Bot.deleteText(id, messageId); // processing text
        Bot.deleteText(id, msg_id); //saved data
        Bot.deletereplykeyboard(id, "✅ Processing--");
        Bot.deleteText(id, messageId + 1); // exit text
      } catch (err) {}
      return Bot.sendText(id, Message().Welcome, Inline().setup);

    case "#Back":
    case "#back":
    case "Back":
    case "back":
      try {
        Bot.deleteText(id, messageId);
      } catch (err) {}
      Back(id, messageId);
      return Status(id).Col1.setValue("");

    case "#next":
    case "#Next":
    case "next":
    case "Next":
      return Next(id, text, messageId);

    default:
      const status = Status(id).Col1.getValue();
      switch (status) {
        case "ID":
        case "ATM":
        case "ITEM":
          return SaveItem(id, text, messageId, status);

        default:
          if (Number(text) && status == "phone" && text.length < 14) {
            return SaveContact(contents, (state = "type"));
          } else if (text.includes("{")) {
            return null;
          }
          return Bot.deleteText(id, messageId);
          break;
      }
  }
}
