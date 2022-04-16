function Inline() {
  return {
    setup: {
      inline_keyboard: [
        [
          {
            text: "📁 Register",
            callback_data: "register",
          },
          {
            text: "🔎 Search",
            callback_data: "search",
          },
        ],
        [
          {
            text: "🏞 Profile",
            callback_data: "profile",
          },
          {
            text: "🖼 Developer",
            callback_data: "dev",
          },
          {
            text: "📝 About",
            callback_data: "about",
          },
        ],
      ],
    },
    register: {
      inline_keyboard: [
        [
          {
            text: "❔ If You Find",
            callback_data: "found",
          },
          {
            text: "❔ If You Lost",
            callback_data: "lost",
          },
        ],
        [
          {
            text: "🔙 Back",
            callback_data: "exit",
          },
        ],
      ],
    },
    item: {
      inline_keyboard: [
        [
          {
            text: "🖋 ID",
            callback_data: "ID",
          },
          {
            text: "💳 ATM",
            callback_data: "ATM",
          },
        ],
        [
          {
            text: "🛒 OTHER",
            callback_data: "ITEM",
          },
        ],
        [
          {
            text: "🔙 Back",
            callback_data: "backtoregister",
          },
        ],
      ],
    },
    home: {
      inline_keyboard: [
        [
          {
            text: "🔙 Back",
            callback_data: "exit",
          },
        ],
      ],
    },
    profile: {
      inline_keyboard: [
        [
          {
            text: "❌ Delete",
            callback_data: "delete",
          },
          {
            text: "🔙 Back",
            callback_data: "exit",
          },
        ],
      ],
    },
    search: {
      inline_keyboard: [
        [
          {
            text: "🔎 Search Across All Registered",
            switch_inline_query_current_chat: "",
          },
        ],
        [
          {
            text: "🔙 Back",
            callback_data: "exit",
          },
        ],
      ],
    },
    confirm: {
      inline_keyboard: [
        [
          {
            text: "✅ Confirm To Channel",
            callback_data: "confirm",
          },
        ],
      ],
    },
    bot: {
      inline_keyboard: [
        [
          {
            text: "🤖 BOT",
            url: "https://t.me/lococompanybot",
          },
          {
            text: "🔎 Search Here",
            switch_inline_query_current_chat: "",
          },
        ],
      ],
    },
  };
}
