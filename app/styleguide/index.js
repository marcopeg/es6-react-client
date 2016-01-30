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
 */

/* globals __STYLEGUIDE_COMPONENT__ */
/* globals __STYLEGUIDE_COMPONENTS__ */
/* globals __STYLEGUIDE_ROOT__ */
/* globals __STYLEGUIDE_SOURCES__ */

// customize the styleguide here
var appName = 'es6-react-client';
var styleguideTargetEl = document.getElementById('app');
var styleguide;

// import app's stylesheet
require('../client/index.scss');

import {
    renderMultiComponents,
    renderSingleComponent,
    renderStyleguideInfo,
} from '../../reapp-dev-tools/src';

if (shouldRenderSingleComponent()) {
    styleguide = renderSingleComponent(
        styleguideTargetEl,
        __STYLEGUIDE_ROOT__,
        {
            name: __STYLEGUIDE_COMPONENT__,
            def: require('./components/' + __STYLEGUIDE_COMPONENT__),
        },
        __STYLEGUIDE_SOURCES__,
        appName
    );
}

if (shouldRenderMultiComponents()) {
    styleguide = renderMultiComponents(
        styleguideTargetEl,
        __STYLEGUIDE_ROOT__,
        __STYLEGUIDE_COMPONENTS__.map(function (componentName) {
            return {
                name: componentName,
                def: require('./components/' + componentName),
            };
        }),
        __STYLEGUIDE_SOURCES__,
        appName
    );
}

if (styleguide !== true) {
    renderStyleguideInfo(
        styleguideTargetEl,
        __STYLEGUIDE_ROOT__,
        styleguide,
        appName
    );
}

function shouldRenderSingleComponent() {
    try {
        return __STYLEGUIDE_COMPONENT__ !== null;
    } catch (e) {
        return false;
    }
}

function shouldRenderMultiComponents() {
    try {
        return __STYLEGUIDE_COMPONENTS__ !== null;
    } catch (e) {
        return false;
    }
}
