/* const fs = require('fs');
fs.readdir(process.argv[2],function (err, data){
    console.log(data);
});
 */



const fs = require('fs');
fs.readdir(process.argv[2],function (err, data){
    var filtered = data.filter( function(ext){
        return ext.split('.'+process.argv[3]).pop();
    });
    for(i = 0; i < filtered.length; i++){
        console.log(filtered[i]);
    }
});