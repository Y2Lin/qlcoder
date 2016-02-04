var fs = require('fs');
var fileList = [];//文件路径数组
var biggest = {
  path: "",
  content: "",
  size: 0
}
 
//拿到所有的文件路径
function walk(path) {
  var dirList = fs.readdirSync(path);
  dirList.forEach(function (item) {
    if (fs.statSync(path + '/' + item).isFile()) {
      fileList.push(path + '/' + item);
    }
  });

  dirList.forEach(function (item) {
    if (fs.statSync(path + '/' + item).isDirectory()) {
      walk(path + '/' + item);
    }
  });
}

walk('/Users/yuanlin/github/my/qlcoder/文件管理/root');

for (var index = 0; index < fileList.length; index++) {
  var element = fileList[index];
  var name = element.split("/").pop();
  // .DS_Store
  if (name === ".DS_Store") {
    continue;
  }
  var data = fs.readFileSync(element);
  var size = data.length;
  if (biggest.size < size) {
    biggest.path = element;
    biggest.content = String(data);
    biggest.size = size;
  }
}
console.log(biggest);
//通过fileList
// console.log(fileList);