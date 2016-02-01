/**
 * votes Reducer
 */

import {
    ADD_VOTE,
} from 'actions/votes-actions';

export const INITIAL_STATE = [];

export function votesReducer(state = INITIAL_STATE, action) {
    var { type, payload } = action;
    switch (type) {
        case ADD_VOTE:
            return addVote(state, payload);
        default:
            return state;
    }
}

function addVote(state, payload) {
    return [payload, ...state];
}
