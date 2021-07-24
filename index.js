const { Telegraf } = require("telegraf");
// const { Composer } = require('micro-bot')

// const bot = new Composer() 
const bot = new Telegraf('1862762472:AAGoyaWYxxHpL78GPyBAsQnUnjKr-Yb_r-w', {})
// 1862762472:AAGoyaWYxxHpL78GPyBAsQnUnjKr-Yb_r-w
bot.start(ctx => ctx.deleteMessage())

bot.on('forward_date', ctx => {
    ctx.deleteMessage()
    console.log('______________',ctx.update.message)
})
bot.launch() 
// module.exports = bot
