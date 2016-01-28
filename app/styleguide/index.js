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

/* globals __STYLEGUIDE_COMPONENT__ __STYLEGUIDE_COMPONENTS__ */

import React from 'react';
import ReactDOM from 'react-dom';

import Grid from 'react-bootstrap/lib/Grid';
import Alert from 'react-bootstrap/lib/Alert';
import Panel from 'react-bootstrap/lib/Panel';
import PageHeader from 'react-bootstrap/lib/PageHeader';

require('../client/index.scss');
require('./index.scss');

class StyleguideTitle extends React.Component {
    render() {
        return (
            <Grid>
                <PageHeader>es6-react-client <small>Styleguide</small></PageHeader>
            </Grid>
        );
    }
}

class StyleguidePage extends React.Component {
    static propTypes = {
        name: React.PropTypes.string.isRequired,
        children: React.PropTypes.element.isRequired,
    }
    render() {
        return (
            <Grid style={{ marginTop: 10 }}>
                <Panel header={this.props.name} bsStyle="primary">
                    {this.props.children}
                </Panel>
            </Grid>
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

export class GuidePage extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.array,
        ]),
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export class GuideSectionHeader extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string,
        ]),
    }
    render() {
        var style = {
            padding: '0 10px',
        };
        return (
            <div style={style}>
                <h5>{this.props.children}</h5>
            </div>
        );
    }
}

export class GuideSectionBody extends React.Component {
    static propTypes = {
        children: React.PropTypes.element.isRequired,
    }
    render() {
        var style = {
            border: '1px dotted #ddd',
            borderRadius: 3,
            padding: 10,
            boxShadow: '1px 1px 3px #eee',
        };
        return (
            <div style={style}>
                {this.props.children}
            </div>
        );
    }
}

export class GuideSection extends React.Component {
    static propTypes = {
        title: React.PropTypes.string,
        children: React.PropTypes.element,
    }
    render() {
        var style = {
            marginBottom: 40,
        };
        return (
            <div style={style}>
                <GuideSectionHeader>{this.props.title}</GuideSectionHeader>
                <GuideSectionBody>
                    {this.props.children}
                </GuideSectionBody>
            </div>
        );
    }
}


/**
 * Render the styleguide for real
 */

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
            <div>
                <StyleguideTitle />
                <StyleguidePage name={__STYLEGUIDE_COMPONENT__}>
                    <GuideComponent />
                </StyleguidePage>
            </div>
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

        styleguideContent = (
            <div>
                <StyleguideTitle />
                <StyleguideIndex components={components} />
            </div>
        );
    } catch (e) {
        renderInstructions = true;
    }
}

// render styleguide instructions
if (renderInstructions) {
    styleguideContent = <ErrorComponent message={'hoho'} />;
}

ReactDOM.render(styleguideContent, document.getElementById('app'));
