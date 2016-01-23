var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config');
var appEnv = require('../app/env');

config.entry = ['./app/client/app.prod'];

config.output.filename = 'app.min.js';
config.output.path = path.join(process.cwd(), 'dist');

config.externals = {
    react: 'React',
    'react-dom': 'ReactDOM',
};

config.plugins = [
    new webpack.DefinePlugin(appEnv),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
        },
    }),
];

// remove hot loading from the transpiler
config.module.loaders = config.module.loaders.map(function (loader) {
    if (loader.test.toString().indexOf('.js$') !== -1) {
        loader.loaders.shift();
    }

    return loader;
});

// disable sourcemaps
config.devtool = null;

module.exports = config;