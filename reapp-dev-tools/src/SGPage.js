
import React from 'react';

export class SGPage extends React.Component {

    static propTypes = {
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.array,
        ]),
    }
    
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
