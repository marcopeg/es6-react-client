
import request from 'superagent';
import { setCampaigns } from 'actions/campaigns-actions';

export function loadCampaigns() {
    return (dispatch, getState) => {
        request
        .get('/api/campaigns')
        .set('Accept', 'application/json')
        .end((err, res) => {
            if (err) {
                return alert("It was not possible to load campaigns");
            }
            dispatch(setCampaigns(res.body));
            console.log(err, res.body);
        });
    };
}
