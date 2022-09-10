function Callbacks() {
  _G.Data = Bot.CallbackContent(_G.contents);
  let _callback_data_ = _G.Data.callback_data

  switch (_callback_data_) {
    /** Frontend Part */
    case "register": case "reg": return Register();
    case "found": case "lost": return LostOrFoundManager()
    case "ID": case "ATM": case "ITEM": return IdAtmItemManager()
    case "home": return ReturnHome()
    case "profile": return Profile()
    case "about": return About()
    case "search": return Search()
 
    /** Backend Part */
    case "delete":return DeleteData();
    default: return ConfirmtoChannel();


  }
}

