module.exports = {
    "name":"play",
    "description": "play a thing!",
    "usage": "<Playing ________>",
    "run": function(client, msg, args, config) {
		let game = msg.content.substring(config.prefix.length + this.name.length + 1, 9999)
        client.editStatus({ name: game })
        msg.edit(`Status has been set to \`${game}\`.`)
    }
}
