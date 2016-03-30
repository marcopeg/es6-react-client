/* global BASE_PATH */

import React from 'react';
import { connect } from 'react-redux';

import Grid from 'react-bootstrap/lib/Grid';

import AppTitle from 'components/AppTitle';
import VotePanel from 'components/VotePanel';
import ResultsLog from 'components/ResultsLog';

import { vote } from 'services/votes-service';

@connect(state => {
    return {
        title: state.app.title,
        results: state.results,
        rank: state.rank.currentValue,
    };
})

export default class App extends React.Component {

    static propTypes = {
        title: React.PropTypes.string,
        results: React.PropTypes.array,
        rank: React.PropTypes.number,
        dispatch: React.PropTypes.func,
    }

    onVote = value => {
        var { dispatch } = this.props;
        dispatch(vote(value));
    }

    render() {
        var { onVote } = this;
        var { title, results, rank } = this.props;

        return (
            <Grid>
                <AppTitle title={title} rank={rank} />
                <VotePanel onVote={onVote} />
                <hr />
                <ResultsLog results={results} />
                <img src={BASE_PATH + 'assets/react-logo.png'} width={89} />
            </Grid>
        );
    }
}
