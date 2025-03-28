import {combineReducers} from 'redux';
import { authReducer } from './authslice';

const appReducer = combineReducers({
  authReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'RESET_STORE') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;