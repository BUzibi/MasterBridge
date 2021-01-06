import PropTypes from 'prop-types';
import React, { Component } from 'react';
import 'components/AddArticle/index.less';
import 'components/AddArticle/marked.css';
import DefaultLayout from 'layouts/DefaultLayout';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogin, userNameLogin, userPasswordLogin } from 'store/actions/userLogin';
import Input from 'components/Input/Input';
import './UserLogin.scss';

@connect(state => ({
    user: state.userLogin,
}), dispatch => ({
    userLogin: (history) => dispatch(userLogin(history)),
    userNameLogin: (name) => dispatch(userNameLogin(name)),
    userPasswordLogin: (password) => dispatch(userPasswordLogin(password)),
}))
class UserLogin extends Component {
    static propTypes = {
        user: PropTypes.object,
        history: PropTypes.object,

        userLogin: PropTypes.func,
        userNameLogin: PropTypes.func,
        userPasswordLogin: PropTypes.func,
    }

    render() {
        const { user, history, userLogin, userNameLogin, userPasswordLogin } = this.props
        const { name, password } = user
        return (
            <DefaultLayout>
                <div className="main">
                    <div className="articleForm">
                    <div className="title">登录</div>
                        <form>
                            <table className="table_1">
                                <tbody>
                                    <tr>
                                        <td>账号: <Input value={name} onChange={(v) => userNameLogin(v)} /></td>
                                    </tr>
                                    <br></br>
                                    <tr>
                                        <td>密码: <Input value={password} onChange={(v) => userPasswordLogin(v)} /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                        <br></br>
                        <div className="masterbt">
                           <div className="loginAndRegister">
                                <button onClick={() => userLogin(history)}>登录</button>
                            </div> 
                            <div className="loginAndRegister">
                                {/* <a href="UserRegister"> */}
                                    <button >注册</button>
                                {/* </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultLayout>

        );
    }
}

export default withRouter(UserLogin);