const fs = require('fs');
var path = require('path');
var extension = '.'+ process.argv[3];

fs.readdir(process.argv[2], function (err, data){
    data.filter((element) => {
        if(path.extname(element) === extension){
            console.log(element);
        }
    });
});