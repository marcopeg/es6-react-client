
import React from 'react';

export class Msg extends React.Component {

    static defaultProps = {
        bsStyle: '',
        text: null,
        className: null,
    }

    render() {
        var { bsStyle, text, className } = this.props;
        var classes = ['msg'];

        if (bsStyle) {
            classes.push('msg-' + bsStyle);
        }

        if (className) {
            classes.push(className);
        }

        return (
            <p className={classes.join(' ')}>{text || this.props.children}</p>
        );
    }
}
