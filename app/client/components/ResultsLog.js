
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
        var { results } = this.props;

        if (!results.length) {
            return <HelpMsg />;
        }

        var items = results.map((result, i) => (
            <ResultsLogItem {...result} key={i} />
        ));

        return (
            <ListGroup data-ta="results-log">
                {items}
            </ListGroup>
        );
    }
}
