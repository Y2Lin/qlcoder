var express = require('express');
var app = express();
var nameArr = [];
app.get('/train/register', function (req, res) {
  console.log(req.query.registerusername);
  var result = "";
  var name = req.query.registerusername;
  console.log(nameArr);
  if(nameArr.indexOf(name)===-1){
    nameArr.push(name);
    result = "register success";
  }else{
    result = "already used";
  }
  res.send(result);
});
app.listen('8808');