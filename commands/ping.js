exports.run = (client, msg) => msg.channel.send(
     client.embed.command.ping(
          client.ws.ping
     )
)
