//Global Variable
const _G = {
  me: '1173180004',
  group: '-1001743854981',
  channel: '-1001517341672',
  ssId: '1h7QiwD7RO4pGbV5FA0kwi_w6v0x5tMKj7ha4Y7wD2sg',
  sheetName: undefined,
  contents: undefined,
  Data: undefined,
  item: undefined,
  cache: undefined
}

function DB() {
  return SpreadsheetApp.openById(_G.ssId).getSheetByName(_G.sheetName)
}


