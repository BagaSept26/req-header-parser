// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

//end point /api/whoami
app.get("/api/whoami",function(req,res){
  //Mendapatkan IP nya dari header x-forward
  const ipaddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  //mendapat preffered language dari header 'acc lang'
  const language = req.headers['accept-language'];

  //mendapat informasi software user-agent dari header user-agent
  const software = req.headers['user-agent'];

  //kirim response JSON
  res.json({
    ipaddress: ipaddress,
    language: language,
    software: software,
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
