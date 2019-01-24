module.exports = function(message, discord, info, Args) {

    let email = info[Args[2]].email.split(':')
    let fb = info[Args[2]].fb.split(':')

    const infoEmbed = new discord.RichEmbed()
    .setThumbnail('https://media.tenor.com/images/a5ab0428a1ebb308f48fd7aa6964a0e4/tenor.gif')
    .addField(':snowflake: Info Command',`➠Profile của **${info[Args[2]].ten}**`,false)
    .setAuthor(`${info[Args[2]].ten}`, "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/41688010_813800099011417_2604603558548471808_n.jpg?_nc_cat=104&oh=58cca9ad45547f1790dc9dda0b60e440&oe=5C2C7F1B")
    .setImage("https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/41695174_813800802344680_8449693288331476992_n.jpg?_nc_cat=108&oh=29980518054354e8b7ba2da75bc99d21&oe=5C1622D1")
    .addField(`${info[Args[2]].sn}`,'────────────────────',false)
    .addField(`${info[Args[2]].gioitinh}`,'────────────────────',false)
    .addField('Email',`➠ ${email[0]}\n➠ ${email[1]}\n➠ ${email[2]}\n────────────────────`,false)
    .addField('Số điện thoại',`${info[Args[2]].sdt}\n────────────────────`,false)
    .addField('Số CMND',`${info[Args[2]].cmnd}\n────────────────────`,false)
    .addField('Facebook',`➠ ${fb[0]}\n➠ ${fb[1]}\n────────────────────`,false)
    .addField('Youtube',`${info[Args[2]].yt}\n────────────────────`,false)
    .addField('Osu!',`${info[Args[2]].osu}\n────────────────────`,false)
    .addField('my Anime List',`${info[Args[2]].myanimelist}\n────────────────────`,false)
    .addField('My Waifu List',`${info[Args[2]].mywaifulist}\n────────────────────`,false)
    .setColor('0x80c7d0')
    message.channel.send(infoEmbed)
}
