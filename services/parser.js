var fs = require('fs');
var readline = require('readline');
var stream = require('stream');
const path = require("path");

var instream = fs.createReadStream(path.join(__dirname,"../public/sample.txt"));
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);
var arr = [];
let completeTree = []

rl.on('line', function(line) {
  if(!line.includes("Mutual Fund")){
    if(line.trim())
    arr.push(line);
  }
  
}).on('close', function() {
  arr.slice(2).map(d=>{
    let arrdetails = d.split(";");
    let object = {"SchemeName":arrdetails[3],"NAV":arrdetails[4],"Date":arrdetails[5]};
    completeTree.push(object);
    
  })
})

function getTotalObject() {
  return completeTree;
}

module.exports = getTotalObject();