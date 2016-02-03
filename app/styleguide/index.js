/**
 * The purpose of this entry point is to work on a component in isolation.
 *
 * You should create a `styleguide/components/Component.guide` file which loads
 * the component from the `app` folder and render it in all the possible ways.
 *
 * ```
 * npm start ComponentName
 * npm start styleguide
 * ```
 *
 * The above command will start a web server that renders your componet guide.
 *
 * NOTE: do not remove nor alter the reapp comments,
 *       they are used during scaffolding operations!
 *
 */

// customize the styleguide here
var appName = 'es6-react-client';
var styleguideTargetEl = document.getElementById('app');

// import app's stylesheet
require('../client/index.scss');

/* reapp: start */
/* globals __STYLEGUIDE__ */
var styleguideInfo = __STYLEGUIDE__;

import {
    renderMultiComponents,
    renderStyleguideInfo,
} from 'reapp-dev-tools';

try {
    renderMultiComponents(
        styleguideTargetEl,
        styleguideInfo.cdw,
        styleguideInfo.components.map(function (component) {

            var StyleguidePage;
            if (component.plugin) {
                /* eslint-disable */
                StyleguidePage = require('../plugins/' + component.plugin + '/styleguide/components/' + component.guideFile);
                /* eslint-enable */
            } else {
                StyleguidePage = require('./components/' + component.guideFile);
            }

            return {
                name: component.guideFile,
                def: StyleguidePage,
            };
        }),
        styleguideInfo.sources,
        appName
    );
} catch (e) {
    renderStyleguideInfo(
        styleguideTargetEl,
        styleguideInfo.cdw,
        e,
        appName
    );
}
/* reapp: end */
