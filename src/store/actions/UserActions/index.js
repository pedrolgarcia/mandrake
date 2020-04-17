import { SIGNIN, SAVE_TOKEN } from '@types';

export const signIn = (profile) => {
    return { type: SIGNIN, profile };
};

export const saveToken = (token) => {
    return { type: SAVE_TOKEN, token };
};
