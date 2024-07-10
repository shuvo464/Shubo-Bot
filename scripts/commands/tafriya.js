const fs = require("fs");
module.exports.config = {
  name: "tafriya",
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
	if (event.body.indexOf("আসসালামুআলাইকুম")==0 || (event.body.indexOf("event.body.indexOf("আসসালামু আলাইকুম")==0 || (event.body.indexOf("Assalamualaikum")==0 || (event.body.indexOf("assalamualaikum")==0)))) {
		var msg = {
				body: "Walaikumassalam😻"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
