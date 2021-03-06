import Article from '../models/article';
import User from '../models/user';
import { responseClient, timestampToTime } from '../util/util';

exports.addArticle = (req, res) => {
  // if (!req.session.userInfo) {
  // 	responseClient(res, 200, 1, '您还没登录,或者登录信息已过期，请重新登录！');
  // 	return;
  // }
  const {
    _id,
    title,
    author = 'zyy',
    // keyword,
    area,
    university,
    major,
    content,
    desc,
    img_url,
    // tags,
    // category,
    // state,
    // type,
    // origin,
  } = req.body;

  if (_id) {
    Article.updateOne({_id}, {
      title,
      author,
      area,
      university,
      major,
      content,
      desc,
      img_url,
    }).then(result => {
      Article.findOne({ _id }, (error, data) => {
        if (error) {
          console.error('Error:' + error);
        } else {
          responseClient(res, 200, 0, '操作成功', data);
        }
      })
      
    }).catch(err => {
      console.error('err1:', err1);
      responseClient(res);
    });
    return;
  }

  let tempArticle = null;
  
  tempArticle = new Article({
    title,
    author,
    // keyword: keyword ? keyword.split(',') : [],
    area,
    university,
    major,
    content,
    desc,
    img_url,
    // tags: tags ? tags.split(',') : [],
    // category: category ? category.split(',') : [],
    // state,
    // type,
    // origin,
  });

  tempArticle
    .save()
    .then(data => {
      // let article = JSON.parse(JSON.stringify(data));
      // console.log('article :', article);
      // article.create_time = timestampToTime(article.create_time);
      // article.update_time = timestampToTime(article.update_time);
      // console.log('timestampToTime :', timestampToTime(data.create_time));
      responseClient(res, 200, 0, '保存成功', data);
    })
    .catch(err => {
      console.log(err);
      responseClient(res);
    });
};

// exports.updateArticle = (req, res) => {
//   // if (!req.session.userInfo) {
//   // 	responseClient(res, 200, 1, '您还没登录,或者登录信息已过期，请重新登录！');
//   // 	return;
//   // }
//   const {
//     title,
//     author,
//     keyword,
//     content,
//     desc,
//     img_url,
//     tags,
//     category,
//     state,
//     type,
//     origin,
//     id,
//   } = req.body;
//   Article.update(
//     { _id: id },
//     {
//       title,
//       author,
//       keyword: keyword ? keyword.split(',') : [],
//       content,
//       desc,
//       img_url,
//       tags: tags ? tags.split(',') : [],
//       category: category ? category.split(',') : [],
//       state,
//       type,
//       origin,
//     },
//   )
//     .then(result => {
//       responseClient(res, 200, 0, '操作成功', result);
//     })
//     .catch(err => {
//       console.error(err);
//       responseClient(res);
//     });
// };

// exports.delArticle = (req, res) => {
//   let { id } = req.body;
//   Article.deleteMany({ _id: id })
//     .then(result => {
//       if (result.n === 1) {
//         responseClient(res, 200, 0, '删除成功!');
//       } else {
//         responseClient(res, 200, 1, '文章不存在');
//       }
//     })
//     .catch(err => {
//       console.error('err :', err);
//       responseClient(res);
//     });
// };

// 前台文章列表
exports.getArticleList = (req, res) => {
  let area = req.query.area || '';
  let university = req.query.university || '';
  let major = req.query.major || '';
  let meta = req.query.meta;
  let views = '';
  if (meta) {
    views = meta.views;
  }
  // let article = req.query.article || '';
  let pageNum = parseInt(req.query.pageNum) || 1;
  let pageSize = parseInt(req.query.pageSize) || 10;

  let conditions = {};
  if (area) {
    conditions.area = area
  }
  if (university) {
    conditions.university = university
  }
  if (major) {
    conditions.major = major
  }

  let skip = pageNum - 1 < 0 ? 0 : (pageNum - 1) * pageSize;
  let responseData = {
    count: 0,
    list: [],
  };
  Article.countDocuments({}, (err, count) => {
    if (err) {
      console.log('Error:' + err);
    } else {
      responseData.count = count;
      // 待返回的字段
      let fields = {
        title: 1,
        desc: 1,
        img_url: 1,
        area: 1,
        university: 1,
        major: 1,
        // tags: 1,
        // category: 1,
        meta: 1,
        create_time: 1,
      };
      let options = {
        skip: skip,
        limit: pageSize,
        sort: { create_time: -1 },
      };
      Article.find(conditions, fields, options, (error, result) => {
        if (err) {
          console.error('Error:' + error);
        } else {
          if (views) {
            // 根据浏览量views返回数据
            result.sort((a, b) => {
              return b.meta.views - a.meta.views;
            });
            responseData.list = result;
          } else {
            responseData.list = result;
          }
          responseClient(res, 200, 0, '操作成功！', responseData);
        }
      });
    }
  });
};


// 文章详情
exports.getArticleDetail = (req, res) => {
  let id  = req.query.id  || '';
  if (!id) {
    responseClient(res, 200, 1, '文章不存在 ！');
    return;
  }
  Article.findOne({ _id: id }, (error, data) => {
    if (error) {
      console.error('Error:' + error);
    } else {
      data.meta.views = data.meta.views + 1;
      Article.updateOne({ _id: id }, { meta: data.meta })
        .then(result => {
          responseClient(res, 200, 0, '操作成功 ！', data);
        })
        .catch(err => {
          console.error('err :', err);
        });
    }
  })
  // .populate([{ path: 'tags' }, { path: 'category' }, { path: 'comments' }])
  // .exec((err, doc) => {
  //   // console.log("doc:");          // aikin
  //   // console.log("doc.tags:",doc.tags);          // aikin
  //   // console.log("doc.category:",doc.category);           // undefined
  // });
  // } else {
  //   Article.findOne({ type: type }, (Error, data) => {
  //     if (Error) {
  //       console.log('Error:' + Error);
  //       // throw error;
  //     } else {
  //       if (data) {
  //         data.meta.views = data.meta.views + 1;
  //         Article.updateOne({ type: type }, { meta: data.meta })
  //           .then(result => {
  //             if (filter === 1) {
  //               const arr = data.comments;
  //               for (let i = arr.length - 1; i >= 0; i--) {
  //                 const e = arr[i];
  //                 if (e.state !== 1) {
  //                   arr.splice(i, 1);
  //                 }
  //                 const newArr = e.other_comments;
  //                 const length = newArr.length;
  //                 if (length) {
  //                   for (let j = length - 1; j >= 0; j--) {
  //                     const item = newArr[j];
  //                     if (item.state !== 1) {
  //                       newArr.splice(j, 1);
  //                     }
  //                   }
  //                 }
  //               }
  //             }
  //             responseClient(res, 200, 0, '操作成功 ！', data);
  //           })
  //           .catch(err => {
  //             console.error('err :', err);
  //             throw err;
  //           });
  //       } else {
  //         responseClient(res, 200, 1, '文章不存在 ！');
  //         return;
  //       }
  //     }
  //   })
  //     .populate([{ path: 'tags' }, { path: 'category' }, { path: 'comments' }])
  //     .exec((err, doc) => {
  //       // console.log("doc:");          // aikin
  //       // console.log("doc.tags:",doc.tags);          // aikin
  //       // console.log("doc.category:",doc.category);           // undefined
  //     });
  // }
};
