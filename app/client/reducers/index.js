
import { appReducer } from 'reducers/app-reducer';
import { rankReducer } from 'reducers/rank-reducer';
import { resultsReducer } from 'reducers/results-reducer';
/* reapp: import new reducer */

export const reducers = {
    app: appReducer,
    rank: rankReducer,
    results: resultsReducer,
    /* reapp: append new reducer */
};
