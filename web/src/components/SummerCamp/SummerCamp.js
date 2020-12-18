import React, { Component } from 'react';
import './SummerCamp.scss';
import DefaultLayout from 'layouts/DefaultLayout';
import makepotrait from 'components/icon/makepotrait.png';
import {
    Link
} from "react-router-dom";

export default class SummerCamp extends Component {

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
                                <div className="message-card">
                                    <div className="title-content">
                                        <a className="card-title">2020北京大学光华学院预推免名单</a>
                                    </div>
                                    <div className="title-info">
                                        <div className="university">北京大学  2020.06.23</div>
                                    </div>
                                </div>
                                <div className="message-card">
                                    <div className="title-content">
                                        <a className="card-title">有关2020上海财经大学金融硕士夏令营通告</a>
                                    </div>
                                    <div className="title-info">
                                        <div className="university">上海财经大学 2020.06.23</div>
                                    </div>
                                </div>
                                <div className="message-card">
                                    <div className="title-content">
                                        <a className="card-title">预推免名单</a>
                                    </div>
                                    <div className="title-info">
                                        <div className="university">清华大学  2020.06.23</div>
                                    </div>
                                </div>
                                <div className="message-card">
                                    <div className="title-content">
                                        <a className="card-title">预推免名单</a>
                                    </div>
                                    <div className="title-info">
                                        <div className="university">上海交通大学  2020.06.23</div>
                                    </div>
                                </div>
                                <div className="message-card">
                                    <div className="title-content">
                                        <a className="card-title">预推免名单</a>
                                    </div>
                                    <div className="title-info">
                                        <div className="university">复旦大学  2020.06.23</div>
                                    </div>
                                </div>
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