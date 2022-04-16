function MyInline(contents) {
  const inline = InlineContents(contents);
  const id = inline.Id;
  const query = inline.Query;
  const api = Api(id);
  var title = "Result Found";

  var data = [];
  if (query) {
    var find = api.DataTable.createTextFinder(query).findAll();
    var result = find.map((r) => ({
      value: r.getValue(),
      row: r.getRow(),
      col: r.getColumn(),
    }));

    for (i = 0; i < result.length; i++) {
      if (result[i].col == 2 || result[i].col == 3 || result[i].col == 4) {
        if (result[i].col == 2) {
          var item = "💳 ATM";
          var items = "ATM";
        } else if (result[i].col == 3) {
          var item = "🗑 ITEM";
          var items = "ITEM";
        } else {
          var item = "🎫 ID";
          var items = "ID";
        }

        var toprse = JSON.parse(result[i].value);
        // if (toprse['Image']) {
        //   var fileId = toprse['Image'];
        //   var link = UrlFetchApp.fetch(`https://api.telegram.org/bot1203348020:AAEZ2JIynxiq88r_TXmhS_mpcjhVgvU-RRE/getFile?file_id=${fileId}`);
        //   var photoUrl = JSON.parse(link).result.file_path;
        //   var photo = `https://api.telegram.org/file/bot1203348020:AAEZ2JIynxiq88r_TXmhS_mpcjhVgvU-RRE/${photoUrl}`;

        //   Bot.sendText(id, photo);
        //   data.push(
        //     {
        //       type: "photo",
        //       id: i,
        //       photo_url: photo,
        //       thumb_url: photo,
        //       title: `✅ ${title}, Click To Display`,
        //       description: `${JSON.stringify(toprse, undefined, 1)}`,

        //     })

        // }
        // else {
        data.push({
          type: "article",
          id: i,
          title: `✅ ${title}, Click To Display`,
          input_message_content: {
            message_text: Message_Inline(title, toprse, item, items).Inline,
            parse_mode: "HTML",
          },
          description: `\n-----------------------------------\n   ${item}: ${toprse[items]}\n   🧭 Date: ${toprse["Time"]}\n   ☎️ Contact: ${toprse["Contact"]}`,
        });
        // }
      }
    }
  }

  try {
    return Bot.answerInlineQuery(inline.QueryId, data, `Type Something...`);
  } catch (err) {
    Bot.sendText(id, err);
  }
}
