
/** OnClick Reg kbd */
function Register() {

  let _chatId_ = _G.Data.id
  let _msgId_ = _G.Data.msg_id
  let _msg_ = Msg().reg
  let _kbd_ = Inline().register
  return Bot.editMessageText(
    _chatId_, _msgId_, undefined,
    _msg_, 'HTML', _kbd_
  );
}

/** OnClick <<Lost | Found>> Kbd */
function LostOrFound() {

  let _chatId_ = _G.Data.id
  let _msgId_ = _G.Data.msg_id
  let _msg_ = Msg().l_f
  let _kbd_ = Inline().item
  return Bot.editMessageText(
    _chatId_, _msgId_, undefined,
    _msg_, 'HTML', _kbd_);
}

/** OnClick 1 of Items */
function RegItem() {
  let data = _G.Data.callback_data;

  let qesn = (data == 'ID') ? Qesn().ID
    : (data == 'ATM') ? Qesn().ATM
      : Qesn().ITEM;

  let _chatId_ = _G.Data.id
  return Bot.sendMessage(_chatId_, qesn);
}

/**Onclick <<home>> */
function ReturnHome() {
  let _chatId_ = _G.Data.id
  let _msgId_ = _G.Data.msg_id

  return Bot.editMessageText(_chatId_, _msgId_, undefined,
    Msg().welcome, 'HTML', Inline().welcome);
}
////////////////////////////////////////////////////////////////////////////////////////
/**Onclick <<profile>> */
function Profile() {
  let _chatId_ = _G.Data.id
  let _msgId_ = _G.Data.msg_id

  _G.sheetName = 'Users'
  let user = DB().createTextFinder(_chatId_).findNext()

  let _Msg_ = '🤹🏻‍♀️ <b>Profile</b>\n\n' +
    `<b>User ID : </b> <code>${_chatId_}</code>`
  _G.Data.msg = _Msg_

  if (!user)
    return Bot.editMessageText(_chatId_, _msgId_, undefined,
      _Msg_, 'HTML', Inline().profile);


  let row = user.getRow()
  _G.Data.row = row
  //lode from Id col
  IdLoader()
  AtmLoader()
  ItemLoader()

  _Msg_ = _G.Data.msg

  return Bot.editMessageText(_G.Data.id, _G.Data.msg_id, undefined,
    _Msg_, 'HTML', Inline().profile);

}

function IdLoader() {
  let row = _G.Data.row
  _G.sheetName = 'Data'
  let _idData = DB().getRange("A1:D10000").getCell(row, 1).getValue()

  let _IdObj = (_idData) ? JSON.parse(_idData) : null

  if (!_IdObj) return

  let _Id_ = _IdObj['ID']
  let status = _IdObj['status']
  let phone = _IdObj['phone']
  let date = _IdObj['date']
  let photo = (_IdObj['photo']) ? `/click_${row}_1` : '⛔️'

  let _Msg_ = _G.Data.msg
  _Msg_ = _Msg_ + `\n\n➖ <b>ID : </b> <code>${_Id_}</code>\n` +
    `➖ <b>Status : </b> <code>${status}</code>\n` +
    `➖ <b>Contact : </b> <code>${phone}</code>\n` +
    `➖ <b>Date : </b> <code>${date}</code>\n` +
    `➖ <b>Photo : </b> ${photo}\n`;

  return _G.Data.msg = _Msg_

}

function AtmLoader() {
  let row = _G.Data.row
  _G.sheetName = 'Data'
  let _idData = DB().getRange("A1:D10000").getCell(row, 2).getValue()

  let _IdObj = (_idData) ? JSON.parse(_idData) : null

  if (!_IdObj) return

  let _ATM_ = _IdObj['ATM']
  let status = _IdObj['status']
  let phone = _IdObj['phone']
  let date = _IdObj['date']
  let photo = (_IdObj['photo']) ? `/click_${row}_2` : '⛔️'

  let _Msg_ = _G.Data.msg
  _Msg_ = _Msg_ + `\n\n➖ <b>ATM : </b> <code>${_ATM_}</code>\n` +
    `➖ <b>Status : </b> <code>${status}</code>\n` +
    `➖ <b>Contact : </b> <code>${phone}</code>\n` +
    `➖ <b>Date : </b> <code>${date}</code>\n` +
    `➖ <b>Photo : </b> ${photo}`;

  return _G.Data.msg = _Msg_

}

function ItemLoader() {
  let row = _G.Data.row
  _G.sheetName = 'Data'
  let _idData = DB().getRange("A1:D10000").getCell(row, 3).getValue()

  let _IdObj = (_idData) ? JSON.parse(_idData) : null

  if (!_IdObj) return

  let _ITEM_ = _IdObj['ITEM']
  let status = _IdObj['status']
  let phone = _IdObj['phone']
  let date = _IdObj['date']
  let photo = (_IdObj['photo']) ? `/click_${row}_3` : '⛔️'


  let _Msg_ = _G.Data.msg
  _Msg_ = _Msg_ + `\n\n➖ <b>ITEM : </b> <code>${_ITEM_}</code>\n` +
    `➖ <b>Status : </b> <code>${status}</code>\n` +
    `➖ <b>Contact : </b> <code>${phone}</code>\n` +
    `➖ <b>Date : </b> <code>${date}</code>\n` +
    `➖ <b>Photo : </b> ${photo}\n`

  return _G.Data.msg = _Msg_

}

// Deleting Data From Profile
function DeleteData() {
  let _chatId_ = _G.Data.id
  _G.sheetName = 'Users'
  let row = DB().createTextFinder(_chatId_).findNext().getRow();

  _G.sheetName = 'Data'
  DB().getRange("A1:D10000").getCell(row, 1).clear();
  DB().getRange("A1:D10000").getCell(row, 2).clear();
  DB().getRange("A1:D10000").getCell(row, 3).clear();

  //Editing Profile
  let _msgId_ = _G.Data.msg_id

  let _Msg_ = '🤹🏻‍♀️ <b>Profile</b>\n\n' +
    `<b>User ID : </b> <code>${_chatId_}</code>`

  return Bot.editMessageText(_chatId_, _msgId_, undefined,
    _Msg_, 'HTML', Inline().profile);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/********************************************************************************************************** */
function A_t() {
  return {
    purpose: 'Lost and Found is developed for the purpose of reducing lost Items in ASTU',
    resource: 'Developed by using <u><b>Telesun.js</b></u> library',
    telesun: 'https://github.com/abdiu34567/telesun.js',
    dev_group: 'https://t.me/App_Script_Js',
    admins: '<code>0941988502</code> / <code>0974498538</code> / <code>0911803234</code>'
  }
}

function About() {
  let _chatId_ = _G.Data.id
  let _msgId_ = _G.Data.msg_id

  let about = `<b>☀️ Purpose</b>\n\n` +
    `<code>${A_t().purpose}</code>\n\n` +
    `<b>🌴 Development</b>\n\n` +
    `${A_t().resource}\n` +
    `${A_t().telesun}\n\n` +
    `<b>🌴👥 Development Group</b>\n\n` +
    `${A_t().dev_group}\n\n` +
    `<b>👨‍✈️ Admins</b>\n\n` +
    `${A_t().admins}`;

  return Bot.editMessageText(_chatId_, _msgId_, undefined,
    about, 'HTML', Inline().home);

}

/****************************************************************************************************** */


function Search() {
  let _chatId_ = _G.Data.id
  let _msgId_ = _G.Data.msg_id

  let search = `<b>🔎 Searching</b>\n\n` +
    `👉 click on <b>🔎 Search Across All Registerd</b> button to start searching\n\n` +
    `<b>Example : </b>\n` +
    `after you click the button\n\n` +
    `@lococompanybot type something-----`

  return Bot.editMessageText(_chatId_, _msgId_, undefined,
    search, 'HTML', Inline().search);
}




