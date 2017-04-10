module.exports = {
    "name":"nick",
    "description": "name yourself a thing on a server!",
    "usage": "<nickname>",
    "run": function(client, msg, args, config) {
		var text = args.join(" ")
		msg.edit(msg.member.nick + " => " + text, () => {
			client.editNickname(msg.channel.guild.id, text)
        });
    }
}
