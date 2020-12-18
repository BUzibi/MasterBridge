import React, { Component } from 'react';
import './AppHeader.scss';
import {
    Link
} from "react-router-dom";

export default class AppHeader extends Component {

    render() {
        return (
            <header className='app-header'>
                <nav>
                    <ul className="header-menu">
                        <li>
                            <Link to="/">首页</Link>
                        </li>
                        <li>
                            <Link to="/experience">经验广场</Link>
                        </li>
                        <li>
                            <Link to="/postgraduate">保研大数据</Link>
                        </li>
                        <li>
                            <span>查询系统</span>
                            <div className="dropdown-menu">
                                <Link to="/summercamp">夏令营</Link>
                                <Link to="/prelaunch">预推免</Link>
                            </div>
                        </li>
                        <li>
                            <Link to="/master">研究生入驻</Link>
                        </li>
                        <li>
                            <Link to="/potraitmanagement">模拟画像</Link>
                        </li>
                        <li>
                            <Link to="/user">个人中心</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}