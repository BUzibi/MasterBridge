import Http from './http';

// 发表文章
export const apiAddArticle = (data) => { return Http.post('/addArticle', data) }

// 获取文章列表
export const apiGetArticleList = (params) => { return Http.get('/getArticleList', { params }) }

// 获取文章详情
export const apiGetArticleDetail = (params) => { return Http.get('/getArticleDetail', { params }) }

// 获取通告列表
export const apiGetAnnouncementList = (params) => { return Http.get('/getAnnouncementList', { params }) }

// 获取标签列表
export const apiGetTagList = (params) => { return Http.get('/getTagList', { params }) }

//研究生注册
export const apiMasterRegister = (data) => { return Http.post('/masterRegister',  data ) }

//研究生登录
export const apiMasterLogin = (data) => { return Http.post('/masterLogin', data ) }

//获取研究生信息
export const apiGetMasterInfo = (params) => {return Http.get('/getMasterInfo', { params }) }

//获取经验管理列表
export const apiGetArticleManageList = (params) => {return Http.get('/getArticleManageList', { params }) }
