/* eslint max-nested-callbacks:0 no-undefined:0 */

import {
    ADD_VOTE,
    VALID_VOTES,
    addVote,
} from 'actions/votes-actions';

const INVALID_VOTES = [
    12,
    'foo',
    () => {},
    true,
    false,
    null,
    undefined,
];

describe('votes actions', () => {
    it('should addVote()', () => {
        var action = addVote(VALID_VOTES[0]);
        expect(action.type).to.equal(ADD_VOTE);
    });

    VALID_VOTES.forEach(type => {
        it('should accept n ' + type, () => {
            var action = addVote(type);
            expect(action.type).to.equal(ADD_VOTE);
        });
    });

    INVALID_VOTES.forEach(type => {
        it('should complain with an ' + type, () => {
            expect(() => {
                addVote(type);
            }).to.throw(TypeError);
        });
    });
});
