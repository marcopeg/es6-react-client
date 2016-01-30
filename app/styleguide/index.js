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

import {
    renderMultiComponents,
    renderSingleComponent,
    renderStyleguideInfo,
} from '../../reapp-dev-tools/src';


require('../client/index.scss');
require('./index.scss');




/**
 * Render the styleguide for real
 */




var styleguide;
var styleguideTargetEl = document.getElementById('app');

if (shouldRenderSingleComponent()) {
    styleguide = renderSingleComponent(
        styleguideTargetEl,
        __STYLEGUIDE_ROOT__,
        {
            name: __STYLEGUIDE_COMPONENT__,
            def: require('./components/' + __STYLEGUIDE_COMPONENT__),
        },
        __STYLEGUIDE_SOURCES__
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
        __STYLEGUIDE_SOURCES__
    );
}

if (styleguide !== true) {
    renderStyleguideInfo(
        styleguideTargetEl,
        __STYLEGUIDE_ROOT__,
        styleguide
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
