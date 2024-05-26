const fs = require("fs");
module.exports = {
  config:{
	name: "npx11",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "😒",
        cooldowns: 5, 
},

handleEvent: async function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  const axios = require('axios')
const media = (
    await axios.get(
      'https://i.imgur.com/DRAerVV.mp4',
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("🥰")==0 || body.indexOf("😍")==0 || body.indexOf("🤩")==0 || body.indexOf("🥰")==0 || body.indexOf("😍")==0 || body.indexOf("😍")==0 || body.indexOf("😻")==0 || body.indexOf("❤️")==0 || body.indexOf("🧡")==0 || body.indexOf("💔")==0) {
		var msg = {
				body: "𝐌𝐃 𝐉𝐔𝐁𝐀𝐄𝐃 𝐀𝐇𝐌𝐌𝐄𝐃 𝐉𝐎𝐘",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😻", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
}
