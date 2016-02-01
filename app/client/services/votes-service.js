
import { addResult } from 'actions/results-actions';

export function vote(value) {
    return (dispatch, getState) => {
        var { rank } = getState();
        var nextRank = rank.currentValue;
        var time = Math.floor(Date.now() / 1000);

        switch (value) {
            case 'happy':
                nextRank += 5;
                break;
            case 'soso':
                nextRank -= 2;
                break;
            default:
                nextRank -= 5;
        }

        dispatch(addResult(value, nextRank, time));
    };
}
