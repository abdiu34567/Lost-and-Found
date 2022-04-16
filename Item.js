function Step1(dota, id, msg_id, message) {
  const data = Api().catches;
  var catched = data.get(id);

  if (catched == null)
    return Bot.sendText(id, Message().Welcome, Inline().setup);

  var obj = JSON.parse(catched);
  var qesn =
    dota == "ID"
      ? Questions().ID
      : dota == "ATM"
      ? Questions().ATM
      : Questions().ITEM;

  Bot.sendText(id, Message_Ask(dota, qesn).Ask, Reply().restart);

  obj["Item"] = dota;
  obj["State"] = dota;
  obj = JSON.stringify(obj);
  data.put(id, obj, 1200); //catch expire after 10 minute
  return null;
}

function Step2(id, text, catched, msg_id) {
  var data = catched.get(id);

  var obj = JSON.parse(data);
  var qesn =
    obj["Item"] == "ID"
      ? Questions().ID
      : obj["Item"] == "ATM"
      ? Questions().ATM
      : Questions().ITEM;

  Bot.sendText(id, Sendimage(qesn).SaveItem, Reply().next);

  var date = new Date();
  obj["Time"] = date.toLocaleDateString("en-US");
  obj[obj["Item"]] = text;
  obj["State"] = "photo";
  obj = JSON.stringify(obj);
  catched.put(id, obj, 1200); //catch expire after 10 minute
  return null;
}
