var express = require('express');
var router = express.Router();

var handlers = require("../services/routeHandlers");

/* GET home page. */
router.get('/', handlers.getMain);

router.post('/article', handlers.postArticle);

router.delete('/article/:id', handlers.deleteArticle);

router.put('/article/:id', handlers.updateArticle);

module.exports = router;
