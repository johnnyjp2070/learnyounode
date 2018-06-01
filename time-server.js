var net = require('net')

function zero(i){
	if(i < 10){
		return '0' + i
	} else {
		return '' + i
	}
}

function tim(){
	var d = new Date()
	return d.getFullYear() + '-' +
				 zero(d.getMonth() + 1) + '-' +
				 zero(d.getDate()) + ' ' +
				 zero(d.getHours()) + ':' +
				 zero(d.getMinutes())
}
var server = net.createServer(function (socket) {
	socket.end(tim() + '\n')
})
server.listen(Number(process.argv[2]))