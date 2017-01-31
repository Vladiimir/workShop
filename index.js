//var server = require("./server");
var router = require("./router");
//var requestHandlers = require("./requestHandlers");
//
//var handle = {}
//handle["/"] = requestHandlers.start;
//handle["/start"] = requestHandlers.start;
//handle["/upload"] = requestHandlers.upload;
//handle["/show"] = requestHandlers.show;
//
//server.start(router.route, handle);

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
//app.set('view engine', 'html'); // support templates
//app.set('views', 'views'); // set views template folder

// routing
router.route(app);

app.use(express.static('static'));

var server = app.listen(8888, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
