import * as types from '../types';

const initialState = {
    _id: '',
    name: '',
    password: '',
    undergraduateSchool: '',
    undergraduateMajor: '',
    masterSchool: '',
    masterArea: '',
    masterMajor: '',
    enrollmentDate: '',
};

//eslint-disable-next-line
export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.MASTER_GET_MASTERINFO:
            return {
                ...payload.masterInfo,
            };
        default:
            return state;
    }
};
