import React, { Component } from 'react';
import './Login.scss';
import DefaultLayout from 'layouts/DefaultLayout';

export default class User extends Component {

    render() {
        return (
            <DefaultLayout className='user'>
                <body>
                    <div class="login-container">
                        <div id='panel'>
                            {/* <img src='back.png'></img> */}
                        </div>
                        <div class='login-overlay'></div>
                        <div class="login-content">
                            <div class="autoform">
                                <h1>登录</h1>
                                <div class="subtitle">
                                    没有账户？
                                    <a href='experience'>Start now for free</a>
                                    <br></br>
                                    <br></br>
                                </div>
                                <div></div>
                                <form acceptCharset='UTF-8' action='/login' method='post'>
                                    <div class='form-group'>
                                    </div>
                                    <div class='form-group'>
                                        <label class='control-label' for='user-id'>
                                            用户ID
                                        </label>
                                        <br></br>
                                        <input id="user-id" class='form-control' name='session[id]' type='text'></input>
                                        <br></br>
                                        <br></br>
                                    </div>
                                    <div class='form-group'>
                                        <label class='control-label' for='user-password'>
                                            用户密码
                                        </label>
                                        <br></br>
                                        <input id="user-password" class='form-control' name='session[password]' type='text'></input>
                                    </div>
                                    <br></br>
                                    <div class='btn-panel'>
                                        <button class='btn' type='submit'>确认登录</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </body>
            </DefaultLayout>
        );
    }
}