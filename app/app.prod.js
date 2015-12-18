/**
 * OmorfiaApp
 * app startup script for production purpose
 */

require('./index.scss');

import React from 'react';
import ReactDOM from 'react-dom';

import { Main } from 'utils/main';
import { makeStore } from 'utils/store';

import { App } from 'containers/app';
import { initialState } from 'fixtures/initial-state-prod.fixture';

export function start(targetEl, payload) {
    
    // apply the host's page payload 
    if (payload.title) {
        initialState.app.title = payload.title;
    }
    
    ReactDOM.render((
        <Main
            app={App}
            store={makeStore(initialState)} />
    ), targetEl);
}
