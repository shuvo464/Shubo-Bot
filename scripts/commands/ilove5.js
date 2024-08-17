const fs = require("fs");
module.exports.config = {
  name: "iloveu5",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("xudi")==0 || (event.body.indexOf("cudi")==0 || (event.body.indexOf("চুদি")==0 || (event.body.indexOf("khanki")==0)))) {
		var msg = {
				body: "━━━━━━━━━━━━━━━━━━━━
╭┈ ❒ 💬 | 𝐌𝐄𝐒𝐒𝐀𝐆𝐄:
╰┈➤ এখানে গালাগালি করলে মুখ সেলাই কইরা দিমু..!!😾━━━━━━━━━━━━━━━━━━━━━━
✿◕𝐁𝐎𝐓-𝐎𝐖𝐍𝐄𝐑:𝐌𝐃 𝐉𝐔𝐁𝐀𝐄𝐃 𝐀𝐇𝐌𝐄𝐃 𝐉𝐎𝐘"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
