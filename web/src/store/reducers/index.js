import { combineReducers } from 'redux';
import potraitmanagement from './potraitmanagement';
import experience from './experience';
import article from './article';

const rootReducer = combineReducers({
	potraitmanagement,
	experience,
	article,
})

export default rootReducer;