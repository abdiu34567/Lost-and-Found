function Reply() {
  return {
    phoneshare: {
      //Reply keyboard
      keyboard: [
        [{ text: "📡 Share Contact From Telegram", request_contact: true }],
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
