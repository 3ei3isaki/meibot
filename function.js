let getNow = function() {
  let d = new Date();
  let t = d.getDay;
  let ng = d.getDate();
  let th = d.getMonth() + 1;
  let n = d.getFullYear();
  let p = d.getMinutes();
  let g = d.getHours();
  let gi = d.getSeconds();

  return (g > 9 ? g : '0' + g) + ':' + (p > 9 ? p : '0' + p) + ':' + (gi > 9 ? gi : '0' + gi) + ' ' + (ng > 9 ? ng : '0' + ng) + '/' + (th > 9 ? th : '0' + th) + '/' + n;
}


let autoDel = function(message, delay) {
  message.channel.fetchMessage(message.id).then(tn => {
    setTimeout(function() {
      message.delete(tn)
    }, delay)
  })
}

let welcomeEv = (discord, hook, mem, mes = '', color = '0xffa0fd') => {
  const welcomeHookEmbed = new discord.RichEmbed()
    .setAuthor(mes, `https://cdn.discordapp.com/avatars/${mem.user.id}/${mem.user.avatar}.png`)
    .setColor(color)
  hook.send(welcomeHookEmbed);
}

let userStatus = (discord, hook, x, mes = '', color = '0xffa0fd') => {
  const statusHookEmbed = new discord.RichEmbed()
    .setAuthor(`${x.user.username} ${mes}`, `https://cdn.discordapp.com/avatars/${x.user.id}/${x.user.avatar}.png`)
    .setColor(color)
  hook.send(statusHookEmbed);
}

let logEv = (message, command, discord, bot, hook, data = '') => {
  console.log(`\n\n-- Thông báo ------------\n${message.author.username} use ${command} command!\n${getNow()}\n${data == ''?'-------------------------':`${data}\n-------------------------`}`);
  const logEmbed = new discord.RichEmbed()
    .setAuthor(`${message.author.username} use ${command} command!`, `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`)
    .setColor('0xb977ff')
  hook.send(logEmbed)
}

module.exports.welcomeEv = welcomeEv
module.exports.userStatus = userStatus
module.exports.getNow = getNow
module.exports.logEv = logEv
module.exports.autoDel = autoDel