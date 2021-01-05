import * as types from '../types';

const initialState = {
    area: '',
    desc: '',
    img_url: '',
    major: '',
    title: '',
    university: '',
};


export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.ADD_ARTICLE:
            return {
                ...state,
                ...payload.article,
            };
        case types.ADD_ARTICLE_GET_RECORD:
            return {
                ...state,
                ...payload.data,
            };
        case types.ADDARTICLE_CHANGE_ADD_TITLE:
            return {
                ...state,
                title: payload.title,
            };
        case types.ADDARTICLE_CHANGE_ADD_DESC:
            return {
                ...state,
                desc: payload.desc,
            };
        case types.ADDARTICLE_CHANGE_ADD_AREA:
            return {
                ...state,
                area: payload.area,
            };
        case types.ADDARTICLE_CHANGE_ADD_UNIVERSITY:
            return {
                ...state,
                university: payload.university,
            };
        case types.ADDARTICLE_CHANGE_ADD_MAJOR:
            return {
                ...state,
                major: payload.major,
            };
        case types.ADDARTICLE_CHANGE_ADD_IMG_URL:
            return {
                ...state,
                img_url: payload.img_url,
            };
        case types.ADDARTICLE_CHANGE_ADD_CONTENT:
            return {
                ...state,
                content: payload.content,
            };
        default:
            return state;
    }
};
