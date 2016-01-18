
/**
 * Register your development apis as router middlewars
 */

var express = require('express');
var router = express.Router();

router.get('/foo', function (req, res) {
    res.send({ api: 'foo' });
});

module.exports = router;
