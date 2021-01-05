import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Experience.scss';
import DefaultLayout from 'layouts/DefaultLayout';
import jingyan from 'components/icon/jingyan.jpg';
import ArticleCard from './ArticleCard/ArticleCard';
import Tag from './Tag/Tag';
import {
    Link
} from "react-router-dom";
import { connect } from 'react-redux';
import {
    getArticleList, getTagList, tagAreaChange, tagUniversityChange,
    tagMajorChange,
} from 'store/actions/experience';
import {withRouter} from 'react-router-dom';

const tagTypes = [
    {title: '地区', value: 'area'},
    {title: '院校', value: 'university'},
    {title: '专业', value: 'major'},
];

@connect(state => ({
    query: state.experience.query,
    tags: state.experience.tags,
    list: state.experience.list,
}), dispatch => ({
    getArticleList: () => dispatch(getArticleList()),
    getTagList: () => dispatch(getTagList()),
    tagAreaChange: (area) =>  dispatch(tagAreaChange(area)),
    tagUniversityChange: (university) =>  dispatch(tagUniversityChange(university)),
    tagMajorChange: (major) =>  dispatch(tagMajorChange(major)),
}))
class Experience extends Component {
    static propTypes = {
        query: PropTypes.object,
        tags: PropTypes.array,
        list: PropTypes.array,

        getArticleList: PropTypes.func,
        getTagList: PropTypes.func,
        tagAreaChange: PropTypes.func,
        tagUniversityChange: PropTypes.func,
        tagMajorChange: PropTypes.func,
    };

    componentDidMount() {
        const { getTagList, getArticleList } = this.props;
        getTagList();
        getArticleList();
    }

    onTagChange = (item, active) => {
        const {tagAreaChange, tagUniversityChange, tagMajorChange} = this.props;
        const {name, type} = item;
        switch(type) {
            case 'area':
                tagAreaChange(active ? '' : name);
                break;
            case 'university':
                tagUniversityChange(active ? '' : name);
                break;
            case 'major':
                tagMajorChange(active ? '' : name);
                break;
        }
    };

    renderTags() {
        const {tags, query} = this.props;
        return (
            <div className="main_top">
                {tagTypes.map((type) => {
                    const currentType = type.value;
                    const typeTags = tags.filter(tag => tag.type === currentType);
                    return (
                        <div className="category_card" key={type.value}>
                            <div className="category_top">
                                <div className="icon_text">{type.title}</div>
                            </div>
                            <div className="category_bottom">
                                {typeTags.map(tag => {
                                    const currentTypeValue = query[currentType];
                                    const active = tag.type === currentType && currentTypeValue === tag.name;
                                    return (
                                        <Tag key={tag._id}
                                            item={tag}
                                            active={active}
                                            onClick={(item, active) => this.onTagChange(item, active)}/>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
                {/* <div className="category_card">
                    <div className="category_top">
                        <div className="icon_text">地区</div>
                    </div>
                    <div className="category_bottom">
                        <a className="tag_wrap">
                            <div className="tag">
                                <span className="text">北京</span>
                            </div>
                        </a>
                        <a className="tag_wrap">
                            <div className="tag">
                                <span className="text">上海</span>
                            </div>
                        </a>
                        <a className="tag_wrap">
                            <div className="tag">
                                <span className="text">南京</span>
                            </div>
                        </a>
                        <a className="tag_wrap">
                            <div className="tag">
                                <span className="text">武汉</span>
                            </div>
                        </a>
                        <a className="tag_wrap">
                            <div className="tag">
                                <span className="text">成都</span>
                            </div>
                        </a>
                        <a className="tag_wrap">
                            <div className="tag">
                                <span className="text">哈尔滨</span>
                            </div>
                        </a>
                        <a className="tag_wrap">
                            <div className="tag">
                                <span className="text">长沙</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="category_card">
                    <div className="category_top">
                        <div className="icon_text">院校</div>
                    </div>
                    <div className="category_bottom">
                        <a className="tag_wrap">
                            <div className="tag">
                                <span className="text">北京大学</span>
                            </div>
                        </a>
                        <a className="tag_wrap">
                            <div className="tag">
                                <span className="text">清华大学</span>
                            </div>
                        </a>
                        <a className="tag_wrap">
                            <div className="tag">
                                <span className="text">南京大学</span>
                            </div>
                        </a>
                        <a className="tag_wrap">
                            <div className="tag">
                                <span className="text">复旦大学</span>
                            </div>
                        </a>
                        <a className="tag_wrap">
                            <div className="tag">
                                <span className="text">上海交通大学</span>
                            </div>
                        </a>
                        <a className="tag_wrap">
                            <div className="tag">
                                <span className="text">上海财经大学</span>
                            </div>
                        </a>
                        <a className="tag_wrap">
                            <div className="tag">
                                <span className="text">同济大学</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="category_card">
                    <div className="category_top">
                        <div className="icon_text">专业</div>
                    </div>
                    <div className="category_bottom">
                        <a className="tag_wrap">
                            <div className="tag">
                                <span className="text">金融</span>
                            </div>
                        </a>
                        <a className="tag_wrap">
                            <div className="tag">
                                <span className="text">经济</span>
                            </div>
                        </a>
                        <a className="tag_wrap">
                            <div className="tag">
                                <span className="text">计算机</span>
                            </div>
                        </a>
                        <a className="tag_wrap">
                            <div className="tag">
                                <span className="text">哲学</span>
                            </div>
                        </a>
                        <a className="tag_wrap">
                            <div className="tag">
                                <span className="text">法学</span>
                            </div>
                        </a>
                        <a className="tag_wrap">
                            <div className="tag">
                                <span className="text">医学</span>
                            </div>
                        </a>
                        <a className="tag_wrap">
                            <div className="tag">
                                <span className="text">物理学</span>
                            </div>
                        </a>
                    </div>
                </div> */}
            </div>
        );
    }

    renderArticleList() {
        const {list, history} = this.props;
        return (
            <div className="card_list">
                <div className="card_list-content">
                    {list.map((item) => <ArticleCard key={item._id} item={item} history={history}/>)}
                </div>
            </div>
        );
    }

    render() {
        return (
            <DefaultLayout className='experience'>
                <div className="main-container">
                    {this.renderTags()}
                    <div className="columns">
                        <div className="left_articles">
                            <div className="tabs_wrap">
                                <div className="tabs">
                                    <div className="tabs_item">推荐</div>
                                    <div className="line"></div>
                                </div>
                            </div>
                            {this.renderArticleList()}
                        </div>
                        <div className="right_question">
                            <div className="white_card">
                                <div className="card_content">
                                    <div className="card_wrap">
                                        <Link to="/Master" className="icon_item">
                                            <img className="icon_wrap" src={jingyan} alt="" />
                                            <div className="icon_text">写经验</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        );
    }
}

export default withRouter(Experience);