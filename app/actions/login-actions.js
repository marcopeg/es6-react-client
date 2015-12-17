
export const LOGIN_OK = 'ok@login';
export const LOGIN_KO = 'ko@login';

export function loginOk() {
    return {
        type: LOGIN_OK,
    };
}

export function loginKo(err = 0, msg = 'bad credentials') {
    return {
        type: LOGIN_KO,
        payload: { err, msg },
    };
}
