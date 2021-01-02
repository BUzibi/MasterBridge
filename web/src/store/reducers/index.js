import { combineReducers } from 'redux';
import potraitmanagement from './potraitmanagement';
import experience from './experience';
import article from './article';
import announcement from './announcement';

const rootReducer = combineReducers({
	potraitmanagement,
	experience,
	article,
	announcement,
})

export default rootReducer;