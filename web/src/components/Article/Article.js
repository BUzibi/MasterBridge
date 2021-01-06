import PropTypes from 'prop-types';
import './index.less';
import './Article.scss';
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
		const {title, views,content,create_time} = article || {};
		let width = '100%';
		const tagList = [];
		return (
			<DefaultLayout>
				{/* <div>{title}</div>
				<div>{desc}</div> */}
			</DefaultLayout>
			
		);
	}
}

export default withRouter(Article);
