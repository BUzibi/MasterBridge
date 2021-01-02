import Announcement from '../models/announcement';
import User from '../models/user';
import { responseClient, timestampToTime } from '../util/util';

exports.addAnnouncement = (req, res) => {
  // if (!req.session.userInfo) {
  // 	responseClient(res, 200, 1, '您还没登录,或者登录信息已过期，请重新登录！');
  // 	return;
  // }
  const {
    title,
    keyword,
    university,
    school,
    ann_url,
    type,
    publish_time,
  } = req.body;
  let tempAnnouncement = null;
  tempAnnouncement = new Announcement({
    title,
    keyword: keyword ? keyword.split(',') : [],
    university,
    school,
    ann_url,
    type,
    publish_time,
  });


  tempAnnouncement
    .save()
    .then(data => {
      responseClient(res, 200, 0, '保存成功', data);
    })
    .catch(err => {
      console.log(err);
      responseClient(res);
    });
};

// 前台文章列表
exports.getAnnouncementList = (req, res) => {
  let title = req.query.title || '';
  let university = req.query.university || '';
  let school = req.query.school || '';
  let ann_url = req.query.ann_url || '';
  let type = req.query.type || '';
  let keyword = req.query.keyword || null;
  let pageNum = parseInt(req.query.pageNum) || 1;
  let pageSize = parseInt(req.query.pageSize) || 10;

  let conditions = {};
 
  if (type) {
    conditions.type = type
  }
  if (keyword) {
    const reg = new RegExp(keyword, 'i'); //不区分大小写
    conditions = {
      $or: [{ title: { $regex: reg } }, { university: { $regex: reg } }],
    };
  }


  let skip = pageNum - 1 < 0 ? 0 : (pageNum - 1) * pageSize;
  let responseData = {
    count: 0,
    list: [],
  };
  Announcement.countDocuments(conditions, (err, count) => {
    if (err) {
      console.log('Error:' + err);
    } else {
      responseData.count = count;
      // 待返回的字段
      let fields = {
        title: 1,
        university: 1,
        school: 1,
        ann_url: 1,
        type: 1,
        publish_time: 1,
      };
      let options = {
        skip: skip,
        limit: pageSize,
        sort: { publish_time: -1 },
      };
      Announcement.find(conditions, fields, options, (error, result) => {
        if (err) {
          console.error('Error:' + error);
          throw error;
        } else {
            responseData.list = result;
          responseClient(res, 200, 0, '操作成功！', responseData);
        }
      });
    }
  });
};
