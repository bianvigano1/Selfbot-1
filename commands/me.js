module.exports = {
    "name":"me",
    "description": "you do a thing!",
    "usage": "<a thing>",
    "run": function(client, msg, args, config) {
		let does = args.join(" ")
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
