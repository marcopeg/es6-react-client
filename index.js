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
var runComponent = process.argv[process.argv.length - 1];
var runComponentFile = runComponent + '.guide.js';
var runComponentPath = path.join(__dirname, 'app', 'styleguide', 'components', runComponentFile);

if (fs.existsSync(runComponentPath)) {
    webpackConfig = require('./config/webpack.config.guide');
    appEnv.__STYLEGUIDE_COMPONENT__ = JSON.stringify(runComponent);
    webpackConfig.plugins.map(function (plugin) {
        if (plugin instanceof webpack.DefinePlugin) {
            return new webpack.DefinePlugin(appEnv);
        }
        return plugin;
    });
// the styleguide should put together all the components!
} else if (runComponent === 'styleguide') {
    console.log('###');
    console.log('### Styleguide will be available soon');
    console.log('### run a single component styleguide by:');
    console.log('###');
    console.log('###     npm start ComponentName');
    console.log('###');
    runComponent = null;
} else {
    runComponent = null;
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

    if (serverCfg.proxyIsEnabled && !runComponent) {
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
            return runComponent ? '/config/guide.html' : '/config/client.html';
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
