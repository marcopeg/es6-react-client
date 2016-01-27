/**
 * The purpose of this entry point is to work on a component in isolation.
 *
 * You should create a `styleguide/components/Component.guide` file which loads
 * the component from the `app` folder and render it in all the possible ways.
 *
 * ```
 * npm run guide ComponentName
 * ```
 *
 * The above command will start a web server that renders your componet guide.
 */

/* globals __STYLEGUIDE_COMPONENT__ __STYLEGUIDE_COMPONENTS__ */

import React from 'react';
import ReactDOM from 'react-dom';

import Grid from 'react-bootstrap/lib/Grid';
import Alert from 'react-bootstrap/lib/Alert';

require('../client/index.scss');
require('./index.scss');

class StyleguidePage extends React.Component {

    static propTypes = {
        name: React.PropTypes.string.isRequired,
        children: React.PropTypes.element.isRequired,
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                {this.props.children}
            </div>
        );
    }
}

class StyleguideIndex extends React.Component {

    static propTypes = {
        components: React.PropTypes.array.isRequired,
    }

    render() {
        return (
            <div>
                {this.props.components}
            </div>
        );
    }
}

class ErrorComponent extends React.Component {

    static propTypes = {
        message: React.PropTypes.string.isRequired,
    }

    render() {
        var { message } = this.props;
        var styles = {
            grid: {
                marginTop: 50,
            },
        };

        if (message.indexOf('.guide') !== -1) {
            message = message.replace('.guide', '.guide.js');
        }

        return (
            <Grid style={styles.grid}>
                <Alert bsStyle="danger">
                    <h4>Ooooops!</h4>
                    <p>{message}</p>
                </Alert>

                <p>In order to run the styleguide for <code>ComponentName</code> you should run:</p>
                <pre>npm run guide ComponentName</pre>
            </Grid>
        );
    }
}

var GuideComponent;
var styleguideContent;
var tryToRenderComponentPage = true;
var tryToRenderStyleguide = false;
var renderInstructions = false;

// try to render single component styleguide
if (tryToRenderComponentPage) {
    try {
        GuideComponent = require('./components/' + __STYLEGUIDE_COMPONENT__ + '.guide');
        styleguideContent = (
            <StyleguidePage name={__STYLEGUIDE_COMPONENT__}>
                <GuideComponent />
            </StyleguidePage>
        );
    } catch (e) {
        tryToRenderStyleguide = true;
    }
}

// try to render full styleguide
if (tryToRenderStyleguide) {
    try {
        var components = __STYLEGUIDE_COMPONENTS__.map(componentName => {
            GuideComponent = require('./components/' + componentName);
            return (
                <StyleguidePage name={componentName.replace('.guide', '')} key={componentName}>
                    <GuideComponent />
                </StyleguidePage>
            );
        });

        styleguideContent = <StyleguideIndex components={components} />;
    } catch (e) {
        renderInstructions = true;
    }
}

// render styleguide instructions
if (renderInstructions) {
    styleguideContent = <ErrorComponent message={'hoho'} />;
}

ReactDOM.render(styleguideContent, document.getElementById('app'));
