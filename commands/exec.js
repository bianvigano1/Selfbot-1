module.exports = {
    "name":"exec",
    "description": "eval a thing!",
    "usage": "[SHELL]",
    "run": function(client, msg, args, config) {
		var code = msg.content.substring(config.prefix.length + this.name.length + 1, 9999)
        exec(code, function(err, stdout, stderr) {
			msg.edit("\`\`\`\n" + code + "\n-->\n" + stdout + "\n" + stderr + "\n\`\`\`")
		});

    }
}
