const Discord = require('discord.js');

exports.run = function (message, discord, neko, Args) {

     if (Args[2] == 'huggg') {
          neko.getSFWHug().then(img => {
               const nekoEmbed = new discord.MessageEmbed()
                    .addField(':snowflake: Neko Command', `➠ Nyan~ Nyan~ Meow~ Meow~`, false)
                    .setTitle('--- > Link < --- Ôm Ôm Hugggggg ><')
                    .setURL(img.url)
                    .setImage(img.url)
                    .setColor('0x80c7d0')
                    .setThumbnail('https://media1.tenor.com/images/21515181b13a4dd39202662ebd50e558/tenor.gif')
               message.channel.send(nekoEmbed)
          })
          return;
     } else if (Args[2] == 'bakayarou') {
          neko.getSFWBaka().then(img => {
               const nekoEmbed = new discord.MessageEmbed()
                    .addField(':snowflake: Neko Command', '➠ Nyan~ Nyan~ Meow~ Meow~', false)
                    .setTitle('--- > Link < --- Urusai Urusai!!!!!!!!!!!')
                    .setURL(img.url)
                    .setImage(img.url)
                    .setColor('0x80c7d0')
                    .setThumbnail('https://media1.tenor.com/images/21515181b13a4dd39202662ebd50e558/tenor.gif')
               message.channel.send(nekoEmbed)
          })
          return;
     } else if (Args[2] == 'meow') {
          neko.getSFWMeow().then(img => {
               const nekoEmbed = new discord.MessageEmbed()
                    .addField(':snowflake: Neko Command', '➠ Nyan~ Nyan~ Meow~ Meow~', false)
                    .setTitle('--- > Link < --- Nyaaaaaaaaaaaa~~~~~~~~~~~')
                    .setURL(img.url)
                    .setImage(img.url)
                    .setColor('0x80c7d0')
                    .setThumbnail('https://media1.tenor.com/images/21515181b13a4dd39202662ebd50e558/tenor.gif')
               message.channel.send(nekoEmbed)
          })
          return;
     } else if (Args[2] == 'smug') {
          neko.getSFWSmug().then(img => {
               const nekoEmbed = new discord.MessageEmbed()
                    .addField(':snowflake: Neko Command', '➠ Nyan~ Nyan~ Meow~ Meow~', false)
                    .setTitle('--- > Link < --- Tự mãn ><')
                    .setURL(img.url)
                    .setImage(img.url)
                    .setColor('0x80c7d0')
                    .setThumbnail('https://media1.tenor.com/images/21515181b13a4dd39202662ebd50e558/tenor.gif')
               message.channel.send(nekoEmbed)
          })
          return;
     } else if (Args[2] == 'slap') {
          neko.getSFWSlap().then(img => {
               const nekoEmbed = new discord.MessageEmbed()
                    .addField(':snowflake: Neko Command', '➠ Nyan~ Nyan~ Meow~ Meow~', false)
                    .setTitle('--- > Link < --- Tát lật mặt giờ :>')
                    .setURL(img.url)
                    .setImage(img.url)
                    .setColor('0x80c7d0')
                    .setThumbnail('https://media1.tenor.com/images/21515181b13a4dd39202662ebd50e558/tenor.gif')
               message.channel.send(nekoEmbed)
          })
          return;
     } else if (Args[2] == 'pat') {
          neko.getSFWPat().then(img => {
               const nekoEmbed = new discord.MessageEmbed()
                    .addField(':snowflake: Neko Command', '➠ Nyan~ Nyan~ Meow~ Meow~', false)
                    .setTitle('--- > Link < --- Xoa xoa vỗ vỗ :>')
                    .setURL(img.url)
                    .setImage(img.url)
                    .setColor('0x80c7d0')
                    .setThumbnail('https://media1.tenor.com/images/21515181b13a4dd39202662ebd50e558/tenor.gif')
               message.channel.send(nekoEmbed)
          })
          return;
     } else if (Args[2] == 'neko') {
          neko.getSFWNeko().then(img => {
               const nekoEmbed = new discord.MessageEmbed()
                    .addField(':snowflake: Neko Command', '➠ Nyan~ Nyan~ Meow~ Meow~', false)
                    .setTitle('--- > Link < --- Mều')
                    .setURL(img.url)
                    .setImage(img.url)
                    .setColor('0x80c7d0')
                    .setThumbnail('https://media1.tenor.com/images/21515181b13a4dd39202662ebd50e558/tenor.gif')
               message.channel.send(nekoEmbed)
          })
          return;
     } else if (Args[2] == 'nekogif') {
          neko.getSFWNekoGif().then(img => {
               const nekoEmbed = new discord.MessageEmbed()
                    .addField(':snowflake: Neko Command', '➠ Nyan~ Nyan~ Meow~ Meow~', false)
                    .setTitle('--- > Link < --- Mều Gif')
                    .setURL(img.url)
                    .setImage(img.url)
                    .setColor('0x80c7d0')
                    .setThumbnail('https://media1.tenor.com/images/21515181b13a4dd39202662ebd50e558/tenor.gif')
               message.channel.send(nekoEmbed)
          })
          return;
     } else if (Args[2] == 'foxgirl') {
          neko.getSFWFoxGirl().then(img => {
               const nekoEmbed = new discord.MessageEmbed()
                    .addField(':snowflake: Neko Command', '➠ Nyan~ Nyan~ Meow~ Meow~', false)
                    .setTitle('--- > Link < --- <3 <3')
                    .setURL(img.url)
                    .setImage(img.url)
                    .setColor('0x80c7d0')
                    .setThumbnail('https://media1.tenor.com/images/21515181b13a4dd39202662ebd50e558/tenor.gif')
               message.channel.send(nekoEmbed)
          })
          return;
     } else if (Args[2] == 'feed') {
          neko.getSFWFeed().then(img => {
               const nekoEmbed = new discord.MessageEmbed()
                    .addField(':snowflake: Neko Command', '➠ Nyan~ Nyan~ Meow~ Meow~', false)
                    .setTitle('--- > Link < --- <3 <3')
                    .setURL(img.url)
                    .setImage(img.url)
                    .setColor('0x80c7d0')
                    .setThumbnail('https://media1.tenor.com/images/21515181b13a4dd39202662ebd50e558/tenor.gif')
               message.channel.send(nekoEmbed)
          })
          return;
     } else if (Args[2] == 'cuddle') {
          neko.getSFWCuddle().then(img => {
               const nekoEmbed = new discord.MessageEmbed()
                    .addField(':snowflake: Neko Command', '➠ Nyan~ Nyan~ Meow~ Meow~', false)
                    .setTitle('--- > Link < --- <3 <3')
                    .setURL(img.url)
                    .setImage(img.url)
                    .setColor('0x80c7d0')
                    .setThumbnail('https://media1.tenor.com/images/21515181b13a4dd39202662ebd50e558/tenor.gif')
               message.channel.send(nekoEmbed)
          })
          return;
     } else if (Args[2] == 'cattext') {
          neko.getSFWCatText().then(img => {
               const nekoEmbed = new discord.MessageEmbed()
                    .addField(':snowflake: Neko Command', '➠ Nyan~ Nyan~ Meow~ Meow~', false)
                    .setTitle(img.cat)
                    .setThumbnail('https://media1.tenor.com/images/21515181b13a4dd39202662ebd50e558/tenor.gif')
               message.channel.send(nekoEmbed)
          })
          return;
     } else if (Args[2] == 'kemonomimi') {
          neko.getSFWKemonomimi().then(img => {
               const nekoEmbed = new discord.MessageEmbed()
                    .addField(':snowflake: Neko Command', '➠ Nyan~ Nyan~ Meow~ Meow~', false)
                    .setTitle('--- > Link < --- <3 <3')
                    .setURL(img.url)
                    .setImage(img.url)
                    .setColor('0x80c7d0')
                    .setThumbnail('https://media1.tenor.com/images/21515181b13a4dd39202662ebd50e558/tenor.gif')
               message.channel.send(nekoEmbed)
          })
          return;
     } else if (Args[2] == 'holo') {
          neko.getSFWHolo().then(img => {
               const nekoEmbed = new discord.MessageEmbed()
                    .addField(':snowflake: Neko Command', '➠ Nyan~ Nyan~ Meow~ Meow~', false)
                    .setTitle('--- > Link < --- <3 <3')
                    .setURL(img.url)
                    .setImage(img.url)
                    .setColor('0x80c7d0')
                    .setThumbnail('https://media1.tenor.com/images/21515181b13a4dd39202662ebd50e558/tenor.gif')
               message.channel.send(nekoEmbed)
          })
          return;
     } else if (Args[2] == 'tickle') {
          neko.getSFWTickle().then(img => {
               const nekoEmbed = new discord.MessageEmbed()
                    .addField(':snowflake: Neko Command', '➠ Nyan~ Nyan~ Meow~ Meow~', false)
                    .setTitle('--- > Link < --- XD')
                    .setURL(img.url)
                    .setImage(img.url)
                    .setColor('0x80c7d0')
                    .setThumbnail('https://media1.tenor.com/images/21515181b13a4dd39202662ebd50e558/tenor.gif')
               message.channel.send(nekoEmbed)
          })
          return;
     } else if (Args[2] == 'kiss') {
          neko.getSFWKiss().then(img => {
               const nekoEmbed = new discord.MessageEmbed()
                    .addField(':snowflake: Neko Command', '➠ Nyan~ Nyan~ Meow~ Meow~', false)
                    .setTitle('--- > Link < --- Chụt!! (つ ◕_◕ )つ')
                    .setURL(img.url)
                    .setImage(img.url)
                    .setThumbnail('https://media1.tenor.com/images/21515181b13a4dd39202662ebd50e558/tenor.gif')
               message.channel.send(nekoEmbed)
          })
          return;
     } else {
          const errNekoEmbed = new discord.MessageEmbed()
               .addField('Err!', 'Mày nhập **Type** tầm bậy gì vậy :) phá hả :D', false)
               .setThumbnail('https://cdn.discordapp.com/attachments/499137149111762944/501050023388250132/wtf.gif')
               .setColor('0x80c7d0')
          message.channel.send(errNekoEmbed)
          return;
     }
}
