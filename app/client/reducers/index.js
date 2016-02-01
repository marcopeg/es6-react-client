
import { appReducer } from 'reducers/app-reducer';
import { votesReducer } from 'reducers/votes-reducer';
/* reapp: import new reducer */

export const reducers = {
    app: appReducer,
    votes: votesReducer,
    /* reapp: append new reducer */
};
