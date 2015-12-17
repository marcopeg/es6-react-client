
export const SET_CAMPAIGNS = 'set@campaigns';

export function setCampaigns(items) {
    return {
        type: SET_CAMPAIGNS,
        payload: { items },
    };
}
