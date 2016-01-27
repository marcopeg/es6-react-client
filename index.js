/**
 * Development Server
 */

var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var express = require('express');
var bodyParser = require('body-parser');

var webpackConfig = require('./config/webpack.config');
var serverCfg = require('./config/server.conf');
var appEnv = require('./app/env');

// detect the request to run the styleguide
var isStyleguide;
var runComponent = process.argv[process.argv.length - 1];
var runComponentFile = runComponent + '.guide.js';
var runComponentPath = path.join(__dirname, 'app', 'styleguide', 'components', runComponentFile);

// Styleguide: single component
if (fs.existsSync(runComponentPath)) {
    isStyleguide = true;
    webpackConfig = require('./config/webpack.config.guide');
    appEnv.__STYLEGUIDE_COMPONENT__ = JSON.stringify(runComponent);

// Styleguide: full
} else if (runComponent === 'styleguide') {
    isStyleguide = true;
    webpackConfig = require('./config/webpack.config.guide');
    var styleguideFolder = path.join(
        __dirname,
        'app',
        'styleguide',
        'components'
    );

    var files = fs.readdirSync(styleguideFolder).filter(function (fileName) {
        return fileName.indexOf('.guide') !== -1;
    }).map(function (fileName) {
        return fileName.replace('.js', '');
    });

    appEnv.__STYLEGUIDE_COMPONENTS__ = JSON.stringify(files);
}

if (isStyleguide) {
    webpackConfig.plugins.map(function (plugin) {
        if (plugin instanceof webpack.DefinePlugin) {
            return new webpack.DefinePlugin(appEnv);
        }
        return plugin;
    });
}

new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true,
    },
    proxy: proxyTable(serverCfg.proxyHost, serverCfg.proxyPort),
}).listen(serverCfg.port, serverCfg.host, function (err) {
    if (err) {
        console.log(err);
    }

    console.log('Listening at localhost:' + serverCfg.port);

    if (serverCfg.proxyIsEnabled && !isStyleguide) {
        runLocalAPI();
    }
});

function proxyTable(host, port) {
    var table = {
        '/' : proxyGuideEntryPoint(),
        '/index.html' : proxyGuideEntryPoint(),
    };

    serverCfg.proxyUrls.forEach(function (url) {
        table[url] = 'http://' + host + ':' + port + '/';
    });

    Object.keys(serverCfg.proxyRules).forEach(function (key) {
        table[key] = serverCfg.proxyRules[key];
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

    app.listen((serverCfg.proxyPort), function () {
        console.log(
            'Fake API /dist available at http://%s:%s',
            serverCfg.proxyHost,
            serverCfg.proxyPort
        );
    });
}
