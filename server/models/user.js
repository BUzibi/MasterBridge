/**
 * User model module.
 * @file 权限和用户数据模型
 * @module model/user
 * @author biaochenxuying <https://github.com/biaochenxuying>
 */

const crypto = require('crypto');
const { argv } = require('yargs');
const { mongoose } = require('../core/mongodb.js');

const userSchema = new mongoose.Schema({
  // 名字
  name: { type: String, required: true, default: '' },

  //用户类型 0：普通用户，1：管理员
  type: { type: Number, default: 0 },

  // 密码
  password: {
    type: String,
    required: true,
    default: crypto
      .createHash('md5')
      .update(argv.auth_default_password || 'root')
      .digest('hex'),
  },

  // 自我介绍
  introduction: { type: String, default: '' },

  // 创建日期
  create_time: { type: Date, default: Date.now },

  // 最后修改日期
  update_time: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
