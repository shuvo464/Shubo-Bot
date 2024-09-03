module.exports.config = {
  name: "info", 
  version: "1.0.0", 
  permission: 0,
  credits: "joy ahmed",
  description: "admin information",
  prefix: true,
  category: "Media", 
  usages: "", 
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "fs":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.imgur.com/WJYBqGr.jpeg","https://i.imgur.com/uYVCH6Z.jpeg"];
  
var callback = () => api.sendMessage({body:`ADMIN AND BOT INFORMATION 
________________________________________

❇️🅑︎🅞︎🅣︎ 🅝︎🅐︎🅜︎🅔︎ : ${global.config.BOTNAME}

❇️𝐁𝐎𝐓 𝐀𝐃𝐌𝐈𝐍 : 『𝐌𝐃 𝐉𝐔𝐁𝐀𝐄𝐃 𝐀𝐇𝐌𝐄𝐃 𝐉𝐎𝐘』

❇️𝐀𝐃𝐃𝐑𝐄𝐒𝐒 : 𝐓𝐚𝐫𝐚𝐤𝐚𝐧𝐝𝐢, 𝐒𝐚𝐫𝐢𝐬𝐡𝐚𝐛𝐚𝐢, 𝐉𝐚𝐦𝐚𝐥𝐩𝐮𝐫,  𝐌𝐲𝐦𝐞𝐧𝐬𝐢𝐧𝐠𝐡

_____________CONTACT_____________

❇️𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃: https://www.facebook.com/mdjubaet.ahmed.9

❇️𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 : 01709045888

❇️𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗 : ${global.config.PREFIX}

❇️𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑 : {𝐏𝐫𝐢𝐧𝐜𝐞 𝐉𝐨𝐲 𝐀𝐡𝐦𝐞𝐝}

OTHER NFORMATION____________________

TYPE /admin 

➟ UPTIME

TODAY IS TIME : ${juswa} 

BOT IS RUNNING ${hours}:${minutes}:${seconds}.

THANKS FOR USING ${global.config.BOTNAME} 『🤖🖤』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
