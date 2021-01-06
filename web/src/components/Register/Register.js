import React, { Component } from 'react';
import './Register.scss';
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
                                <h1>注册</h1>
                                <div class="subtitle">
                                    <a href='experience'>已有账户？ Return to login</a>
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
                                        <label class='control-label' for='user-name'>
                                            用户姓名
                                        </label>
                                        <br></br>
                                        <input id="user-name" class='form-control' name='session[name]' type='text'></input>
                                    </div>
                                    <br></br>
                                    <div class='form-group'>
                                        <label class='control-label' for='user-password'>
                                            用户密码
                                        </label>
                                        <br></br>
                                        <input id="user-password" class='form-control' name='session[password]' type='text'></input>
                                    </div>
                                    <br></br>
                                    <div class='btn-panel'>
                                        <button class='btn' type='submit'>确认注册</button>
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