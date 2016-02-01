
import React from 'react';
import { connect } from 'react-redux';

import Grid from 'react-bootstrap/lib/Grid';

import { AppTitle } from 'components/AppTitle';
import { VotePanel } from 'components/VotePanel';
import { ResultsLog } from 'components/ResultsLog';

import { addVote } from 'actions/votes-actions';

@connect(s => {
    return {
        title: s.app.title,
        votes: s.votes,
    };
})

export class App extends React.Component {

    static propTypes = {
        title: React.PropTypes.string,
        votes: React.PropTypes.array,
        dispatch: React.PropTypes.func,
    }

    onAddVote = vote => {
        var { dispatch } = this.props;
        dispatch(addVote(vote));
    }

    render() {
        var { onAddVote } = this;
        var { title, votes } = this.props;

        return (
            <Grid>
                <AppTitle value={title} />
                <VotePanel onVote={onAddVote} />
                <hr />
                <ResultsLog results={votes} />
            </Grid>
        );
    }
}
