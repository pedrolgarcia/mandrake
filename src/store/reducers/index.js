import { combineReducers } from 'redux';
import AppReducer from '@reducers/AppReducer';
import UserReducer from '@reducers/UserReducer';

export default combineReducers({
    AppReducer,
    UserReducer,
});
