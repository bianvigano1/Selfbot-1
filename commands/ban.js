module.exports = {
    "name":"ban",
    "description": "ban a thing!",
    "usage": "<@mention>",
    "run": function(client, msg, args, config) {
		client.banGuildMember(msg.channel.guild.id, msg.mentions[0].id).catch(function(e) {
			client.createMessage(msg.channel.id, `Failed to kick ${msg.mentions[0].mention}`)
        });
    }
}
