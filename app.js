const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const utils = require('utility');
const cheerio = require('cheerio');
const request = require('request');
const superagent = require('superagent');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('./public'));
app.use(express.static('./node_modules'));

var PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log('server running on port: ' + PORT);
});
app.get('/md5', (req, res) => {
    let queryKey = req.query.name;
    let md5 = utils.md5(queryKey);
    console.log(utils.logDate());
    utils.setImmediate(() => console.log('hello'));

    res.send(md5).end();
});
app.get('/fetch', (req, res, next) => {
    superagent.get('https://cnodejs.org/')
    .end(function (err, sres) {
      // 常规的错误处理
      if (err) {
        return next(err);
      }
      // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
      // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
      // 剩下就都是 jquery 的内容了
      var $ = cheerio.load(sres.text);
      var items = [];
      $('#topic_list .topic_title').each(function (idx, element) {
        var $element = $(element);
        items.push({
          title: $element.attr('title'),
          href: $element.attr('href')
        });
      });

      res.send(items);
    });

});
// app.get('/index', (req, res) => {
//     res.sendFile(__dirname + '/public/views/index.html');
// });
// app.get('/ball', (req, res) => {
//     res.sendFile(__dirname + '/public/views/ball.html');
// });
// app.get('/arrow', (req, res) => {
//     res.sendFile(__dirname + '/public/views/arrow.html');
// });
// app.get('/nav', (req, res) => {
//     res.sendFile(__dirname + '/public/views/nav.html');
// });
// app.get('/upload', (req, res) => {
//     res.sendFile(__dirname + '/public/views/uploadFile.html')
// });
app.get('/api/getInfo', (req, res) => {
    var obj = fs.readFileSync('./public/js/data.json');
    res.send(obj).end();
});
app.get('/api/query', (req, res) => {
    console.log(req.query);
    res.send(req.query).end();
});

app.post('/api/uploadImg', (req, res) => {
    console.log('received');
    res.end();
});
app.get('/api/process', (req, res) => {
    console.log(process);
    res.send(process.env).end();
});