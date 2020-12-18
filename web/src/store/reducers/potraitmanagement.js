import * as types from '../types';
import { concat, delById, replaceItemById } from 'store/util';

const initialState = {
    tabValue: '成绩信息',
    tabItems: [
        '基本信息',
        '成绩信息',
        '实习经历',
        '学术经历',
        '获奖情况',
    ],
    baseInfo: {
        name: '',
    },
    gradeList: [
        { id: '001', coursename: '数据挖掘', score: '90', gpa: '4.0', ismajor: '是' },
        { id: '002', coursename: '机器学习', score: '87', gpa: '3.7', ismajor: '是' },
        { id: '003', coursename: '运筹学', score: '95', gpa: '4.0', ismajor: '是' },
    ],
    internshipList: [
        { internshipno: '01', enterprise: '普华永道', department: 'Finance', job: '审计师', starttime: '2020-01-13', endtime: '2020-03-07' },
        { internshipno: '02', enterprise: '优美缔', department: '研发', job: '软件工程师', starttime: '2020-07-29', endtime: '2020-01-29' },
    ],
    academicList: [],
    honorList: [
        { honorno: '001', awardname: '中国计算机应用大赛', awarlevel: '国赛', awardrank: '一等奖', issuingtime: '2020-08-08' },
    ],
    editGradeDialog: {
        show: false,
        form: {
            coursename: '',
            score: '',
            gpa: '',
            ismajor: '',
        }
    },
    addGradeDialog: {
        show: false,
        form: {
            coursename: '',
            score: '',
            gpa: '',
            ismajor: '',
        },
    },
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.POTRAITMANAGEMENT_TAB_CHANGE:
            return {
                ...state,
                tabValue: payload.tabValue,
            };
        case types.GET_GRADE_LIST:
            return {
                ...state,
                honorList: payload.list,
            };
        case types.POTRAITMANAGEMENT_CHANGE_ADD_GRADE_COURSENAME:
            return {
                ...state,
                gradeList: concat(state.gradeList, payload.grade),
            }
        case types.POTRAITMANAGEMENT_DEL_GRADE:
            return {
                ...state,
                gradeList: delById(state.gradeList, payload.id)
            };
        case types.GET_INTERNSHIP_LIST:
            return {
                ...state,
                honorList: payload.list,
            };
        case types.POTRAITMANAGEMENT_ADD_INTERNSHIP:
            return {
                ...state,
                gradeList: concat(state.internshipList, payload.internship),
            }
        case types.POTRAITMANAGEMENT_DEL_INTERNSHIP:
            return {
                ...state,
                gradeList: delById(state.internshipList, payload.internshipno)
            };
        case types.GET_ACADEMIC_LIST:
            return {
                ...state,
                honorList: payload.list,
            };
        case types.POTRAITMANAGEMENT_ADD_ACADEMIC:
            return {
                ...state,
                gradeList: concat(state.academicList, payload.academic),
            }
        case types.POTRAITMANAGEMENT_DEL_ACADEMIC:
            return {
                ...state,
                gradeList: delById(state.academicList, payload.academicno)
            };
        case types.GET_HONOR_LIST:
            return {
                ...state,
                honorList: payload.list,
            };
        case types.POTRAITMANAGEMENT_ADD_ACADEMIC:
            return {
                ...state,
                gradeList: concat(state.honorList, payload.honor),
            }
        case types.POTRAITMANAGEMENT_DEL_ACADEMIC:
            return {
                ...state,
                gradeList: delById(state.honorList, payload.honorno)
            };
        case types.POTRAITMANAGEMENT_SHOW_EDIT_GRADE_DIALOG:
            return {
                ...state,
                editGradeDialog: {
                    ...state.editGradeDialog,
                    show: true,
                    form: payload.form,
                },
            };
        case types.POTRAITMANAGEMENT_CLOSE_EDIT_GRADE_DIALOG:
            return {
                ...state,
                editGradeDialog: {
                    ...state.editGradeDialog,
                    show: false,
                    form: initialState.editGradeDialog.form,
                }
            };
        case types.POTRAITMANAGEMENT_CHANGE_EDIT_GRADE_COURSENAME:
            return {
                ...state,
                editGradeDialog: {
                    ...state.editGradeDialog,
                    form: {
                        ...state.editGradeDialog.form,
                        coursename: payload.coursename,
                    },
                }
            };
        case types.POTRAITMANAGEMENT_CHANGE_EDIT_GRADE_SCORE:
            return {
                ...state,
                editGradeDialog: {
                    ...state.editGradeDialog,
                    form: {
                        ...state.editGradeDialog.form,
                        score: payload.score,
                    },
                }
            };
        case types.POTRAITMANAGEMENT_CHANGE_EDIT_GRADE_GPA:
            return {
                ...state,
                editGradeDialog: {
                    ...state.editGradeDialog,
                    form: {
                        ...state.editGradeDialog.form,
                        gpa: payload.gpa,
                    },
                }
            };
        case types.POTRAITMANAGEMENT_CHANGE_EDIT_GRADE_ISMAJOR:
            return {
                ...state,
                editGradeDialog: {
                    ...state.editGradeDialog,
                    form: {
                        ...state.editGradeDialog.form,
                        ismajor: payload.ismajor,
                    },
                }
            };
        case types.POTRAITMANAGEMENT_UPDATE_EDIT_GRADE:
            return {
                ...state,
                gradeList: replaceItemById(state.gradeList, payload.grade),
            };
        case types.POTRAITMANAGEMENT_SHOW_ADD_GRADE_DIALOG:
            return {
                ...state,
                addGradeDialog: {
                    ...state.addGradeDialog,
                    show: true,
                    form: payload.form,
                },
            };
        case types.POTRAITMANAGEMENT_CLOSE_ADD_GRADE_DIALOG:
            return {
                ...state,
                addGradeDialog: {
                    ...state.addGradeDialog,
                    show: false,
                    form: initialState.addGradeDialog.form,
                }
            };
        case types.POTRAITMANAGEMENT_CHANGE_ADD_GRADE_COURSENAME:
            return {
                ...state,
                addGradeDialog: {
                    ...state.addGradeDialog,
                    form: {
                        ...state.addGradeDialog.form,
                        coursename: payload.coursename,
                    },
                }
            };
        case types.POTRAITMANAGEMENT_CHANGE_ADD_GRADE_SCORE:
            return {
                ...state,
                addGradeDialog: {
                    ...state.addGradeDialog,
                    form: {
                        ...state.addGradeDialog.form,
                        score: payload.score,
                    },
                }
            };
        case types.POTRAITMANAGEMENT_CHANGE_ADD_GRADE_GPA:
            return {
                ...state,
                addGradeDialog: {
                    ...state.addGradeDialog,
                    form: {
                        ...state.addGradeDialog.form,
                        gpa: payload.gpa,
                    },
                }
            };
        case types.POTRAITMANAGEMENT_CHANGE_ADD_GRADE_ISMAJOR:
            return {
                ...state,
                addGradeDialog: {
                    ...state.addGradeDialog,
                    form: {
                        ...state.addGradeDialog.form,
                        ismajor: payload.ismajor,
                    },
                }
            };
        case types.POTRAITMANAGEMENT_UPDATE_ADD_GRADE:
            return {
                ...state,
                gradeList: concat(state.gradeList, payload.grade),
            };
        default:
            return state;
    }
};
