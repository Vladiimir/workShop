// if our user.js file is at app/models/user.js
var Article = require('../models/article');
var mongoose = require('mongoose');

mongoose.connect('mongodb://vova:vova@ds161497.mlab.com:61497/articles');

exports.postArticle = function (req, res) {
    var article = new Article({
        title: req.body.title,
        text: req.body.text
    });

    article.save(function(err) {
        if (err) throw err;

        exports.getMain(req, res);
    });


};

exports.deleteArticle = function(req, res) {
    Article.findById(req.params.id, function(err, article) {
        if (err) throw err;

        article.remove(function(err) {
            if (err) throw err;

            exports.getMain(req, res);
        });
    });
};

exports.updateArticle = function(req, res) {
    Article.findById(req.params.id, function(err, article) {
        if (err) throw err;

        // change the users location
        article.title = req.body.title;
        article.text = req.body.text;

        // save the user
        article.save(function(err) {
            if (err) throw err;

            exports.getMain(req, res);
        });

    });
};

exports.getMain = function(req, res, next) {
    Article.find({}, function(err, articles) {
        if (err) throw err;

        res.render('articles', { data: articles });
    });
};

