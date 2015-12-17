
var express = require('express');
var router = express.Router();
var uuid = require('uuid');

var videos = [{
    id: uuid.v4(),
    title: 'video001',
    campaign: 'lor',
    author: 'marcopeg',
    data: {
        views: 1000,
    },
},{
    id: uuid.v4(),
    title: 'video002',
    campaign: 'lor',
    author: 'marcopeg',
    data: {
        views: 120,
    },
},{
    id: uuid.v4(),
    title: 'video003',
    campaign: 'coke',
    author: 'vlad',
    data: {
        views: 576,
    },
},{
    id: uuid.v4(),
    title: 'video004',
    campaign: 'coke',
    author: 'marcopeg',
    data: {
        views: 499,
    },
},{
    id: uuid.v4(),
    title: 'video005',
    campaign: 'coke',
    author: 'vlad',
    data: {
        views: 1000,
    },
}];

router.param('campaign', function(req, res, next, campaignId) {
    req.campaignId = campaignId;
    next();
});

router.get('/videos/:campaign', function(req, res) {
    res.send(videos.filter(video => video.campaign == req.campaignId));
});

module.exports = router;
