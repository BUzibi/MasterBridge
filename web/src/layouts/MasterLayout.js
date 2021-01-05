import PropTypes from 'prop-types';
import React, {Component} from 'react';
import './MasterLayout.scss';
import {withRouter} from 'react-router-dom';
import AppHeader from 'components/AppHeader/AppHeader';
import cls from 'classnames';
import report from 'components/icon/report.png';
import resume from 'components/icon/resume.png';


class MasterLayout extends Component {
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.any,
    };

    render() {
        const {children, className} = this.props;

        return (
            <div className={cls('master-layout', className)}>
                <AppHeader/>
                <div className="master-main">
                    <aside className="psidebar">
                        <div className="box">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a href="/master">
                                        <img className="master-icon" src={report} alt=""></img>
                                        <span>个人信息</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/ArticleManage">
                                        <img className="master-icon" src={resume} alt=""></img>
                                        <span>经验管理</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </aside>
                    <div className="pcontent">
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(MasterLayout);