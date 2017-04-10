module.exports = {
    "name":"giveafuck",
    "description": "give a fuck, or not, or sike them out!",
    "usage": "<Optional|-y|-sy>",
    "run": function(client, msg, args, config) {
		msg.edit(`:repeat: Attempting to give a fuck, please wait...`)
            if (msg.content.indexOf('-y') >= 0) {
                setTimeout(function myFunction() {
                    msg.edit(":white_check_mark: Successfully gave a fuck.")
                }, 5000)
            } else if (msg.content.indexOf('-sy') >= 0) {
                setTimeout(function myFunction() {
                    msg.edit(":white_check_mark: Successfully gave a fuck.")
                    setTimeout(function myFunction() {
                        msg.edit(":negative_squared_cross_mark: SIKE! Ofcourse I don't give a fuck.")
                    }, 2000)
                }, 5000)
            } else {
                setTimeout(function myFunction() {
                    msg.edit(":negative_squared_cross_mark: Failed to give a fuck.")
                }, 5000)
            }

    }
}
