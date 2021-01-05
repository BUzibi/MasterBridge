import * as types from 'store/types';
import {apiGetAnnouncementList} from 'api';

export const typeChange = (type) => {
    return async (dispatch) => {
        dispatch({
            type: types.ANNOUNCEMENT_TYPE_CHANGE,
            payload: {type}
        });
        dispatch(getAnnouncementList());
    };
};

export const keywordChange = (keyword) => {
    return async (dispatch) => {
        dispatch({
            type: types.ANNOUNCEMENT_KEYWORD_CHANGE,
            payload: {keyword}
        });
        dispatch(getAnnouncementList());
    };
};

export const getAnnouncementList = () => {
    return async (dispatch, getState) => {
        const {
            announcement: {
                query
            },
        } = getState();
        const data = await apiGetAnnouncementList(query) || {};
        dispatch({
            type: types.ANNOUNCEMENT_GET_ANNOUNCEMENT_LIST,
            payload: { list: data.list, count: data.count },
        });
    };
};
