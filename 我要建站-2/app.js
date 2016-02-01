var express = require('express');
var app = express();
app.get('/train/plus', function (req, res) {
  console.log(req.query.a);
  console.log(req.query.b);
  var r = (req.query.a) * (req.query.b);
  console.log(r);
  res.send(String(r));
});
app.listen('8808');