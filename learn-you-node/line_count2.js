var fs = require('fs')

function counter() {
	fs.readFile(process.argv[2], function readComplete(error, raw) {
		cooked = raw.toString()
		temp = cooked.split("\n")
		console.log(temp.length-1)
	})
}

counter()
