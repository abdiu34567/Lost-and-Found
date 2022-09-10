function Msg() {
  return {
    welcome: `👤 <b>Welcome</b>\n\n` +
      `<i>⭐️ Here is where You find lost Items like :</i>\n<b>ID || ATM || Others </b>\n\n` +
      `<b> ✅ 💯% free</b>  \n\n` +
      `<i>Join Our Channel </i>\n` +
      `<b>  ▶️ @A_lost_found</b>\n` +
      `<i>Join Our Group </i>\n` +
      `<b>  ▶️ https://t.me/lost_found_ab</b>`,
    reg: `    <b>✅ Find || ❌ Lost</b>\n\n` +
      `🎗 if you lost any thing then click the <u><b>if you lost</b></u> button\n\n` +
      `🎗 if you find something then click the <u><b>if you Find</b></u> button\n`,
    l_f: `    <b>💳 ID | 🏧 ATM | 🗑 OTHER</b>\n\n` +
      '➖ Chose One to Register',
  }
}

function Qesn() {
  return {
    "ID": `<b>STEP 1 <u>#ID</u></b>\n\n` +
      `❔ <i>Please Type #ID Number You Liked To Register</i>`,

    "ATM": `<b>STEP 1 <u>#ATM</u></b >\n\n` +
      `❔ <i>Please Type #ATM Name You Lost</i>`,

    "ITEM": `<b>STEP 1 <u>#ITEM</u></b>\n\n` +
      `❔ <i>Please Tell Us About Your Lost #Item in detail</i>`,

    "PHOTO": `<b>STEP 2 <u>#IMAGE</u></b >\n\n` +
      `❔ <i>Please Send #Image for ${_G.item}</i>`,
    "PHONE": `<b>Step 3 <u>#Phone</u></b>\n\n` +
      `<i>❔  Please #Share or #Type Your Phone Number</i> `,

  }
}


function Validity() {
  return {
    "ID": '<b>❌ Wrong Id Format</b>\n\n' +
      '⚠️ <code>ID number must include</code> <b>slash(/)</b> <code>and\n' +
      'length less than</code> <b>15n</b> <code>character</code>\n\n' +
      'Please Type <b>Valid</b> ID ❔',
    "ATM": '<b>❌ Wrong ATM Format</b>\n\n' +
      '⚠️ <code>ATM name must include</code> <b>2 words</b>\n\n' +
      'Please Type <b>Valid</b> ATM ❔',
    "ITEM": '<b>❌ Wrong ATM Format</b>\n\n' +
      '⚠️ <code>ITEM can not be in only</code> <b>Number</b>\n\n' +
      'Please Type <b>Precise Description</b> of the ITEM ❔',
    "PHOTO": '<b>❌ Expecting Photo</b>\n\n' +
      `Please send <b>Photo</b> for ${_G.item}❔`,
    "PHONE": '<b>❌ Invalid Phone Number</b>\n\n' +
      '⚠️ <code>Phone Number must be in</code> <b>Number</b> and\n' +
      '<code>digit between</code> <b>10 - 13 </b>\n\n' +
      `Please <b>#Type</b> or <b>#share</b> your phone number❔`,

  }
}
