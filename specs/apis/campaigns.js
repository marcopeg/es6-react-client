
var express = require('express');
var router = express.Router();
var uuid = require('uuid');

var campaigns = [{
    id: 'lor',
    name: 'Loreal',
}, {
    id: 'coke',
    name: 'CocaCola',
}];

router.get('/campaigns', function(req, res) {
    res.send(campaigns);
});

router.post('/campaigns', function(req, res) {
    var campaign = {
        id: uuid.v4(),
        name: req.body.title || 'new campaign',
    };
    campaigns.push(campaign);
    res.send({
        status: true,
    });
});

module.exports = router;
