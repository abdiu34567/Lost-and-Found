const token = '1203348020:AAEZ2JIynxiq88r_TXmhS_mpVgvU-RRE'
Bot.Telesun(token)

function doPost(e) {
  try {
    _G.contents = JSON.parse(e.postData.contents)
    if (_G.contents.callback_query) return Callbacks()
    if (_G.contents.inline_query) return MyInline()
    else {
      let msg = _G.contents.message
      if (msg.photo) return SavePhoto()
      if (msg.contact) return Contact()
      if (
        msg.chat.username == 'lost_found_ab' ||
        msg.chat.username == 'astu_freshs' ||
        msg.chat.username == 'astuoromokoo'
      ) {
        _G.Data = msg.chat.username
        return SearchEngine()
      }

      return TextManager()
    }
  } catch (err) {
    Bot.sendMessage(_G.me, err)
  }
}
