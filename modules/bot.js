const RiveScript = require('rivescript');
const bot = new RiveScript();
const path = require('path');
// Brain path
const folderPath = path.join(__dirname, "../brain/standard.rive");

// Initialize the app first
function init() {
  //Load the files
  return bot.loadFile(folderPath).then(loadingDone).catch(loadingError);

  // Asyncronusly start the program
  function loadingDone() {
    console.log("Bot has finished loading!");
    //Sort replies before
    bot.sortReplies();
  }

  // Catch errors
  function loadingError(error, filename, lineno) {
    console.log("Error when loading files: " + error);
  }
}

// Ask function, must be called after botInit
function ask(question, callback) {
  bot.reply("local-user", question).then(
    function (reply) {
      // console.log("BOT>: " + reply);
      return callback(reply);
    }
  );
}


module.exports = {
  init,
  ask,
}