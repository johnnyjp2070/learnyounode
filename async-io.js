const fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function (err, data){
    var str = data.split('\n').length - 1;
    console.log(str);
});



