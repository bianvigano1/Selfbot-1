module.exports = {
    "name":"play",
    "description": "play a thing!",
    "usage": "<Playing ________>",
    "run": function(client, msg, args, config) {
		var game = args.join(" ")
        client.editStatus({ name: game })
        msg.edit(`Status has been set to \`${game}\`.`)
    }
}
