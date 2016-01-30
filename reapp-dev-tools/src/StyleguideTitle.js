
import React from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import PageHeader from 'react-bootstrap/lib/PageHeader';

export class StyleguideTitle extends React.Component {

    static propTypes = {
        title: React.PropTypes.string,
    }

    static defaultProps = {
        title: 'Project\'s Title',
    }

    render() {
        var { title } = this.props;
        return (
            <PageHeader>
                {title} <small>Styleguide</small>
            </PageHeader>
        );
    }
}
