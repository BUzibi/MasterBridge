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
