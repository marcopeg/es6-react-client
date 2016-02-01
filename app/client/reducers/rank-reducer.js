/**
 * rank Reducer
 */

import {
    ADD_RESULT,
} from 'actions/results-actions';

export const INITIAL_STATE = {
    currentValue: 100,
    history: [],
};

export function rankReducer(state = INITIAL_STATE, action) {
    var { type, payload } = action;
    switch (type) {
        case ADD_RESULT:
            return addResult(state, payload);
        default:
            return state;
    }
}

function addResult(state, payload) {
    var { rank } = payload;
    var { history } = state;

    return {
        ...state,
        currentValue: rank,
        history: [history, payload],
    };
}

