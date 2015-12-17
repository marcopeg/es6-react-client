/**
 * OmorfiaApp
 * app startup script for development purpose
 */

require('./index.scss');
const __DEBUG__ = true;

import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'containers/app';
import { makeStore } from 'utils/store';
import { setStudyId } from 'actions/app-actions';

var Main = require(__DEBUG__ ? 'utils/main-debug' : 'utils/main').Main;
var store = makeStore(__DEBUG__, require('fixtures/initial-state.fixture').DEV);

export function start(targetEl) {
    ReactDOM.render((
        <Main
            app={App}
            store={store} />
    ), targetEl);
}
