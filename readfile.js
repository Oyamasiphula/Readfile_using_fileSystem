var fs = require('fs');
var filePath = "./Data/"

var people = [];
var fileContents = fs.readFileSync(filePath + 'highrise-sample-people.csv');
var lines = fileContents.toString().split('\n');

for (var i = 0; i < lines.length; i++) {
    people.push(lines[i].toString().split(','));
}

for (var i = 0; i < lines.length; i++) {
    for (var j = 0; j < 3; j++) {
        console.log(people[i][j]);
    }
    console.log(people);
    return people
}

var path = require('path');
var fs = require('fs');
 
var filePath = path.join(__dirname, 'Data', 'highrise-sample-people.csv');
 
fs.readFile(filePath, 'utf-8', function (err, data) {
    if (err) {
        return console.log("Unable to read file " + err);
    }
    console.log(data + '\n');
});
