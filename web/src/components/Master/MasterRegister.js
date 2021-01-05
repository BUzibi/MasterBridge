import PropTypes from 'prop-types';
import './Master.scss';
import 'components/AddArticle/index.less';
import 'components/AddArticle/marked.css';
import React, { Component } from 'react';
import DefaultLayout from 'layouts/DefaultLayout';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Input from 'components/Input/Input';
import { masterRegister, masterRegisterName, masterRegisterPassword, masterRegisterUndergraduateSchool,masterRegisterUndergraduateMajor,
         masterRegisterMasterSchool, masterRegisterMasterArea, masterRegisterMasterMajor, masterRegisterEnrollmentDate} from 'store/actions/masterRegister';

@connect(state => ({
    master: state.masterRegister,
}),dispatch => ({
    masterRegister: (history) => dispatch(masterRegister(history)),
    masterRegisterName: (name) => dispatch(masterRegisterName(name)),
    masterRegisterPassword: (password) => dispatch(masterRegisterPassword(password)),
    masterRegisterUndergraduateSchool: (undergraduateSchool) => dispatch(masterRegisterUndergraduateSchool(undergraduateSchool)),
    masterRegisterUndergraduateMajor: (undergraduateMajor) => dispatch(masterRegisterUndergraduateMajor(undergraduateMajor)),
    masterRegisterMasterSchool: (masterSchool) => dispatch(masterRegisterMasterSchool(masterSchool)),
    masterRegisterMasterArea: (masterArea) => dispatch(masterRegisterMasterArea(masterArea)),
    masterRegisterMasterMajor: (masterMajor) => dispatch(masterRegisterMasterMajor(masterMajor)),
    masterRegisterEnrollmentDate: (enrollmentDate) => dispatch(masterRegisterEnrollmentDate(enrollmentDate)),
}))
class MasterRegister extends Component {
    static propTypes = {
        master: PropTypes.object,
        history: PropTypes.object,

        masterRegister: PropTypes.func,
        masterRegisterName: PropTypes.func,
        masterRegisterPassword: PropTypes.func,
        masterRegisterUndergraduateSchool: PropTypes.func,
        masterRegisterUndergraduateMajor: PropTypes.func,
        masterRegisterMasterSchool: PropTypes.func,
        masterRegisterMasterArea: PropTypes.func,
        masterRegisterMasterMajor: PropTypes.func,
        masterRegisterEnrollmentDate: PropTypes.func,
    }

    render() {
        const {master,history,masterRegister,masterRegisterName,masterRegisterPassword,masterRegisterUndergraduateSchool,
        masterRegisterUndergraduateMajor,masterRegisterMasterSchool,masterRegisterMasterArea,masterRegisterMasterMajor,masterRegisterEnrollmentDate} = this.props
        const {name,password,undergraduateSchool,undergraduateMajor,masterSchool,masterArea,masterMajor,enrollmentDate} = master
        return (
            <DefaultLayout>
				<div className="articleForm">
					<form>
						<table>
                            <tbody>
							<tr>
								<td>姓名<Input value={name} onChange={(v) => masterRegisterName(v)}/></td>
							</tr>
							<tr>
								<td>密码<Input value={password} onChange={(v) => masterRegisterPassword(v)}/></td>
							</tr>
							<tr>
								<td>本科院校<Input value={undergraduateSchool} onChange={(v) => masterRegisterUndergraduateSchool(v)}/></td>
							</tr>
							<tr>
								<td>本科专业<Input value={undergraduateMajor} onChange={(v) => masterRegisterUndergraduateMajor(v)}/></td>
							</tr>
							<tr>
								<td>研究生院校<Input value={masterSchool} onChange={(v) => masterRegisterMasterSchool(v)}/></td>
							</tr>
							<tr>
								<td>研究生院校城市<Input value={masterArea} onChange={(v) => masterRegisterMasterArea(v)}/></td>
							</tr>
                            <tr>
								<td>研究生专业<Input value={masterMajor} onChange={(v) => masterRegisterMasterMajor(v)}/></td>
							</tr>
							<tr>
								<td>毕业时间<Input value={enrollmentDate} onChange={(v) => masterRegisterEnrollmentDate(v)}/></td>
							</tr>
                            </tbody>
						</table>
					</form>
				</div>
				<div>
					<button  onClick={() => masterRegister(history)}>提交</button>
				</div>
			</DefaultLayout>
        );
    }
}

export default withRouter(MasterRegister);
