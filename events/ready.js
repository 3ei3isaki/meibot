const chalk = require('chalk');

module.exports = (client, message) => {
     client.user.setPresence({
          game: {
               name: 'დPoi_<e:HeLp>'
          },
          status: 'online'
     })
     // const readyHookEmbed = new discord.RichEmbed()
     //      .addField(client.user.username, `**Start Complete!**\n>>> **დ**Meow`, false)
     //      .setColor('0x80c7d0')
     // logHook.send(readyHookEmbed)
     console.log(`---------------------------\n>>> ${chalk.bold(client.user.tag)} is Ready!\n---------------------------`)
     console.timeEnd(chalk.bold("Ready"));
}
