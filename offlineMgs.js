module.exports = function(message, discord) {
  const offlineMgsEmbed = new discord.RichEmbed()
    .addField(':snowflake: offlineMgs!', 'Tui đang không online!\n*Hãy\n- Gửi tin nhắn trực tiếp trên Discord\n- Gửi tin nhắn qua Facebook nếu tui online trên Facebook (Fb.com/RuriSakami)\n- Gửi tin nhắn trực tiếp trên Sever ở Channel bất kì rồi Mention tui vào\n- Đợi tui Online rồi nhắn sau! \n XD', false)
    .setColor('0x80c7d0')
  message.channel.send(offlineMgsEmbed)
}