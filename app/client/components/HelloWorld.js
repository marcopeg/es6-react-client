
import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';

export class HelloWorld extends React.Component {

    static propTypes = {
        tag: React.PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
    }

    static defaultProps = {
        content: null,
        tag: 'h3',
    }

    render() {
        var { content, tag } = this.props;
        content = content || this.props.children;

        content = React.createElement(tag, null, content);

        return (
            <div className="page-header">
                {content}
            </div>
        );
    }
}
