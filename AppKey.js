function Table() {
  const ssId = "#";
  return {
    Datasheet: SpreadsheetApp.openById(ssId).getSheetByName("Data"),
    DataTable: SpreadsheetApp.openById(ssId)
      .getSheetByName("Data")
      .getRange("A1:ZZZ200000000"),
    UserTable: SpreadsheetApp.openById(ssId)
      .getSheetByName("User")
      .getRange("A1:ZZZ200000000"),
    ManagerTable: SpreadsheetApp.openById(ssId)
      .getSheetByName("Manager")
      .getRange("A1:ZZZ200000000"),
  };
}

function Admins() {
  return {
    Abdi: "1173180004",
    Ela: "1915998008",
    Nebiyu: "393942797",
    Channel: "@A_lost_found",
    DataBase: "1263669270",
  };
}

// taking any text data from contents
function TextContents(contents) {
  return {
    Name: contents.message.from.first_name,
    Text: contents.message.text,
    Id: contents.message.from.id,
    UserName: contents.message.from.username,
    MsgId: contents.message.message_id,
    // Status: TextStatus(contents)
  };
}

/* fetching data from callack query */
function CallbackContent(contents) {
  return {
    Id: contents.callback_query.from.id,
    Dota: contents.callback_query.data,
    Cbq: contents.callback_query.id,
    MsgId: contents.callback_query.message.message_id,
    UserName: contents.callback_query.from.username,
    Text: contents.callback_query.message.text,
  };
}

function InlineContents(contents) {
  return {
    Id: contents.inline_query.from.id,
    FirstName: contents.inline_query.from.first_name,
    QueryId: contents.inline_query.id,
    Query: contents.inline_query.query,
    Offset: contents.inline_query.offset,
  };
}
