import PropTypes from 'prop-types';
import 'components/AddArticle/index.less';
import 'components/AddArticle/marked.css';
import React, { Component } from 'react';
import DefaultLayout from 'layouts/DefaultLayout';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Input from 'components/Input/Input';
import { userRegister, userRegisterName, userRegisterPassword} from 'store/actions/userRegister';
import './UserRegister.scss';

@connect(state => ({
    user: state.userRegister,
}),dispatch => ({
    userRegister: (history) => dispatch(userRegister(history)),
    userRegisterName: (name) => dispatch(userRegisterName(name)),
    userRegisterPassword: (password) => dispatch(userRegisterPassword(password)),
}))
class UserRegister extends Component {
    static propTypes = {
        user: PropTypes.object,
        history: PropTypes.object,

        userRegister: PropTypes.func,
        userRegisterName: PropTypes.func,
        userRegisterPassword: PropTypes.func,
    }
    render() {
        const {user,history,userRegister,userRegisterName,userRegisterPassword} = this.props
        const {name,password} = user
        return (
            <DefaultLayout>
				<div className="articleForm">
					<form>
						<table>
                            <tbody>
							<tr>
								<td>姓名<Input value={name} onChange={(v) => userRegisterName(v)}/></td>
							</tr>
							<tr>
								<td>密码<Input value={password} onChange={(v) => userRegisterPassword(v)}/></td>
							</tr>
                            </tbody>
                        </table>
                    </form>
                </div>
                <div className="registerSubmit">
					<button  onClick={() => userRegister(history)}>提交</button>
				</div>
            </DefaultLayout>
        )
    }
}

export default withRouter(UserRegister);