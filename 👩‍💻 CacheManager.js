
function CacheStarter() {

  let _obj_ = { status: _G.Data.callback_data }
  let _toJson_ = JSON.stringify(_obj_)

  CacheService.getScriptCache()
    .put(_G.Data.id, _toJson_)
  return true

}


function CacheItemSaver() {
  let _chatId_ = _G.Data.id

  let cache = CacheService.getScriptCache().get(_chatId_)

  let _toJson = JSON.parse(cache)
  _toJson['state'] = _G.Data.callback_data
  _toJson['obj'] = _G.Data.callback_data

  let _toJson_ = JSON.stringify(_toJson)

  CacheService.getScriptCache()
    .put(_chatId_, _toJson_)
  return true
}

function IdCacheSaver() {
  let _chatId_ = _G.Data.id
  let _Id_ = _G.Data.text

  //validating << must match / and length less than 15
  if (String(_Id_).match('/') && _Id_.length >= 10 && _Id_.length < 15) {

    let cache = _G.cache

    cache['ID'] = _Id_
    cache['state'] = 'photo'
    let _toJson_ = JSON.stringify(cache)

    CacheService.getScriptCache()
      .put(_chatId_, _toJson_)
    return true
  }

  let _Msg_ = Validity().ID
  Bot.sendMessage(_chatId_, _Msg_)
  return false
}

function PhotoCacheSaver() {
  _G.Data = Bot.PhotoContents(_G.contents)
  let _chatId_ = _G.Data.id

  let cache = CacheService.getScriptCache().get(_chatId_)
  let _toJson = JSON.parse(cache)

  if (cache && (_toJson['ID'] || _toJson['ATM'] || _toJson['ITEM'])) {

    let photo = _G.Data.photo
    _toJson['photo'] = photo
    _toJson['state'] = 'phone'
    let _toJson_ = JSON.stringify(_toJson)

    CacheService.getScriptCache()
      .put(_chatId_, _toJson_)
    return true
  }
  //if not send Invalid message

}

function PhoneCacheSaver() {

  _G.Data = Bot.ContactContents(_G.contents)
  let _chatId_ = _G.Data.id

  let cache = CacheService.getScriptCache().get(_chatId_)
  let _toJson = JSON.parse(cache)
  if (cache && _toJson['state'] == 'phone') {

    let contact = _G.Data.contact
    _toJson['phone'] = contact
    _toJson['date'] = new Date().toLocaleDateString("en-US")
    _G.cache = _toJson
    return true
  }

  //if not send invalid message
}
function PhoneTextCacheSaver() {

  let contact = _G.Data.text

  let _toJson = _G.cache
  if (_toJson['state'] == 'phone' && contact.length > 9 && contact.length < 13 && Number(contact)) {

    _toJson['phone'] = contact
    _toJson['date'] = new Date().toLocaleDateString("en-US")
    _G.cache = _toJson
    return true
  }

  let _chatId_ = _G.Data.id
  let _Msg_ = Validity().PHONE
  Bot.sendMessage(_chatId_, _Msg_)

  return false
}


function AtmCacheSaver() {
  let _chatId_ = _G.Data.id
  let _ATM_ = _G.Data.text

  //validating << must match / and length less than 15
  if (_ATM_.split(" ")[1]) {

    let cache = _G.cache

    cache['ATM'] = _ATM_
    cache['state'] = 'photo'
    let _toJson_ = JSON.stringify(cache)

    CacheService.getScriptCache()
      .put(_chatId_, _toJson_)
    return true
  }

  let _Msg_ = Validity().ATM
  Bot.sendMessage(_chatId_, _Msg_)
  return false
}


function ItemCacheSaver() {
  let _chatId_ = _G.Data.id
  let _Item_ = _G.Data.text

  //validating << must match / and length less than 15
  if (!Number(_Item_)) {

    let cache = _G.cache

    cache['ITEM'] = _Item_
    cache['state'] = 'photo'
    let _toJson_ = JSON.stringify(cache)

    CacheService.getScriptCache()
      .put(_chatId_, _toJson_)
    return true
  }

  let _Msg_ = Validity().ITEM
  Bot.sendMessage(_chatId_, _Msg_)
  return false
}


function RestartCache() {
  let _chatId_ = _G.Data.id
  let cache = _G.cache

  let item = cache['obj']
  cache['state'] = item

  let _toJson_ = JSON.stringify(cache)

  CacheService.getScriptCache()
    .put(_chatId_, _toJson_)
  return true
}

function SkipCache() {

  let cache = _G.cache
  cache['state'] = 'phone'
  let _toJson_ = JSON.stringify(cache)

  CacheService.getScriptCache()
    .put(_G.Data.id, _toJson_)
  return true
}



