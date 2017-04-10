module.exports = {
    "name":"me",
    "description": "you do a thing!",
    "usage": "<a thing>",
    "run": function(client, msg, args, config) {
		let does = msg.content.substring(config.prefix.length + this.name.length + 1, 9999)
        msg.delete()
        client.createMessage(msg.channel.id, {
            content: '',
            embed: {
                color: 0x4B92FB,
                description: `***${client.user.username}** ${does}*`
            }
        })
    }
}
