function SavePhoto(contents) {
  const photo = contents.message.photo[0].file_id;

  const textcontent = TextContents(contents);
  const id = textcontent.Id;

  const data = Api().catches;
  var catched = data.get(id);
  var obj = JSON.parse(catched);

  //if no catch then delete photo
  if (obj["State"] != "photo")
    return Bot.sendText(id, Message().Welcome, Inline().setup);

  Bot.sendText(id, PhotoSave().PhotoSave, Reply().phoneshare);

  obj["Image"] = photo;
  obj["State"] = "phone";
  obj = JSON.stringify(obj);
  data.put(id, obj, 1200); //catch expire after 10 minute
  return null;
}
