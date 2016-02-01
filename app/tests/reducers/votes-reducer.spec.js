/* eslint no-undefined:0 */

import {
    votesReducer,
    INITIAL_STATE,
} from 'reducers/votes-reducer';

import {
    VALID_VOTES,
} from 'actions/votes-actions';

import {
    addVote,
} from 'actions/votes-actions';

describe('votesReducer', () => {
    it('should setup its initial state', () => {
        var expectedState = [...INITIAL_STATE];
        var nextState = votesReducer(undefined, {});
        expect(nextState).to.deep.equal(expectedState);
    });

    it('should add a value', () => {
        var value = VALID_VOTES[0];
        var action = addVote(value);
        var expectedState = [
            ...INITIAL_STATE,
            action.payload,
        ];
        var nextState = votesReducer(undefined, action);
        expect(nextState).to.deep.equal(expectedState);
    });
});
