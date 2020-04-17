import { createStore } from 'redux';
import reducers from '@reducers';

const store = (state) => {
    return createStore(reducers, state);
};

export default store;
