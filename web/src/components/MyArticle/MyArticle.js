import React, { Component } from 'react';
import './MyArticle.scss';
import EmptyLayout from 'layouts/EmptyLayout';
import Table from 'components/Table/Table';
import Tabs from 'components/Tabs/Tabs';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddArticle from 'components/AddArticle/AddArticle';
import { getArticleManageList, delArticle} from 'store/actions/articleManage';
import {addArticle,addArticleTitle,addArticleArea} from 'store/actions/addArticle';

@connect(state => ({
    articleManageList: state.addArticle.articleManageList,
}),dispatch => ({
    getArticleManageList:() => dispatch(getArticleManageList()),
    delArticle: (id) => dispatch(delArticle(id)),
    addArticle: (form) =>dispatch(addArticle(form)),
}))
class MyArticle extends Component {
    static propTypes = {
        articleManageList: PropTypes.array,

        delArticle: PropTypes.func,
        getArticleManageList: PropTypes.func,
        addArticle: PropTypes.func,
    };
    componentDidMount() {
    }
    bClick = (item) => {
        const { delArticle } = this.props;
        alert("确认删除？");
        delArticle(item.id);
    };
    addArticle = (item) => {
        const { addArticle } = this.props;
        alert("确认添加？");
        addArticle(item);
    };
    render(){
        const {articleManageList} = this.props;
        const tableConfig = [
            { key: 'id', title: '编号', align: 'center'},
            { key: 'title', title: '标题', align: 'center'},
            { key: 'views', title: '浏览量', align: 'center'},
            {
                key: 'operation', title: '操作', align: 'center', width: '200px', render: (item) => {
                    return (
                        <div className={'button-group'}>
                            <button className="get_resume" onClick={() => getArticleManageList(item)}>查看</button>
                            <button className="delete_resume" onClick={() => this.bClick(item)}>删除</button>
                        </div>
                    );
                }
            },
        ]
        return (
            <div>
                <Table config={tableConfig} data={articleManageList} rowKey='id' />
                <a href="AddArticle">
                    <button className="article-add">添加</button>
                </a>
            </div>
        );
    }
    
}

export default MyArticle;