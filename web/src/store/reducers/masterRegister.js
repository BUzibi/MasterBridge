import * as types from '../types';

const initialState = {
    name :'',
    password : '',
    undergraduateSchool : '',
    undergraduateMajor : '',
    masterSchool : '',
    masterArea : '',
    masterMajor : '',
    enrollmentDate : '',
};

//eslint-disable-next-line
export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.MASTER_REGISTER:
            return {
                ...state,
                ...payload.master,
            };
        case types.MASTER_REGISTER_NAME:
            return {
                ...state,
                name: payload.name,
            };
        case types.MASTER_REGISTER_PASSWORD:
            return {
                ...state,
                password: payload.password,
            };
        case types.MASTER_REGISTER_UNDERGRADUATESCHOOL:
            return {
                ...state,
                undergraduateSchool: payload.undergraduateSchool,
            };
        case types.MASTER_REGISTER_UNDERGRADUATEMAJOR:
            return {
                ...state,
                undergraduateMajor: payload.undergraduateMajor,
            };
        case types.MASTER_REGISTER_MASTERSCHOOL:
            return {
                ...state,
                masterSchool: payload.masterSchool,
            };
        case types.MASTER_REGISTER_MASTERAREA:
            return {
                ...state,
                masterArea: payload.masterArea,
            };
        case types.MASTER_REGISTER_MASTERMAJOR:
            return {
                ...state,
                masterMajor: payload.masterMajor,
            };
        case types.MASTER_REGISTER_ENROLLMENTDATE:
            return {
                ...state,
                enrollmentDate: payload.enrollmentDate,
            };
        default:
            return state;
    }
};