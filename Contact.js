function Contact(contents) {
  const textcontent = TextContents(contents);
  const id = textcontent.Id;
  const msg_id = textcontent.MsgId;
  var contact = contents.message.contact.phone_number;

  return SaveContact(id, msg_id, contact);
}

function SaveContact(id, msg_id, contact) {
  const data = Api().catches;
  var catched = data.get(id);
  var catchobj = JSON.parse(catched);

  if (catchobj["State"] != "phone") {
    //check if state or catch is Ok, then exit
    return Bot.sendText(id, Message().Welcome, Inline().setup);
  }

  var item =
    catchobj["Item"] == "ID"
      ? Questions().ID
      : catchobj["Item"] == "ATM"
      ? Questions().ATM
      : Questions().ITEM;
  var message = ContactSave(catchobj, contact, item).ContactSave;
  var confirm = {
    inline_keyboard: [
      [
        {
          text: "✅ Confirm To Channel",
          callback_data: "confirm-" + id + "-" + item.Col,
        },
      ],
    ],
  };

  var arriy = [id, id]; // send for confirmation =>
  if (catchobj["Image"]) {
    for (const value in arriy) {
      var keyboard = value == 0 ? Reply().exit : confirm;
      Bot.sendPhoto(id, catchobj["Image"], message, keyboard);
    }
  } else {
    for (const value in arriy) {
      var keyboard = value == 0 ? Reply().exit : confirm;
      Bot.sendText(id, message, keyboard);
    }
  }

  var col = item.Col;
  catchobj["Contact"] = contact;
  var arriy = ["Item", "State"]; //delete these value form the object
  for (const item of arriy) {
    delete catchobj[item];
  }

  var dit = JSON.stringify(catchobj, undefined, 1);
  Api().catches.remove(id); //destroy catch
  var table = Table();
  var find = table.UserTable.createTextFinder(id).findNext();
  if (find) {
    var row = find.getRow();
  } else {
    var last_row = table.UserSheet.getLastRow();
    var row = last_row + 1;
    table.UserTable.getCell(row, 1).setValue(id);
  }
  table.DataTable.getCell(row, col).setValue(dit);
  return null;
}
