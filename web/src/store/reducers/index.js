import { combineReducers } from 'redux';
import potraitmanagement from './potraitmanagement';
import experience from './experience';
import article from './article';
import announcement from './announcement';
import addArticle from './addArticle';
import master from './master';
import masterLogin from './masterLogin';
import masterRegister from './masterRegister';
import getMasterInfo from './master';
import userLogin from './userLogin';
import userRegister from './userRegister';

const rootReducer = combineReducers({
	potraitmanagement,
	experience,
	article,
	announcement,
	addArticle,
	master,
	masterLogin,
	masterRegister,
	getMasterInfo,
	userLogin,
	userRegister,
})

export default rootReducer;