import { combineReducers } from 'redux';
import potraitmanagement from './potraitmanagement';
import experience from './experience';

const rootReducer = combineReducers({
	potraitmanagement,
	experience,
})

export default rootReducer;