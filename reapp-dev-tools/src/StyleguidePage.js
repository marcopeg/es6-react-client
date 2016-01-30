
import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';

export class StyleguidePage extends React.Component {

    static contextTypes = {
        styleguideRoot: React.PropTypes.string,
    }

    static propTypes = {
        name: React.PropTypes.string.isRequired,
        component: React.PropTypes.func.isRequired,
    }

    render() {
        var { styleguideRoot } = this.context;
        var { name, component } = this.props;
        var componentName = name.replace('.guide', '');
        var componentFile = componentName + '.js';

        var componentPath = [
            styleguideRoot,
            'app',
            'client',
            'components',
            componentFile,
        ].join('/');

        var source = (
            <code
                style={{
                    background: 'transparent',
                }}
                children={componentPath} />
        );

        var footer = (
            <div>
                <Button
                    href="#top"
                    bsStyle="link"
                    bsSize="xsmall"
                    style={{ marginTop: -3 }}
                    className="pull-right"
                    children="Back to Top" />
                <small children={source} />
            </div>
        );

        var Component = React.createElement(component);

        return (
            <div id={name}>
                <Panel
                    header={componentName}
                    footer={footer}
                    bsStyle="primary"
                    style={{ marginTop: 10 }}
                    children={Component} />
            </div>
        );
    }
}
