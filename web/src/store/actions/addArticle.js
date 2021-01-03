import * as types from 'store/types';
import {apiAddArticle} from 'api';


export const addArticle = (history) => {
    return async (dispatch,getState) => {
        const {
            addArticle
        } = getState();
        const data = await apiAddArticle(addArticle);
        dispatch({
            type: types.ADD_ARTICLE,
            payload: { article: data},
        });
        history.push(`/article/${data._id}`);
    };
};

export const addArticleTitle = (title) => {
    return async (dispatch) => {
        dispatch({
            type: types.ADDARTICLE_CHANGE_ADD_TITLE,
            payload: { title },
        });
    };
};

export const addArticleArea = (area) => {
    return async (dispatch) => {
        dispatch({
            type: types.ADDARTICLE_CHANGE_ADD_AREA,
            payload: { area },
        });
    };
};

export const addArticleUniversity = (university) => {
    return async (dispatch) => {
        dispatch({
            type: types.ADDARTICLE_CHANGE_ADD_UNIVERSITY,
            payload: { university },
        });
    };
};

export const addArticleMajor = (major) => {
    return async (dispatch) => {
        dispatch({
            type: types.ADDARTICLE_CHANGE_ADD_MAJOR,
            payload: { major },
        });
    };
};

export const addArticleImgUrl = (img_url) => {
    return async (dispatch) => {
        dispatch({
            type: types.ADDARTICLE_CHANGE_ADD_IMG_URL,
            payload: { img_url },
        });
    };
};

export const addArticleContent = (content) => {
    return async (dispatch) => {
        dispatch({
            type: types.ADDARTICLE_CHANGE_ADD_CONTENT,
            payload: { content },
        });
    };
};