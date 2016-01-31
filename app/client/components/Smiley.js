
import React from 'react';

export class Smiley extends React.Component {

    static propTypes = {
        is: React.PropTypes.string,
        size: React.PropTypes.oneOf([
            'xsmall',
            'small',
            'normal',
            'large',
            'xlarge',
        ]),
        width: React.PropTypes.number,
        style: React.PropTypes.object,
        onClick: React.PropTypes.func,
    }

    static defaultProps = {
        is: '',
        size: 'normal',
        style: {},
    }

    render() {
        var { is, size, width, style, onClick } = this.props;
        var smiley = getText(is);
        var px = width || getPxSize(size);

        var css = {
            ...style,
            display: 'inline-block',
            width: px,
            height: px,
            background: getColor(is),
            color: 'white',
            borderRadius: '50%',
            textAlign: 'center',
            fontSize: (px * 0.6) + 'px',
            lineHeight: (px * 0.95) + 'px',
            transform: 'rotate(90deg)',
        };

        return (
            <span
                className="smiley"
                style={css}onClick={onClick}
                children={smiley} />
        );
    }
}

function getText(humor) {
    switch (humor) {
        case 'happy':
            return ':-)';
        case 'sad':
            return ':-(';
        default:
            return ':-|';
    }
}

function getColor(humor) {
    switch (humor) {
        case 'happy':
            return 'green';
        case 'soso':
            return 'orange';
        case 'sad':
            return 'red';
        default:
            return '#aaa';
    }
}

function getPxSize(size) {
    switch (size) {
        case 'xsmall':
            return 15;
        case 'small':
            return 20;
        case 'large':
            return 30;
        case 'xlarge':
            return 35;
        default:
            return 25;
    }
}
