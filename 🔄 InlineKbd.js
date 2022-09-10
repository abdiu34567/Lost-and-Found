function Inline() {
  return {
    welcome: {
      "inline_keyboard": [
        [{
          "text": "📁 Register",
          "callback_data": "register"
        }, {
          "text": "🔎 Search",
          "callback_data": "search"
        }], [{
          "text": "🏞 Profile",
          "callback_data": "profile"
        }, {
          "text": "📝 About",
          "callback_data": "about"
        }]
      ]
    },
    register: {
      "inline_keyboard": [
        [{
          "text": "❔ If You Find",
          "callback_data": "found"
        }, {
          "text": "❔ If You Lost",
          "callback_data": "lost"
        }],
        [{
          "text": "🔙 Back",
          "callback_data": "home"
        }]
      ]
    },
    item: {
      "inline_keyboard":
        [
          [{
            "text": "🖋 ID",
            "callback_data": "ID"
          },
          {
            "text": "💳 ATM",
            "callback_data": "ATM"
          }],
          [{
            "text": "🛒 OTHER",
            "callback_data": "ITEM"
          }],
          [{
            "text": "🔙 Back",
            "callback_data": "reg"
          }],

        ]
    },
    home: {
      "inline_keyboard": [
        [{
          "text": "🔙 Back",
          "callback_data": "home"
        }]
      ]
    },
    profile: {
      "inline_keyboard": [
        [{
          "text": "❌ Delete",
          "callback_data": "delete"
        }, {
          "text": "🔙 Back",
          "callback_data": "home"
        }]
      ]
    },
    search: {
      "inline_keyboard": [
        [{
          "text": "🔎 Search Across All Registered",
          "switch_inline_query_current_chat": ""
        }],
        [{
          "text": "🔙 Back",
          "callback_data": "home"
        }]
      ]
    },
    confirm: {
      "inline_keyboard": [
        [{
          "text": "✅ Confirm To Channel",
          "callback_data": "confirm"
        }]
      ]
    },
    bot: {
      "inline_keyboard": [
        [{
          "text": "🤖 BOT",
          "url": "https://t.me/lococompanybot"
        }]
      ]
    },
    group: {
      "inline_keyboard": [
        [{
          "text": "🤖 BOT",
          "url": "https://t.me/lococompanybot"
        }, {
          "text": "🔎 Search ",
          "switch_inline_query_current_chat": ""
        }]
      ]
    }
  }
}









