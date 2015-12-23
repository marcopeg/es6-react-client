

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var pkg = require('./package.json');

var HOST = '0.0.0.0';
var PORT = 3000;

var PROXY_HOST = HOST;
var PROXY_PORT = PORT + 1;

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true,
    },
    proxy: {
        '/api*' : 'http://' + PROXY_HOST + ':' + PROXY_PORT + '/',
    },
}).listen(PORT, HOST, function(err) {
    if (err) { console.log(err); }
    console.log('Listening at localhost:' + PORT);
});





/**
 * Fake API
 */

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

// app.use('/api', require('./specs/apis/login'));
// app.use('/api', require('./specs/apis/campaigns'));
// app.use('/api', require('./specs/apis/videos'));

var server = app.listen((PORT+1), function() {
    var port = server.address().port;
    console.log('Fake API /dist available at http://%s:%s', PROXY_HOST, PROXY_PORT);
});
