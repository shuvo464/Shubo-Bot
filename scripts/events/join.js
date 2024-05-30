module.exports.config = {
  name: "join",
  eventType: ['log:subscribe'],
  version: "1.0.0",
  credits: "Mirai-Team", // FIXED BY YAN Nayan
  description: "GROUP UPDATE NOTIFICATION"
};

const fs = require('fs-extra');
const { loadImage, createCanvas, registerFont } = require("canvas");
const axios = require('axios');
const jimp = require("jimp");
const moment = require("moment-timezone");
const fontlink = 'https://drive.google.com/u/0/uc?id=10XFWm9F6u2RKnuVIfwoEdlav2HhkAUIB&export=download';

module.exports.circle = async (image) => {
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
};

module.exports.run = async function({ api, event, Users }) {
  const threadID = event.threadID;
  const threadInfo = await api.getThreadInfo(threadID);
  const threadName = threadInfo.threadName;

  if (!event.logMessageData.addedParticipants || !Array.isArray(event.logMessageData.addedParticipants)) {
    return;
  }

  const addedParticipants = event.logMessageData.addedParticipants;

  if (addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    try {
      const gifUrl = 'https://i.imgur.com/yIt2XrH.gif';
      const gifPath = __dirname + '/Nayan/join/join.gif';
      const response = await axios.get(gifUrl, { responseType: 'arraybuffer' });
      fs.writeFileSync(gifPath, response.data);
      await api.sendMessage("চলে এসেছি আমি পিচ্চি জয় তোমাদের মাঝে🤭!", threadID);
      await api.sendMessage({
        body: `${global.config.BOTNAME} CONNECTED\n\nAssalamualaykum☘️\n\n<------------------------------>\n\nAND FOR ANY COMPLAINTS OR CONTACT BOT OPERATOR\n\nADMIN :MD JUBAED AHMED JOY\n\n🟣Facebook Account Link: \n\nhttps://www.facebook.com/mdjubaet.ahmed.9\n\n🔵WHATSAPP NUMBER: wa.me/+8801709045888\n\n🟢SUPPORT EMAIL: www.mdjubaetahmed124@gmail.com`,
        attachment: fs.createReadStream(gifPath)
      }, threadID);
    } catch (error) {
      console.error(error);
    }
    return;
  }

  try {
    if (!fs.existsSync(__dirname + `/Nayan/font/Semi.ttf`)) {
      const fontData = (await axios.get(fontlink, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/Nayan/font/Semi.ttf`, Buffer.from(fontData, "utf-8"));
    }

    const time = moment.tz("Asia/dhaka").format("HH:mm:ss - DD/MM/YYYY");
    const day = moment.tz('Asia/dhaka').format('dddd');
    const session = `${moment.tz('Asia/dhaka').hours() < 3 ? "midnight" : moment.tz('Asia/dhaka').hours() < 8 ? "Early morning" : moment.tz('Asia/dhaka').hours() < 12 ? "noon" : moment.tz('Asia/dhaka').hours() < 17 ? "afternoon" : "evening"}`;

    let mentions = [];
    let nameArray = [];
    let memLength = [];
    let iduser = [];
    let abx = [];
    for (let i = 0; i < addedParticipants.length; i++) {
      const participant = addedParticipants[i];
      const userName = participant.fullName;
      const userFbId = participant.userFbId.toString();
      iduser.push(userFbId);
      nameArray.push(userName);
      mentions.push({ tag: userName, id: participant.userFbId });
      memLength.push(threadInfo.participantIDs.length - i);

      const pathImg = `${__dirname}/Nayan/join/${i}.png`;
      const pathAva = `${__dirname}/Nayan/join/avt.png`;
      const avatarUrl = `https://graph.facebook.com/${userFbId}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;
      const avtAnime = (await axios.get(encodeURI(avatarUrl), { responseType: "arraybuffer" })).data;

      const backgrounds = [
        'https://i.imgur.com/dDSh0wc.jpeg',
        'https://i.imgur.com/UucSRWJ.jpeg',
        'https://i.imgur.com/OYzHKNE.jpeg',
        'https://i.imgur.com/V5L9dPi.jpeg',
        'https://i.imgur.com/M7HEAMA.jpeg'
      ];
      const backgroundUrl = backgrounds[Math.floor(Math.random() * backgrounds.length)];
      const background = (await axios.get(encodeURI(backgroundUrl), { responseType: "arraybuffer" })).data;

      fs.writeFileSync(pathAva, Buffer.from(avtAnime, "utf-8"));
      fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));

      const avatar = await this.circle(pathAva);
      const baseImage = await loadImage(pathImg);
      const baseAva = await loadImage(avatar);

      registerFont(__dirname + `/Nayan/font/Semi.ttf`, { family: "Semi" });

      const canvas = createCanvas(1902, 1082);
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
      ctx.drawImage(baseAva, canvas.width / 2 - 188, canvas.height / 2 - 375, 375, 355);
      ctx.fillStyle = "#FFF";
      ctx.textAlign = "center";
      ctx.font = `155px Semi`;
      ctx.fillText(userName, canvas.width / 2 + 20, canvas.height / 2 + 100);
      ctx.save();
      ctx.font = `75px Semi`;
      ctx.fillText(`Welcome to ${threadName}`, canvas.width / 2 - 15, canvas.height / 2 + 235);

      const number = threadInfo.participantIDs.length - i;
      let suffix = ["th", "st", "nd", "rd"][(number % 10 > 3) ? 0 : (number % 100 - number % 10 != 10) * number % 10] || "th";
      ctx.fillText(`You are the ${number}${suffix} member of this group`, canvas.width / 2 - 15, canvas.height / 2 + 350);

      ctx.fillText(`You are the ${number}${suffix} member of this group`, canvas.width / 2 - 15, canvas.height / 2 + 350);
        ctx.restore();
        const imageBuffer = canvas.toBuffer();
        fs.writeFileSync(pathImg, imageBuffer);
        abx.push(fs.createReadStream(__dirname + `/Nayan/join/${o}.png`))
      }
      memLength.sort((a, b) => a - b);
      (typeof threadData.customJoin == "undefined") ? msg = `╔════•|      ✿      |•════╗\n 💐আ্ঁস্ঁসা্ঁলা্ঁমু্ঁ💚আ্ঁলা্ঁই্ঁকু্ঁম্ঁ💐\n╚════•|      ✿      |•════╝\n\n    ✨🆆🅴🅻🅻 🅲🅾🅼🅴✨\n\n                 ❥𝐍𝐄𝐖~\n\n        ~🇲‌🇪‌🇲‌🇧‌🇪‌🇷‌~\n\n             [   {name} ]\n\n༄✺আ্ঁপ্ঁনা্ঁকে্ঁ আ্ঁমা্ঁদে্ঁর্ঁ✺࿐\n\n{threadName}\n\n 🥰🖤🌸—এ্ঁর্ঁ প্ঁক্ষ্ঁ🍀থে্ঁকে্ঁ🍀—🌸🥀\n\n         🥀_ভা্ঁলো্ঁবা্ঁসা্ঁ_অ্ঁভি্ঁরা্ঁম্ঁ_🥀\n\n༄✺আঁপঁনিঁ এঁইঁ গ্রুঁপেঁর {soThanhVien} নঁং মে্ঁম্বা্ঁরঁ ࿐\n\n    ╔╦══•    •✠•❀•✠ •   •══╦╗\n        ♥  𝐁𝐎𝐓'𝐬 𝐎𝐖𝐍𝐄𝐑♥\n\n                           ☟                     \n\n      ♥𝐌𝐃 𝐉𝐔𝐁𝐀𝐄𝐃 𝐀𝐇𝐌𝐌𝐄𝐃 𝐉𝐎𝐘(⁠◕⁠દ⁠◕⁠)\n    ╚╩══•"\n─────────────────\n[ {time} - {thu} ]` : msg = threadData.customJoin;
      var nameAuthor = await Users.getNameUser(event.author)
      msg = msg
        .replace(/\{iduser}/g, iduser.join(', '))
        .replace(/\{name}/g, nameArray.join(', '))
        .replace(/\{type}/g, (memLength.length > 1) ? 'You' : 'You')
        .replace(/\{soThanhVien}/g, memLength.join(', '))
        .replace(/\{threadName}/g, threadName)
        .replace(/\{author}/g, nameAuthor)
        .replace(/\{uidAuthor}/g, event.author)
        .replace(/\{buoi}/g, session)
        .replace(/\{time}/g, time)
        .replace(/\{thu}/g, thu);

      var formPush = { body: msg, attachment: abx, mentions }
      api.sendMessage(formPush, threadID);
      for (let ii = 0; ii < parseInt(id.length); ii++) {
        fs.unlinkSync(__dirname + `/Nayan/join/${ii}.png`)
      }
    } catch (e) { return console.log(e) };
  }
}
