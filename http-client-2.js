var http = require('http')
var https = require('https')
var url = process.argv[2]
var prefix = url.substring(0, 8)


if(prefix === 'https://'){
    https.get(url, function(response){
        response.setEncoding('utf-8')
        response.on('data', console.log)
        response.on('error', console.error)
    }).on('error', console.error)
} else {
    http.get(url, function(response){
        response.setEncoding('utf-8')
        response.on('data', console.log)
        response.on('error', console.error)
    }).on('error', console.error)
}