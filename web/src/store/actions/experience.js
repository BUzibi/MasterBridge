import * as types from 'store/types';
import {apiGetArticleList} from 'api';

export const getArticleList = () => {
    return async (dispatch) => {
        const data = await apiGetArticleList() || {};
        console.log(data)
        dispatch({
            type: types.EXPERIENCE_GET_ARTICLE_LIST,
            payload: { list: data.list, count: data.count },
        });
    };
};
