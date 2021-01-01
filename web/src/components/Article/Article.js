import './index.less';
import './marked.css';
import React, { Component } from 'react';
import {Icon} from 'antd';
// import { Icon, Avatar, message, Button } from 'antd';
import  {message} from 'antd';
import https from '../../utils/https';
import urls from '../../utils/urls';
import LoadingCom from '../loading/loading';
import markdown from '../../utils/markdown.js';
import {
  getQueryStringByName,
  timestampToTime,
} from '../../utils/utils';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      list: [],
      content: '',
      articleDetail: {
        _id: '',
        author: '夜尽天明',
        create_time: '',
        desc: '',
        id: 16,
        img_url: '',
        area: '',
        university: '',
        major: '',
        like_users: [],
        meta: { views: 0},
        title: '',
        update_time: '',
      },
      cacheTime: 0, // 缓存时间
    };
    this.handleSearch = this.handleSearch.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.refreshArticle = this.refreshArticle.bind(this);
  }


  refreshArticle() {
    let article_id = getQueryStringByName('article_id');
    this.handleSearch(article_id);
  }

  // handleChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   });
  // }

 

  handleSearch(article_id) {
    this.setState({
      isLoading: true,
    });
    https
      .post(
        urls.getArticleDetail,
        {
          id: article_id,
        },
        { withCredentials: true },
      )
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          const detail = res.data.data;
          const article = markdown.marked(res.data.data.content);
          // console.log("this.articleDetail :", this.articleDetail.tags);
          article.then(response => {
            detail.content = response.content;
            detail.toc = response.toc;
            // console.log('detail.toc :', detail);
            this.setState({
              articleDetail: detail,
              isLoading: false,
            });
          });
          // let keyword = res.data.data.keyword.join(',');
          let description = res.data.data.desc;
          let title = res.data.data.title;
          document.title = title;
          // document.getElementById('keywords').setAttribute('content', keyword);
          document
            .getElementById('description')
            .setAttribute('content', description);
        } else {
          message.error(res.data.message, 1);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentWillUnmount() {
    document.title = '夜尽天明 的博客网站';
    // document
    //   .getElementById('keywords')
    //   .setAttribute('content', '夜尽天明 的博客网站');
    document
      .getElementById('description')
      .setAttribute(
        'content',
        '分享大前端开发等相关的技术文章，热点资源，全栈程序员的成长之路。',
      );
  }

  componentWillMount() {
    if (this.props.location.pathname === '/about') {
      let article_id = getQueryStringByName('article_id');
      this.handleSearch(article_id);
    }
  }

  render() {
    console.log('isMobile :', this.state.isMobile);
    let width = '100%' ;
    const list = this.state.articleDetail.university.map((item, i) => (
      <span key={item.id} className="tag">
        {item.name}
      </span>
    ));

    return (
      <div className="article clearfix">
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
                {list}
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
      </div>
    );
  }
}

export default Article;
