const discord = require('discord.js');

exports.run = function (client, message, args) {
     client.db.get('tdt_notification').then((newsItem) => {
          let data = newsItem.data;

          let embed = new discord.MessageEmbed()
               .setColor('0x80c7d0')
               .setTitle('Xem Thêm ...')
               .setURL('https://college.tdtu.edu.vn/thong-bao');

          data.forEach((TDTNewsData, index) => {
               if (index > 5) return;

               embed.addField(
                    `:snowflake: ${TDTNewsData.title}`,
                    `➠ **Loại**: **${TDTNewsData.type}**\n➠ **Ngày**: **${TDTNewsData.date}**\n➠ **Link**: ${TDTNewsData.link}`,
                    false
               );
          });

          message.channel.send(embed);
     });
};
