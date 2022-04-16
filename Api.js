function Api(id) {
  const data = RowApi(id).Data();
  const table = data.Table;
  const row = data.Row;
  return {
    Row: row,
    DataShet: table.Datasheet,
    DataTable: table.DataTable,
    UserTable: table.UserTable.getCell(2, 1),
    ManagerTable: table.ManagerTable,
  };
}

function RowApi(id) {
  return {
    Data: function () {
      const table = Table();
      var checkId = table.UserTable.getCell(2, 1);
      if (!checkId.getValue()) {
        return {
          Row: 1,
          Table: table,
        };
      }
      var data = JSON.parse(checkId.getValue());
      if (data[id] == null)
        return {
          Row: 1,
          Table: table,
        };
      else
        return {
          Row: data[id],
          Table: table,
        };
    },
  };
}

function PasreIdObject(id, status) {
  const data = Api(id);
  const row = data.Row;

  var dataTable = data.DataTable;

  if (status == "ID") {
    var statuss = "💳 ID";
    var col = 4;
  } else if (status == "ATM") {
    var statuss = "🏧 ATM";
    var col = 2;
  } else {
    var statuss = "🗑 ITEM";
    var col = 3;
  }
  return {
    Row: row,
    Col: col,
    Type: status,
    DataTable: dataTable.getCell(row, col),
    Toparse: JSON.parse(dataTable.getCell(row, col).getValue()),
    Status: statuss,
  };
}

function Status(id) {
  const api = Api(id);
  var row = api.Row;
  var managerTable = api.ManagerTable;
  return {
    Col1: managerTable.getCell(row, 1),
    Col2: managerTable.getCell(row, 2),
    Col4: managerTable.getCell(row, 4),
    Col3: managerTable.getCell(row, 3),
  };
}
