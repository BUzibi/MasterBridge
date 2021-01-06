import * as types from 'store/types';
import {apiUserRegister} from 'api';

export const userRegister = (history) => {
    return async (dispatch,getState) => {
        const {
            userRegister
        } = getState();
        const userInfo = await apiUserRegister(userRegister);
        dispatch({
            type: types.USER_REGISTER,
            payload: { user: userInfo},
        });
        history.push(`/user/${userInfo._id}`);
    };
};

export const userRegisterName = (name) => {
    return async (dispatch) => {
        dispatch({
            type: types.USER_REGISTER_NAME,
            payload: { name },
        });
    };
};

export const userRegisterPassword = (password) => {
    return async (dispatch) => {
        dispatch({
            type: types.USER_REGISTER_PASSWORD,
            payload: { password },
        });
    };
};