
import React from 'react';

export class StyleguideSectionBody extends React.Component {

    static propTypes = {
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.array,
        ]),
    }

    render() {
        var style = {
            border: '1px dotted #ddd',
            borderRadius: 3,
            padding: 10,
            boxShadow: '1px 1px 3px #eee',
        };
        return (
            <div style={style}>
                {this.props.children}
            </div>
        );
    }
}
