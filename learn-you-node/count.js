total = 0
for (var ndx = 2; ndx < process.argv.length; ndx++) {
	total += Number(process.argv[ndx])
}
console.log(total)
