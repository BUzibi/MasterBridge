import PropTypes from 'prop-types';
import React, {Component} from 'react';
import './PotraitLayout.scss';
import {withRouter} from 'react-router-dom';
import AppHeader from 'components/AppHeader/AppHeader';
import cls from 'classnames';
import report from 'components/icon/report.png';
import payment from 'components/icon/payment.png';
import resume from 'components/icon/resume.png';
import makepotrait from 'components/icon/makepotrait.png';

class PotraitLayout extends Component {
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.any,
    };

    render() {
        const {children, className} = this.props;

        return (
            <div className={cls('potrait-layout', className)}>
                <AppHeader/>
                <div className="potrait-main">
                    <aside className="psidebar">
                        <div className="box">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a href="/potraitmanagement">
                                        <img className="potrait-icon" src={resume} alt=""></img>
                                        <span>档案管理</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/payment">
                                        <img className="potrait-icon" src={payment} alt=""></img>
                                        <span>缴费</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/makepotrait">
                                        <img className="potrait-icon" src={makepotrait} alt=""></img>
                                        <span>模拟画像</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="potraitreport">
                                        <img className="potrait-icon" src={report} alt=""></img>
                                        <span>画像报告</span>
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
        );
    }
}

export default withRouter(PotraitLayout);