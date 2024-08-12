const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = [" হ্যালো আমি  JOY এর বউ😇", "হ্য JOY জানু তুমি কি আমাকে ডেকেছো 🙂", "আই লাভ উই JOY❤️", " আমি JOY এর বউ🥵", "আমার জামাই JOY আমাক ডাকেছো😚", "ওই জান এতো ডাকো কেনো গো🤭" , "যা তোরা কেডা আমি আমার জামাই JOY এর কাছে গেলাম🥴" , "জি JOY জানু ডেকেছো আমারে😇 ", "ওই JOY কোই তুমি😏", "হ্যা আমি সেই বট জে আমাক JOY বানাইছে😌", "আসসালামু আলাইকুম আমার কলিজা JOY🥰", "আমারে ডাকিস না আমি আমার জামাই JOY এর সাথে বিজি আছি😉", "আমারে বট বানাইচো আমার দিয়ে চ্যাট করো🤨", "কেউ ডাকবি না আমি JOY এর বউ🤐", "আমার প্রিয় জামাই JOY এর দিকে কেউ নজর দিবি না🤗", "আমি সুধু JOY এর অন্য কারো হবো নাহ্😪"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😽")) {
     return api.sendMessage("_আগে brush করে আই তারপর কিস দিস_!😼😒", threadID);
   };
   
    if ((event.body.toLowerCase() =="🙋‍♂️" ) || (event.body.toLowerCase() == "👍🏻")) {
     return api.sendMessage("_JOY Boss,Group এ হাত মারতে নিষেধ করেছে ", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("Hello, Hi, Bye bye. এটা সারা কি কিছু বলতে প্যারিস না তুই?😒", threadID);
   };

   if ((event.body.toLowerCase() == "love you all") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("হ্যাঁ,তোৃঁমাৃঁগোৃঁ সৃঁবাৃঁরেৃঁ ভাৃঁলোৃঁবাৃঁসেৃঁ আৃঁমাৃঁরৃঁ জৃঁয়ৃঁ বৃঁসৃঁ🥰🥀", threadID);
   };
  
   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol player")) {
     return api.sendMessage("lol mne lots of love 😘", threadID);
   };

   if ((event.body.toLowerCase() == "gd morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "কেমন আছো") || (event.body.toLowerCase() == "Kamon aso")) {
     return api.sendMessage("𝘼𝙡𝙝𝙖𝙢𝙙𝙪𝙡𝙡𝙞𝙖𝙝 𝙫𝙡𝙤__𝙩𝙢𝙞? ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "Dulavai ") || (event.body.toLowerCase() == "Dulavai") || (event.body.toLowerCase() == "Joy") || (event.body.toLowerCase() == "জয়")) {
     return api.sendMessage( "আসসালামুয়ালাইকুম আমি JOY এর Bot বলতে আছি? JOY BOSS বিজি আছে? যা বলার আমাকে বলেন,🥰? (আবে ওই সয়তান তুই কি ওজু করছো JOY বসের নাম লও? 😘",threadID);

       
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "creator")) {
     return api.sendMessage("‎[Bot owner :亗 BOSS JOY AHMED 亗 \n𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 Picchi in English . Facebook id:- https://www.facebook.com/mdjubaet.ahmed.9?mibextid=ZbWKwL \n whatsApp :-01709045888 ", threadID);
   };

   if ((event.body.toLowerCase() == "bot কে বানাইছে") || (event.body.toLowerCase() == "tumke banaise ke?")) {
     return api.sendMessage("Boss Joy Ahmed is My Creator🥰. He loves me & Edit Me Daily. He is a good boy 😊", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "botka admin kon ha")) {
     return api.sendMessage("He is Joy Boss\n He Gives his name,_You're nex't cru'sh everywhare", threadID);
   };

   if ((event.body.toLowerCase() == "bot love you") || (event.body.toLowerCase() == "Bot love you")) {
     return api.sendMessage("নাৃঁ,আৃঁমিৃঁ তোৃঁ রোৃঁবৃঁটৃঁ আৃঁমিৃঁ love কৃঁরৃঁমুৃঁ কিৃঁভাৃঁবেৃঁ,মেৃঁ হঁলেৃঁ তুৃঁমিৃঁ আৃঁমাৃঁরৃঁ বৃঁসৃঁ জৃঁয়ৃঁ কেৃঁ love কৃঁরোৃঁ🥰", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kor")) {
     return api.sendMessage("Nh ami চুপ থাকবো না.😼 Joy বস আমারে কথা বলতে বলছে🤭", threadID);
   };

   if ((event.body.toLowerCase() == "Bts") || (event.body.toLowerCase() == "bts")) {
     return api.sendMessage("Bts মানে হিজড়া_🤣🤣তুই কি bts নাকি_🤨?", threadID);
   };

   if ((event.body.toLowerCase() == "Boss er sate beyadopi") || (event.body.toLowerCase() == "বস এর সাথে বেয়াদপি") || (event.body.toLowerCase() == "ki bolli ata") || (event.body.toLowerCase() == "opoman korli")) {
     return api.sendMessage("__sorry Joy boss😔😔 মাফ করে দেন আমাকে ,আর এমন হবে না 🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "চুম্মা দাও") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️ আমি দিবো না,😒 Joy বস কে বলো দিতে🐸", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you joy")) {
     return api.sendMessage("️ হয়েছে হয়েছে থ্যাঙ্কস বলা লাগবে না একটা গার্লফ্রেন্ড খুঁজে দিস সিঙ্গেল আছি🥰🥰.", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️ এত রাগ করে না baby🥺. এই নাও ummmmah😘", threadID);
   };

   if ((event.body.toLowerCase() == "Hmm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️Hmm Hmm Na Kore . এক বারে বলো Hey marry me🙈", threadID);
   };

   if ((event.body.toLowerCase() == "🥵🥵") || (event.body.toLowerCase() == "🥵") || (event.body.toLowerCase() == "🤤")) {
     return api.sendMessage("️এই গুলা কেন দেও বুঝি, সব বুঝি uff,আর তুমি নাহ বুঝলে আমার Joy বস কে ডাক দেও🙈🙈 ??🤔", threadID);
   };

   if ((event.body.toLowerCase() == "🔥") || (event.body.toLowerCase() == "❤️‍🔥")) {
     return api.sendMessage("️️️ও ভাই গুরুপে আগুন লাগছে আমার ভয় লাগে, আমার Joy জানু কে কেউ ফোন দেও😛", threadID);
   };

   if ((event.body.toLowerCase() == "pic daw") || (event.body.toLowerCase() == "photo daw")) {
     return api.sendMessage("️ Joy বসের in boxa জাও ওখানে দিছি😵", threadID);
   };

   if ((event.body.toLowerCase() == "বট দেও") || (event.body.toLowerCase() == "বট বানাইয়া দাও")) {
     return api.sendMessage("️ তুমি নিজেই বানাই নাও 😒😼, Joy অনেক ব্যস্ত্ এক্ষণ", threadID);
   };
  
   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️ ওইদিক এ কি দেখো জানু,আমি তো এইদিক এ 🤭😽", threadID);
   };

   if ((event.body.toLowerCase() == "আমাকে কেউ ভালোবাসে না") || (event.body.toLowerCase() == "kew valobashe na amk") || (event.body.toLowerCase() == "কেউ ভালোবাসে না আমাকে")) {
     return api.sendMessage("️ আবে ওই শালী 😡 আমার Joy বস কে i love you বল🥰", threadID);
   };

   if ((event.body.toLowerCase() == "🤦‍♀️") || (event.body.toLowerCase() == "🤦") || (event.body.toLowerCase() == "🤦🏻‍♂️")) {
     return api.sendMessage("আরে ভাই,মাথায় বারি মারিই না,মাথা ফেটে যাবে😬", threadID);
   };
   
  if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "😹") || (event.body.toLowerCase() == "🤣")) {
     return api.sendMessage("__আরে আস্তে হাসতে হাসতে দাঁত খুলে যাবে 🤣🤣 তখন আর মাংস খেতে পারবি না 🐸", threadID);
   };

   if ((event.body.toLowerCase() == "🤩") || (event.body.toLowerCase() == "👉👈") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "🤭")) {
     return api.sendMessage("__মনে কি লাড্ডু ফুটছে?🥰", threadID);
   };

   if ((event.body.toLowerCase() == "Kamon aco?") || (event.body.toLowerCase() == "কেমন আছেন সবাই") || (event.body.toLowerCase() == "kamon aco sobi?") || (event.body.toLowerCase() == "কেমন আছো সবাই?") || (event.body.toLowerCase() == "kamon aso?")) {
     return api.sendMessage("alhamdulilah valo tmi🥰", threadID);
   };

   if ((event.body.toLowerCase() == "@everyone call a aso") || (event.body.toLowerCase() == "কলে আসো")) {
     return api.sendMessage("আসালামু ওয়ালাইকুম আশা করি সবাই ভালো আছেন আমি Joy এর বট বলতে আছি আমি কলে আসতে পারি না", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍 ")) {
     return api.sendMessage("এৃঁতোৃঁ ভাৃঁলোৃঁবাৃঁসাৃঁ কৃঁইৃঁ পাৃঁওৃঁ আৃঁমাৃঁরৃঁ বৃঁসৃ্ঁ জৃঁয়ৃঁ কেৃঁ এৃঁকৃঁটুৃঁ দেৃঁওৃঁ🥰", threadID);
