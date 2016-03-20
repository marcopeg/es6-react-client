
import React from 'react';

import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Badge from 'react-bootstrap/lib/Badge';

import Smiley from 'components/Smiley';

export default class ResultsLogItem extends React.Component {

    static propTypes = {
        value: React.PropTypes.string.isRequired,
        rank: React.PropTypes.number.isRequired,
        ts: React.PropTypes.number.isRequired,
    }

    render() {
        var { value, rank, ts } = this.props;
        var date = getDisplayDate(ts);

        return (
            <ListGroupItem data-ta="results-log-item">
                <Smiley is={value} style={{ marginRight: 10 }} />
                <small>{date}</small>
                <Badge>{rank}</Badge>
            </ListGroupItem>
        );
    }
}

// minimalistic date parsing utility
function getDisplayDate(ts) {
    var date = new Date(ts * 1000);
    var str = date.toString();
    return str.substr(0, str.indexOf('GMT'));
}
