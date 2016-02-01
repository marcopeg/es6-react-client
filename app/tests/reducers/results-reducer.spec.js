/* eslint no-undefined:0 */

import {
    resultsReducer,
    INITIAL_STATE,
} from 'reducers/results-reducer';

import {
    setValue,
} from 'actions/results-actions';

describe('resultsReducer', () => {
    it.skip('should setup its initial state', () => {
        var expectedState = {
            ...INITIAL_STATE,
        };
        var nextState = resultsReducer(undefined, {});
        expect(nextState).to.deep.equal(expectedState);
    });

    it.skip('should set value', () => {
        var value = 'new-value' + Date.now();
        var action = setValue(value);
        var expectedState = {
            ...INITIAL_STATE,
            value: value,
        };
        var nextState = resultsReducer(undefined, action);
        expect(nextState).to.deep.equal(expectedState);
    });
});
