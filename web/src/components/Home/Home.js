import React, { Component } from 'react';
import './Home.scss';
import DefaultLayout from 'layouts/DefaultLayout';


export default class Home extends Component {

    render() {
        
        return (
            <DefaultLayout className='home'> 
                <body>
                    <div class='picture-container'>
                        <div class='show'>
                        <img src='back.png'></img>
                        </div>
                        <div class='home-overlay'></div>
                        <div class='home-content'>
                            <h1>MasterBridge</h1>
                            <p>Welcome to MasterBridge</p>
                            <a href='#' class='btn'>Read more</a>
                        </div>
                    </div>
                    <div class="fuction-section">
                        <h2>what you can find</h2>
                        <div class="row">
                            <div class="function-container">
                                <div class="function container-wrap">
                                    <a class="experience-column1" href='experience'>
                                        <div class="fuction-column-bg">
                                            <div class="fuction-icon">
                                                <div class="align-middle-item">
                                                    <img src='logo192.png'></img>
                                                </div>
                                            </div>
                                            <div class='fuction-icon-info'>
                                                <strong class="align-middle-item">经验分享</strong>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>  
            </DefaultLayout>
        );
    }
}