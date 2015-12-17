
import React from 'react';
import { connect } from 'react-redux';

import { Login } from 'containers/Login';
import { Dashboard } from 'containers/Dashboard';

@connect(s => s.login)
export class App extends React.Component {
    render() {

        var dashboard;
        if (this.props.status) {
            dashboard = <Dashboard />;
        }

        return (
            <div>
                {dashboard}
                <Login />
            </div>
        );
    }
}
