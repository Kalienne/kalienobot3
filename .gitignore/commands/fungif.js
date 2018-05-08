const Discord = require('discord.js')
const Command = require('./command')
const prefix = '!k'

module.exports = class FunGif extends Command {

	static match(message) {
		return message.content.startsWith(prefix + 'fungif')
	}

	static action(message) {

			let args = message.content.split(" ").slice(1)

			if (message.content === prefix + 'fungif') {

				var embed = new Discord.RichEmbed()
					.setColor("#226666")
					.addField("Toutes les commandes fungif",  "-> !kfungif:dab\n-> !kfungif:pense\n-> !kfungif:issou\n-> !kfungif:kameamea")
					message.channel.send(embed)


			} else if (message.content.startsWith(prefix + 'fungif:dab')) {

				if(args == "") {
					message.reply('Veuillez mentionner quelqu\'un')
				} else {
					var embed = new Discord.RichEmbed()
					.setColor("#226666")
					.setDescription("**" + message.author.username + "**" + " fait un dab à " + args.join(" "))
					.setImage('https://cdn.discordapp.com/attachments/436266527013208075/440876615900069898/tenor.gif')
					message.channel.send(embed)
				}


			} else if(message.content.startsWith(prefix + 'fungif:pense')) {

				if(args == "") {
					message.reply('Veuillez mentionner quelqu\'un')
				} else {
					var embed = new Discord.RichEmbed()
					.setColor("#226666")
					.setDescription("**" + message.author.username + "**" + " est en train de réfléchir envers " + args.join(" "))
					.setImage('https://media.tenor.co/images/4b7399689d7c8d618b7ea21bcec6be6d/tenor.gif')
					message.channel.send(embed)
				}



			} else if(message.content.startsWith(prefix + 'fungif:issou')) {

				if(args == "") {
					message.reply('Veuillez mentionner quelqu\'un')
				} else {
					var embed = new Discord.RichEmbed()
					.setColor("#226666")
					.setDescription("**" + message.author.username + "**" + " :joy: " + args.join(" "))
					.setImage('https://media1.tenor.com/images/f86c3a13ddb998631efa393d1c289567/tenor.gif')
					message.channel.send(embed)
				}


			} else if(message.content.startsWith(prefix + 'fungif:kameamea')) {

				if(args == "") {
					message.reply('Veuillez mentionner quelqu\'un')
				} else {
					var embed = new Discord.RichEmbed()
					.setColor("#226666")
					.setDescription("**" + message.author.username + "**" + " fait a kameamea a " + args.join(" ") + " ")
					.setImage('https://thumbs.gfycat.com/RealisticAlarmedGraywolf-max-1mb.gif')
					message.channel.send(embed)
				}

			}
	}
}
