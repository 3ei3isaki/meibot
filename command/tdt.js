module.exports = function (message, discord, Args, TDT) {
	const TDTNotificationEmbed = new discord.RichEmbed()
		.addField(':snowflake: TDT Notification Command!',`:bell: :bell: :bell: **4** thông báo trên cùng!`,false)
		.addField(`:one: ${TDT[0].title}`,`➠ **Loại**: **${TDT[0].type}**\n➠ **Ngày**: **${TDT[0].date}**\n➠ **Link**: ${TDT[0].link}`,false)
		.addField(`:two: ${TDT[1].title}`,`➠ **Loại**: **${TDT[1].type}**\n➠ **Ngày**: **${TDT[1].date}**\n➠ **Link**: ${TDT[1].link}`,false)
		.addField(`:three: ${TDT[2].title}`,`➠ **Loại**: **${TDT[2].type}**\n➠ **Ngày**: **${TDT[2].date}**\n➠ **Link**: ${TDT[2].link}`,false)
		.addField(`:four: ${TDT[3].title}`,`➠ **Loại**: **${TDT[3].type}**\n➠ **Ngày**: **${TDT[3].date}**\n➠ **Link**: ${TDT[3].link}`,false)
    .setColor('0x80c7d0')
		.setTitle('Xem Thêm ...')
    .setURL('http://caodang.tdtu.edu.vn/thong-bao')
    .setThumbnail('http://caodang.tdtu.edu.vn/sites/caodang/files/logo-tdt-120.png')
	message.channel.send(TDTNotificationEmbed)
}
