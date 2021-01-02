import * as types from '../types';

const initialState = {
    count: 0,
    list: [],
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
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
