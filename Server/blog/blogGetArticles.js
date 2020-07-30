var express = require('express');
var router = express.Router();
var blog = require('./blog.model');

/* GET ALL Blog Articles */
router.get('/', function (req, res, next) {
    blog.find(function (err, allArticles) {
        if (err) return next(err);
        res.json(allArticles);
    });
});
/* GET SINGLE article BY ID */
router.get('/:id', function (req, res, next) {
    blog.findById(req.params.id, function (err, article) {
        if (err) return next(err);
        res.json(article);
    });
});
module.exports = router;