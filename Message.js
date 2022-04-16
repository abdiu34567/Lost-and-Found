function Message() {
  return {
    Welcome:
      `👤 <b>Welcome</b>\n\n` +
      `<i>⭐️ Here is where You find lost Items like :</i>\n<b>ID || ATM || Others </b>\n\n` +
      `<b> ✅ 💯% free</b>  \n\n` +
      `<i>Join Our Channel </i>\n` +
      `<b>  ▶️ @A_lost_found</b>\n` +
      `<i>Join Our Group </i>\n` +
      `<b>  ▶️ https://t.me/lost_found_ab</b>`,
    Regsister:
      `<b>here:</b>\n\n` +
      `<i>»»»» if you lost any thing then click the</i> <u>if you lost</u> button\n\n` +
      `<i>»»»» if you find something then click the</i> <u>if you Find</u> button\n`,
    FoundLost: "<i>»»» Chose One you want to Register</i>",
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
      Name: "🗑 ITEM",
      Text: "Please Tell Us About Your Lost Item in detail",
      Col: 3,
    },
  };
}
function Message_Ask(dota, qesn) {
  return {
    Ask: `<b>STEP 1 <u>#${dota}</u></b>\n\n` + `❔ <i>${qesn.Text}</i>`,
  };
}
function Sendimage(qesn) {
  return {
    SaveItem:
      `<b>STEP 2 <u>#IMAGE</u></b >\n\n` +
      `❔ <i>Please Send #Image of Your ${qesn.Name}</i>`,
  };
}
function PhotoSave() {
  return {
    PhotoSave:
      `<b>Step 3 <u>#Phone</u></b>\n\n` +
      ` <i>⚠️ You Will See Image Once you Finish #Registration Keep going\n\n` +
      `❔  Please #Share or #Type Your Phone Number</i> `,
  };
}

function NoPhoto() {
  return {
    PhotoSave:
      `<b>Step 3 <u>#Phone</u></b>\n\n` +
      `<i>❔  Please #Share or #Type Your Phone Number</i> `,
  };
}

function ContactSave(obj, contact, item) {
  return {
    ContactSave:
      `✅ <b>WELDONE ! <u>${obj["Item"]} Registered</u></b>\n\n` +
      `<b>❔Status: <code>${obj["Status"]}</code>\n` +
      `${item.Name} : <code>${obj[obj["Item"]]}</code>\n` +
      `⏰ Date: <code>${obj["Time"]}</code>\n` +
      `☎️ Phone: <code>${contact}</code></b>\n\n` +
      ` <i>⚠️ This Data Will be Send To Admins and Saved Under Your #Profile\n\n` +
      `click #Exit </i> `,
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

function Message_Inline(title, toprse, item, items) {
  return {
    Inline:
      `✅ <b>${title}\n\n` +
      `-------------------------------------\n` +
      `   ${item}: ${toprse[items]}\n` +
      `   🧭 Date: ${toprse["Time"]}\n` +
      `   ☎️ Contact: ${toprse["Contact"]}</b>\n` +
      `-------------------------------------\n\n` +
      `☎️ <i>Call Now to <b>${toprse["Contact"]}</b>\n\n
      Type #any key to start</i>`,
  };
}

function Message_Profile(id, idtoprse, atmtoprse, othertoprse) {
  return {
    Profile:
      `👤 <b> Profile </b>\n\n` +
      ` <i> User: #${id}</i>\n` +
      `<pre> #ID: ${JSON.stringify(idtoprse, undefined, 1)} \n` +
      `#ATM: ${JSON.stringify(atmtoprse, undefined, 1)} \n` +
      `#Other: ${JSON.stringify(othertoprse, undefined, 1)}</pre> `,
  };
}
