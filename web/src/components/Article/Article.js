import PropTypes from 'prop-types';
import './index.less';
import './marked.css';
import React, { Component } from 'react';
import DefaultLayout from 'layouts/DefaultLayout';
import {withRouter} from 'react-router-dom';
import { Icon } from 'antd';
// import { Icon, Avatar, message, Button } from 'antd';
import { message } from 'antd';
import https from '../../utils/https';
import urls from '../../utils/urls';
import LoadingCom from '../loading/loading';
import markdown from '../../utils/markdown.js';
import {
	getQueryStringByName,
	timestampToTime,
} from '../../utils/utils';
import { connect } from 'react-redux';
import { getArticleDetail } from 'store/actions/article';
@connect(state => ({
    article: state.article,
}), dispatch => ({
    getArticleDetail: (id) => dispatch(getArticleDetail(id)),
}))
class Article extends Component {
	static propTypes = {
        article: PropTypes.object,

        getArticleDetail: PropTypes.func,
	};

	componentDidMount() {
		const {match: {params}} = this.props;
		const {id} = params;
		const {getArticleDetail} = this.props;
		getArticleDetail(id);
	}


	render() {
		const {article} = this.props;
		const {title, desc} = article || {};
		let width = '100%';
		const tagList = [];
		return (
			<DefaultLayout>
				<div>{title}</div>
				<div>{desc}</div>
				{/* <div className="article clearfix">
					<div className="detail fl" style={{ width: width }}>
						<div className="header">
							<div className="title">{this.state.articleDetail.title}</div>
							<div className="author">
								<div className="info">
									<span className="name">
										<span>{this.state.articleDetail.author}</span>
									</span>
									<div
										props-data-classes="user-follow-button-header"
										data-author-follow-button=""
									/>
									<div className="meta">
										<span className="publish-time">
											{this.state.articleDetail.create_time
												? timestampToTime(
													this.state.articleDetail.create_time,
													true,
												)
												: ''}
										</span>
										<span className="views-count">
											阅读 {this.state.articleDetail.meta.views}
										</span>
									</div>
								</div>
								<div className="tags " title="标签">
									<div type="tags" theme="outlined" />
									{tagList}
								</div>
								<span className="clearfix" />
							</div>
						</div>

						{this.state.isLoading ? <LoadingCom /> : ''}

						<div className="content">
							<div
								id="content"
								className="article-detail"
								dangerouslySetInnerHTML={{
									__html: this.state.articleDetail.content
										? this.state.articleDetail.content
										: null,
								}}
							/>
						</div>
					</div>
				</div> */}
			</DefaultLayout>
			
		);
	}
}

export default withRouter(Article);
