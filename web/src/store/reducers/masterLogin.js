import * as types from '../types';

const initialState = {
    name: '',
    password: '',
    // UndergraduateSchool: '',
    // UndergraduateMajor: '',
    // MasterSchool: '',
    // MasterArea: '',
    // MasterMajor: '',
    // EnrollmentDate: '',
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.MASTER_LOGIN_IN:
            return {
                ...state,
                ...payload.master,
            };
        case types.MASTER_NAME_LOGIN_IN:
            return {
                ...state,
                name: payload.name,
            };
        case types.MASTER_PASSWORD_LOGIN_IN:
            return {
                ...state,
                password: payload.password,
            };
        default:
            return state;
    }
};
