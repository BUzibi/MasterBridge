import * as types from 'store/types';
import {apiGetMasterInfo} from 'api';


export const getMasterInfo = (id) => {
    return async (dispatch) => {
        const data = await apiGetMasterInfo(id) || {};
        dispatch({
            type: types.MASTER_GET_MASTERINFO,
            payload: { masterInfo: data},
        });
    };
};