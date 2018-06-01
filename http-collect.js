var http = require('http')
var bl = require('bl')
var url = process.argv[2]
var accumulator = ''

http.get(url, function(response){
    response.on('data', function(chunk){
        accumulator += chunk
    })
    response.on('end', function(){
        console.log(accumulator.length)
        console.log(accumulator)
    })
})