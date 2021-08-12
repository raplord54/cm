const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const IQDESC = "Yanıtladığınız kişinin iq testini ölçer.";

Asena.addCommand({pattern: 'cm', fromMe: true, desc: IQDESC }, (async (message, match) => {

    if (message.reply_message === false) return await message.sendMessage('```Lütfen bir mesaja yanıt verin!```');

    await message.client.sendMessage(message.jid, '' + '@' + message.reply_message.jid.split('@')[0] + ' ```Adlı kişiye yarak ay pardon yürek testi yapılıyor.. 😋```', MessageType.text, {
        quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

    });

    await new Promise(r => setTimeout(r, 2100));

    var r_text = new Array ();
r_text[0] = "0 cm bu yrk değil başka bir şey aq";
r_text[1] = "1 cm";
r_text[2] = "2 cm";
r_text[3] = "3 cm";
r_text[4] = "4 cm";
r_text[5] = "5 cm";
r_text[6] = "6 cm";
r_text[7] = "7 cm";
r_text[8] = "8 cm";
r_text[9] = "9 cm";
r_text[10] = "10 cm";
r_text[11] = "11 cm";
r_text[12] = "12 cm";
r_text[13] = "13 cm";
r_text[14] = "14 cm";
r_text[15] = "15 cm çıkar da gölgesinde rakı içelim";
r_text[16] = "16 cm çıkar da gölgesinde rakı içelim";
r_text[17] = "17 cm çıkar da gölgesinde rakı içelim";
r_text[18] = "18 cm çıkar da gölgesinde serinleyelim reis";
r_text[19] = "19 cm çıkar da gölgesinde serinleyelim reis";
r_text[20] = "20 cm aletin ayrı bir kimliği var mı ?";
r_text[21] = "31 cm vergi ödüyon mu reis";

    var i = Math.floor(21*Math.random())
    
    await message.sendMessage(`[■□□□□□□□□□] 10%`);
    
    await message.sendMessage(`[■■□□□□□□□□] 20%`);
    
    await message.sendMessage(`[■■■□□□□□□□] 30%`);
    
    await message.sendMessage(`[■■■■□□□□□□] 40%`);
    
    await message.sendMessage(`[■■■■■□□□□□] 50%`);
    
    await message.sendMessage(`[■■■■■■□□□□] 60%`);
    
    await message.sendMessage(`[■■■■■■■□□□] 70%`);
    
    await message.sendMessage(`[■■■■■■■■□□] 80%`);
    
    await message.sendMessage(`[■■■■■■■■■□] 90%`);
    
    await message.sendMessage(`[■■■■■■■■■■] 100%`);
    
    await new Promise(r => setTimeout(r, 800));
    
    var respoimage = await axios.get(`https://assets.change.org/photos/9/bc/ns/YnbCNSrkdlywghB-800x450-noPad.jpg?1528647330`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*→ Pipi testi tamamlandı!*\n*→ Pipi Uzunluğu:* ${r_text[i]} 🤷 Coded by Semix`})
    
}));
