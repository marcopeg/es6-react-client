
import React from 'react';
import { connect } from 'react-redux';

import Grid from 'react-bootstrap/lib/Grid';

import { AppTitle } from 'components/AppTitle';
import { VotePanel } from 'components/VotePanel';
import { ResultsLog } from 'components/ResultsLog';

@connect(s => s.app)
export class App extends React.Component {

    static propTypes = {
        title: React.PropTypes.string,
    }

    render() {
        return (
            <Grid>
                <AppTitle value={this.props.title} />
                <VotePanel />
                <hr />
                <ResultsLog />
            </Grid>
        );
    }
}
