/**
 * Development Server
 */

var HOST = '0.0.0.0';
var PORT = 3000;

var PROXY_ENABLED = true;
var PROXY_HOST = HOST;
var PROXY_PORT = PORT + 1;

var PROXY_URLS = [
    '/foo*',
];

var CUSTOM_PROXY_RULES = {
    // '/marcopeg' : 'http://github.com/',
};




// ----------------------------------------------------------------------------- //
// ---[[   D O   N O T   T O U C H   B E L O W   T H I S   C O M M E N T   ]]--- //
// ----------------------------------------------------------------------------- //

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

// detect the request to run the styleguide
var isStyleguide = process.argv.join(' ').indexOf('--guide') !== -1;

var webpackConfig;
if (isStyleguide) {
    webpackConfig = require('./config/webpack.config.guide');
} else {
    webpackConfig = require('./config/webpack.config');
}



new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true,
    },
    proxy: proxyTable(PROXY_HOST, PROXY_PORT),
}).listen(PORT, HOST, function (err) {
    if (err) {
        console.log(err);
    }

    console.log('Listening at localhost:' + PORT);

    if (PROXY_ENABLED && !isStyleguide) {
        runLocalAPI();
    }
});

function proxyTable(host, port) {
    var table = {
        '/' : proxyGuideEntryPoint(),
        '/index.html' : proxyGuideEntryPoint(),
    };

    PROXY_URLS.forEach(function (url) {
        table[url] = 'http://' + host + ':' + port + '/';
    });

    Object.keys(CUSTOM_PROXY_RULES).forEach(function (key) {
        table[key] = CUSTOM_PROXY_RULES[key];
    });

    return table;
}

function proxyGuideEntryPoint() {
    return {
        bypass: function () {
            return isStyleguide ? '/config/guide.html' : '/config/client.html';
        },
    };
}


/**
 * Local Express API
 * this piece of code will start an Express project that fetches
 * router rules fom `/app/server`.
 */

function runLocalAPI() {

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
}
