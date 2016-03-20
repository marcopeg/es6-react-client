
import React from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import Smiley from 'components/Smiley';

import { __noop } from 'utils/mish';

export default class VotePanel extends React.Component {

    static propTypes = {
        size: React.PropTypes.number,
        onVote: React.PropTypes.func,
    }

    static defaultProps = {
        size: 80,
        onVote: __noop.named('VotePanel::onVote()'),
    }

    render() {
        var { size, onVote } = this.props;

        var options = ['happy', 'soso', 'sad'].map(humor => (
            <Col key={humor} xs={4} className="text-center">
                <Smiley
                    is={humor}
                    width={size}
                    onClick={() => onVote(humor)}/>
            </Col>
        ));

        return (
            <Grid fluid>
                <Row>
                    {options}
                </Row>
            </Grid>
        );
    }
}
