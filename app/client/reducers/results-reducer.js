/**
 * results Reducer
 */

import {
    ADD_RESULT,
} from 'actions/results-actions';

export const INITIAL_STATE = [];

export function resultsReducer(state = INITIAL_STATE, action) {
    var { type, payload } = action;
    switch (type) {
        case ADD_RESULT:
            return addResult(state, payload);
        default:
            return state;
    }
}

function addResult(state, payload) {
    return [payload, ...state];
}
