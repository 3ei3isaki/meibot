const firebase = require('firebase-admin');
const fs = require("fs");
const Enmap = require("enmap");
const chalk = require('chalk');
const path = require('path');

function loadEvent(client) {
     fs.readdir("./events/", (err, files) => {

          if (err) return console.error(err);

          files.forEach(file => {
               const event = require(path.join(__dirname, `../events/${file}`));
               let eventName = file.split(".")[0];

               console.log(`${chalk.bold.black.bgWhite('  Event  ')} ${chalk.green(eventName.charAt(0).toUpperCase() + eventName.slice(1))}`);

               client.on(eventName, event.bind(null, client));

          });

          console.timeEnd(`${chalk.bgGreen.black('> Loading Event Done')}`);
     });

}

function loadCommand(client) {
     client.commands = new Enmap();

     fs.readdir("./commands/", (err, files) => {

          if (err) return console.error(err);

          files.forEach(file => {
               if (!file.endsWith(".js")) return;

               let props = require(path.join(__dirname, `../commands/${file}`));
               let commandName = file.split(".")[0];

               console.log(`${chalk.bold.black.bgWhite(' Command ')} ${chalk.green(commandName.charAt(0).toUpperCase() + commandName.slice(1))}`);

               client.commands.set(commandName, props);
          });

          console.timeEnd(`${chalk.bgGreen.black('> Loading Command Done')}`);
     });

}

function initFirebase(client) {
     firebase.initializeApp({
          credential: firebase.credential.cert({
               type: process.env.FIREBASE_TYPE,
               project_id: process.env.FIREBASE_PROJECT_ID,
               private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
               private_key: process.env.FIREBASE_PRIVATE_KEY,
               client_email: process.env.FIREBASE_CLIENT_EMAIL,
               client_id: process.env.FIREBASE_CLIENT_ID,
               auth_uri: process.env.FIREBASE_AUTH_URI,
               token_uri: process.env.FIREBASE_TOKEN_URI,
               auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
               client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
          }),
          databaseURL: process.env.FIREBASE_DATABASE_URL,
     });

     console.timeEnd(`${chalk.bgGreen.black('> Loading Database Done')}`);
}

module.exports.loadEvent = loadEvent;
module.exports.loadCommand = loadCommand;
module.exports.initFirebase = initFirebase;
