var handlers = require("./requestHandlers");

function route(app) {
  // accept POST request on the homepage
  app.post('/addcat', handlers.addcat);

  app.post('/updatecat', handlers.updatecat);

// accept POST request on the homepage
  app.post('/getcatlist', handlers.getcatlist);

  app.get('/', function (req, res) {
    //res.render('index', { title: 'Hey', message: 'Hello there!'});
    //res.render('index');
    res.sendFile('./static/index.html', {"root": __dirname});
  })

// delete item from table
  app.post('/deletecat', handlers.deletecat);
}

exports.route = route;