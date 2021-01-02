import * as types from 'store/types';
import {apiGetAnnouncementList} from 'api';

export const getAnnouncementList = () => {
    return async (dispatch) => {
        const data = await apiGetAnnouncementList() || {};
        console.log(data)
        dispatch({
            type: types.ANNOUNCEMENT_GET_ANNOUNCEMENT_LIST,
            payload: { list: data.list, count: data.count },
        });
    };
};
