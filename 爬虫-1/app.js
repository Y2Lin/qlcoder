/**
 * 首先要会的是通过get请求实现一个最最最简单的爬虫爬取基本的网页信息。
 *电影是伟大的艺术（烂片除外）
 *豆瓣电影top250收录了至今为止，大家最最最喜欢的250部电影。
 *该列表呈现了每部电影的评分，年份等基本信息。
 *这题的答案很简单，我想知道这个榜单的前166部电影的评分总和。
 *举例:：目前排第一的肖申克的救赎 9.6分，第二的这个杀手不太冷 9.4分，第三的阿甘正传 9.4分。前3部电影的总分=9.6+9.4+9.4=28.4。
 */
var http = require('http');
var cheerio = require('cheerio');

var htmlArr = [];//存放html的数组

//共250条 一页25条 共10页
for (var index = 0; index < 10; index++) {
  var start = index * 25;
  getHtml(start);
}

/**抓取html */
function getHtml(start) {
  http.get("http://movie.douban.com/top250?start=" + start, function (res) {
    var size = 0;
    var chunks = [];
    res.on('data', function (chunk) {
      size += chunk.length;
      chunks.push(chunk);
    });
    res.on('end', function () {
      var data = Buffer.concat(chunks, size);
      var html = data.toString();//html字符串
      htmlArr.push(html);
      if (htmlArr.length === 10) {//所有的ajax回调完成后..
        callback();
      }
    });
  }).on('error', function (e) {
    console.log("Got error: " + e.message);
  });
}

/**完成抓取后的回调 */
function callback() {
  var score = 0;
  $ = cheerio.load(htmlArr.join());
  $(".rating_num").each(function (i) {
    if (i < 166) {//前116条
      score += Number($(this).text()) * 10;//浮点数
    }
  });
  console.log(score / 10);
}