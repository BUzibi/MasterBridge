import PropTypes from 'prop-types';
import './AddArticle.scss';
import React, { Component } from 'react';
import DefaultLayout from 'layouts/DefaultLayout';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getArticle, addArticle, addArticleDesc, addArticleArea, addArticleUniversity, addArticleMajor, addArticleTitle, addArticleContent, addArticleImgUrl } from 'store/actions/addArticle';
import Input from 'components/Input/Input';
import ReactMarkdown from 'react-markdown';
import Editor from 'react-markdown-editor-lite';
import "react-markdown-editor-lite/lib/index.css";
@connect(state => ({
	article: state.addArticle,
}), dispatch => ({
	getArticle: (id) => dispatch(getArticle(id)), 
	addArticle: (history) => dispatch(addArticle(history)),
	addArticleArea: (area) => dispatch(addArticleArea(area)),
	addArticleUniversity: (university) => dispatch(addArticleUniversity(university)),
	addArticleMajor: (major) => dispatch(addArticleMajor(major)),
	addArticleTitle: (title) => dispatch(addArticleTitle(title)),
	addArticleDesc: (desc) => dispatch(addArticleDesc(desc)),
	addArticleContent: (content) => dispatch(addArticleContent(content)),
	addArticleImgUrl: (img_url) => dispatch(addArticleImgUrl(img_url)),
}))
class AddArticle extends Component {
	static propTypes = {
		article: PropTypes.object,
		history: PropTypes.object,

		getArticle: PropTypes.func,
		addArticle: PropTypes.func,
		addArticleArea: PropTypes.func,
		addArticleUniversity: PropTypes.func,
		addArticleMajor: PropTypes.func,
		addArticleTitle: PropTypes.func,
		addArticleDesc: PropTypes.func,
		addArticleContent: PropTypes.func,
		addArticleImgUrl: PropTypes.func,
	}

	componentDidMount() {
		const {history, getArticle} = this.props;
		const {location: {search}} = history || {};
		if (search.indexOf('id') > -1) {
			const id = search.split('id=')[1];
			getArticle(id);
		}
	}

	render() {
		const { article, history, addArticle, addArticleArea,
			addArticleUniversity, addArticleMajor, addArticleTitle,
			addArticleContent, addArticleImgUrl, addArticleDesc } = this.props
		const { title, desc, area, major, university, content, img_url } = article
		return (
			<DefaultLayout className="add_article-page">
				<div className="article-form">
					<form>
						<table>
							<tr>
								<td>封面图片</td>
								<td><Input className="input" value={img_url} onChange={(v) => addArticleImgUrl(v)} /></td>
							</tr>
							<tr>
								<td className="td-title">标题</td>
								<td><Input className="input" value={title} onChange={(v) => addArticleTitle(v)} /></td>
							</tr>
							<tr>
								<td className="td-title">简介</td>
								<td><Input className="input" value={desc} onChange={(v) => addArticleDesc(v)} /></td>
							</tr>
							<tr>
								<td>大学所在城市</td>
								<td><Input className="input" value={area} onChange={(v) => addArticleArea(v)} /></td>
							</tr>
							<tr>
								<td>大学名称</td>
								<td><Input className="input" value={major} onChange={(v) => addArticleMajor(v)} /></td>
							</tr>
							<tr>
								<td>专业</td>
								<td><Input className="input" value={university} onChange={(v) => addArticleUniversity(v)} /></td>
							</tr>
							<tr>
								<td>经验内容</td>
								<td>
									<Editor
										value={content}
										style={{
											height: "500px"
										}}
										onChange={({ text }) => addArticleContent(text)}
										renderHTML={text => <ReactMarkdown children={text} />}
									/>
								</td>
							</tr>
						</table>
					</form>
				</div>
				<div>
					<button className="uploadArticle" onClick={() => addArticle(history)}>发布</button>
				</div>
			</DefaultLayout>

		);
	}
}

export default withRouter(AddArticle);
