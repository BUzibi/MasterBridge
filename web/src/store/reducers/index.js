import { combineReducers } from 'redux';
import potraitmanagement from './potraitmanagement';
import experience from './experience';
import article from './article';
import announcement from './announcement';
import addArticle from './addArticle';

const rootReducer = combineReducers({
	potraitmanagement,
	experience,
	article,
	announcement,
	addArticle,
})

export default rootReducer;