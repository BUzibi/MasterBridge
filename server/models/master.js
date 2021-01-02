/**
 * Article model module.
 * @file 文章数据模型
 * @module model/master
 * @author biaochenxuying <https://github.com/biaochenxuying>
 */

const crypto = require('crypto');
const { argv } = require('yargs');
const { mongoose } = require('../core/mongodb.js');

// 研究生表模型
const masterSchema = new mongoose.Schema({
	
	// 名字
	name: { type: String, required: true, default: '' },

	// 密码
	password: {
		type: String,
		required: true,
		default: crypto
		  .createHash('md5')
		  .update(argv.auth_default_password || 'root')
		  .digest('hex'),
	  },

	//本科毕业院校
	UndergraduateSchool: {type: String, required: true},

	//本科专业
	UndergraduateMajor: {type: String, required: true},

	// 研究生院校
	MasterSchool: { type: String, required: true},

	// 研究生专业
	MasterMajor: { type: String, required: true},

	// 毕业时间
	EnrollmentData: { type: Date, required: true},

	// 封面图
	//img_url: { type: String, default: 'https://www.google.com/search?q=%E4%B8%8A%E6%B5%B7%E8%B4%A2%E7%BB%8F%E5%A4%A7%E5%AD%A6&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj0rv3un_XtAhUBBKYKHT_iCDUQ_AUoA3oECAIQBQ&biw=1680&bih=971#imgrc=ME2PknjDKyLtPM' },

	// 审核状态 默认不通过
	//lables: { type: Number, default: 0 },

});

// 文章模型
module.exports = mongoose.model('Master', masterSchema);
