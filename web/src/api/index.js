import Http from './http';

// 发表文章
export const apiAddArticle = (data) => { return Http.post('/addArticle', data) }

// 获取文章列表
export const apiGetArticleList = (params) => { return Http.get('/getArticleList', { params }) }

// 获取文章详情
export const apiGetArticleDetail = (params) => { return Http.get('/getArticleDetail', { params }) }
