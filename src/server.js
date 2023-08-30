import TelegramBot from "node-telegram-bot-api";
import "dotenv/config"
  

const token = "5812956859:AAGH3BfJBxc1y2v3uKW2RbWdfZgVfyENJ58";

const bot = new TelegramBot(token, {
    polling: true
})


bot.onText(/\/start/, msg => {
   const {id, first_name} = msg.from
   bot.sendMessage(id, `Salom ${first_name} bizning botimizga xush kelibsiz 😊`, {
    reply_markup: {
        keyboard: [
            [{text: "Biz haqimizda 📋"}, {text: "Istirohat bog'lari 🌳"}], 
            [{ text: "Parklar 🎡"}, {text: "Hayvonot bog'lar 🌲"}],  
        ],
        resize_keyboard: true
    }
   });

});







bot.on("message", (msg) => {
  const {id} = msg.from

  if(msg.text === "Biz haqimizda 📋"){
    bot.sendMessage(id, `Assalomu alaykum, hurmatli botimizning foydalanuvchisi! Sizning qiziqishingizdan hursandmiz va sizga bizning istirohat bog'larimiz haqida batafsil ma'lumot berishga tayyormiz.

    Bizning istirohat bog'larimizning har biri o'ziga xos sharoit va  imkoniyatlarni taklif qiladi. Bizning parklarimiz sizga tabiat bilan sekin va tinch vaqtni o'tkazish imkoniyatini beradi. Bizning parklarimizda siz turli xil o'simliklar, gul va moddalar bilan tanishasiz, shuningdek, ularning har birining o'ziga xos xususiyatlarini o'rganasiz.
    
    Hayvonot bog'lari esa bizning istirohat bog'larimizning alohida qismi hisoblanadi. Ular sizga turli xil hayvonot dunyosini ko'rish va ularga yaqinlashish imkoniyatini beradi. Bizning hayvonot bog'imizda siz turli xil hayvonlarni ko'rishingiz mumkin, shu jumladan, turli xil qushlar, reptiliyalar, amfibiylar va xitoylar. Bizning hayvonot bog'imizda sizga hayvonlar haqida ko'proq bilim berish uchun ma'lumotlar ham mavjud.
    
    Bizning istirohat bog'larimiz sizning va oilangizning istirohati uchun eng yaxshi joylardan biri hisoblanadi. Biz sizni bizning bog'larimizga taklif qilamiz, sizning va oilangizning huzurli va xushchaqchaq vaqtni o'tkazishingiz uchun!`)
   
  }
})

bot.on("message" , (msg) => {
  const {id} = msg.from

  if(msg.text === "Istirohat bog'lari 🌳"){
    bot.sendMessage(id, `Toshkentdagi istirohat bog'lari va ularning manzillari`, {
      reply_markup: {
        keyboard: [
          [{text: "Amir Temur xiyoboni"}, {text:"Yapon bog‘i"}],
          [{text: "Botanika bog‘i"}, {text: "G‘alaba bog‘i"}],
          [{text: "Adiblar xiyoboni"}, {text: "Ekobog‘"}],
          [{text: "Navro‘z etnografik bog‘i"}, {text: "Yangi O‘zbekiston bog‘i"}],
          [{text: "MAGIC CITY istirohat va madaniyat bog'i"}, {text: "Orqaga ⬅️"}], 
        ], 
        resize_keyboard: true
      }
    })
  } else if (msg.text === "Orqaga ⬅️"){
    bot.sendMessage(id, "Asosiy menyuga qaytdik!", {
      reply_markup: {
        keyboard: [
          [{text: "Biz haqimizda 📋"}, {text: "Istirohat bog'lari 🌳"}], 
          [{ text: "Parklar 🎡"}, {text: "Hayvonot bog'lar 🌲"}],  
        ],
        resize_keyboard: true
      }
    })
  }
})

bot.on("message", async (msg) => {
      if(msg.text === "Amir Temur xiyoboni"){
        await bot.sendPhoto(msg.from.id )
        await bot.sendLocation(msg.from.id, 41.31202411778365, 69.28006720249844)
      }
})


