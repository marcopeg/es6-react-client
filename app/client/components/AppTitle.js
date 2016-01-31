
import React from 'react';

import PageHeader from 'react-bootstrap/lib/PageHeader';

export class AppTitle extends React.Component {

    static propTypes = {
        value: React.PropTypes.string,
    }

    static defaultProps = {
        value: 'Smiley!',
    }

    render() {
        var { value } = this.props;

        return (
            <PageHeader className="text-center">
                {value}
            </PageHeader>
        );
    }
}
