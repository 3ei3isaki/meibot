module.exports = function (message, discord, Args, animenew) {


	const animenewNotificationEmbed = new discord.RichEmbed()
		.addField(':snowflake: Anime New Command!',`:satellite_orbital: :satellite_orbital: :satellite_orbital:`,false)
		.addField(`${animenew[0].ep}`,`**${animenew[0].title}**`,false)
    .setColor('0x80c7d0')
    .setTitle('Xem Thêm ...')
    .setURL(animenew[0].link)
    .setThumbnail(animenew[0].img)
	message.channel.send(animenewNotificationEmbed)

  const animenewNotificationEmbed1 = new discord.RichEmbed()
    .addField(':snowflake: Anime New Command!',`:satellite_orbital: :satellite_orbital: :satellite_orbital:`,false)
    .addField(`${animenew[1].ep}`,`**${animenew[1].title}**`,false)
    .setColor('0x80c7d0')
    .setTitle('Xem Thêm ...')
    .setURL(animenew[1].link)
    .setThumbnail(animenew[1].img)
  message.channel.send(animenewNotificationEmbed1)

  const animenewNotificationEmbed2 = new discord.RichEmbed()
    .addField(':snowflake: Anime New Command!',`:satellite_orbital: :satellite_orbital: :satellite_orbital:`,false)
    .addField(`${animenew[2].ep}`,`**${animenew[2].title}**`,false)
    .setColor('0x80c7d0')
    .setTitle('Xem Thêm ...')
    .setURL(animenew[2].link)
    .setThumbnail(animenew[2].img)
  message.channel.send(animenewNotificationEmbed2)

  const animenewNotificationEmbed3 = new discord.RichEmbed()
    .addField(':snowflake: Anime New Command!',`:satellite_orbital: :satellite_orbital: :satellite_orbital:`,false)
    .addField(`${animenew[3].ep}`,`**${animenew[3].title}**`,false)
    .setColor('0x80c7d0')
    .setTitle('Xem Thêm ...')
    .setURL(animenew[3].link)
    .setThumbnail(animenew[3].img)
  message.channel.send(animenewNotificationEmbed3)


  const animenewNotificationEmbed4 = new discord.RichEmbed()
    .addField(':snowflake: Anime New Command!',`:satellite_orbital: :satellite_orbital: :satellite_orbital:`,false)
    .addField(`${animenew[4].ep}`,`**${animenew[4].title}**`,false)
    .setColor('0x80c7d0')
    .setTitle('Xem Thêm ...')
    .setURL(animenew[4].link)
    .setThumbnail(animenew[4].img)
  message.channel.send(animenewNotificationEmbed4)
}
