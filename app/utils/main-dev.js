import React from 'react';
import { Provider } from 'react-redux';

import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

export const DevTools = createDevTools(
    <DockMonitor
        toggleVisibilityKey='ctrl-h' 
        changePositionKey='ctrl-q'>
        <LogMonitor theme='tomorrow' />
    </DockMonitor>
);

export class Main extends React.Component {

    static defaultProps = {
        app: null,
        store: null,
    }

    render() {
        return (
            <Provider store={this.props.store}>
                <div>
                    {React.createElement(this.props.app)}
                    <DevTools />
                </div>
            </Provider>
        );
    }
}
