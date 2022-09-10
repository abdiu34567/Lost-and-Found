//on photo sent
function SavePhoto() {
  return (PhotoCacheSaver()) ? Step3() : null
}

function Step3() {
  let _ChatId_ = _G.Data.id

  let msg = Qesn().PHONE
  let kbd = Reply().phoneshare
  return Bot.sendMessage(_ChatId_, msg, kbd)
}