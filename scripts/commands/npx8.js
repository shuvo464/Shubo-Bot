const fs = require("fs");
module.exports = {
  config:{
	name: "npx8",
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
      'https://i.imgur.com/7rUGF9H.mp4',
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("efa")==0 || body.indexOf("tafriya")==0 || body.indexOf("Efa")==0 || body.indexOf("Tafriya")==0 || body.indexOf("EFA")==0 || body.indexOf("TAFRIYA")==0 || body.indexOf("Joy er gf")==0 || body.indexOf("efa tafriya")==0 || body.indexOf("tafriya efa")==0 || body.indexOf("efa akter")==0) {
		var msg = {
				body: "𝐉𝐎𝐘 + 𝐄𝐅𝐀 ",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
} 
