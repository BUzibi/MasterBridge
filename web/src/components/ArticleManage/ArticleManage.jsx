import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './ArticleManage.scss';
import MasterLayout from 'layouts/MasterLayout';
import Table from 'components/Table/Table';
import MyResume from 'components/MyResume/MyResume';
import { withRouter } from 'react-router';
import MyArticle from 'components/MyArticle/MyArticle';

class ArticleManage extends Component {
    render() {
        return (
            <MasterLayout className='master'>
                <Details />
            </MasterLayout>
        );
    }
}
// class List extends Component {
//     static propTypes = {
//         aClick: PropTypes.func
//     };

//     aClick = (item) => {
//         const { aClick } = this.props;
//         aClick(item);
//     };

//     bClick = (item) => {
//         const { bClick } = this.props;
//         alert("确认删除该经验？");
//     };
// }

class Details extends Component {
    render(){
        return(
            <div>
                <div className="management-box">
                    <div className="box-header">经验管理</div>
                    <MyArticle/>
                </div>
            </div>
        )
    }
}
export default withRouter(ArticleManage);
