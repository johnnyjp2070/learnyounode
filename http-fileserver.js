const http = require('http')
const fs = require('fs')
var port = process.argv[2]
var file = process.argv[3]


var server = http.createServer(function (req, res) {
	res.writeHead(200, {'content-type': 'text/plain'})
	fs.createReadStream(file).pipe(res)
})
server.listen(Number(process.argv[2]))