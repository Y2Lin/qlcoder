var fs = require('fs');
var data = String(fs.readFileSync('uv.txt'));
var idSet = new Set();
var lineArr = data.trim().split('\r\n');
console.log(lineArr.length);
lineArr.forEach(function (e) {
  var arr = e.split(" ");
  idSet.add(arr[1]);
});
console.log(idSet.size);