var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var messages = [
  {"message":"key",
    "time": "1:00",
    "username" : "name",
    "picture" : "pic :)"}
  ];

app.use(express.static('assets'))
app.use(bodyParser.json())

app.get('/messages', function (req, res, next) {
  res.status(200).json({ messages: messages });
});


app.post('/messages', function (req, res, next) {
  messages.push({message: req.body.message, time: new Date(), username: req.body.username, picture: req.body.picture });
  res.status(200).json({ messages: messages});
});


app.listen(3000);
