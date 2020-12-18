import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './PotraitManagement.scss';
import PotraitLayout from 'layouts/PotraitLayout';
import Table from 'components/Table/Table';
import MyResume from 'components/MyResume/MyResume';

export default class PotraitManagement extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     listShow: true,
        // };
    }

    // aClick = () => {
    //     this.setState({ listShow: false });
    // };

    render() {
        // const { listShow } = this.state;
        // let node = <List aClick={this.aClick} />;
        // if (!listShow) {
        //     node = <Details />;
        // }
        return (
            <PotraitLayout className='potraitmanagement'>
                {/* {node} */}
                <Details />
            </PotraitLayout>
        );
    }
}

class List extends Component {
    static propTypes = {
        aClick: PropTypes.func
    };

    aClick = (item) => {
        const { aClick } = this.props;
        aClick(item);
    };

    bClick = (item) => {
        const { bClick } = this.props;
        alert("确认删除该档案？");
    };

    render() {
        const tableConfig = [
            { key: 'no', title: '编号', align: 'center' },
            { key: 'submitTime', title: '提交时间', align: 'center' },
            { key: 'status', title: '审核状态', align: 'center' },
            {
                key: 'operation', title: '操作', align: 'center', render: (item) => {
                    console.log(item)
                    return (
                        <div className={'button-group'}>
                            <button className="update_resume" onClick={() => this.aClick(item)}>修改</button>
                            <button className="delete_resume" onClick={() => this. bClick(item)}>删除</button>
                        </div>
                    );
                }
            },
        ]
        const tableData = [
            { no: '1', submitTime: '2020-12-01', status: '已完成' },
            { no: '2', submitTime: '2020-12-01', status: '已完成' },
            { no: '3', submitTime: '2020-12-01', status: '已完成' },
        ];
        return (
            <div>
                <div className="management-box">
                    <div className="box-header">档案管理</div>
                    <div className="portrait-list">
                        <Table config={tableConfig} data={tableData} />
                    </div>
                </div>
                <div className="action">
                    <button className="new_file">新建档案</button>
                </div>
            </div>
        );
    }
}

class Details extends Component {
    render() {
        return (
            <div>
                <div className="management-box">
                    <div className="box-header">我的档案</div>
                    <MyResume/>
                </div>
                <div className="action">
                    <button className="submit_file">提交</button>
                </div>
            </div>
        );
    }
}