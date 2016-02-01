/**
 * votes Actions
 */

export const ADD_VOTE = 'addVote@votes';

export const VALID_VOTES = [
    'happy',
    'sad',
    'soso',
];

export function addVote(value, rank = 0, ts = Date.now()) {

    if (VALID_VOTES.indexOf(value) === -1) {
        throw new TypeError('addVote@votes(' + value + ')');
    }

    return {
        type: ADD_VOTE,
        payload: {
            value,
            rank,
            ts,
        },
    };
}
