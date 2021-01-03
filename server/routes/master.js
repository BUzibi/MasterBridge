const fetch = require('node-fetch');
const CONFIG = require('../app.config.js');

import Article from '../models/article';
import Master from '../models/master';
import { MD5_SUFFIX, responseClient, md5 } from '../util/util.js';

exports.masterRegister = (req, res) => {
    let { name, password, UndergraduateSchool, UndergraduateMajor, MasterSchool, MasterArea, MasterMajor, EnrollmentDate } = req.body;
    if (!name) {
      responseClient(res, 400, 2, '用户名不可为空');
      return;
    }
    if (!password) {
      responseClient(res, 400, 2, '密码不可为空');
      return;
    }
    if (!UndergraduateSchool) {
      responseClient(res, 400, 2, '本科院校不可为空');
      return;
    }
    if (!UndergraduateMajor) {
      responseClient(res, 400, 2, '本科专业不可为空');
      return;
    }
    if (!MasterSchool) {
      responseClient(res, 400, 2, '研究生院校不可为空');
      return;
    }
    if (!MasterArea) {
      responseClient(res, 400, 2, '研究生院校城市不可为空');
      return;
    }
    if (!MasterMajor) {
      responseClient(res, 400, 2, '研究生专业不可为空');
      return;
    }
    //验证用户是否已经在数据库中
    Master.findOne({ name: name })
      .then(data => {
        if (data) {
          responseClient(res, 200, 1, '用户已存在！');
          return;
        }
        //保存到数据库
        let master = new Master({
          name,
          password: md5(password + MD5_SUFFIX),
          UndergraduateSchool,
          UndergraduateMajor,
          MasterSchool,
          MasterArea,
          MasterMajor,
          EnrollmentDate,
        });
        master.save().then(data => {
          responseClient(res, 200, 0, '注册成功', data);
        });
      })
      .catch(err => {
        responseClient(res);
        return;
      });
  };
  
  exports.masterLogin = (req, res) => {
    let { name, password } = req.body;
    if (!name) {
      responseClient(res, 400, 2, '用户名不可为空');
      return;
    }
    if (!password) {
      responseClient(res, 400, 2, '密码不可为空');
      return;
    }
    Master.findOne({
      name,
      password: md5(password + MD5_SUFFIX),
    })
      .then(masterInfo => {
        if (masterInfo) {
          //登录成功后设置session
          req.session.masterInfo = masterInfo;
          responseClient(res, 200, 0, '登录成功', masterInfo);
        } else {
          responseClient(res, 400, 1, '用户名或者密码错误');
        }
      })
      .catch(err => {
        responseClient(res);
      });
  };
  
  //用户验证
  exports.masterInfo = (req, res) => {
    if (req.session.masterInfo) {
      responseClient(res, 200, 0, '', req.session.masterInfo);
    } else {
      responseClient(res, 200, 1, '请重新登录', req.session.masterInfo);
    }
  };

  exports.logout = (req, res) => {
    if (req.session.masterInfo) {
      req.session.masterInfo = null; // 删除session
      responseClient(res, 200, 0, '退出成功！！');
    } else {
      responseClient(res, 200, 1, '您还没登录！！！');
    }
  };

  // 前台文章列表
exports.getArticleListByMasterID = (req, res) => {
  if (!req.session.masterInfo) {
    responseClient(res, 200, 1, '您还没登录,或者登录信息已过期，请重新登录！');
    return;
  }
  let author = req.session.masterInfo.name;
  let meta = req.query.meta;
  let views = '';
  if (meta) {
    views = meta.views;
  }
  // let article = req.query.article || '';
  let pageNum = parseInt(req.query.pageNum) || 1;
  let pageSize = parseInt(req.query.pageSize) || 10;

  let skip = pageNum - 1 < 0 ? 0 : (pageNum - 1) * pageSize;
  let responseData = {
    count: 0,
    list: [],
  };
  Article.countDocuments({}, (err, count) => {
    if (err) {
      console.log('Error:' + err);
    } else {
      responseData.count = count-1;
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
        views,
      };
      let options = {
        skip: skip,
        limit: pageSize,
        sort: { create_time: -1 },
      };
      
      Article.find({author:author}, fields, options, (error, result) => {
        if (err) {
          console.error('Error:' + error);
          throw error;
        } else {
          responseData.list = result;
          /*
          if (views) {
            // 根据浏览量  返回数据
            result.sort((a, b) => {
              return b.meta.create_time - a.meta.create_time;
            });
            responseData.list = result;
          } else {
            responseData.list = result;
          }
          */
          responseClient(res, 200, 0, '操作成功！', responseData);
        }
      });
      
    }
  });
};


exports.addArticleByMasterID = (req, res) => {
  if (!req.session.masterInfo) {
  responseClient(res, 200, 1, '您还没登录,或者登录信息已过期，请重新登录！');
  return;
  }
  let author = req.session.masterInfo.name;
  let area = req.session.masterInfo.MasterArea;
  let university = req.session.masterInfo.MasterSchool;
  let major = req.session.masterInfo.MasterMajor;
  let { title,desc,content,img_url, } = req.body;
  Master.find({
    name:author,
  })
  .then(result => {
    // console.log('result :', result);
    if (result) {
        let tempArticle = new Article({
          //master_id: result._id,
          title: title,
          area: area,
          university: university,
          major: major,
          author: author,
          desc: desc,
          content: content,
          img_url: img_url,
        });
      tempArticle
        .save()
        .then(data => {
          responseClient(res, 200, 0, '添加成功', data);
        })
        .catch(err => {
          console.error('err :', err);
          throw err;
        });
    } else {
      responseClient(res, 200, 1, '用户不存在');
    }
  })
  .catch(error => {
    console.error('error :', error);
    responseClient(res);
  });
};

exports.updateArticle = (req, res) => {
   if (!req.session.masterInfo) {
  	responseClient(res, 200, 1, '您还没登录,或者登录信息已过期，请重新登录！');
  	return;
  }
  let author = req.session.masterInfo.name;
  let article_id = req.query.article_id;
  // let area = req.session.masterInfo.MasterArea;
  // let university = req.session.masterInfo.MasterSchool;
  // let major = req.session.masterInfo.MasterMajor;
  const {
    title,
    desc,
    content,
    img_url,
  } = req.body;
  Article.updateOne(
    { author: author , _id:article_id},
    {$set:{
      title:title,
      // area,
      // university,
      // major,
      // author,
      desc:desc,
      content:content,
      img_url:img_url,
    }
    }
  )
  Article.find({_id:article_id})
    .then(result => {
      responseClient(res, 200, 0, '操作成功', result);
    })
    .catch(err => {
      console.error(err);
      responseClient(res);
    });
};

exports.delArticle = (req, res) => {
  let { author } = req.body;
  Article.deleteOne({ author: author })
    .then(result => {
      if (result.n === 1) {
        responseClient(res, 200, 0, '删除成功!');
      } else {
        responseClient(res, 200, 1, '文章不存在');
      }
    })
    .catch(err => {
      console.error('err :', err);
      responseClient(res);
    });
};