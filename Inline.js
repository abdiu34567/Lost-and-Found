function MyInline(contents) {
  const inline = InlineContents(contents);
  const id = inline.Id;
  const query = inline.Query;

  var table = Table();
  var title = "Result Found";
  var data = [];
  if (query) {
    var find = table.DataTable.createTextFinder(query).findAll();
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
      }
    }
  }

  return Bot.answerInlineQuery(inline.QueryId, data, `Type Something...`);
}
