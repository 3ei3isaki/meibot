const discord = require('discord.js');
const sUrl = require('node-url-shortener');

exports.run = function (client, message) {

     let args = message.content.slice(client.config.prefix.length).trim().split(/:+/g);
     args.shift();
     args = args.join(':');
     let end = args.lastIndexOf(')'), start = args.indexOf('(') + 1;
     args = args.slice(start, end);

     sUrl.short(args, function (err, url) {
          const shortUrlEmbed = new discord.MessageEmbed()
               .addField(':snowflake: shortUrl Command', `Link được rút gọn thành công XD!\n➠ ${url}\nLink gốc!\n➠ ${args}`, false)
               .setColor('0x80c7d0')
               .setTitle('Nhấn vào để tự tay rút gọn Link ...')
               .setURL('https://cdpt.in/')
          message.channel.send(shortUrlEmbed)
     })
}
