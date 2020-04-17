import axios from 'axios';

import store from '@store';
import REMOTE from '@remote/urls';

const defaultOptions = {
    baseURL: REMOTE.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
};

const instance = axios.create(defaultOptions);

export const api = (auth = '') => {
    if (auth === 'auth') {
        instance.interceptors.request.use(function (config) {
            const { token } = store().getState().UserReducer.token;
            config.headers.Authorization = `JWT ${token}`;

            return config;
        });
    }

    return instance;
};
