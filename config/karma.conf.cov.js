
var path = require('path');
var karmaConf = require('./karma.conf.js');

module.exports = function (config) {
    karmaConf(config);

    var webpackConfig = config.webpack;

    webpackConfig.module.postLoaders = [
        {
            test: /\.js$/,
            loader: 'isparta',
            exclude: /(tests|node_modules|bower_components)/,
            include: process.cwd(),
        },
    ];

    config.set({
        webpack: webpackConfig,
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            dir: path.join(process.cwd(), 'test-coverage-report'),
            reporters: [
                { type: 'text' },
                { type: 'html' },
            ],
        },
    });
};
