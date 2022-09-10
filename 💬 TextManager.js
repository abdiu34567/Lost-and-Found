function TextManager() {
  _G.Data = Bot.TextContents(_G.contents)
  let _text_ = _G.Data.text

  if (_text_ == '/start') return Starter()
  if (_text_.includes('/click_')) return SendPhoto() 

    let _chatId_ = _G.Data.id
  let cache = CacheService.getScriptCache().get(_chatId_)

  //if cache data not find 
  if (!cache) return Starter()
  _G.cache = JSON.parse(cache)

  if (_text_ == '💫 RESTART') return Restarter()
  if (_text_ == '➡️ SKIP') return Skip()

  //if cache data exist
  let state = _G.cache['state']
  switch (state) {
    case "ID": return IdSaver()
    case "ATM": return AtmSaver()
    case "ITEM": return ItemSaver()
    case "phone": return PhoneSaver()
    case "photo": return ValidatePhoto()
  }
}


