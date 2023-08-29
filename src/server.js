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
            [{text: "Biz haqimizda 📋"}, {text: "Istirohat bog'lari🌳"}], 
            [{ text: "Parklar 🎡"}, {text: "Hayvonot bog'lar 🌲"}],  
        ],
        resize_keyboard: true
    }
   });

   
});


