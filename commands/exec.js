module.exports = {
    "name":"eval",
    "description": "eval a thing!",
    "usage": "[SHELL]",
    "run": function(client, msg, args, config) {
		var code = args.join(" ")
        exec(code, function(err, stdout, stderr) {
			msg.edit("\`\`\`\n" + code + "\n-->\n" + stdout + "\n" + stderr + "\n\`\`\`")
		});

    }
}
