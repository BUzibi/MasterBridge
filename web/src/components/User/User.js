import React, { Component } from 'react';
import './User.scss';
import DefaultLayout from 'layouts/DefaultLayout';

export default class User extends Component {

    render() {
        return (
            <DefaultLayout className='user'>
                <div className="hero clear"></div>
                <div className="sidebar-navigation">
                    <nav className="clear">
                        <ul>
                            <li className="Admin-login">
                                <a className="login-btn">登录/注册</a>
                            </li>
                            <li>
                                <a className="selected">帐户设置</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="main-content clear">
                    <div id="content-wrapper" className="content-wrapper clear">
                        <div className="g12 nest group item-up-down account_settings">
                            <div className="g12">
                                <h1 className="mb0">帐户设置</h1>
                            </div>
                            <div className="g12">
                                <div className="block-header">
                                    <h4>个人信息</h4>
                                </div>
                                <div className="block item-list clear">
                                    <div className="item clear">
                                        {/* ::before */}
                                        <div className="lbl">姓名</div>
                                        <div className="val">Yuyan Zhang</div>
                                    </div>
                                    <div className="item clear">
                                        {/* ::before */}
                                        <div className="lbl">账号</div>
                                        <div className="val">fkjakjbc</div>
                                    </div>
                                    <div className="item clear">
                                        {/* ::before */}
                                        <div className="lbl">密码</div>
                                        <div className="val">wzywxy66</div>
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