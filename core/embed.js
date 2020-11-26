const Discord = require('discord.js');

module.exports = {

     system: {
          welcome: (member, msg = "Welcome", color = '0xffa0fd') => new Discord.MessageEmbed()
               .setAuthor(msg, `https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}.png`)
               .setColor(color)
          ,

          userStatus: (member, msg = '', color = '0xffa0fd') => new discord.RichEmbed()
               .setAuthor(`${member.user.username} ${msg}`, `https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}.png`)
               .setColor(color)
          ,

          log: (message, command, color = '0xb977ff') => new discord.RichEmbed()
               .setAuthor(`${message.author.username} use ${command} command!`, `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`)
               .setColor(color)
          ,
     },

     command: {
          help: (config, color = `0x80c7d0`) => new Discord.MessageEmbed()
               .setThumbnail('https://media1.tenor.com/images/21515181b13a4dd39202662ebd50e558/tenor.gif')
               .addField(`:snowflake: Help Command!`, `● Cách dùng lệnh: <**Prefix** + **Command**>\n● Prefix hiện tại: **${config.prefix}**\n*Auto Del Mgs: Thêm !e trước tin nhắn cần xóa\n────────────────────`, false)
               .addField(`:one: ${config.prefix}Help`, `➠ Lệnh trợ giúp\n────────────────────`, false)
               .addField(`:two: ${config.prefix}Uptime`, `➠ Thời gian config đã hoạt động!\n────────────────────`, false)
               .addField(`:three: ${config.prefix}Ping`, `➠ Kiểm tra Ping!\n────────────────────`, false)
               .addField(`:four: ${config.prefix}Info:<Name>`, `➠ Xem Info\n➠ Các Info hiện có: **Mei**\n**VD**: **e:Info:Mei**\n────────────────────`, false)
               .addField(`:five: ${config.prefix}Weather`, `➠ Xem thông tin thời tiết ở TP.HCM\n────────────────────`, false)
               .addField(`:six: ${config.prefix}Neko:<Type>`, `➠ Lấy hình ảnh các kiểu <3\n#Các loại hình ảnh **Type**\n + **Smug**  <=>  **Tự mãn**\n + **Bakayarou**  <=>  **OcsChos**\n + **Huggg**  <=>  **Ôm thui mà**\n + **Meow**  <=>  **Hình con mều RealLife**\n + **Slap**  <=>  **Ăn Tát**\n + **Pat**  <=>  **Xoa, vỗ đầu ><**\n + **Neko**  <=>  **Hình các bé mều trong Anime**\n + **NekoGif**  <=>  **Giống Neko nhưng mà là ảnh Gif**\n + **FoxGirl**  <=>  **Giống Neko nhưng mà là mấy bé cáo**\n + **Feed**  <=>  **Đơn giản là cho ăn :D**\n + **Cuddle**  <=>  **cũng là ôm nhưng ... ko biết diễn ta sao đây thử đi rùi bít Ahihi**\n + **Cattext**  <=>  **Kí tự mều ý mà ~**\n + **Kemonomimi**  <=>  **À thì nó là Kemonomimi :D**\n + **Holo**  <=>  **Ai coi Spice and Wolf thì chắc biết rù XD**\n + **Tickle**  <=>  **Chọt lét ý mà nghe ba chấm ghê :)**\n + **Kiss**  <=>  **Tụi bây biết nó nghĩa là gì mà :))**\n**VD**: **e:Neko:NekoGif**\n────────────────────`, false)
               .addField(`:seven: ${config.prefix}Movie:<Name film>`, `➠ Tìm một phim (Movie) nào đó từ trang **themoviedb.org**\n────────────────────`, false)
               .addField(`:eight: ${config.prefix}TDT`, `➠ Xem 4 thông báo trên cùng của TDT\n────────────────────`, false)
               .addField(`:nine: ${config.prefix}sUrl:(URL cần rút gọn)`, `➠ Rút gọn URL\n**● Lưu ý:** URL phải bỏ trong cặp dấu **()** nếu sử dụng lệnh mà ko thấy phản hồi thì có nghĩa là Link sai hoặc cú pháp ko đúng ...\n**VD**: **e:sUrl:(https://www.youtube.com/watch?v=xnQ1CZLt3NY)**\n────────────────────`, false)
               .addField(`:one::zero: ${config.prefix}AnimeNew`, `➠ Xem các anime mới cập nhật từ **Animehay.Tv**\n────────────────────`, false)
               .setColor(color)
          ,

          animeNew: (data, color = '0x80c7d0') => new Discord.MessageEmbed()
               .addField(':snowflake: Anime New Command!', `:satellite_orbital: :satellite_orbital: :satellite_orbital:`, false)
               .addField(`${data.ep}`, `**${data.title}**`, false)
               .setColor(color)
               .setTitle('Xem Thêm ...')
               .setURL(data.link)
               .setThumbnail(data.img)
          ,

          ping: (
               msgCreatedTimestamp,
               color = '0x80c7d0',
               thumbnailURL = 'https://media1.tenor.com/images/19b2209d5d6a299c0f4cc252c983e866/tenor.gif'
          ) => new Discord.MessageEmbed()
               .addField(
                    ':snowflake: Ping Command',
                    `> Pong ${(Date.now() - msgCreatedTimestamp) / 1000}s`,
                    false
               )
               .setColor(color)
               .setThumbnail(thumbnailURL)
          ,
     }


}
