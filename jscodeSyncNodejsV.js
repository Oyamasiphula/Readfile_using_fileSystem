// I'm not supposed to write synchronous javascript,
// so never use this, but if you want to see the synchronous version of reading a file in node:
// ?

var path = require('path');
var fs = require('fs');
var filePath = path.join(__dirname, 'Data', 'highrise-sample-people.csv');
var file = fs.readFileSync(filePath, 'utf-8');
console.log(file);
