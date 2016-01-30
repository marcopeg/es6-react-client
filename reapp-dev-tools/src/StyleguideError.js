
import React from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Alert from 'react-bootstrap/lib/Alert';

import { StyleguideTitle } from './StyleguideTitle';


export class StyleguideError extends React.Component {

    static propTypes = {
        error: React.PropTypes.oneOfType([
            React.PropTypes.object,
            React.PropTypes.string,
            React.PropTypes.number,
        ]),
        title: React.PropTypes.string,
    }

    render() {
        var { error, title } = this.props;
        var message = error.message || error.toString();

        if (message.indexOf('.guide') !== -1) {
            message = message.replace('.guide', '.guide.js');
        }

        return (
            <Grid>
                <StyleguideTitle title={title} />

                <Alert bsStyle="danger">
                    <h4>Ooooops!</h4>
                    <p>{message}</p>
                </Alert>

                <p>In order to run the styleguide for <code>ComponentName</code> you should run:</p>
                <pre>npm run guide ComponentName</pre>
            </Grid>
        );
    }
}
