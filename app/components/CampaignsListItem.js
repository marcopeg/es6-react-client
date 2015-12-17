
import React from 'react';
import { __noop } from 'lib/mish';

import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

export class CampaignsListItem extends React.Component {

    static defaultProps = {
        id: '-cmpId-',
        name: '-campaign name-',
        onClick: __noop,
    }

    onClick = () => {
        this.props.onClick(this.props.id);
    }

    render() {
        var { id, name, onClick } = this.props;

        return (
            <ListGroupItem onClick={this.onClick}>{name}</ListGroupItem>
        );
    }
}
