
import React from 'react';
import { __noop } from 'lib/mish';

import ListGroup from 'react-bootstrap/lib/ListGroup';
import { CampaignsListItem } from 'components/CampaignsListItem';

export class CampaignsList extends React.Component {

    static defaultProps = {
        items: [],
        onDisclose: __noop,
    }

    render() {
        var { items, onDisclose } = this.props;

        console.log(items);

        items = items.map(item => <CampaignsListItem {...item} key={item.id} onClick={onDisclose} />);

        return (
            <ListGroup>{items}</ListGroup>
        );
    }
}
