import PropTypes from 'prop-types';
import './index.less';
import './marked.css';
import React, { Component } from 'react';
import DefaultLayout from 'layouts/DefaultLayout';
import {withRouter} from 'react-router-dom';
import https from '../../utils/https';
import urls from '../../utils/urls';
import LoadingCom from '../loading/loading';
import markdown from '../../utils/markdown.js';
import {
	getQueryStringByName,
	timestampToTime,
} from '../../utils/utils';
import { connect } from 'react-redux';
import { addArticle,addArticleArea,addArticleUniversity,addArticleMajor,addArticleTitle,addArticleContent,addArticleImgUrl } from 'store/actions/addArticle';
import Input from 'components/Input/Input';

@connect(state => ({
    article: state.addArticle,
}), dispatch => ({
    addArticle: (history) => dispatch(addArticle(history)),
    addArticleArea: (area) => dispatch(addArticleArea(area)),
    addArticleUniversity: (university) => dispatch(addArticleUniversity(university)),
    addArticleMajor: (major) => dispatch(addArticleMajor(major)),
    addArticleTitle: (title) => dispatch(addArticleTitle(title)),
    addArticleContent: (content) => dispatch(addArticleContent(content)),
    addArticleImgUrl: (content) => dispatch(addArticleImgUrl(content)),
}))
class AddArticle extends Component {
	static propTypes = {
		article: PropTypes.object,
		history: PropTypes.object,

        addArticle: PropTypes.func,
        addArticleArea: PropTypes.func,
        addArticleUniversity: PropTypes.func,
        addArticleMajor: PropTypes.func,
        addArticleTitle: PropTypes.func,
        addArticleContent: PropTypes.func,
        addArticleImgUrl: PropTypes.func,
	}

	render() {
		const {article,history,addArticle,addArticleArea,
			addArticleUniversity,addArticleMajor,addArticleTitle,
			addArticleContent,addArticleImgUrl } = this.props
		const {title, area, major,university,content,img_url} = article
		return (
			<DefaultLayout>
				<div className="articleForm">
					<form>
						<table>
							<tr>
								<td>标题<Input value={title} onChange={(v) => addArticleTitle(v)}/></td>
							</tr>
							<tr>
								<td>大学所在城市<Input value={area} onChange={(v) => addArticleArea(v)}/></td>
							</tr>
							<tr>
								<td>大学名称<Input value={major} onChange={(v) => addArticleMajor(v)}/></td>
							</tr>
							<tr>
								<td>专业<Input value={university} onChange={(v) => addArticleUniversity(v)}/></td>
							</tr>
							<tr>
								<td>经验内容<Input value={content} onChange={(v) => addArticleContent(v)}/></td>
							</tr>
							<tr>
								<td>图片链接<Input value={img_url} onChange={(v) => addArticleImgUrl(v)}/></td>
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
