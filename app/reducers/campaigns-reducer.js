
import { SET_CAMPAIGNS } from 'actions/campaigns-actions';

export const INITIAL_STATE = {
    items: [],
};

export function campaignsReducer(state = INITIAL_STATE, action) {
    var { type, payload } = action;
    switch (type) {
        case SET_CAMPAIGNS:     return setCampaigns(state, payload);
        default:                return state;
    }
}

export function setCampaigns(state, payload) {
    return {
        ...state,
        items: payload.items,
    };
}
