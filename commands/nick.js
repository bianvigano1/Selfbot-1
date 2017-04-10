module.exports = {
    "name":"nick",
    "description": "name yourself a thing on a server!",
    "usage": "<nickname>",
    "run": function(client, msg, args, config) {
		var text = msg.content.substring(config.prefix.length + this.name.length + 1, 9999)
		msg.edit(msg.member.nick + " => " + text, () => {
			client.editNickname(msg.channel.guild.id, text)
        });
    }
}
