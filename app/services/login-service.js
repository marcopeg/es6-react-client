
import { loginOk, loginKo } from 'actions/login-actions';
import request from 'superagent';

export function login(uname, passw) {
    return (dispatch, getState) => {        
        request
        .post('/api/login')
        .send({uname, passw})
        .set('Accept', 'application/json')
        .end((err, res) => {
            if (!err && res.body.status === true) {
                dispatch(loginOk());
            } else {
                dispatch(loginKo(res.body.err, res.body.msg));
            }
        });
    };
}

export function logout(study_id) {
    return (dispatch, getState) => {
        // setTimeout(() => dispatch(setLogin(false)), 100);
    };
}
