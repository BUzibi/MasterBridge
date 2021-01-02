import * as types from 'store/types';
import {apiGetArticleDetail} from 'api';

export const getArticleDetail = (id) => {
    return async (dispatch) => {
        const data = await apiGetArticleDetail({id}) || {};
        dispatch({
            type: types.ARTICLE_GET_DETAIL,
            payload: { detail: data},
        });
    };
};
