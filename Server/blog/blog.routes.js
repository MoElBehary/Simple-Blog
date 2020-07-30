var express = require('express');
var router = express.Router();
var blog = require('./blog.model');

/* SAVE article */
router.post('/', function (req, res, next) {
    console.log(req.body);
    blog.create(req.body, function (err, post) {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.json(post);
    });
});

/* UPDATE article */
router.put('/:id', function (req, res, next) {
    console.log(req.body);
    blog.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.json(post);
    });
});

/* DELETE article */
router.delete('/:id', function (req, res, next) {
    blog.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
