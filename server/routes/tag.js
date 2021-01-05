import { responseClient } from '../util/util';
import Tag from '../models/tag';

// 添加标签
exports.addTag = (req, res) => {
  let { name, type } = req.body;
  Tag.findOne({
    name,
  })
    .then(result => {
      if (!result) {
        let tag = new Tag({
          name,
          type,
        });
        tag
          .save()
          .then(data => {
            responseClient(res, 200, 0, '添加成功', data);
          })
          .catch(err => {
            throw err;
          });
      } else {
        responseClient(res, 200, 1, '该标签已存在');
      }
    })
    .catch(err => {
      responseClient(res);
    });
};

//获取全部标签
exports.getTagList = (req, res) => {
  let type = req.query.type || '';
  let conditions = {};
  if (type) {
    conditions.type = type;
  }
  
  let responseData = {
    count: 0,
    list: [],
  };
  Tag.countDocuments(conditions, (err, count) => {
    if (err) {
      console.error('Error:' + err);
    } else {
      responseData.count = count;
      let fields = {
        _id: 1,
        name: 1,
        type: 1,
      }; // 待返回的字段
      Tag.find(conditions, fields, {}, (error, result) => {
        if (err) {
          console.error('Error:' + error);
          throw error;
        } else {
          responseData.list = result;
          responseClient(res, 200, 0, 'success', responseData);
        }
      });
    }
  });
};


exports.delTag = (req, res) => {
  let { id } = req.body;
  Tag.deleteMany({ _id: id })
    .then(result => {
      if (result.n === 1) {
        responseClient(res, 200, 0, '删除成功!');
      } else {
        responseClient(res, 200, 1, '标签不存在');
      }
    })
    .catch(err => {
      responseClient(res);
    });
};
