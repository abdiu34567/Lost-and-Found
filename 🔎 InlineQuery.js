function MyInline() {
  let data = Bot.InlineContents(_G.contents)
  let query = data.query
  let queryId = data.queryId
  let results = [];

  if (query) {
    _G.sheetName = 'Data'
    let check = DB().createTextFinder(query).findAll();
    let result = check.map(r => ({ value: r.getValue(), col: r.getColumn() }));

    for (i = 0; i < result.length; i++) {

      let value = result[i].value;
      value = JSON.parse(value)

      if (value['ATM']) item = '🏧 ATM', datas = value['ATM']
      else if (value['ID']) item = '💳 ID', datas = value['ID']
      else item = '🗑 ITEM', datas = value['ITEM']


      results.push(
        {
          type: "article",
          id: i,
          title: `${item} | ${value['status'].toUpperCase()}`,
          input_message_content: {
            message_text: `   🔄 <b>${value['status'].toUpperCase()}</b>\n\n` +
              `<b>${item}</b> : <code>${datas}</code>\n` +
              `☎️ <b>Contact</b> : <code>${value['phone']}</code>\n` +
              `🧭 <b>Date</b> : <code>${value['date']}</code>\n\n` +
              `👍 <b>You Welcome</b>`,
            parse_mode: "HTML"
          },
          description: `\n-----------------------------------\n` +
            `   ${item}: ${datas}\n` +
            `   ☎️ Contact: ${value['phone']}`,

        })
    }
  }
  try { return Bot.answerInlineQuery(queryId, results, `Search For Anything ...`) } catch (err) { }

}
