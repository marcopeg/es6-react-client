
export const INITIAL_STATE = {
    title: 'React Client',
};

export function appReducer(state = INITIAL_STATE, action) {
    var { type, payload } = action;
    switch (type) {
        default: return state;
    }
}
