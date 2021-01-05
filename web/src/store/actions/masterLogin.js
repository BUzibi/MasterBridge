import * as types from 'store/types';
import {apiMasterLogin} from 'api';

export const masterLogin = (history) => {
    return async (dispatch,getState) => {
        const {
            masterLogin
        } = getState();
        const data = await apiMasterLogin(masterLogin);
        dispatch({
            type: types.MASTER_LOGIN_IN,
            payload: { master:data },
        });
        history.push(`/master/${data._id}`);
    };
};

export const masterNameLogin = (name) => {
    return async (dispatch) => {
        dispatch({
            type: types.MASTER_NAME_LOGIN_IN,
            payload: { name },
        });
    };
};

export const masterPasswordLogin = (password) => {
    return async (dispatch) => {
        dispatch({
            type: types.MASTER_PASSWORD_LOGIN_IN,
            payload: { password },
        });
    };
};