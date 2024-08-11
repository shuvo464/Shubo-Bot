const fs = require("fs");
module.exports.config = {
  name: "tafriyaefa",
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
	if (event.body.indexOf("Joy")==0 || (event.body.indexOf("JOY")==0 || (event.body.indexOf("জয়")==0 || (event.body.indexOf("Joy")==0)))) {
		var msg = {
				body: "জয় বস এখন বিজি আছেন কি বলবেন আমাকে বলতে পারেন😻"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
