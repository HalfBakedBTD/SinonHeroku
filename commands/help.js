const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	message.channel.send("I have sent you a DM.")
    return message.author.send("**All Commands:**\t\tThanks <@275831434772742144> for making the website!\n\t :link: https://sinon-bot.github.io/commands.html :link:\n\n**Bot's Server:**\t\tBot made by <@346687165868015616>! \n\t :link: https://discord.gg/tQqgqdt :link:")
}
module.exports.help = {
  name: "help"
}
