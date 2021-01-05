import { apiGetArticleManageList } from 'api';
import * as types from 'store/types';

export const getArticleManageList = ({ tabValue }) => {
    return async (dispatch) => {
        const data = await apiGetArticleManageList ({}) || {};
        dispatch({
            type: types.GET_ARTICLEMANAGE_LIST,
            payload: { articleManageList: data },
        });
    };
};

export const delArticle = (id) => {
    return async (dispatch) => {
        dispatch({
            type: types.ARTICLEMANAGE_DEL_ARTICLE,
            payload: { id },
        });
    };
};