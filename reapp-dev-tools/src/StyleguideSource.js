
import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Alert from 'react-bootstrap/lib/Alert';

export class StyleguideSource extends React.Component {

    static propTypes = {
        lines: React.PropTypes.array,
    }

    state = {
        isOpen: false,
    }
    
    render() {
        var content = null;
        if (this.state.isOpen) {
            var lines = this.props.lines.map((line, i) => {
                return <span key={i}>{line}<br /></span>;
            });
            content = (
                <Alert
                    bsStyle="info"
                    style={{
                        marginTop: 10,
                        background: '#eee',
                        borderColor: '#aaa',
                    }}
                    onDismiss={() => this.setState({ isOpen: false })}>
                    <pre style={{
                        border: '0px solid black',
                        padding: 0,
                        margin: 0,
                        background: 'transparent',
                    }}>{lines}</pre>
                </Alert>
            );
        } else {
            content = (
                <div style={{ textAlign: 'right', marginRight: 10 }}>
                    <Button bsStyle="link" onClick={() => this.setState({ isOpen: true })}>
                        Show Code
                    </Button>
                </div>
            );
        }

        return content;
    }
}
