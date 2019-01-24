module.exports = function(message, discord, bot, weather, Args) {

    weather.find({search: 'Ho Chi Minh, Vietnam', degreeType:'C'}, function(err, result) {
        if (err) console.log(err);

//        console.log(JSON.stringify(result[0].current, null, 2))

        let current = result[0].current
        let location = result[0].location

        const weatherEmbed = new discord.RichEmbed()
        .setDescription(`${current.skytext}`)
        .addField(':snowflake: Weather Command',`:zap: :zap: :zap:`,false)
        .setAuthor(`Thời tiết ở ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .addField('Múi giờ',`UTC ${location.timezone}`,true)
        .addField('Đơn vị đo',`°${location.degreetype}`,true)
        .addField('Nhiệt độ',`${current.temperature} °${location.degreetype}`,true)
        .addField('Gió',`${current.winddisplay}`,true)
        .addField('Độ ẩm',`${current.humidity} %`,true)
    	.setColor('0x80c7d0')
        message.channel.send(weatherEmbed)
    })
}
