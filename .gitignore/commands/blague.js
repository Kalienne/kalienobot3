const Discord = require('discord.js');
const Command = require('./command')
const prefix = '!k'

module.exports = class Blague extends Command {



	static match(message) {
		return message.content.startsWith(prefix + 'blague')
	}

	static action(message) {

		let randnum = Math.floor(Math.random() * 10)

		if (randnum == 0) {

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.setDescription('Maman, maman, maman ! C\'est quoi un transexuel ? \n Heu... je t\'expliquerai ça quant tu seras plus grand. Oh \! Et puis arrête de m’appeler maman, ça m\'agace !')
			.setFooter('Les meilleurs blagues de Kalieno et de loin ')
			message.channel.sendEmbed(embed)

		} else if(randnum == 1) {

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.setDescription('Papa papa pourquoi mamie cours en zigzag dans le jardin? \n Tais-toi fiston, tu vois bien que j\'essaie de viser juste :smiley:')
			.setFooter('Les meilleurs blagues de Kalieno et de loin ')
			message.channel.sendEmbed(embed)

		} else if(randnum == 2) {

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.setDescription('Docteur j\'ai mal à l\'oeil gauche quand je bois mon café \n Essayez d\'enlever la cuillère de la tasse.')
			.setFooter('Les meilleurs blagues de Kalieno et de loin ')
			message.channel.sendEmbed(embed)

		} else if(randnum == 3) {

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.setDescription('Un gars entre dans un pet shop et dit au vendeur: \n Je veux un chien pour ma femme. \n Je m\'excuse monsieur, on prend pas les échanges\! ')
			.setFooter('Les meilleurs blagues de Kalieno et de loin ')
			message.channel.sendEmbed(embed)

		} else if(randnum == 4) {

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.setDescription('Qu\'est ce qui court et qui se jette ? \n UNE COURGETTE.')
			.setFooter('Les meilleurs blagues de Kalieno et de loin ')
			message.channel.sendEmbed(embed)

		} else if(randnum == 5) {

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.setDescription('Un geek ne descend pas du métro. Il libère la RAM...')
			.setFooter('Les meilleurs blagues de Kalieno et de loin ')
			message.channel.sendEmbed(embed)

		} else if(randnum == 6) {

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.setDescription('A quoi sert Internet Explorer ? \n A télécharger Google Chrome.')
			.setFooter('Les meilleurs blagues de Kalieno et de loin ')
			message.channel.sendEmbed(embed)

		} else if(randnum == 7) {

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.setDescription('Qu\'est ce qui est rose, gluant et qui se balade de lianes en lianes ? \n UN CHEWING-GUM COLLÉ AU CUL DE TARZAN ')
			.setFooter('Les meilleurs blagues de Kalieno et de loin ')
			message.channel.sendEmbed(embed)

		} else if(randnum == 8) {

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.setDescription('Qu\'est ce que ton meilleur ami qui brûle ? \n UN POT-AU-FEU (pote au feu). ')
			.setFooter('Les meilleurs blagues de Kalieno et de loin ')
			message.channel.sendEmbed(embed)

		} else if(randnum == 9) {

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.setDescription('Qu\'est-ce qui sépare l\'homme de l\'animal ?  \n  la Méditerranée .')
			.setFooter('Les meilleurs blagues de Kalieno et de loin ')
			message.channel.sendEmbed(embed)
		}

	}



}
