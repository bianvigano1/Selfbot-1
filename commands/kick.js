module.exports = {
    "name":"kick",
    "description": "kick a person!",
    "usage": "<@mention>",
    "run": function(client, msg, args, config) {
		client.deleteGuildMember(msg.channel.guild.id, msg.mentions[0].id).catch(function(e) {
			msg.edit(`:warning: Failed to kick ${msg.mentions[0].username}!`)
        });
    }
}
