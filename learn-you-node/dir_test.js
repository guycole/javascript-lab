var fs = require('fs')

function reader() {
	target = ".".concat(process.argv[3])

	fs.readdir(process.argv[2], function readComplete(error, raw) {
		for (var ndx = 0; ndx < raw.length; ndx++) {
			if (raw[ndx].endsWith(target) === true)
				console.log(raw[ndx]);
		}
	})
}

reader()
