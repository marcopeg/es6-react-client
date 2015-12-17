
import { LOGIN_OK, LOGIN_KO } from 'actions/login-actions';

export const INITIAL_STATE = {
    status: false,
    err: null,
    msg: '',
};

export function loginReducer(state = INITIAL_STATE, action) {
    var { type, payload } = action;
    switch (type) {
        case LOGIN_OK:      return loginOk(state, payload);
        case LOGIN_KO:      return loginKo(state, payload);
        default:            return state;
    }
}

export function loginOk(state, payload) {
    return {
        ...state,
        status: true,
        err: null,
        msg: '',
    };
}

export function loginKo(state, payload) {
    return {
        ...state,
        status: false,
        err: payload.err,
        msg: payload.msg,
    };
}