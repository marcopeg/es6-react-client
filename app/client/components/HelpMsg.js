
import React from 'react';

import Well from 'react-bootstrap/lib/Well';

export class HelpMsg extends React.Component {
    render() {
        return (
            <Well>
                <p>
                    Hello, there are no logs so far.
                </p>
                <p className="lead">
                    Click on the buttons above and tell me how are you!
                </p>
            </Well>
        );
    }
}
