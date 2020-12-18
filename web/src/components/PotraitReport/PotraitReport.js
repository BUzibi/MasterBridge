import React, { Component } from 'react';
import './PotraitReport.scss';
import PotraitLayout from 'layouts/PotraitLayout';
import Table from 'components/Table/Table';
import PropTypes from 'prop-types';


export default class PotraitReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listShow: true,
        };
    }

    aClick = () => {
        this.setState({ listShow: false });
    };
    render() {
        const { listShow } = this.state;
        let node = <PotraitList aClick={this.aClick} />;
        if (!listShow) {
            node = <ReportDetails />;
        }
        return (
            <PotraitLayout className='makepotrait'>
                <div className="management-box">
                    <div className="box-header">画像报告</div>
                    {node}
                </div>
            </PotraitLayout>
        );
    }
}

class PotraitList extends Component {
    static propTypes = {
        aClick: PropTypes.func
    };

    aClick = (item) => {
        const { aClick } = this.props;
        aClick(item);
    };

    bClick = (item) => {
        const { bClick } = this.props;
        alert("确认下载");
    };

    render() {
        const tableConfig = [
            { key: 'reportno', title: '编号', align: 'center' },
            { key: 'potraitTime', title: '提交时间', align: 'center' },
            {
                key: 'operation', title: '操作', align: 'center', render: (item) => {
                    console.log(item)
                    return (
                        <div className={'button-group'}>
                            <button className="update_resume" onClick={() => this.aClick(item)}>查看</button>
                            <button className="delete_resume" onClick={() => this. bClick(item)}>下载</button>
                        </div>
                    );
                }
            },
        ]
        const tableData = [
            { reportno: '1', potraitTime: '2020-12-01'},
            { reportno: '1', potraitTime: '2020-12-01'},
            { reportno: '1', potraitTime: '2020-12-01'},
        ];
        return (
            <div>
                <div className="portrait-list">
                    <Table config={tableConfig} data={tableData} />
                </div>
            </div>
        );
    }
}

class ReportDetails extends Component {
    render() {
        return (
            <div>
                报告
            </div>
        );
    }
}

    