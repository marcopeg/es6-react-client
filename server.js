/**
 * Development Server
 */

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

// start the styleguide or the full app
var config;
if (process.argv.join(' ').indexOf('--guide') === -1) {
    config = require('./webpack.config');
} else {
    config = require('./webpack.config.guide');
}

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
        '/foo*': 'http://' + PROXY_HOST + ':' + PROXY_PORT + '/',
    },
}).listen(PORT, HOST, function (err) {
    if (err) {
        console.log(err);
    }

    console.log('Listening at localhost:' + PORT);
});




/**
 * Local Express API
 * this piece of code will start an Express project that fetches
 * router rules fom `/app/server`.
 */

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');

var app = express();
app.use(bodyParser.json());

// list here the apis you plan to use
fs.readdirSync(path.join(__dirname, 'app', 'server'))
    .filter(i => i.substr(0, 1) !== '.')
    .filter(i => i.substr(0, 1) !== '_')
    .forEach(function (api) {
        app.use('/' + api.replace('.js', ''), require('./app/server/' + api));
    }
);

app.listen((PROXY_PORT), function () {
    console.log('Fake API /dist available at http://%s:%s', PROXY_HOST, PROXY_PORT);
});
