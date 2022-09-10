/**call_back = lost | Found */
function LostOrFoundManager() {
  return (CacheStarter()) ? LostOrFound() : null
}

/**call_back = ID|ATM|ITEM */
function IdAtmItemManager() {
  return (CacheItemSaver()) ? RegItem() : null
}


/**confirm** */
function ConfirmtoChannel() {
  let call_back = _G.Data.callback_data

  let row = call_back.split("-")[1]
  let col = call_back.split("-")[2]

  _G.sheetName = 'Data'
  let _DB = DB().getRange('A1:D10000').getCell(row, col).getValue()
  let _toJson = JSON.parse(_DB)

  _G.item = (_toJson['ID']) ? 'ID' : (_toJson['ATM']) ? 'ATM' : 'ITEM'

  let _Msg_ = `<b> ${_G.item} ${_toJson['status']}</b>\n\n` +
    `➖ <b>${_G.item} :</b> <u>${_toJson[_G.item]}</u>\n\n` +
    `➖ <b>Status : </b> <code>${_toJson['status']}</code>\n` +
    `➖ <b>Contact :</b> <code>${_toJson['phone']}</code>\n` +
    `➖ <b>Date :</b> <code>${_toJson['date']}</code>\n\n`;

  if (_G.contents.callback_query.message.photo) {
    let photo = _G.contents.callback_query.message.photo[0].file_id;

    Bot.sendPhoto('@A_lost_found', photo, "HTML", _Msg_, Inline().bot);//channel
    Bot.sendPhoto('@lost_found_ab', photo, "HTML", _Msg_, Inline().group);//group

  }
  else {
    Bot.sendMessage('@A_lost_found', _Msg_, Inline().bot);
    Bot.sendMessage('@lost_found_ab', _Msg_, Inline().group);

  }

  if (_G.Data.id != _G.me) {
    return Bot.deleteText(_G.Data.id, _G.Data.msg_id);
  }
  return

}
