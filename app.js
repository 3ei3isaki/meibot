"use strict"
const WEB_CLIENT = require('./web.js');
const botData = require('./bot.json')
//-----------------------------------------------------------------
const discord = require("discord.js");
const bot = new discord.Client();
const statusHook = new discord.WebhookClient(botData.webhook.statusHook.id, botData.webhook.statusHook.token);
const welcomeHook = new discord.WebhookClient(botData.webhook.welcomeHook.id, botData.webhook.welcomeHook.token);
const errHook = new discord.WebhookClient(botData.webhook.errHook.id, botData.webhook.errHook.token);
const logHook = new discord.WebhookClient(botData.webhook.logHook.id, botData.webhook.logHook.token);
//-----------------------------------------------------------------
const fs = require("fs");
//-----------------------------------------------------------------
const express = require('express');
var app = express();
//-----------------------------------------------------------------
const weather = require('weather-js');
//-----------------------------------------------------------------
const nekos = require('nekos.life')
var neko = new nekos();
//-----------------------------------------------------------------
const movie = require('movie-info')
//-----------------------------------------------------------------
const Xray = require('x-ray')
var x = Xray();
//-----------------------------------------------------------------
const shortUrl = require('node-url-shortener')
//-----------------------------------------------------------------
const info = require('./DATA/info.json')
//-----------------------------------------------------------------
const foi = require('./function.js') // function of botData
const upTime = require('./upTime.js')
const offlineMgs = require('./offlineMgs.js')
//-----------------------------------------------------------------
const myID = botData.myID
let ooo = null; // online or offline
//		Mang: CALOONG. Mat khau: I@mNo.68#7475
//fb osu yt instagram mess myanimelist pinter
console.log('-- Load... ---------------\n- Import Module Complete!');

WEB_CLIENT(express, app, neko);

upTime();

setInterval(function () {
  x('http://caodang.tdtu.edu.vn/thong-bao', 'li.view-list-item', [{
      title: 'div.post-title a',
      link: 'a@href',
      type: 'span.post-categories',
      date: 'span.post-created'
    }])
    .write('./DATA/TDTNotification.json')

  x('http://animehay.tv/phim-moi-cap-nhap', 'div.ah-pad-film', [{
      title: 'span.name-film',
      link: 'a@href',
      ep: 'span.number-ep-film',
      img: 'img@src'
    }])
    .write('./DATA/animeNew.json')
}, 10000)
console.log('- Start Crawler Data!');

bot.on('guildMemberAdd', member => {
  console.log(member)
  foi.welcomeEv(discord, logHook, member, `${member.user.username} vừa tham gia Sever!`);
  foi.welcomeEv(discord, welcomeHook, member, `Welcome to the server, ${member.user.username}`);
});
console.log('- guildMemberAdd Event is Active!');

bot.on('guildMemberRemove', member => {
  foi.welcomeEv(discord, logHook, member, `${member.user.username} vừa rời Sever!`);
});
console.log('- guildMemberRemove Event is Active!');

bot.on('presenceUpdate', (a) => {
  if (a.guild.members.get(myID).presence.status != ooo) {
    ooo = a.guild.members.get(myID).presence.status;
  }
  if (a.user.bot == false && a.guild.id == '459863308875595776') {
    switch (a.user.presence.status) {
      case 'online':
        {
          foi.userStatus(discord, statusHook, a, '> Online!', botData.color.green);
          break;
        }
      case 'dnd':
        {
          foi.userStatus(discord, statusHook, a, '> Không làm phiền! (DnD)', botData.color.red);
          break;
        }
      case 'idle':
        {
          foi.userStatus(discord, statusHook, a, '> Bận! (Idle)', botData.color.yellow);
          break;
        }
      case 'offline':
        {
          foi.userStatus(discord, statusHook, a, '> Offline!', botData.color.gray);
          break;
        }
      default:
        break;
    }
  }
})
console.log('- presenceUpdate Event is Active!');

bot.on('message', message => {
  var mgs = message.content.toLowerCase().split(' ');
  var Args = message.content.toLowerCase().split(':');

  var aL1 = message.content.indexOf('(')
  var aL2 = message.content.indexOf(')')
  var argsLink = message.content.slice(aL1 + 1, aL2)

  var prefix = botData.prefix;
  var commandArgs = Args[1];

  if (message.author.id == bot.user.id) {
    foi.autoDel(message, 180000)
    return;
  } else if (mgs[0].slice(0, prefix.length) == prefix) {

    foi.autoDel(message, 0)

    if (mgs[0] == prefix) return;

    if (commandArgs == 'uptime') {

      const upTimeEmbed = new discord.RichEmbed()
        .addField(':snowflake: upTime Command', `Bot up time: ${uptime}`, false)
        .setColor('0x80c7d0')
      message.channel.send(upTimeEmbed)

      foi.logEv(message, commandArgs, discord, bot, logHook, `Bot upTime: ${uptime}`);

      return;

    }

    try {
      let command = require(`./command/${commandArgs}.js`)

      if (commandArgs == 'ping') {

        command(message, discord, bot);

        foi.logEv(message, commandArgs, discord, bot, logHook);

      } else if (commandArgs == 'help') {

        command(message, discord, botData);

        foi.logEv(message, commandArgs, discord, bot, logHook);

      } else if (commandArgs == 'info') {

        if (Args[2] == undefined || Args[2] == '') {

          const errInfoEmbed2 = new discord.RichEmbed()
            .addField('Err! Info Command', ':radioactive: Thiếu tên Info\nDùng lệnh **Help** để xem cách sử dụng lệnh này :D', false)
            .setThumbnail(botData.img.err)
            .setColor('0x80c7d0')
          message.channel.send(errInfoEmbed2)
          return;

        } else if (!info[Args[2]] && Args[2] != undefined) {

          const errInfoEmbed1 = new discord.RichEmbed()
            .addField('Err! Info Command', `:radioactive: Không tìm thấy thông tin về **${Args[2]}** :D`, false)
            .setThumbnail(botData.img.err)
            .setColor('0x80c7d0')
          message.channel.send(errInfoEmbed1)
          return;

        } else if (Args[2] != undefined) {

          command(message, discord, info, Args)

          foi.logEv(message, commandArgs, discord, bot, logHook);

        }

      } else if (commandArgs == 'weather') {

        command(message, discord, botData, weather, Args);

        foi.logEv(message, commandArgs, discord, bot, logHook);

      } else if (commandArgs == 'neko') {

        if (Args[2] != undefined && Args[2] != '') {
          command(message, discord, neko, Args)
        } else {
          const errNekoEmbed = new discord.RichEmbed()
            .addField('Err! Neko Command', ':radioactive: Bạn chưa nhập **<Type>**\nDùng lệnh **Help** để xem cách sử dụng lệnh này :D', false)
            .setThumbnail(botData.img.err)
            .setColor('0x80c7d0')
          message.channel.send(errNekoEmbed)
          return;
        }

        foi.logEv(message, commandArgs, discord, bot, logHook);

      } else if (commandArgs == 'movie') {

        if (Args[2] != undefined && Args[2] != '') {
          command(message, discord, movie, Args)
        } else {
          const errMovieEmbed = new discord.RichEmbed()
            .addField('Err! Movie Command', ':radioactive: Bạn chưa nhập **<Name Film>**\nDùng lệnh **Help** để xem cách sử dụng lệnh này :D', false)
            .setThumbnail(botData.img.err)
            .setColor('0x80c7d0')
          message.channel.send(errMovieEmbed)
          return;
        }

        foi.logEv(message, commandArgs, discord, bot, logHook);

      } else if (commandArgs == 'tdt') {
        let TDT = require('./DATA/TDTNotification.json');

        command(message, discord, Args, TDT)

        foi.logEv(message, commandArgs, discord, bot, logHook);

      } else if (commandArgs == 'surl') {

        command(message, discord, argsLink, shortUrl)

        foi.logEv(message, commandArgs, discord, bot, logHook);
      } else if (commandArgs == 'animenew') {
        let animeNew = require('./DATA/animeNew.json');

        command(message, discord, Args, animeNew)

        foi.logEv(message, commandArgs, discord, bot, logHook);

      }
    } catch (err) {
      console.log(`\n\n${message.author.username} vừa gây ra lỗi: (${prefix}${commandArgs})`)
      console.log(`-- Chi Tiết -------------\n${err}\n-------------------------`)
      const errHookEmbed = new discord.RichEmbed()
        .addField('Err!', `:radioactive: <!**${prefix}${commandArgs}**>\nThủ phạm: **${message.author.username}**\n>>> ${err}`, false)
        .setColor(botData.color.red)
      errHook.send(errHookEmbed)

      const errEmbed = new discord.RichEmbed()
        .setThumbnail(botData.img.err)
        .addField('Err!', ':radioactive: Lệnh gì vậy trời ?\nDùng lệnh **Help** để xem danh sách các lệnh hiện có <3', false)
        .setColor('0x80c7d0')
      message.channel.send(errEmbed)
      return;
    }

  } else if (message.author.id == myID && mgs[0][0] + mgs[0][1] == '!e') {

    foi.autoDel(message, 600000)

    return;
  } else if (message.content.search(myID) != -1) {
    if (ooo == 'offline') {
      offlineMgs(message, discord)
      return;
    }
  }
})
console.log('- message Event is Active!');

bot.login(botData.token)
console.log('--------------------------\n>>> Login success!\n--------------------------');

bot.on('ready', () => {
  bot.user.setPresence({
    game: {
      name: 'დPoi_<e:HeLp>'
    },
    status: 'online'
  })
  const readyHookEmbed = new discord.RichEmbed()
    .addField(bot.user.username, `**Start Complete!**\n>>> **დ**Meow`, false)
    .setColor('0x80c7d0')
  logHook.send(readyHookEmbed)
  console.log(`>>> ${bot.user.tag} is Ready!\n--------------------------`)
});