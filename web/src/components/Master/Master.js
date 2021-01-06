import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Master.scss';
import DefaultLayout from 'layouts/DefaultLayout';
import MasterLayout from 'layouts/MasterLayout'
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { getMasterInfo } from 'store/actions/master';

@connect(state => ({
    master: state.master,
}), dispatch => ({
    getMasterInfo: (id) => dispatch(getMasterInfo(id)),
}))
class Master extends Component {

    static propTypes = {
        master: PropTypes.object,

        getMasterInfo: PropTypes.func,
	};

	componentDidMount() {
		const {match: {params}} = this.props;
		const {id} = params;
		const {getMasterInfo} = this.props;
		getMasterInfo(id);
	}

    render() {
        return (
            <MasterLayout className='master'>
                <Details />
            </MasterLayout>
        );
    }
}

class Details extends Component {
    render() {
        const {masterInfo} = this.props;
        const {name, password, undergraduateSchool, undergraduateMajor, masterSchool, masterArea, masterMajor, enrollmentDate} = masterInfo || {};
        return (
            <div>
                <div className="masterinfo">
                    <div className="management-box">
                        <div className="box-header">个人信息</div>
                        <p>姓名：王心悦{name}</p>
                        <p>本科毕业院校：上海财经大学{undergraduateSchool}</p>
                        <p>本科专业：信息管理与信息系统{undergraduateMajor}</p>
                        <p>研究生院校：上海财经大学{masterSchool}</p>
                        <p>研究生院校城市：上海{masterArea}</p>
                        <p>研究生专业：金融计量{masterMajor}</p>
                        <p>毕业时间：2021-06-22{enrollmentDate}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Master);