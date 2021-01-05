import * as types from 'store/types';
import {apiGetArticleList, apiGetTagList} from 'api';

export const tagAreaChange = (area) => {
    return async (dispatch) => {
        dispatch({
            type: types.EXPERIENCE_TAG_AREA_CHANGE,
            payload: {area}
        });
        dispatch(getArticleList());
    };
};

export const tagUniversityChange = (university) => {
    return async (dispatch) => {
        dispatch({
            type: types.EXPERIENCE_TAG_UNIVERSITY_CHANGE,
            payload: {university}
        });
        dispatch(getArticleList());
    };
};

export const tagMajorChange = (major) => {
    return async (dispatch) => {
        dispatch({
            type: types.EXPERIENCE_TAG_MAJOR_CHANGE,
            payload: {major}
        });
        dispatch(getArticleList());
    };
};

export const getTagList = () => {
    return async (dispatch) => {
        const data = await apiGetTagList() || {};
        dispatch({
            type: types.EXPERIENCE_GET_TAG_LIST,
            payload: { tags: data.list },
        });
    };
};

export const getArticleList = () => {
    return async (dispatch, getState) => {
        const {
            experience: {
                query,
            },
        } = getState();
        const data = await apiGetArticleList(query) || {};
        console.log(data)
        dispatch({
            type: types.EXPERIENCE_GET_ARTICLE_LIST,
            payload: { list: data.list, count: data.count },
        });
    };
};
