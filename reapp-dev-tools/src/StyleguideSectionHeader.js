
import React from 'react';

export class StyleguideSectionHeader extends React.Component {

    static propTypes = {
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string,
        ]),
    }

    render() {
        var style = {
            padding: '0 10px',
        };
        return (
            <div style={style}>
                <h5>{this.props.children}</h5>
            </div>
        );
    }
}
