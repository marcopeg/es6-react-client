/**
 * results Actions
 */

export const ADD_RESULT = 'addResult@results';

export function addResult(value, rank, ts) {
    return {
        type: ADD_RESULT,
        payload: { value, rank, ts },
    };
}
