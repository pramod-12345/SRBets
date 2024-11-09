import { combineReducers } from 'redux';
import auth from './authSlice';


const appReducer = combineReducers({
    auth: auth
});

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        // eslint-disable-next-line no-param-reassign
        state = undefined
    }
    return appReducer(state, action)
}

export default rootReducer