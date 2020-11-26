console.clear();

require('dotenv').config();
require('./server');

const Discord = require("discord.js");

const config = require("./config.json");
const core = require("./core");
const embed = require("./core/embed");
const chalk = require('chalk');

const client = new Discord.Client();

// Load Config to client
client.config = config;
client.embed = embed;


console.time(chalk.bold("Ready"));
console.log(chalk.bold("> Loading ..."));

// Load DB
console.time(`${chalk.bgGreen.black('> Loading Database Done')}`);
core.initFirebase(client);


// Load all bot Event
console.time(`${chalk.bgGreen.black('> Loading Event Done')}`);
core.loadEvent(client);


// Load all bot command
console.time(`${chalk.bgGreen.black('> Loading Command Done')}`);
core.loadCommand(client);

// Login
client.login(process.env.APP_TOKEN);
