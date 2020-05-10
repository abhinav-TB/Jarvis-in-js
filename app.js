const TelegramBot = require('node-telegram-bot-api');
 
// replace the value below with the Telegram token you receive from @BotFather
const token = '1087700191:AAHm7jvxWw9lJ3nnspCNDHn3nQEn6GiKlTg';
 
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});
 
// Matches "/echo [whatever]"
bot.onText(/\/pdf (.+)/, (msg, match) => {

 
  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"
 
  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});
 
// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
   pdf('corona')
  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});


const pdf=async (item) => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://www.wikipedia.org/');
    await page.type('input[name=search]', item, {delay: 20})
    await page.click('[class="sprite svg-search-icon"]')
    await page.screenshot({path: 'example.png'});
    await page.pdf({path: `${item}.pdf`, format: 'A4'});
   
    await browser.close();
  };