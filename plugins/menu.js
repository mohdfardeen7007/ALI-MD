





























const config = require('../config')
const {cmd , commands} = require('../command')
cmd({

    pattern: "menu",

    react: "🍭",

    alias: ["allmenu","bot","commands"],

    desc: "Get bot\'s command list.",

    category: "main",

    use: '.menu3',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeMenu = `*╭┈──「𝐅𝖾ᥣ𝗂𝗑」┈───⊷*
*┃ 🪾* *xᴅ ᴜsᴇʀ* : *𝐌𝖾𝗂 𝐊ⱺ𐓣 𝐇υ* 
*┃ 🫟* *ᴍᴏᴅᴇ :* *public*
*┃ 🪄* *ᴘʀᴇғɪx :* *.*
*┃ 🛰️* *ʀᴀᴍ :* *𝟹𝟺.𝟻𝟼 ɢʙ/𝟼𝟶.𝟽𝟿*
*┃ 👑* *ᴄʀᴇᴀᴛᴏʀ :* *ᴀʟɪ ɪɴxɪᴅᴇ*
*┃ 🎐* *ᴠᴇʀsɪᴏɴ :* *𝟺.𝟻.𝟶 ʙᴇᴛᴀ☯︎*
‎*╰┈─────────────────⊷*
*🏮 DOWNLOAD-CMD 🏮*
‎*╭──────────────────✑*
‎*┋* *⬡ ғʙ*
‎*┋* *⬡ ɪɴꜱᴛᴀ*
‎*┋* *⬡ ᴠɪᴅᴇᴏ*
‎*┋* *⬡ ɢᴅʀɪᴠᴇ*
‎*┋* *⬡ ᴛᴡɪᴛᴛᴇʀ*
‎*┋* *⬡ ᴛᴛ*
‎*┋* *⬡ ᴘɪɴᴅʟ*
‎*┋* *⬡ ᴘɪɴ*
‎*┋* *⬡ ᴍᴇᴅɪᴀғɪʀᴇ*
‎*┋* *⬡ ᴘʟᴀʏ*
*┋* *⬡ ᴘʟᴀʏ𝟸*
‎*┋* *⬡ ᴀᴘᴋ*
‎*┋* *⬡ sᴏɴɢ*
‎*┋* *⬡ ᴠɪᴅᴇᴏ*
‎*┋* *⬡ ᴠɪᴅᴇᴏ2*
‎*┋* *⬡ sᴘᴏᴛɪꜰʏ*
‎*┋* *⬡ ɪᴍɢ*
‎*┋* *⬡ ʟʏʀɪᴄs*
‎*┋* *⬡ ᴀᴘᴋ*
‎*┋* *⬡ ᴅᴀʀᴀᴍᴀ*
‎*┋* *⬡ ᴛɪᴋᴛᴏᴋ*
‎*┋* *⬡ ʙᴀɪsᴄᴏᴘᴇ*
‎*┋* *⬡ ʏᴛꜱ*
‎*┋* *⬡ ʏᴛᴀ*
‎*┋* *⬡ ʟᴏʟɪ*
‎*┋* *⬡ ᴍᴏᴠɪᴇɪɴғᴏ*
‎*┋* *⬡ ᴍᴏᴠɪᴇ*
‎*┋* *⬡ ᴡᴇᴀᴛʜᴇʀ*
‎*┋* *⬡ sᴛɪᴄᴋsᴇᴀʀᴄʜ*
‎*┋* *⬡ ɢɪɴɪsɪsɪʟᴀ*
‎*┋* *⬡ ᴀɴɪᴍᴇ*
‎*┋* *⬡ ᴄᴏᴜᴘʟᴇᴘᴘ*
‎*╰──────────────────✑*
*🧠 AI-CMD 🧠*
‎*╭──────────────────✑*
‎*┋* *⬡ ɢᴘᴛ*
‎*┋* *⬡ ᴀɪ*
‎*┋* *⬡ ᴀɴᴀʟʏsᴇ*
‎*┋* *⬡ ʟʟᴀᴍᴀ3*
*┋* *⬡ ᴅᴇᴇᴘsᴇᴇᴋ*
‎*┋* *⬡ ᴏᴘᴇɴᴀɪ*
‎*┋* *⬡ ғʟᴜxᴀɪ*
‎*┋* *⬡ sᴅɪғғᴜsɪᴏɴ*
‎*┋* *⬡ sᴛᴀʙɪʟɪᴛʏ*
‎*┋* *⬡ ɢᴏᴏɢʟᴇ*
‎*╰──────────────────✑*
*👑 OWNER-CMD 👑*
‎*╭───────────────✑*
‎*┋* *⬡ ᴀᴜᴛᴏ-ʀᴇᴀᴄᴛ*
‎*┋* *⬡ ᴀᴜᴛᴏ-ʀᴇᴘʟʏ*
‎*┋* *⬡ ᴀᴜᴛᴏ-sᴛɪᴄᴋᴇʀ*
‎*┋* *⬡ ᴀᴜᴛᴏ-ᴠᴏɪᴄᴇ*
‎*┋* *⬡ ʀᴇᴀᴅ-ᴍᴇssᴀɢᴇ*
‎*┋* *⬡ sᴛᴀᴛᴜs-ʀᴇᴀᴄᴛ*
‎*┋* *⬡ ᴀᴜᴛᴏ-sᴇᴇɴ*
‎*┋* *⬡ ɢᴏᴏᴅʙʏᴇ*
‎*┋* *⬡ ᴀɴᴛɪ-ᴄᴀʟʟ*
‎*┋* *⬡ ᴡᴇʟᴄᴏᴍᴇ*
‎*┋* *⬡ ᴀᴅᴍɪɴ-ᴇᴠᴇɴᴛs*
‎*┋* *⬡ ᴍᴏᴅᴇ*
‎*┋* *⬡ ᴀɴᴛɪ-ʙᴀᴅ*
‎*┋* *⬡ ᴀɴᴛɪ-ʟɪɴᴋ*
‎*┋* *⬡ ᴀɴᴛɪᴅᴇʟᴇᴛᴇ*
‎*┋* *⬡ ᴀᴜᴛᴏ-ʀᴇᴄᴏʀᴅɪɴɢ*
‎*┋* *⬡ ᴀʟᴡᴀʏs-ᴏɴʟɪɴᴇ*
‎*┋* *⬡ ᴍᴇɴᴛɪᴏɴ-ʀᴇᴘʟʏ*
‎*┋* *⬡ ᴀᴜᴛᴏ-ᴛʏᴘɪɴɢ*
‎*┋* *⬡ ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*
‎*┋* *⬡ ᴜᴘᴅᴀᴛᴇ*
‎*┋* *⬡ ᴀʟʟᴠᴀʀ*
‎*┋* *⬡ sᴇᴛᴛɪɴɢs*
‎*┋* *⬡ sᴇᴛsᴜᴅᴏ*
‎*┋* *⬡ ᴅᴇʟsᴜᴅᴏ*
‎*┋* *⬡ ʟɪsᴛsᴜᴅᴏ*
‎*┋* *⬡ ʙᴀɴ*
‎*┋* *⬡ ᴜɴʙᴀɴ*
‎*┋* *⬡ ʟɪsᴛʙᴀɴ*
‎*┋* *⬡ ᴏᴡɴᴇʀ*
‎*┋* *⬡ ᴠᴠ*
‎*┋* *⬡ ᴠᴠ𝟸*
‎*┋* *⬡ 🙂*
‎*┋* *⬡ ᴋɪɴɢ*
‎*┋* *⬡ ɢᴇᴛᴘʀɪᴠᴀᴄʏ*
‎*┋* *⬡ ʙʟᴏᴄᴋ*
‎*┋* *⬡ ᴜɴʙʟᴏᴄᴋ*
‎*┋* *⬡ sʜᴜᴛᴅᴏᴡɴ*
‎*┋* *⬡ sᴇᴛᴘᴘ*
‎*┋* *⬡ ʙʀᴏᴀᴅᴄᴀsᴛ*
‎*┋* *⬡ ᴊɪᴅ*
‎*┋* *⬡ ɢᴊɪᴅ*
‎*┋* *⬡ ᴘᴀɪʀ*
‎*┋* *⬡ sᴀᴠᴇ*
‎*┋* *⬡ ᴄᴀʟᴄ*
‎*┋* *⬡ ʀᴇꜱᴛᴀʀᴛ*
‎*╰──────────────────✑*
*🪀 GROUP-CMD 🪀*
‎*╭──────────────────✑*
‎*┋* *⬡ ʀᴇᴍᴏᴠᴇ*
‎*┋* *⬡ ᴅᴇʟᴇᴛᴇ*
‎*┋* *⬡ ᴀᴅᴅ*
‎*┋* *⬡ ᴏᴜᴛ*
‎*┋* *⬡ ᴠᴄғ*
‎*┋* *⬡ ᴏɴʟɪɴᴇ*
‎*┋* *⬡ ᴏɴʟɪɴᴇ*
‎*┋* *⬡ ᴋɪᴄᴋ*
‎*┋* *⬡ ᴋɪᴄᴋᴀʟʟ*
‎*┋* *⬡ sᴇᴛɢᴏᴏᴅʙʏᴇ*
‎*┋* *⬡ sᴇᴛᴡᴇʟᴄᴏᴍᴇ*
‎*┋* *⬡ ᴘʀᴏᴍᴏᴛᴇ*
‎*┋* *⬡ ᴅᴇᴍᴏᴛᴇ*
‎*┋* *⬡ ᴛᴀɢᴀʟʟ*
‎*┋* *⬡ ᴘʀᴏғɪʟᴇ*
‎*┋* *⬡ ᴡʜᴏɪs*
‎*┋* *⬡ ɢᴇᴛᴘɪᴄ*
‎*┋* *⬡ ɪɴᴠɪᴛᴇ*
‎*┋* *⬡ ʀᴇᴠᴏᴋᴇ*
‎*┋* *⬡ ᴍᴜᴛᴇ*
‎*┋* *⬡ ᴅᴇʟ*
‎*┋* *⬡ ᴜɴᴍᴜᴛᴇ*
‎*┋* *⬡ ʟᴏᴄᴋɢᴄ*
‎*┋* *⬡ ᴜɴʟᴏᴄᴋɢᴄ*
‎*┋* *⬡ ʟᴇᴀᴠᴇ*
‎*┋* *⬡ ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*
‎*┋* *⬡ ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴄ*
‎*┋* *⬡ ᴊᴏɪɴ*
‎*┋* *⬡ ʜɪᴅᴇᴛᴀɢ*
‎*┋* *⬡ ɢɪɴғᴏ*
‎*╰──────────────────✑*
*🪼 REACTION-CMD 🪼*
‎*╭──────────────────✑*
‎*┋* *⬡ ʜᴇᴀʀᴛ*
‎*┋* *⬡ ɴɪᴋᴀʟ*
‎*┋* *⬡ sʜʏ*
‎*┋* *⬡ ᴍᴀʀʀɪᴀɢᴇ*
‎*┋* *⬡ sʜᴀᴅɪ*
‎*┋* *⬡ ᴍᴏᴏɴ*
‎*┋* *⬡ ᴄᴏɴғᴜsᴇᴅ*
‎*┋* *⬡ ʜᴀᴘᴘʏ*
‎*┋* *⬡ ᴀɴɢʀʏ*
‎*┋* *⬡ sᴀᴅ*
‎*┋* *⬡ ʜᴏᴛ*
‎*┋* *⬡ ꜱʜᴀᴘᴀʀ*
‎*┋* *⬡ ʙᴏɴᴋ*
‎*┋* *⬡ ꜱᴍᴜɢ*
‎*┋* *⬡ ʙᴜʟʟʏ*
‎*┋* *⬡ ᴀᴡᴏᴏ*
‎*┋* *⬡ ᴋɪꜱꜱ*
‎*┋* *⬡ ᴄᴜᴅᴅʟᴇ*
‎*┋* *⬡ ʟɪᴄᴋ*
‎*┋* *⬡ ɢʟᴏᴍᴘ*
‎*┋* *⬡ ꜱᴍɪʟᴇ*
‎*┋* *⬡ ʜɪɢʜꜰɪᴠᴇ*
‎*┋* *⬡ ꜱʟᴀᴘ*
‎*┋* *⬡ ᴋɪʟʟ*
‎*┋* *⬡ ᴡɪɴᴋ*
‎*┋* *⬡ ʙɪᴛᴇ*
‎*┋* *⬡ ᴄʀɪɴɢᴇ*
‎*┋* *⬡ ᴅᴀɴᴄᴇ*
‎*┋* *⬡ ʙʟᴜꜱʜ*
‎*┋* *⬡ ʜᴀɴᴅʜᴏʟᴅ*
‎*┋* *⬡ ɴᴏᴍ*
‎*┋* *⬡ ʜᴀᴄᴋ*
‎*┋* *⬡ sᴀᴅ*
‎*┋* *⬡ ᴀɴɢʀʏ*
‎*┋* *⬡ ʜᴀᴘᴘʏ*
‎*┋* *⬡ ʜᴇᴀʀᴛ*
‎*┋* *⬡ ᴄᴏɴғᴜsᴇᴅ*
‎*┋* *⬡ sʜʏ*
‎*┋* *⬡ ᴍᴏᴏɴ*
‎*┋* *⬡ ʜᴏᴛ*
‎*╰──────────────────✑*
*🎡 CONVERTER-CMD 🎡*  
‎*╭──────────────────✑*
‎*┋* *⬡ sᴛɪᴄᴋᴇʀ*
‎*┋* *⬡ ᴛʀᴛ*
‎*┋* *⬡ ᴛᴏɪᴍᴀɢᴇ*
‎*┋* *⬡ ᴛᴛs*
‎*┋* *⬡ ꜰᴀɴᴄʏ*
*┋* *⬡ ʀᴏᴀsᴛ*
‎*┋* *⬡ ᴀᴜʀᴀ*
‎*┋* *⬡ ᴄᴏᴍᴘᴀᴛɪʙɪʟɪᴛʏ*
‎*┋* *⬡ ʟᴏᴠᴇᴛᴇsᴛ*
‎*┋* *⬡ ᴄᴏᴍᴘʟɪᴍᴇɴᴛ*
‎*┋* *⬡ ᴜʀʟ*
‎*┋* *⬡ ᴀɢᴇ*
‎*┋* *⬡ ᴛɢs*
‎*┋* *⬡ ss*
‎*┋* *⬡ ʀᴇᴍɪɴɪ*
‎*┋* *⬡ ᴜᴘsᴄᴀʟᴇ*
‎*┋* *⬡ ʟᴏɢᴏ*
‎*┋* *⬡ ᴡᴀɴᴛᴇᴅ*
‎*┋* *⬡ ɴᴏᴋɪᴀ*
‎*┋* *⬡ ᴀɴᴀʟʏᴢᴇ*
‎*┋* *⬡ ᴊᴀɪʟ*
‎*┋* *⬡ ʀᴍʙɢ*
‎*┋* *⬡ ɪᴍɢ*
*┋* *⬡ ᴠsᴛɪᴄᴋᴇʀ*
‎*┋* *⬡ ᴠs*
‎*┋* *⬡ ᴀɴᴀʟʏᴢᴇ*
‎*┋* *⬡ ʀᴇᴍᴏᴠᴇʙɢ*
‎*┋* *⬡ ᴡᴀɴᴛᴇᴅ*
‎*┋* *⬡ ᴊᴀɪʟ*
‎*┋* *⬡ ɴᴏᴋɪᴀ*
‎*┋* *⬡ ᴀᴅᴇ*
‎*┋* *⬡ ᴀᴛᴛᴘ*
‎*┋* *⬡ ᴘʜᴏᴛᴏ*
‎*┋* *⬡ ᴄᴏɴᴠᴇʀᴛ*
‎*┋* *⬡ ᴛᴏᴍᴘ𝟹*
‎*┋* *⬡ ғᴏʀᴡᴀʀᴅ*
‎*┋* *⬡ ᴛᴏɪᴍᴀɢᴇ*
‎*┋* *⬡ ᴛɪɴʏ*
‎*╰──────────────────✑*
🪾 PRIVACY-CMD 🪾*
‎*╭──────────────────✑*
‎*┋* *⬡ sᴇᴛᴘᴘᴀʟʟ*
‎*┋* *⬡ ɢᴇᴛʙɪᴏ*
‎*┋* *⬡ ʙʟᴏᴄᴋʟɪsᴛ*
‎*┋* *⬡ ᴜᴘᴅᴀᴛᴇʙɪᴏ*
‎*┋* *⬡ sᴇᴛᴍʏɴᴀᴍᴇ*
‎*┋* *⬡ sᴇᴛᴏɴʟɪɴᴇ*
‎*┋* *⬡ ɢʀᴏᴜᴘsᴘʀɪᴠᴀᴄʏ ɴᴏɴᴇ*
‎*┋* *⬡ ɢʀᴏᴜᴘsᴘʀɪᴠᴀᴄʏ ᴀʟʟ*
‎*┋* *⬡ ɢʀᴏᴜᴘsᴘʀɪᴠᴀᴄʏ ᴄᴏɴᴛᴀᴄᴛs*
‎*┋* *⬡ ɢᴇᴛᴘʀɪᴠᴀᴄʏ*
‎*┋* *⬡ ᴅɪsᴀᴘᴘᴇᴀʀ ᴏɴ*
‎*┋* *⬡ ᴅɪsᴀᴘᴘᴇᴀʀ ᴏғғ*
‎*┋* *⬡ ᴅɪsᴀᴘᴘᴇᴀʀ 𝟽ᴅ 𝟸𝟺ʜ 𝟿𝟶ᴅ*
‎*┋* *⬡ sᴇɴᴅᴅᴍ*
‎*╰──────────────────✑*
*🫟 INFO-CMD 🫟* 
‎*╭──────────────────✑*
‎*┋* *⬡ ᴀʙᴏᴜᴛ*
‎*┋* *⬡ ᴀʟɪᴠᴇ*
‎*┋* *⬡ ʙᴏᴛɪɴꜰᴏ*
‎*┋* *⬡ ꜱᴛᴀᴛᴜꜱ*
‎*┋* *⬡ ɢɪɴғᴏ*
‎*┋* *⬡ ᴘɪɴɢ*
‎*┋* *⬡ ᴛɪᴍᴇɴᴏᴡ*
‎*┋* *⬡ ᴅᴀᴛᴇ*
‎*┋* *⬡ ʀᴏᴍᴀɴᴄᴇ*
‎*┋* *⬡ ᴍᴏᴛɪᴠᴀᴛᴇ*
‎*┋* *⬡ ᴛᴛsᴛᴀʟᴋ*
‎*┋* *⬡ ᴛɪᴋᴛᴏᴋsᴛᴀʟᴋ*
‎*┋* *⬡ ᴡʜᴀᴛsᴀᴘᴘᴄʜᴀɴɴᴇʟsᴛᴀʟᴋ*
‎*┋* *⬡ ᴡsᴛᴀʟᴋ*
‎*┋* *⬡ ᴘɪɴɢ2*
‎*┋* *⬡ ꜱʏꜱᴛᴇᴍ*
‎*┋* *⬡ ᴠᴇʀsɪᴏɴ*
‎*┋* *⬡ ʀᴇᴘᴏ*
‎*┋* *⬡ ᴍᴇɴᴜ*
‎*┋* *⬡ ᴍᴇɴᴜ2*
‎*┋* *⬡ ᴍᴇɴᴜ3*
‎*┋* *⬡ ʟᴏɢᴏᴍᴇɴᴜ*
‎*┋* *⬡ ғᴀᴍɪʟʏ*
‎*┋* *⬡ ᴄʜᴀɴɴᴇʟ*
‎*┋* *⬡ sᴜᴘᴘᴏʀᴛ*
‎*┋* *⬡ ᴇxᴏʀ*
‎*┋* *⬡ ᴘʀᴏᴍᴏᴛᴇsᴛᴀꜰꜰ*
‎*╰──────────────────✑*
*🪄 RANDOM-CMD 🪄* 
‎*╭──────────────────✑*
‎*┋* *⬡ ɴᴜᴍʙᴇʀɢᴀᴍᴇ*
‎*┋* *⬡ ʀᴏʟʟ🎲*
‎*┋* *⬡ ᴄᴏɪɴꜰʟɪᴘ🪙*
*┋* *⬡ ᴘɪᴄᴋ*
‎*┋* *⬡ sʜɪᴘ*
‎*┋* *⬡ ʙᴀᴄʜɪ*
‎*┋* *⬡ ᴄʜᴀʀᴀᴄᴛᴇʀ*
‎*┋* *⬡ ʙᴀᴄʜᴀ*
‎*┋* *⬡ ʀᴇᴀᴅᴍᴏʀᴇ*
‎*┋* *⬡ ᴄᴀᴛ*
‎*┋* *⬡ ᴅᴏɢ*
‎*┋* *⬡ 𝟾ʙᴀʟʟ*
‎*┋* *⬡ ᴇᴍᴏᴊɪ*
‎*┋* *⬡ ᴛʀᴛ*
‎*┋* *⬡ ᴊᴏᴋᴇ*
‎*┋* *⬡ ꜰᴀᴄᴛ*
‎*┋* *⬡ ɢɪᴛʜᴜʙ*
‎*┋* *⬡ ɢᴘᴀꜱꜱ*
‎*┋* *⬡ ʜᴀᴄᴋ*
‎*┋* *⬡ ǫᴜᴏᴛᴇ*
‎*┋* *⬡ ǫʀ*
‎*┋* *⬡ ꜱʀᴇᴘᴏ*
‎*┋* *⬡ sʏsᴛᴇᴍ*
‎*┋* *⬡ ʀᴀɴᴋ*
‎*┋* *⬡ ᴛɪᴍᴇᴢᴏɴᴇ*
‎*┋* *⬡ ᴅᴇꜰɪɴᴇ*
‎*┋* *⬡ ᴅᴀɪʟʏꜰᴀᴄᴛ*
‎*┋* *⬡ ᴍɪɴᴜᴛᴏʀ*
‎*┋* *⬡ ᴘɪᴄᴋᴜᴘʟɪɴᴇ*
‎*╰──────────────────✑*
> *🍉*`

await conn.sendMessage(from,{image:{url: config.ALIVE_IMG},caption:madeMenu,
}, { quoted: mek });
} catch (e) {
console.log(e)
reply(`${e}`)
}
})
