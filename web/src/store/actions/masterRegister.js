import * as types from 'store/types';
import {apiMasterRegister} from 'api';

export const masterRegister = (history) => {
    return async (dispatch,getState) => {
        const {
            masterRegister
        } = getState();
        const masterInfo = await apiMasterRegister(masterRegister);
        dispatch({
            type: types.MASTER_REGISTER,
            payload: { master: masterInfo},
        });
        history.push(`/master/${masterInfo._id}`);
    };
};

export const masterRegisterName = (name) => {
    return async (dispatch) => {
        dispatch({
            type: types.MASTER_REGISTER_NAME,
            payload: { name },
        });
    };
};

export const masterRegisterPassword = (password) => {
    return async (dispatch) => {
        dispatch({
            type: types.MASTER_REGISTER_PASSWORD,
            payload: { password },
        });
    };
};

export const masterRegisterUndergraduateSchool = (undergraduateSchool) => {
    return async (dispatch) => {
        dispatch({
            type: types.MASTER_REGISTER_UNDERGRADUATESCHOOL,
            payload: { undergraduateSchool },
        });
    };
};

export const masterRegisterUndergraduateMajor = (undergraduateMajor) => {
    return async (dispatch) => {
        dispatch({
            type: types.MASTER_REGISTER_UNDERGRADUATEMAJOR,
            payload: { undergraduateMajor },
        });
    };
};

export const masterRegisterMasterSchool = (masterSchool) => {
    return async (dispatch) => {
        dispatch({
            type: types.MASTER_REGISTER_MASTERSCHOOL,
            payload: { masterSchool },
        });
    };
};

export const masterRegisterMasterArea = (masterArea) => {
    return async (dispatch) => {
        dispatch({
            type: types.MASTER_REGISTER_MASTERAREA,
            payload: { masterArea },
        });
    };
};

export const masterRegisterMasterMajor = (masterMajor) => {
    return async (dispatch) => {
        dispatch({
            type: types.MASTER_REGISTER_MASTERMAJOR,
            payload: { masterMajor },
        });
    };
};

export const masterRegisterEnrollmentDate = (enrollmentDate) => {
    return async (dispatch) => {
        dispatch({
            type: types.MASTER_REGISTER_ENROLLMENTDATE,
            payload: { enrollmentDate },
        });
    };
};
