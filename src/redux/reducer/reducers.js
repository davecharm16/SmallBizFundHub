// reducers.js
import { combineReducers } from 'redux';
import counterReducer from '../slice/counterSlice'
import userReducer from '../slice/userSlice'

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
});

export default rootReducer;
