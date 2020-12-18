import * as types from 'store/types';

export const showEditGradeDialog = (form) => {
    return async (dispatch) => {
        dispatch({
            type: types.POTRAITMANAGEMENT_SHOW_EDIT_GRADE_DIALOG,
            payload: { form },
        });
    };
};

export const closeEditGradeDialog = () => {
    return async (dispatch) => {
        dispatch({
            type: types.POTRAITMANAGEMENT_CLOSE_EDIT_GRADE_DIALOG,
        });
    };
};

export const changeGradeCoursename = (coursename) => {
    return async (dispatch) => {
        dispatch({
            type: types.POTRAITMANAGEMENT_CHANGE_EDIT_GRADE_COURSENAME,
            payload: { coursename },
        });
    };
};

export const changeGradeScore = (score) => {
    return async (dispatch) => {
        dispatch({
            type: types.POTRAITMANAGEMENT_CHANGE_EDIT_GRADE_SCORE,
            payload: { score },
        });
    };
};

export const changeGradeGpa = (gpa) => {
    return async (dispatch) => {
        dispatch({
            type: types.POTRAITMANAGEMENT_CHANGE_EDIT_GRADE_GPA,
            payload: { gpa },
        });
    };
};

export const changeGradeIsmajor = (ismajor) => {
    return async (dispatch) => {
        dispatch({
            type: types.POTRAITMANAGEMENT_CHANGE_EDIT_GRADE_ISMAJOR,
            payload: { ismajor },
        });
    };
};

export const updateGrade = () => {
    return async (dispatch, getState) => {
        const {
            potraitmanagement: {
                editGradeDialog: {
                    form
                }
            }
        } = getState();
        // deal with api
        // data = http.post('/apipath', form)
        dispatch({
            type: types.POTRAITMANAGEMENT_UPDATE_EDIT_GRADE,
            payload: {grade: form},
        });
        dispatch(closeEditGradeDialog());
    };
};


export const addGradeCoursename = (coursename) => {
    return async (dispatch) => {
        dispatch({
            type: types.POTRAITMANAGEMENT_CHANGE_ADD_GRADE_COURSENAME,
            payload: { coursename },
        });
    };
};

export const addGradeScore = (score) => {
    return async (dispatch) => {
        dispatch({
            type: types.POTRAITMANAGEMENT_CHANGE_ADD_GRADE_SCORE,
            payload: { score },
        });
    };
};

export const addGradeGpa = (gpa) => {
    return async (dispatch) => {
        dispatch({
            type: types.POTRAITMANAGEMENT_CHANGE_ADD_GRADE_GPA,
            payload: { gpa },
        });
    };
};

export const addGradeIsmajor = (ismajor) => {
    return async (dispatch) => {
        dispatch({
            type: types.POTRAITMANAGEMENT_CHANGE_ADD_GRADE_ISMAJOR,
            payload: { ismajor },
        });
    };
};

export const showAddGradeDialog = () => {
    return async (dispatch) => {
        dispatch({
            type: types.POTRAITMANAGEMENT_SHOW_ADD_GRADE_DIALOG,
        });
    };
};

export const closeAddGradeDialog = () => {
    return async (dispatch) => {
        dispatch({
            type: types.POTRAITMANAGEMENT_CLOSE_ADD_GRADE_DIALOG,
        });
    };
};

export const addGrade = () => {
    return async (dispatch, getState) => {
        const {
            potraitmanagement: {
                addGradeDialog: {
                    form
                }
            }
        } = getState();
        // deal with api
        // data = http.post('/apipath', form)
        dispatch({
            type: types.POTRAITMANAGEMENT_UPDATE_ADD_GRADE,
            payload: {grade: form},
        });
        dispatch(closeAddGradeDialog());
    };
};

export const getGradeList = ({ tabValue }) => {
    return async (dispatch) => {
        // data = http.get('/list')
        dispatch({
            type: types.GET_GRADE_LIST,
            payload: { list: [{ honorno: '001', awardname: '中国计算机应用大赛', awarlevel: '国赛', awardrank: '一等奖', issuingtime: '2020-08-08' }] },
        });
    };
};

export const getInternshipList = ({ tabValue }) => {
    return async (dispatch) => {
        // data = http.get('/list')
        dispatch({
            type: types.GET_INTERNSHIP_LIST,
            payload: { list: [{ honorno: '001', awardname: '中国计算机应用大赛', awarlevel: '国赛', awardrank: '一等奖', issuingtime: '2020-08-08' }] },
        });
    };
};

export const getAcademicList = ({ tabValue }) => {
    return async (dispatch) => {
        // data = http.get('/list')
        dispatch({
            type: types.GET_ACADEMIC_LIST,
            payload: { list: [{ honorno: '001', awardname: '中国计算机应用大赛', awarlevel: '国赛', awardrank: '一等奖', issuingtime: '2020-08-08' }] },
        });
    };
};

export const getHonorList = ({ tabValue }) => {
    return async (dispatch) => {
        // data = http.get('/list')
        dispatch({
            type: types.GET_HONOR_LIST,
            payload: { list: [{ honorno: '001', awardname: '中国计算机应用大赛', awarlevel: '国赛', awardrank: '一等奖', issuingtime: '2020-08-08' }] },
        });
    };
};

export const tabChange = ({ tabValue }) => {
    return async (dispatch) => {
        dispatch({
            type: types.POTRAITMANAGEMENT_TAB_CHANGE,
            payload: { tabValue },
        });
    };
};


export const delGrade = (id) => {
    return async (dispatch) => {
        dispatch({
            type: types.POTRAITMANAGEMENT_DEL_GRADE,
            payload: { id },
        });
    };
};

export const addInternship = (form) => {
    return async (dispatch) => {
        dispatch({
            type: types.POTRAITMANAGEMENT_ADD_INTERNSHIP,
            payload: { internship: form },
        });
    };
};

export const addAcademic = (form) => {
    return async (dispatch) => {
        dispatch({
            type: types.POTRAITMANAGEMENT_ADD_ACADEMIC,
            payload: { academic: form },
        });
    };
};

export const addHonor = (form) => {
    return async (dispatch) => {
        dispatch({
            type: types.POTRAITMANAGEMENT_ADD_HONOR,
            payload: { honor: form },
        });
    };
};

export const delInternship = (internshipno) => {
    return async (dispatch) => {
        dispatch({
            type: types.POTRAITMANAGEMENT_DEL_INTERNSHIP,
            payload: { internshipno },
        });
    };
};

export const delAcademic = (academicno) => {
    return async (dispatch) => {
        dispatch({
            type: types.POTRAITMANAGEMENT_DEL_ACADEMIC,
            payload: { academicno },
        });
    };
};

export const delHonor = (honorno) => {
    return async (dispatch) => {
        dispatch({
            type: types.POTRAITMANAGEMENT_DEL_HONOR,
            payload: { honorno },
        });
    };
}; 