import { SIGNIN, SAVE_TOKEN } from '@types';

const INITIAL_STATE = {
    profile: null,
    token: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGNIN:
            return { ...state, profile: action.profile };
        case SAVE_TOKEN:
            return { ...state, token: action.token };
        default:
            return state;
    }
};
