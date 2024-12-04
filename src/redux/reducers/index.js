import { combineReducers } from 'redux';
import authSlice from "./authSlice"
import dashboard from './dashboard'

const appReducer = combineReducers({
    auth : authSlice,
    dashboard: dashboard
});

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        // eslint-disable-next-line no-param-reassign
        state = undefined
    }
    return appReducer(state, action)
}

export default rootReducer