function IdSaver() {
  return (IdCacheSaver()) ? Step2() : null
}


function AtmSaver() {
  return (AtmCacheSaver()) ? Step2() : null
}

function ItemSaver() {
  return (ItemCacheSaver()) ? Step2() : null

}

function ValidatePhoto() {
  let cache = _G.cache
  let _chatId_ = _G.Data.id

  _G.item = (cache['ID']) ? '💳 ID' : (cache['ATM']) ? '🏧 ATM' : '🗑 ITEM'
  let _Msg_ = Validity().PHOTO
  return Bot.sendMessage(_chatId_, _Msg_)
}

function PhoneSaver() {
  return (PhoneTextCacheSaver()) ? FinishReg() : null
}

function Restarter() {
  return (RestartCache()) ? Restart() : null
}

function Skip() {
  return (SkipCache()) ? Step3() : null
}