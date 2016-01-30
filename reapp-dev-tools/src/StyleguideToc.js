import React from 'react';

import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Panel from 'react-bootstrap/lib/Panel';

export class StyleguideToc extends React.Component {

    static propTypes = {
        components: React.PropTypes.array.isRequired,
        title: React.PropTypes.string,
    }

    static defaultProps = {
        title: 'Table of Contents:',
    }

    render() {
        var { title } = this.props;
        var components = this.props.components.map(name => {
            return (
                <ListGroupItem key={name} href={'#' + name}>
                    {name}
                </ListGroupItem>
            );
        });

        return (
            <div>
                <Panel bsStyle="success" header={title}>
                    <ListGroup fill>{components}</ListGroup>
                </Panel>
            </div>
        );
    }
}
