function Contact() {
  return (PhoneCacheSaver()) ? FinishReg() : null
}


function FinishReg() {

  let cache = _G.cache
  let item = cache['obj']//ID|ATM|ITEM
  // delete cache.obj
  delete cache.state

  let col = (item == 'ID') ? 1 : (item == "ATM") ? 2 : 3

  let _chatId_ = _G.Data.id
  _G.sheetName = 'Users'
  let user = DB().createTextFinder(_chatId_).findNext()

  if (!user) //create user
    DB().appendRow([_chatId_])


  let row = DB().createTextFinder(_chatId_).findNext().getRow()
  _G.Data.row = row//making row value accessible 
  _G.Data.col = col
  let _toString = JSON.stringify(cache, undefined, 2)

  _G.sheetName = 'Data'
  DB().getRange("A1:D10000").getCell(row, col).setValue(_toString)
  return WelDoneMsg()

}

function WelDoneMsg() {
  let _chatId_ = _G.Data.id
  let cache = _G.cache
  let item = cache['obj']

  _G.item = (cache['ID']) ? 'ID'
    : (cache['ATM']) ? 'ATM'
      : 'ITEM'

  let _Msg_ = `<b>✅ WELDONE ! <u>${_G.item} Registered</u></b> \n\n` +
    `➖ <b>Status : </b> <code>${cache['status']}</code>\n` +
    `➖ <b>${_G.item} : </b> <code>${cache[item]}</code>\n` +
    `➖ <b>Contact : </b> <code>${cache['phone']}</code>\n` +
    `➖ <b>Date : </b> <code>${cache['date']}</code>\n\n`;

  _G.Data._Msg_ = _Msg_//making available
  _Msg_ += `🎗 Admins will review and share Your Phost`

  if (cache['photo']) {
    let photo = cache['photo']
    Bot.sendPhoto(_chatId_, photo, "HTML", _Msg_, Reply().exit)
  }
  else Bot.sendMessage(_chatId_, _Msg_, Reply().exit)

  return SendingAdmins()
}

function SendingAdmins() {
  let confirm = {
    "inline_keyboard": [
      [{
        "text": "✅ Confirm To Channel",
        "callback_data": "confirm-" + _G.Data.row + '-' + _G.Data.col
      }]
    ]
  }

  let arriy = ['1173180004', '393942797', '585200689']

  if (_G.cache['photo'])
    for (const index in arriy)
      Bot.sendPhoto(arriy[index], _G.cache['photo'], "HTML", _G.Data._Msg_, confirm);

  else
    for (const index in arriy)
      Bot.sendMessage(arriy[index], _G.Data._Msg_, confirm);

  return CacheService.getScriptCache().remove(_G.Data.id)//reply exit kbd on click /start
}


