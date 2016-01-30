
import React from 'react';

import Grid from 'react-bootstrap/lib/Grid';

export class Styleguide extends React.Component {

    static propTypes = {
        sources: React.PropTypes.array,
        root: React.PropTypes.string,
        children: React.PropTypes.array,
    }

    static childContextTypes = {
        styleguideSources: React.PropTypes.array,
        styleguideRoot: React.PropTypes.string,
    }

    getChildContext() {
        return {
            styleguideSources: this.props.sources,
            styleguideRoot: this.props.root,
        };
    }

    render() {
        var { children } = this.props;
        return (
            <Grid>
                {children}
            </Grid>
        );
    }
}
