const discord = require('discord.js');
const nekoClient = require('nekos.life');
const neko = new nekoClient();

exports.run = function (client, message, args) {
     if (args[0] == 'huggg') {
          neko.sfw.hug().then(img => {
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
     } else if (args[0] == 'bakayarou') {
          neko.sfw.baka().then(img => {
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
     } else if (args[0] == 'meow') {
          neko.sfw.meow().then(img => {
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
     } else if (args[0] == 'smug') {
          neko.sfw.smug().then(img => {
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
     } else if (args[0] == 'slap') {
          neko.sfw.slap().then(img => {
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
     } else if (args[0] == 'pat') {
          neko.sfw.pat().then(img => {
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
     } else if (args[0] == 'neko') {
          neko.sfw.neko().then(img => {
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
     } else if (args[0] == 'nekogif') {
          neko.sfw.nekoGif().then(img => {
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
     } else if (args[0] == 'foxgirl') {
          neko.sfw.foxGirl().then(img => {
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
     } else if (args[0] == 'feed') {
          neko.sfw.feed().then(img => {
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
     } else if (args[0] == 'cuddle') {
          neko.sfw.cuddle().then(img => {
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
     } else if (args[0] == 'cattext') {
          neko.sfw.catText().then(img => {
               const nekoEmbed = new discord.MessageEmbed()
                    .addField(':snowflake: Neko Command', '➠ Nyan~ Nyan~ Meow~ Meow~', false)
                    .setTitle(img.cat)
                    .setThumbnail('https://media1.tenor.com/images/21515181b13a4dd39202662ebd50e558/tenor.gif')
               message.channel.send(nekoEmbed)
          })
          return;
     } else if (args[0] == 'kemonomimi') {
          neko.sfw.kemonomimi().then(img => {
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
     } else if (args[0] == 'holo') {
          neko.sfw.holo().then(img => {
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
     } else if (args[0] == 'tickle') {
          neko.sfw.tickle().then(img => {
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
     } else if (args[0] == 'kiss') {
          neko.sfw.kiss().then(img => {
               const nekoEmbed = new discord.MessageEmbed()
                    .addField(':snowflake: Neko Command', '➠ Nyan~ Nyan~ Meow~ Meow~', false)
                    .setTitle('--- > Link < --- Chụt!! (つ ◕_◕ )つ')
                    .setURL(img.url)
                    .setImage(img.url)
                    .setThumbnail('https://media1.tenor.com/images/21515181b13a4dd39202662ebd50e558/tenor.gif')
               message.channel.send(nekoEmbed)
          })
          return;
     } else if (args[0] == 'nsfw-neko') {
          neko.nsfw.neko().then(img => {
               const nekoEmbed = new discord.MessageEmbed()
                    .addField(':snowflake: NSFW Neko Hentai Command', '➠ Nyan~ Nyan~ Meow~ Meow~', false)
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
