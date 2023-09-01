import TelegramBot from "node-telegram-bot-api";
import "dotenv/config"


const token = "5812956859:AAGH3BfJBxc1y2v3uKW2RbWdfZgVfyENJ58";

const bot = new TelegramBot(token, {
  polling: true
})


bot.onText(/\/start/, msg => {
  const { id, first_name } = msg.from
  bot.sendMessage(id, `Salom ${first_name} bizning botimizga xush kelibsiz 😊`, {
    reply_markup: {
      keyboard: [
        [{ text: "Biz haqimizda 📋" }, { text: "Istirohat bog'lari 🌳" }],
        [{ text: "Parklar 🎡" }, { text: "Hayvonot bog'i 🦘" }],
      ],
      resize_keyboard: true
    }
  });

});





bot.on("message", (msg) => {
  const { id } = msg.from

  if (msg.text === "Biz haqimizda 📋") {
    bot.sendMessage(id, `Ushbu bot orqali poytaxtimizda joylashgan istirohat bog'lari, parklar, va hayvonot bog'i kabi manzilgohlarga kirish narxlari, shu bilan birgalikda qayerda joylashganligini bilib olishingiz mumkin. \nBotimiz sizga foydasi tegsa biz bundan mamnunmiz :)
    `)

  }
})

bot.on("message", (msg) => {
  const { id } = msg.from

  if (msg.text === "Istirohat bog'lari 🌳") {
    bot.sendMessage(id, `Toshkentdagi istirohat bog'lari va ularning manzillari`, {
      reply_markup: {
        keyboard: [
          [{ text: "Amir Temur xiyoboni" }, { text: "Yapon bog‘i" }],
          [{ text: "Botanika bog‘i" }, { text: "G‘alaba bog‘i" }],
          [{ text: "Adiblar xiyoboni" }, { text: "Eco Park" }],
          [{ text: "Navro‘z etnografik bog‘i" }, { text: "Yangi O‘zbekiston bog‘i" }],
          [{ text: "MAGIC CITY istirohat va madaniyat bog'i" }, { text: "Orqaga ⬅️" }],
        ],
        resize_keyboard: true
      }
    })
  } else if (msg.text === "Orqaga ⬅️") {
    bot.sendMessage(id, "Asosiy menyuga qaytdik!", {
      reply_markup: {
        keyboard: [
          [{ text: "Biz haqimizda 📋" }, { text: "Istirohat bog'lari 🌳" }],
          [{ text: "Parklar 🎡" }, { text: "Hayvonot bog'i 🦘" }],
        ],
        resize_keyboard: true
      }
    })
  }
})

const locations = {
  "Amir Temur xiyoboni": { lat: 41.31202411778365, lon: 69.28006720249844, message: `Kirish mutlaqo tekin 😊` },
  "Yapon bog‘i": {
    lat: 41.33981932532805,
    lon: 69.28241868122475,
    message: `Bog'ga kirish narxi: 😊\nKattalar uchun - 30000 ming so'm, 👨🏻/👩🏻‍🦰\n3-12 yoshli bolalar uchun -20000 ming so'm,👦🏻/👧🏻\nPensionerlar uchun - 10 000 so‘m.👨🏻‍🦳/👵🏻`
  },
  "Botanika bog‘i": {
    lat: 41.347674357939496, lon: 69.31464885191872,
    message: `Bog'ga kirish narxi: 😊 \nStudentlar uchun - 10000 ming so'm, 👨🏻‍🎓\nMaktab o'quvchilari uchun - 5000 ming so'm, 🏫 \nMaktabgacha ta'limdagilar uchun 3000 ming so'm, 👶🏻 \nPensionerlar uchun - 10 000 so‘m.👨🏻‍🦳/👵🏻, \nVelosipedda sayr qilish 25000 ming so'm`
  },
  "G‘alaba bog‘i": {
    lat: 41.354318068317994, lon: 69.22297264299296,
    message: `Shon-sharaf muzeyida aylanish narxlari 4000-50000 ming so'mgacha narxlarda bo'ladi 😊 \nHar kuni 08:00 dan 17:00 gacha ochiq 🕔`
  },
  "Adiblar xiyoboni": { lat: 41.302578062073025, lon: 69.23554547282222, message: `Kirish mutlaqo tekin 😊\nHar kuni 07:00 dan 24:00 gacha ochiq 🕔` },
  "Eco Park": { lat: 41.30994936610001, lon: 69.29603052904604, message: `Kirish mutlaqo tekin 😊\nHar kuni 05:00 dan 23:00 gacha ochiq 🕔` },
  "Navro‘z etnografik bog‘i": { lat: 41.32662629746737, lon: 69.26603645980231, message: `Kirish mutlaqo tekin 😊\nHar kuni 07:00 dan 24:00 gacha ochiq 🕔` },
  "Yangi O‘zbekiston bog‘i": { lat: 41.327210322281346, lon: 69.4380532114791, message: `Kirish mutlaqo tekin 😊\nHar kuni 10:00 dan 24:00 gacha ochiq 🕔` },
  "MAGIC CITY istirohat va madaniyat bog'i": { lat: 41.3042680317906, lon: 69.24654193420099, message: `Kirish mutlaqo tekin 😊\nHar kuni 10:00 dan 22:00 gacha ochiq 🕔` }
};

bot.on("message", async (msg) => {
  const location = locations[msg.text]

  if (location) {
    await bot.sendLocation(msg.from.id, location.lat, location.lon)
    if (location.message) {
      await bot.sendMessage(msg.from.id, location.message)
    }
  }
})



bot.on("message", async (msg) => {
  const { id } = msg.from

  if (msg.text === "Parklar 🎡") {
    bot.sendMessage(id, `Toshkentdagi parklar va ularning manzillari`, {
      reply_markup: {
        keyboard: [
          [{ text: "ANHOR LOKOMOTIV BOG'I" }, { text: "ASHXOBOD ISTIROHAT VA MADANIYAT BOG'I" }],
          [{ text: "DO'STLIK MADANIYAT VA ISTIROHAT BOG'I" }, { text: "G'AFUR G'ULOM NOMLI MADANIYAT VA ISTIROHAT BOGI" }],
          [{ text: "Toshkentlend" }, { text: "Orqaga ⬅️" }],
        ],
        resize_keyboard: true
      }
    })
  }
})


const locations2 = {
  "ANHOR LOKOMOTIV BOG'I": {
    lat: 41.32888018281925, lon: 69.269297450335,
    message: `Kirish mutlaqo tekin 😊, \nParkda juda ajoyib atraksionlar mavjud 🎠, \nHar kuni 09:00 dan 23:00 gacha ochiq 🕔`
  },
  "ASHXOBOD ISTIROHAT VA MADANIYAT BOG'I": {
    lat: 41.3046129944194, lon: 69.30266079475221,
    message: `Kirish narxi 4000 ming so'm 😊, \nParkda juda ajoyib atraksionlar mavjud 🎢, \nHar kuni 10:00 dan 22:00 gacha ochiq 🕔`
  },
  "DO'STLIK MADANIYAT VA ISTIROHAT BOG'I": {
    lat: 41.28906760243861, lon: 69.25202907620032,
    message: `Kirish mutlaqo tekin 😊, \nHar kuni 10:00 dan 23:00 gacha ochiq 🕔`
  },
  "G'AFUR G'ULOM NOMLI MADANIYAT VA ISTIROHAT BOGI": {
    lat: 41.282584472610864, lon: 69.21545423778322,
    message: `Kirish mutlaqo tekin 😊, \nParkda juda ajoyib atraksionlar mavjud 🎢,  \nHar kuni 10:00 dan 20:00 gacha ochiq 🕔`
  },
  "Toshkentlend": {
    lat: 41.339512038831366, lon: 69.28439027632628,
    message: `Kirish mutlaqo tekin 😊, \nToshkendland asosan yozning qaynoq kunlarida xizmat ko'rsatadi :)`
  }


}


bot.on("message", async (msg) => {
  const location2 = locations2[msg.text]
  if (location2) {
    await  bot.sendLocation(msg.from.id, location2.lat, location2.lon)
    if (location2.message) {
     await bot.sendMessage(msg.from.id, location2.message)
    }
  }
})

bot.on("message", async (msg) => {
  const {id} = msg.from
  if(msg.text === "Hayvonot bog'i 🦘"){
    bot.sendMessage(id, "Toshkent hayvonot bog'i va uning manzili", {
      reply_markup: {
        keyboard: [
          [{text: "Hayvonot bog'i manzili"}, { text: "Orqaga ⬅️"}]
        ],
        resize_keyboard: true
      }
    })
  }
})

bot.on("message", async (msg) => {
  const {id} = msg.from
  if(msg.text === "Hayvonot bog'i manzili"){
     await bot.sendLocation(id, 41.34393833056312, 69.30998482420895,)
     await bot.sendMessage(id, `Kattalar uchun kirish narxi - 35000 ming so'm, \n7-16 yoshgacha bo'lganlar uchun 20000 ming so'm, \n Imkoniyati cheklanganlar va 7 yoshdan kichkinalar uchun bepul`)
  }
})


