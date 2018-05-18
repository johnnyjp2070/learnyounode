var fs = require('fs');
var path = require('path');

module.exports = function(directory, extension, callBack){
    fs.readdir(directory, function (err, data){
        if (err){
            return callBack(err);
        }
        data = data.filter(function (element){
        return path.extname(element) === '.' + extension;
        });
        callBack(null, data);
    });
};

