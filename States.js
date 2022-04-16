function Restart(id, msg_id) {
  const data = Api().catches;
  var catched = data.get(id);
  var message = Message();

  if (catched == null) return Bot.sendText(id, message.Welcome, Inline().setup);
  var obj = JSON.parse(catched);

  return Bot.sendText(id, message.FoundLost, Inline().item);
}

function EscapePhoto(id, msg_id) {
  const data = Api().catches;
  var catched = data.get(id);
  var obj = JSON.parse(catched);

  //if no catch then delete photo
  if (obj["State"] != "photo")
    return Bot.sendText(id, Message().Welcome, Inline().setup);

  Bot.sendText(id, NoPhoto().PhotoSave, Reply().phoneshare);
  obj["State"] = "phone";
  obj = JSON.stringify(obj);
  data.put(id, obj, 1200); //catch expire after 10 minute
  return null;
}

function CatchStatus(id, msg_id, dota) {
  const data = Api().catches.get(id);

  if (data != null) {
    var obj = JSON.parse(data);
  } // if catch available
  else {
    var obj = new Object();
  }

  obj["Status"] = dota;
  obj = JSON.stringify(obj);
  Api().catches.put(id, obj, 1200); //catch expire after 10 minute
  return null;
}
