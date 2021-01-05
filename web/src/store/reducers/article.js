import * as types from '../types';

const initialState = {
    area: '',
    create_time: '',
    desc: '',
    img_url: '',
    major: '',
    meta: {
        views: 0,
    },
    title: '',
    university: '',
};


export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.ARTICLE_GET_DETAIL:
            return {
                ...payload.detail,
            };
        default:
            return state;
    }
};
