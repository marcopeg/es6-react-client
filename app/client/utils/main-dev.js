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

    state = {
        showDebug: false,
    }


    componentWillMount() {
        try {
            var initialState = JSON.parse(sessionStorage.getItem('redux-devtools'));
            this.setState(initialState || {});
        } catch (e) {}
    }

    componentDidMount() {
        document.body.addEventListener('keyup', e => {
            if (e.ctrlKey || e.altKey) {
                switch (e.keyCode) {
                    case 27: // esc
                    case 32: // space
                    case 68: // d
                        this.setState({showDebug: !this.state.showDebug});
                        break;
                }
            }
        });
    }

    componentWillUpdate(nextProps, nextState) {
        sessionStorage.setItem('redux-devtools', JSON.stringify(nextState));
    }


    render() {

        var { showDebug } = this.state;

        return (
            <Provider store={this.props.store}>
                <div>
                    {React.createElement(this.props.app)}
                    {showDebug ? <DevTools /> : null}
                </div>
            </Provider>
        );
    }
}
