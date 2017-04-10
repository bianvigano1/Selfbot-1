module.exports = {
    "name":"eval",
    "description": "eval a thing!",
    "usage": "[JS]",
    "run": function(client, msg, args, config) {
		var code = msg.content.substring(config.prefix.length + this.name.length + 1, 9999)
        try {
            msg.edit("Eval:\n```js\n" + code + "\n```Output:\n```fix\n" + eval(code) + "```")
        }
		catch (err) {
			msg.edit("Eval:\n```javascript\n" + code + "\n```ERROR:\n```fix\n" + err + "```")
		}

    }
}
