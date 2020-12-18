import React, { Component } from 'react';
import './Administrator.scss';
import cls from 'classnames';
import administrator from 'components/icon/administrator.png';
import Table from 'components/Table/Table';

export default class Administrator extends Component {

    render() {
        return (
            <div className='administrator'>
                <div className="adsidebar-navigation">
                    <div id="sidebar-menu">
                        <div className="sidebar-header">
                            <img src={administrator} alt=""/>
                            <span>管理员中心</span>
                        </div>
                        <ul>
                            <div className="part">
                                <li className="menu-title">账户管理</li>
                                <li>
                                    <a href="/administrator">密码修改</a>
                                </li>
                            </div>
                            <div className="part">
                                <li className="menu-title">信息审核</li>
                                <li>
                                    <a href="/mastermsgreview">研究生审核</a>
                                </li>
                                <li>
                                    <a href="/resumemsgreview">档案审核</a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="admain-content">
                    <div className="administrator-no">
                        <h1>管理员工号</h1>
                        <h2>2020001001</h2>
                    </div>
                    <div className="changepsw">
                        <h1>密码修改</h1>
                        <form>
                            <div className="prepsw">
                                <span>原始密码： </span>
                                <input type="text" name="prepassword"/>
                            </div>
                            <div className="newpsw">
                                <span>修改密码： </span>
                                <input type="text" name="newpassword"/>
                            </div>
                            <div className="confirmpsw">
                                <span>确认密码： </span>
                                <input type="text" name="confirmpassword"/>
                            </div>
                            <button className="subpsw">提交</button>
                        </form>
                    </div>
                    {/* <div id="grades" class="review-contents">
                        <MasterList />
                    </div>
                    <div id="internship" class="resume-contents">
                        <ResumeList />
                    </div> */}
                </div>
            </div>
        );
    }
}

class MasterList extends Component {


    bClick = (item) => {
        const { bClick } = this.props;
        alert("确认删除该档案？");
    };

    render() {
        const tableConfig = [
            { key: 'masterID', title: '研究生名', align: 'center' },
            { key: 'userID', title: '用户名', align: 'center' },
            { key: 'UndergraduateSchool', title: '本科院校', align: 'center' },
            { key: 'UndergraduateMajor', title: '本科专业', align: 'center' },
            { key: 'MasterSchool', title: '研究生院校', align: 'center' },
            { key: 'MasterMajor', title: '研究生专业', align: 'center' },
            { key: 'EnrollmentTime', title: '研究生入学时间', align: 'center' },
            { key: 'Certification', title: '证明材料', align: 'center' },
            {
                key: 'operation', title: '操作', align: 'center', width: '200px', render: (item) => {
                    console.log(item)
                    return (
                        <div className={'button-group'}>
                            <button className="update_resume" onClick={() => this.aClick(item)}>通过</button>
                            <button className="delete_resume" onClick={() => this.bClick(item)}>拒绝</button>
                        </div>
                    );
                }
            },
        ]
        const tableData = [
            { masterID: '2021123456', userID: '19864914', UndergraduateSchool: '上海财经大学', UndergraduateMajor: '信息管理与信息系统', MasterSchool: '上海财经大学', MasterMajor: '金融', EnrollmentTime: '2021-07-29', Certification: ''},
            { masterID: '2021123456', userID: '19864914', UndergraduateSchool: '上海财经大学', UndergraduateMajor: '信息管理与信息系统', MasterSchool: '上海财经大学', MasterMajor: '金融', EnrollmentTime: '2021-07-29', Certification: ''},
            { masterID: '2021123456', userID: '19864914', UndergraduateSchool: '上海财经大学', UndergraduateMajor: '信息管理与信息系统', MasterSchool: '上海财经大学', MasterMajor: '金融', EnrollmentTime: '2021-07-29', Certification: ''},];
        return (
            <div>
                <Table config={tableConfig} data={tableData} />
            </div>
        );
    }
}

class ResumeList extends Component {


    bClick = (item) => {
        const { bClick } = this.props;
        alert("确认删除该档案？");
    };

    render() {
        const tableConfig = [
            { key: 'masterID', title: '研究生名', align: 'center' },
            { key: 'userID', title: '用户名', align: 'center' },
            { key: 'UndergraduateSchool', title: '本科院校', align: 'center' },
            { key: 'UndergraduateMajor', title: '本科专业', align: 'center' },
            { key: 'MasterSchool', title: '研究生院校', align: 'center' },
            { key: 'MasterMajor', title: '研究生专业', align: 'center' },
            { key: 'EnrollmentTime', title: '研究生入学时间', align: 'center' },
            { key: 'Certification', title: '证明材料', align: 'center' },
            {
                key: 'operation', title: '操作', align: 'center', width: '200px', render: (item) => {
                    console.log(item)
                    return (
                        <div className={'button-group'}>
                            <button className="update_resume" onClick={() => this.aClick(item)}>通过</button>
                            <button className="delete_resume" onClick={() => this.bClick(item)}>拒绝</button>
                        </div>
                    );
                }
            },
        ]
        const tableData = [
            { masterID: '2021123456', userID: '19864914', UndergraduateSchool: '上海财经大学', UndergraduateMajor: '信息管理与信息系统', MasterSchool: '上海财经大学', MasterMajor: '金融', EnrollmentTime: '2021-07-29', Certification: ''},
            { masterID: '2021123456', userID: '19864914', UndergraduateSchool: '上海财经大学', UndergraduateMajor: '信息管理与信息系统', MasterSchool: '上海财经大学', MasterMajor: '金融', EnrollmentTime: '2021-07-29', Certification: ''},
            { masterID: '2021123456', userID: '19864914', UndergraduateSchool: '上海财经大学', UndergraduateMajor: '信息管理与信息系统', MasterSchool: '上海财经大学', MasterMajor: '金融', EnrollmentTime: '2021-07-29', Certification: ''},];
        return (
            <div>
                <Table config={tableConfig} data={tableData} />
            </div>
        );
    }
}
