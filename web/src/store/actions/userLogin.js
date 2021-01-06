import * as types from 'store/types';
import {apiUserLogin} from 'api';

export const userLogin = (history) => {
    return async (dispatch,getState) => {
        const {
            userLogin
        } = getState();
        const data = await apiUserLogin(userLogin);
        dispatch({
            type: types.USER_LOGIN,
            payload: { user:data },
        });
        history.push(`/user/${data._id}`);
    };
};

export const userNameLogin = (name) => {
    return async (dispatch) => {
        dispatch({
            type: types.USER_LOGIN_NAME,
            payload: { name },
        });
    };
};

export const userPasswordLogin = (password) => {
    return async (dispatch) => {
        dispatch({
            type: types.USER_LOGIN_PASSWORD,
            payload: { password },
        });
    };
};