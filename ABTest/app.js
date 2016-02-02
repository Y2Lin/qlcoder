var request = require('request');
var uuid = require('node-uuid');
var text = "请证明霍奇猜想并将证明的论文发至oreo@qlcoder.com,等官方审核证明正确后此题设置通过";
var options = {
  url: 'http://www.qlcoder.com/train/abtest',
  headers: {
    'Cookie': 'uuid=06b020d14d245;'
  }
};

for (var index = 0; index < 300; index++) {
  var id = uuid.v4().split("-")[4];
  var options = {
    url: 'http://www.qlcoder.com/train/abtest',
    headers: {
      'Cookie': 'uuid=' + id + ';'
    }
  };
  request(options, callback);
}

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
}

