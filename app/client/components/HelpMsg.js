
import React from 'react';

export class HelpMsg extends React.Component {

    static propTypes = {
        value: React.PropTypes.string,
    }

    static defaultProps = {
        value: 'A New Component',
    }

    render() {
        var { value } = this.props;

        return (
            <div>
                {value}
            </div>
        );
    }
}
