
function Starter() {
  let _chatId_ = _G.Data.id

  //removing from cache
  CacheService.getScriptCache().remove(_chatId_)

  let _msg_ = Msg().welcome
  let kbd = Inline().welcome
  return Bot.sendMessage(_chatId_, _msg_, kbd)
}

function Step2() {
  let _ChatId_ = _G.Data.id
  let cache = _G.cache

  _G.item = (cache['ID']) ? '💳 ID' : (cache['ATM']) ? '🏧 ATM' : '🗑 ITEM'

  let msg = Qesn().PHOTO
  let kbd = Reply().next
  return Bot.sendMessage(_ChatId_, msg, kbd)
}

function Restart() {
  let item = _G.cache['obj']
  let _Msg_ = Qesn()[item]
  return Bot.sendMessage(_G.Data.id, _Msg_)
}

function SendPhoto() {
  let row = _G.Data.text.split("_")[1]
  let col = _G.Data.text.split("_")[2]

  _G.sheetName = 'Data'
  let data = DB().getRange("A1:D10000").getCell(row, col).getValue()
  let _toJson = JSON.parse(data)
  let photoID = _toJson['photo']

  return Bot.sendPhoto(_G.Data.id, photoID)
}




