
import React from 'react';
import { connect } from 'react-redux';

import Grid from 'react-bootstrap/lib/Grid';

@connect(s => s.app)
export class App extends React.Component {

    static propTypes = {
        title: React.PropTypes.string,
    }

    render() {
        return (
            <Grid>
                <h3>{this.props.title}</h3>
                <p>here you can write your app...</p>
            </Grid>
        );
    }
}
