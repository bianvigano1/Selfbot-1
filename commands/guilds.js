module.exports = {
    "name":"guilds",
    "description": "guild a thing!",
    "usage": "",
    "run": function(client, msg, args, config) {
		msg.delete()
            client.createMessage(msg.channel.id, {
                content: '',
                embed: {
                    color: 0x4B92FB,
                    description: `**${client.user.username}** is in \`${client.guilds.size}\` guilds!`
                }
			})
    }
}
