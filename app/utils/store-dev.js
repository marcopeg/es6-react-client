
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import { reducers } from 'reducers';
const reducer = combineReducers(reducers);
const middlewares = [reduxThunk];

var store;

export function makeStore(initialState) {

    var finalCreateStore = compose(
        applyMiddleware(...middlewares),
        require('redux-devtools').devTools(),
        require('redux-devtools').persistState(
          window.location.href.match(/[?&]debug_session=([^&]+)\b/)
        )
    )(createStore);

    store = finalCreateStore(reducer, initialState);
    return store;
}

export function dispatch(action) {
    store.dispatch(action);
}
