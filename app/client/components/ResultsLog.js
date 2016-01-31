
import React from 'react';

import ListGroup from 'react-bootstrap/lib/ListGroup';

import { HelpMsg } from 'components/HelpMsg';
import { ResultsLogItem } from 'components/ResultsLogItem';

export class ResultsLog extends React.Component {

    static propTypes = {
        results: React.PropTypes.array,
    }

    static defaultProps = {
        results: [],
    }

    render() {

        var results = this.props.results.map(result => (
            <ResultsLogItem {...result} key={result.ts} />
        ));

        if (!results.length) {
            return <HelpMsg />;
        }

        return (
            <ListGroup data-ta="results-log">
                {results}
            </ListGroup>
        );
    }
}
