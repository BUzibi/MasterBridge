import React, { Component } from 'react';
import './SummerCamp.scss';
import DefaultLayout from 'layouts/DefaultLayout';
import makepotrait from 'components/icon/makepotrait.png';
import {
    Link
} from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAnnouncementList } from 'store/actions/announcement';
import {withRouter} from 'react-router-dom';
import AnnouncementCard from 'components/AnnouncementCard/AnnouncementCard';

@connect(state => ({
    list: state.announcement.list,
}), dispatch => ({
    getAnnouncementList: () => dispatch(getAnnouncementList()),
}))
class SummerCamp extends Component {
    static propTypes = {
        list: PropTypes.array,

        getArticleList: PropTypes.func,
    };

    componentDidMount() {
        const { getAnnouncementList } = this.props;
        getAnnouncementList();
    }

    renderAnnouncementList() {
        const {list, history} = this.props;
        return (
            <div className="card_list">
                <div className="card_list-content">
                    {list.map((item) => <AnnouncementCard key={item._id} item={item} history={history}/>)}
                </div>
            </div>
        );
    }


    render() {
        return (
            <DefaultLayout className='summercamp'>
                <div className="filter">
                    <div className="filter_content">

                    </div>
                </div>
                <div className="content-container">
                    <div className="main-left">
                        <div className="tab-box">
                            <a className="tab">最新</a>
                        </div>
                        <div className="list-wrap">
                            <div className="search-wrap">
                                <div className="input-wrap">
                                    <img className="search-icon" alt="" />
                                    <div className="text-input">
                                        <div className="input-wrap-border">
                                            <input type="text" placeholder="搜索" className="input-class" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="message-list">
                                {this.renderAnnouncementList()}
                            </div>
                        </div>
                    </div>
                    <div className="main-right">
                        <div className="right-content">
                            <div className="action-wrap">
                                <div className="top-wrap">
                                    <Link to="/potraitmanagement" className="icon_item">
                                        <img className="icon_wrap" src={makepotrait} alt="" />
                                        <div className="icon_text">模拟画像</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        );
    }
}

export default withRouter(SummerCamp);