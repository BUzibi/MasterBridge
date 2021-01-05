import * as types from '../types';

const initialState = {
    query: {
        area: '',
        university: '',
        major: '',
    },
    tags: [],
    count: 0,
    list: [],
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.EXPERIENCE_TAG_AREA_CHANGE:
            return {
                ...state,
                query: {
                    ...state.query,
                    area: payload.area,
                },
            };
        case types.EXPERIENCE_TAG_UNIVERSITY_CHANGE:
                return {
                    ...state,
                    query: {
                        ...state.query,
                        university: payload.university,
                    },
                };
        case types.EXPERIENCE_TAG_MAJOR_CHANGE:
            return {
                ...state,
                query: {
                    ...state.query,
                    major: payload.major,
                },
            };
        case types.EXPERIENCE_GET_TAG_LIST:
            return {
                ...state,
                tags: payload.tags,
            };
        case types.EXPERIENCE_GET_ARTICLE_LIST:
            return {
                ...state,
                list: payload.list,
                count: payload.count,
            };
        default:
            return state;
    }
};
