function Reply() {
  return {
    phoneshare: {
      //Reply keyboard
      keyboard: [
        [
          { text: "☎️ Share Contact ", request_contact: true },
          { text: "💫 RESTART" },
        ],
      ],
      one_time_keyboard: true,
      resize_keyboard: true,
    },
    exit: {
      //Reply keyboard
      keyboard: [[{ text: "❌ Exit" }]],
      one_time_keyboard: true,
      resize_keyboard: true,
    },
    next: {
      //Reply keyboard
      keyboard: [[{ text: "➡️ NEXT" }, { text: "💫 RESTART" }]],
      one_time_keyboard: true,
      resize_keyboard: true,
    },
    restart: {
      //Reply keyboard
      keyboard: [[{ text: "💫 RESTART" }]],
      one_time_keyboard: true,
      resize_keyboard: true,
    },
    editStates: {
      keyboard: [
        [{ text: "💳 ID" }, { text: "💳 ATM" }, { text: "🗑 OTHER" }],
        [{ text: "🖼 IMAGE" }, { text: "☎️ PHONE" }],
        [{ text: "📡 STATUS" }, { text: "❌ EXIT" }],
      ],
      one_time_keyboard: true,
      resize_keyboard: true,
    },
  };
}
