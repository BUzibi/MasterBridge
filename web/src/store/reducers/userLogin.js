import * as types from '../types';

const initialState = {
    name: '',
    password: '',
}

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.USER_LOGIN:
            return {
                ...state,
                ...payload.user,
            };
        case types.USER_LOGIN_NAME:
            return {
                ...state,
                name: payload.name,
            };
        case types.USER_REGISTER_PASSWORD:
            return {
                ...state,
                password: payload.password,
            };
        default:
            return state;
    }
};
