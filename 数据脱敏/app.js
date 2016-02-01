var md5 = require('md5');
var result = "7E38890B870934B126F66857ED6B57B9";
var start = 19700101;
var end = 20160000;
for (var i = start; i < 20160000; i++) {
  if (md5(String(i)) === result.toLowerCase()) {//注意 string型
    console.log(i);
    //19900406
  }
}

