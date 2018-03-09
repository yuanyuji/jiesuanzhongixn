const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// // 分页信息
const fs = require('fs');

app.post('/api/list', function (req, res) {
  console.log(req.body);
  let {count, pageSize} = req.body;
  let list = JSON.parse(fs.readFileSync('./list.json', 'utf-8'));
  let clist = list.slice(count * (pageSize - 1), count * pageSize);
  res.end(JSON.stringify(clist));
});

app.listen(9090, function (data) {
    console.log(9090);
});