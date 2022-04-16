function SaveContact(contents, state) {
    const textContents = TextContents(contents);
    const id = textContents.Id;
    const text = textContents.Text;
    const status = Status(id);
    var type = status.Col3.getValue();
    var messageId = textContents.MsgId;
  
    if (state == 'share')
      var contact = contents.message.contact.phone_number;
    else
      var contact = text;
  
    if (status.Col1.getValue() != 'phone')
      return Bot.deleteText(id, messageId);
  
  
    var dataobj = PasreIdObject(id, type);
    var obj = dataobj.Toparse;
    var date = new Date();
    var msg_id = status.Col2.getValue();
    try {
      Bot.deleteText(id, msg_id);
      Bot.deleteText(id, messageId);
    } catch (err) { }
  
    if (type == 'ID')
      var item = obj['ID'];
    else if (type == 'ATM')
      var item = obj['ATM'];
    else
      var item = obj['ITEM'];
  
    var confirm = {
      "inline_keyboard": [
        [{
          "text": "✅ Confirm To Channel",
          "callback_data": "confirm-" + id + '-' + dataobj.Col
        }]
      ]
    }
    var message = Message_ContactSave(type, obj, dataobj, item, date, contact).ContactSave;
    var arriy = [id, "1173180004", "1915998008", "393942797", "585200689"]// send for confirmation => 
    if (status.Col4.getValue() == 'ok') {
      for (i = 0; i < arriy.length; i++) {
        if (i == 0) var keyboard = Reply().exit;//confirmation don't sent for user
        else var keyboard = confirm;
        Bot.sendPhoto(arriy[i], obj['Image'], message, keyboard);
      }
    }
    else {
      for (i = 0; i < arriy.length; i++) {
        if (i == 0) var keyboard = Reply().exit;
        else var keyboard = confirm;
        Bot.sendText(arriy[i], message, keyboard);
      }
    }
  
  
    obj['Contact'] = contact;
    obj = JSON.stringify(obj, undefined, 1);
    dataobj.DataTable.setValue(obj);
  
    status.Col2.setValue(messageId + 1);
    return status.Col1.setValue('');
  
  }