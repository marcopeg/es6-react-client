
import React from 'react';

import Grid from 'react-bootstrap/lib/Grid';

export class Styleguide extends React.Component {

    static propTypes = {
        children: React.PropTypes.array,
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
