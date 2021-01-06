import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Master.scss';
import DefaultLayout from 'layouts/DefaultLayout';
import MasterLayout from 'layouts/MasterLayout'
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { masterLogin,masterNameLogin,masterPasswordLogin} from 'store/actions/masterLogin';
import Input from 'components/Input/Input';
import Password from 'antd/lib/input/Password';

@connect(state => ({
    master: state.masterLogin,
}), dispatch => ({
    masterLogin: (history) => dispatch(masterLogin(history)),
    masterNameLogin: (name) => dispatch(masterNameLogin(name)),
    masterPasswordLogin: (password) => dispatch(masterPasswordLogin(password)),
}))
class MasterLogin extends Component {
    static propTypes = {
        master: PropTypes.object,
        history: PropTypes.object,

        masterLogin: PropTypes.func,
        masterNameLogin: PropTypes.func,
        masterPasswordLogin: PropTypes.func,
	}
    
    render() {
        const {master,history,masterLogin,masterNameLogin,masterPasswordLogin} = this.props
        const {name,password} = master
        return (
            <DefaultLayout>
                <div className="articleForm">
                    <form>
                        <table>
                            <tbody>
                            <tr>
                                <td>账号<Input value={name} onChange={(v) => masterNameLogin(v)}/></td>
                            </tr>
                            <tr>
                                <td>密码<Input value={password} onChange={(v) => masterPasswordLogin(v)}/></td>
                            </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
                <div>
					<button onClick={() => masterLogin(history)}>登录</button>
                    <a href="masterRegister">
                        <button>注册</button>
                    </a>
				</div>
            </DefaultLayout>
            
        );
    }
}

export default withRouter(MasterLogin);