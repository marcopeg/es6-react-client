
import { appReducer } from 'reducers/app-reducer';
import { loginReducer } from 'reducers/login-reducer';
import { campaignsReducer } from 'reducers/campaigns-reducer';

export const reducers = {
    app: appReducer,
    login: loginReducer,
    campaigns: campaignsReducer
};
