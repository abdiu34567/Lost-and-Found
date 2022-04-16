function setWebHook() {
  return Bot.setWebHook();
}
function deleteWebHook() {
  Bot.deleteWebhook();
}

function doPost(e) {
  const contents = JSON.parse(e.postData.contents);
  try {
    if (contents.callback_query) return Callbacks(contents);
    else if (contents.inline_query) return MyInline(contents);
    else if (contents.message.photo) return SavePhoto(contents);
    else if (contents.message.contact)
      return SaveContact(contents, (state = "share"));
    else if (contents.message.via_bot)
      return Status(TextContents(contents).Id).Col2.setValue(
        TextContents(contents).MsgId
      );
    else return TextManager(contents);
  } catch (err) {
    Bot.sendText(Admins().Abdi, err);
  }
}
