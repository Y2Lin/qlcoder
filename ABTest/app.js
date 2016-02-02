var http = require('http');
var uuid = require('node-uuid');
console.log(uuid.v1())
console.log(uuid.v4())
var text = "请证明霍奇猜想并将证明的论文发至oreo@qlcoder.com,等官方审核证明正确后此题设置通过";


for (var index = 0; index < 300; index++) {
  var id = uuid.v4().split("-")[4];
  send(id);
  console.log(id);
}
function send(id) {
  http.get("http://www.qlcoder.com/train/abtest", function (req, res) {
    var size = 0;
    var chunks = [];
    req.on('data', function (chunk) {
      size += chunk.length;
      chunks.push(chunk);
    });
    req.on('end', function () {
      var data = Buffer.concat(chunks, size);
      var html = data.toString();//html字符串
      console.log(html);
    });
  }).on('error', function (e) {
    console.log("Got error: " + e.message);
  });
}



