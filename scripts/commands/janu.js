const axios = require('axios');
const fs = require('fs');

module.exports.config = {
    name: "janu",
    version: "1.0.5",
    permission: 0,
    prefix: true,
    credits: "Joy ahmed",
    description: "Anime couple photo",
    category: "prefix",
    cooldowns: 2
};

module.exports.handleEvent = async function ({ api, event }) {
  if (!(event.body.indexOf("janu") === 0 || event.body.indexOf("Janu") === 0)) return;
  const args = event.body.split(/\s+/);
  args.shift();
  const q = args.join(" "); 

  try {
    const response = await axios.get(`https://74zk5j-3000.csb.app/sim?reply=${q}`)


    const formattedResponse = formatFont(response.data.message);

    api.sendMessage(formattedResponse, event.threadID, event.messageID);


  } catch (error) {
    console.error(error);
    api.sendMessage('Yes my Love bolo🫶😉😘', event.threadID, event.messageID);
  }
};

module.exports.run = async function({api, event}) {

};

function formatFont(text) {
  const fontMapping = {
    a: "𝖺", b: "𝖻", c: "𝖼", d: "𝖽", e: "𝖾", f: "𝖿", g: "𝗀", h: "𝗁", i: "𝗂", j: "𝗃", k: "𝗄", l: "𝗅", m: "𝗆",
    n: "𝗇", o: "𝗈", p: "𝗉", q: "𝗊", r: "𝗋", s: "𝗌", t: "𝗍", u: "𝗎", v: "𝗏", w: "𝗐", x: "𝗑", y: "𝗒", z: "𝗓",
    A: "𝖠", B: "𝖡", C: "𝖢", D: "𝖣", E: "𝖤", F: "𝖥", G: "𝖦", H: "𝖧", I: "𝖨", J: "𝖩", K: "𝖪", L: "𝖫", M: "𝖬",
    N: "𝖭", O: "𝖮", P: "𝖯", Q: "𝖰", R: "𝖱", S: "𝖲", T: "𝖳", U: "𝖴", V: "𝖵", W: "𝖶", X: "𝖷", Y: "𝖸", Z: "𝖹"
  };

  let formattedText = "";
  for (const char of text) {
    if (char in fontMapping) {
      formattedText += fontMapping[char];
    } else {
      formattedText += char;
    }
  }

  return formattedText;
}
