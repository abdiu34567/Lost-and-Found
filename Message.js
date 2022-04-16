function Message() {
  return {
    Welcome:
      `👤 <b> welcome</b>\n\n` +
      `<code>⭐️ Here is where You find lost Items like</code> Id, ATM, Others\n` +
      `<i> ✅ 100% free</i>  \n\n` +
      `<i>Join Our Channel </i>\n` +
      `<b>  ▶️ @A_lost_found</b>\n` +
      `<i>Join Our Group </i>\n` +
      `<b>  ▶️ https://t.me/lost_found_ab</b>`,
    Regsister:
      `<b>here:</b>\n\n` +
      `<i>»»»» if you lost any thing then click the</i> <u>if you lost</u> button\n\n` +
      `<i>»»»» if you find something then click the</i> <u>if you Find</u> button\n`,
    FoundLost: "<i>»»» Chose One you want to Rgeister</i>",
    Dev:
      `👤 <b> Developer</b >\n\n` +
      ` <pre> ${JSON.stringify(About().dev, undefined, 1)}</pre>`,
    Search:
      `<b>🔎 Searching</b>\n\n` +
      `<i>Here you can Search Across All Registered. it is much dynamic and can filter more than <u>2 hundred million data's less than a second</u>.\n\n` +
      `👉 click on <b>🔎 Search Across All Registerd</b> button to start searching\n\n` +
      `<b>Example : </b>\nafter you click the button \n\n @lococompanybot <u>UGR</u>-----</i>`,
    About:
      `🤖 <b> BOT </b>\n\n` +
      ` <pre> ${JSON.stringify(About().bot, undefined, 1)}</pre> `,
  };
}

function Questions() {
  return {
    ID: {
      Name: "💳 ID",
      Text: "Please Type #ID Number You Liked To Register",
      Col: 4,
    },
    ATM: {
      Name: "🏧 ATM",
      Text: "Please Type #ATM Name You Liked To Register",
      Col: 2,
    },
    ITEM: {
      Name: "🗑 OTHER",
      Text: "Please Tell Us About Your Lost Item in detail",
      Col: 3,
    },
  };
}

function Message_Ask(dota, status, qesn) {
  return {
    Ask:
      `<b><u>${dota} Registration</u></b>\n\n` +
      `<b>❔ Status: <code>${status}</code>\n` +
      `${qesn.Name} : <code>NONE</code></b>\n\n` +
      `❔ <i>${qesn.Text}\n\n` +
      `⚠️ Type #back or #exit to Restart Registration</i>`,
  };
}

function Message_SaveItem(status, obj, dataobj, text, date) {
  return {
    SaveItem:
      `<b> <u>${status} Registration</u></b >\n\n` +
      `<b>❔Status: <code>${obj["Status"]}</code>\n` +
      `${dataobj.Status} : <code>${text}</code>\n` +
      `⏰ Date: <code>${date.toLocaleDateString("en-US")}</code></b >\n\n` +
      `❔ <i>Please Send #Image of Your ${dataobj.Status}\n\n` +
      `⚠️ If You Don't Have Type #next</i>`,
  };
}

function Message_Inline(title, toprse, item, items) {
  return {
    Inline:
      `✅ <b>${title}\n\n` +
      `-------------------------------------\n` +
      `   ${item}: ${toprse[items]}\n` +
      `   🧭 Date: ${toprse["Time"]}\n` +
      `   ☎️ Contact: ${toprse["Contact"]}</b>\n` +
      `-------------------------------------\n\n` +
      `☎️ <i>Call Now to <b>${toprse["Contact"]}</b>\n\n` +
      `Type #Exit to go home</i>`,
  };
}

function Message_Next(status, obj, item, date) {
  return {
    Next:
      `<b> <u>${status} Registration</u></b>\n\n` +
      ` <b>❔Status: <code>${obj["Status"]}</code>\n` +
      `💳 ${status} : <code>${item}</code>\n` +
      `⏰ Date: <code>${date.toLocaleDateString("en-US")}</code></b>\n\n` +
      `❔ <i> Please #Share or #Type Your Phone Number\n\n</i>`,
  };
}

function Message_Profile(id, idtoprse, atmtoprse, othertoprse) {
  return {
    Profile:
      `👤 <b> Profile </b>\n\n` +
      ` <i> User: #${id}</i>\n` +
      ` <pre> #ID: ${JSON.stringify(idtoprse, undefined, 1)} \n` +
      `#ATM: ${JSON.stringify(atmtoprse, undefined, 1)} \n` +
      `#Other: ${JSON.stringify(othertoprse, undefined, 1)}</pre> `,
  };
}

function Message_ConfirmTOChannel(type, obj, item) {
  return {
    ConfirmTOChannel:
      `✅ <b>${type} ${obj["Status"].toUpperCase()}</b>\n\n` +
      `${type} : <u>${item}</u>\n\n` +
      ` <b>❔Status: <code>${obj["Status"]}</code>\n` +
      `⏰ Date: <code>${obj["Time"]}</code>\n` +
      `☎️ Phone: <code>${obj["Contact"]}</code></b>\n\n` +
      ` <i>📡 #Call Now What You Waiting For </i> `,
  };
}

function Message_PhotoSave(type, obj, dataobj, item, date, photo) {
  return {
    PhotoSave:
      `<b> <u>${type} Registration</u></b>\n\n` +
      ` <b>❔Status: <code>${obj["Status"]}</code>\n` +
      `💳 ${dataobj.Status} : <code>${item}</code>\n` +
      `⏰ Date: <code>${date.toLocaleDateString("en-US")}</code>\n` +
      `🖼 Image: <code>${photo}</code></b>\n\n` +
      ` <i>⚠️ You Will See Image Once you Finish #Registration Keep going\n\n` +
      `❔  Please #Share or #Type Your Phone Number</i> `,
  };
}

function Message_ContactSave(type, obj, dataobj, item, date, contact) {
  return {
    ContactSave:
      `✅ <b>WELDONE ! <u>${type} Registered</u></b>\n\n` +
      ` <b>❔Status: <code>${obj["Status"]}</code>\n` +
      `${dataobj.Status} : <code>${item}</code>\n` +
      `⏰ Date: <code>${date.toLocaleDateString("en-US")}</code>\n` +
      `🖼 Image: <code>${obj["Image"]}</code>\n☎️ Phone: <code>${contact}</code></b>\n\n` +
      ` <i>⚠️ This Data Will be Saved Under Your #Profile\n\n` +
      `click #Exit </i> `,
  };
}
