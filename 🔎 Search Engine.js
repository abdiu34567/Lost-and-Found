function SearchEngine() {
  let msg = Bot.TextContents(_G.contents).text
  let sentistiveWord = 'lost found id atm item'
  let ignored = "neger lost found id atm item photo obj bezi astu new and then image status date contact please you got for call inbox get yet block with phone what waiting now #call that it's contains dorm door one locker has small type applied central yellow naaf name"
  let _Msg_ = `<b>Lost & Found [Database]</b>\n\n`
  let toLower = msg.toLowerCase()
  let toArriy = toLower.split(" ")
  let matchSensitive = false
  let resultmatched = false
  for (let element of toArriy) {

    if (sentistiveWord.match(element)) matchSensitive = true
    if (ignored.includes(element)) continue;
    if (element.length <= 2) continue;

    _G.sheetName = 'Data'
    let finder = DB().createTextFinder(element).findAll()
    let result = finder.map(r => ({ value: r.getValue(), row: r.getRow(), col: r.getColumn() }));

    if (result.length > 0) {
      for (let dit of result) {
        // console.log(dit)
        let _toJson = JSON.parse(dit.value)

        if (_toJson['ID']) {
          let id = _toJson['ID']
          let status = _toJson['status']
          _Msg_ = _Msg_ + `➖ \(${status}\) ID : ${id}\n`
        }
        else if (_toJson['ATM']) {
          let atm = _toJson['ATM']
          let status = _toJson['status']
          _Msg_ = _Msg_ + `➖ \(${status}\) ATM : ${atm}\n`
        }
        else if (_toJson['ITEM']) {
          let item = _toJson['ITEM']
          let status = _toJson['status']
          _Msg_ = _Msg_ + `➖ \(${status}\) ID : ${item}\n`
        }

      }
      resultmatched = true
    }


  }

  if (resultmatched)
    return Bot.sendMessage('@' + _G.Data, _Msg_ + `\n For more detail click #Search or #Bot button`, {

      "inline_keyboard": [
        [{
          "text": "🤖 BOT",
          "url": "https://t.me/lococompanybot?start="
        }, {
          "text": "🔎 Search ",
          "switch_inline_query_current_chat": ""
        }]
      ]
    })

  if (matchSensitive) //if sensetive matched
    return Bot.sendMessage('@' + _G.Data, `🤖 <i>Please Register Here</i>`, {

      "inline_keyboard": [
        [{
          "text": "🤖 BOT",
          "url": "https://t.me/lococompanybot?start=reg"
        }]
      ]
    })

}
