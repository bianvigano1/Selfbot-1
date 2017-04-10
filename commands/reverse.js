module.exports = {
    "name":"reverse",
    "description": "reverse a thing!",
    "usage": "[MSG]",
    "run": function(client, msg, args, config) {
		let rawMsg = msg.content.substring(config.prefix.length + `reverse `.length, 9999);
		let revMsg = rawMsg.split('').reverse().join('');
		msg.edit(revMsg)
    }
}
