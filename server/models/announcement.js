/**
 * Article model module.
 * @file 文章数据模型
 * @module model/article
 * @author biaochenxuying <https://github.com/biaochenxuying>
 */

const { mongoose } = require('../core/mongodb.js');

// 文章模型
const announcementSchema = new mongoose.Schema({
	// 公告标题
	title: { type: String, required: true, validate: /\S+/ },
	//
	// 公告关键字（SEO）
	keyword: [{ type: String, default: '' }],

	//大学
	university: {type: String, required: true},

	//学院
	school: {type: String, required: true},


	// 公告链接
	ann_url: { type: String, required: true},

	//公告类型 => 1: 夏令营，2: 预推免
	type: { type: Number, default: 1 },
	
	//发布时间
	publish_time: { type: Date, required: true },


});

// 文章模型
module.exports = mongoose.model('Announcement', announcementSchema);
