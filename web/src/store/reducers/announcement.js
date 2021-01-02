import * as types from '../types';


const initialState = {
    query: {
        type: 1,
        keyword: '',
    },
    count: 0,
    list: [],
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.ANNOUNCEMENT_TYPE_CHANGE:
            return {
                ...state,
                query: {
                    ...state.query,
                    type: payload.type
                },
            };
        case types.ANNOUNCEMENT_KEYWORD_CHANGE:
            return {
                ...state,
                query: {
                    ...state.query,
                    keyword: payload.keyword
                },
            };
        case types.ANNOUNCEMENT_GET_ANNOUNCEMENT_LIST:
            return {
                ...state,
                list: payload.list,
                count: payload.count,
            };
        default:
            return state;
    }
};
