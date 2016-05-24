var path = require('path');
var fs = require('fs');
 
var filePath = path.join(__dirname, 'Data', 'highrise-sample-people.csv');
 
fs.readFile(filePath, 'utf-8', function (err, data) {
    if (err) {
        return console.log("Unable to read file " + err);
    }
    console.log(data + '\n');
});
