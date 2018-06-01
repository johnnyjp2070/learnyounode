var http = require('http')
var accum = []
var count = 0
var bl = require('bl')
function printRes(){
    for(i = 0; i< 3; i++){
        console.log(accum[i])
    }
}

function getHttp(index){
    http.get(process.argv[2 + index], function(response){
        response.pipe(bl(function(err,chunk){
            if (err)
            return console.error(err)

            accum[index] = chunk.toString()
            count++
            if(count == 3){
                printRes()
            }
        }))
    })
}

for(i = 0; i < 3; i++){
    getHttp(i)
}