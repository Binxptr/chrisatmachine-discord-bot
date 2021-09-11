const { Permissions, Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
	name: "socials",
	description: "To get the latency of the bot.",
	perms: {
		client: [
			Permissions.FLAGS.SEND_MESSAGES,
			Permissions.FLAGS.VIEW_CHANNEL,
			Permissions.FLAGS.EMBED_LINKS,
		],
		user: [Permissions.FLAGS.SEND_MESSAGES],
	},
	aliases: ["social", "github", "chris", "twitter", "patreon", "linkedin"],

	/**
	 *
	 * @param {Client} client
	 * @param {Message} message
	 * @param {STring[]} args
	 */
	execute: async (client, message, args) => {
		const em = new MessageEmbed()
			.setThumbnail("https://github.com/christianchiarulli.png")
			.setColor("RED")
			// .addField("Github", "[https://github.com](https://github.com/ChristianChiarulli)", true)
			// .addField("Patreon", "[https://patreon.com](https://www.patreon.com/chrisatmachine)", true)
			// .addField("youtube", "[https://youtube.com](https://www.youtube.com/channel/UCS97tchJDq17Qms3cux8wcA)")
			// .addField("odysee", "[https://odysee.com](https://odysee.com/@chrisatmachine:f)", true)
			// .addField("twitter", "[https://twitter.com](https://twitter.com/chrisatmachine)")
			// .addField("linkedin", "[https://linkedIn](https://www.linkedin.com/in/christianchiarulli/)", true)
			.setDescription(`
			[ ​ ​​ ​Github](https://github.com/ChristianChiarulli)
			[​ ​​ ​ Patreon](https://www.patreon.com/chrisatmachine)
			[ ​ ​​ ​youtube](https://www.youtube.com/channel/UCS97tchJDq17Qms3cux8wcA)
			[異 ​ ​​ ​odysee](https://odysee.com/@chrisatmachine:f)
			[暑 ​ ​​ ​twitter](https://twitter.com/chrisatmachine)
			[ ​ ​​ ​linkedin](https://www.linkedin.com/in/christianchiarulli/)
			`)

		message.channel.send({ embeds: [em] });
	},
};
