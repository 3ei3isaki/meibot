const animeNewData = require('../DATA/animeNew.json');

exports.run = function (client, message) {
     animeNewData.forEach(item => message.channel.send(client.embed.command.animeNew(item)));
}
