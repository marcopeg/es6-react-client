/* eslint no-undefined:0 */

import {
    rankReducer,
    INITIAL_STATE,
} from 'reducers/rank-reducer';

describe('rankReducer', () => {
    it.skip('should setup its initial state', () => {
        var expectedState = {
            ...INITIAL_STATE,
        };
        var nextState = rankReducer(undefined, {});
        expect(nextState).to.deep.equal(expectedState);
    });
});
