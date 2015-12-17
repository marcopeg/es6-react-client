

var express = require('express');
var router = express.Router();

router.post('/login', function(req, res) {
    if (req.body.uname == 'youcollide') {
        res.send({status: true});    
    } else {
        res.send({
            status: false,
            msg: 'you should type "youcollide"',
        });
    }
});

module.exports = router;
