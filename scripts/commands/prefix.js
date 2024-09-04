module.exports.config = {
  name: "prefix",
  version: "1.0.0",
  permission: 0,
  credits: "Joy Ahmed",
  prefix: true,
  description: "guide",
  category: "system",
  usages: "",
  cooldowns: 5,
};
module.exports.languages = {
  "vi": {},
  "en": {}
};

function random(arr) {
var rd = arr[Math.floor(Math.random() * arr.length)];
    return rd;
        };
module.exports.handleEvent = async function ({ api, event, Threads }) {
  const axios = require("axios")
  const picture = (await axios.get(`https://i.imgur.com/TQeipJV.jpeg`, { responseType: "stream"})).data
      const moment = require("moment-timezone");
var gio = moment.tz("Asia/Dhaka").format("hh:mm:ss || D/MM/YYYY");
  var thu =
moment.tz('Asia/Dhaka').format('dddd');
  if (thu == 'Sunday') thu = 'রবিবার'
  if (thu == 'Monday') thu = 'সোমবার'
  if (thu == 'Tuesday') thu = 'মঙ্গলবার'
  if (thu == 'Wednesday') thu = 'বুধবার'
  if (thu == "Thursday") thu = 'বৃহস্পতিবার'
  if (thu == 'Friday') thu = 'শুক্রবার'
  if (thu == 'Saturday') thu = 'শনিবার'
  var { threadID, messageID, body } = event,{ PREFIX } = global.config;
  let threadSetting = global.data.threadData.get(threadID) || {};
  let prefix = threadSetting.PREFIX || PREFIX;
  const icon = [""];
  if (body.toLowerCase() == "prefix" || (body.toLowerCase() == "Prefix") ||  (body.toLowerCase() == "PREFIX") || (body.toLowerCase() == "PreFix")) {
       api.sendMessage({body: `💐 ====『 𝗣𝗥𝗘𝗙𝗜𝗫 』==== 💐\n━━━━━━━━━━━━━━━━━━━\n[⏰] → 𝐃𝐚𝐭𝐚 𝐀𝐧𝐝 𝐓𝐢𝐦𝐞: ${gio} (${thu})\n[❤️] → 𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱: [ ${global.config.PREFIX} ]\n━━━━━━━━━━━━━━━━━━━\n[💥] → 𝐁𝐨𝐭 𝐡𝐚𝐬 𝐚 𝐩𝐨𝐬𝐬𝐢𝐛𝐥𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 ${client.commands.size} \n[👥] → 𝐓𝐨𝐭𝐚𝐥 𝐁𝐨𝐭 𝐔𝐬𝐞𝐫𝐬: ${global.data.allUserID.length}\n[🏘️] → 𝐓𝐨𝐭𝐚𝐥 𝐆𝐫𝐨𝐮𝐩: ${global.data.allThreadID.length}\n━━━━━━━━━━━━━━━━━━━\n[👉] → 𝐓𝐡𝐢𝐬 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 𝐓𝐨 𝐒𝐞𝐞 𝐂𝐨𝐦𝐦𝐨𝐧𝐥𝐲 𝐔𝐬𝐞𝐝 ${global.config.PREFIX} 𝐇𝐞𝐥𝐩.`, attachment: (await axios.get((await axios.get(`https://imran-api.onrender.com/video/crush`)).data.data, {
                    responseType: 'stream'
                })).data}, event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
      },event.messageID);
  }
 }
//ko api thì attachment: (picture)}, event.threadID, event.messageID);
module.exports.run = async ({ api, event, args, Threads }) => {}
