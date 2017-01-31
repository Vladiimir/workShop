// if our user.js file is at app/models/user.js
var Article = require('./static/models/article');
var mongoose = require('mongoose');

mongoose.connect('mongodb://vova:vova@ds161497.mlab.com:61497/articles');

exports.addcat = function (req, res) {
  console.log('ok post /addcat');

    var article = new Article({
        title: req.body.title,
        text: req.body.text,
        image: req.body.image
    });

    article.save(function(err, articles) {
        if (err) throw err;
        res.send(articles);
    });
};

exports.updatecat = function (req, res) {
  console.log('ok post /updatecat');

  Article.findById(req.body._id, function(err, article) {
    if (err) throw err;

    // change the users location
    article.title = req.body.title;
    article.text = req.body.text;
    article.image = req.body.image;
    // save the user
    article.save(function(err) {
      if (err) throw err;

      res.send(article);
    });

  });
};

exports.getcatlist = function (req, res, next) {
  console.log('ok post /getCatList');

    Article.find({}, function(err, articles) {
        if (err) throw err;
        res.send(articles);
    });
};

exports.deletecat = function (req, res) {
  console.log('ok post /deletecat ');

    Article.findById(req.body._id, function(err, article) {
        if (err) throw err;

        article.remove(function(err) {
            if (err) throw err;
            res.send(article);
        });
    });
};

