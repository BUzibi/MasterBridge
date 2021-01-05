import * as types from '../types';

const initialState = {
    articleManageList:[
        { id: '001', title: '北大研究生经验分享', views:'158'},
        { id: '002', title: '南大研究生经验分享', views:'83'},
    ]
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.GET_ARTICLEMANAGE_LIST:
            return {
                ...state,
                articleManageList: concat(state.articleManageList, payload.articleManageList),
            }
        case types.ARTICLEMANAGE_DEL_ARTICLE:
            return {
                ...state,
                articleManageList: delById(state.articleManageList, payload.id)
            };
    }