var directoryFunc = require('./filter.js');
var directory = process.argv[2];
var extension = process.argv[3];

directoryFunc(directory, extension, function(err, files){
    if(err){
        return console.error('There was an error:', err);
    }
    files.forEach((element) => {
        console.log(element);
    });
});