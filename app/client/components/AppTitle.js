
import React from 'react';

import PageHeader from 'react-bootstrap/lib/PageHeader';

export default class AppTitle extends React.Component {

    static propTypes = {
        title: React.PropTypes.string,
        rank: React.PropTypes.number,
    }

    static defaultProps = {
        title: 'Smiley!',
    }

    render() {
        var { title, rank } = this.props;

        var subtitle;
        if (rank) {
            subtitle = (
                <small> - {rank}</small>
            );
        }

        return (
            <PageHeader className="text-center">
                {title}
                {subtitle}
            </PageHeader>
        );
    }
}
