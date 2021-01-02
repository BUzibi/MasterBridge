import * as types from '../types';

const initialState = {
    title: '',
    university: '',
    school: '',
    ann_url: '',
    type: '',
    publish_time: '',
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
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
