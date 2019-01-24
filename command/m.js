module.exports = function(message, discord, args, ytdl) {
    /*const pingEmbed = new discord.RichEmbed()
    .addField(':snowflake: Ping Command',`Pong ${(- message.createdTimestamp + Date.now())/1000}s`,false)
 	  .setColor('0x80c7d0')
 	  .setThumbnail('https://media1.tenor.com/images/19b2209d5d6a299c0f4cc252c983e866/tenor.gif')
    message.channel.send(pingEmbed)*/



    const streamOptions = { seek: 0, volume: 1 };
    message.member.voiceChannel.join().then(connection => {
      const stream = ytdl('https://www.youtube.com/watch?v=XAWgeLF9EVQ', { filter : 'audioonly' });
      const dispatcher = connection.playStream(stream, streamOptions);
    })
    .catch(console.error);
  }
