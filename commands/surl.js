const Discord = require('discord.js');

exports.run = function (message, discord, argsLink, sUrl) {

     sUrl.short(argsLink, function (err, url) {
          const shortUrlEmbed = new discord.MessageEmbed()
               .addField(':snowflake: shortUrl Command', `Link được rút gọn thành công XD!\n➠ ${url}\nLink gốc!\n➠ ${argsLink}`, false)
               .setColor('0x80c7d0')
               .setThumbnail('https://is.gd/isgdlogo.jpg')
               .setTitle('Nhấn vào để tự tay rút gọn Link ...')
               .setURL('https://is.gd/')
          message.channel.send(shortUrlEmbed)
     })
}
