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
                            <br></br>
                            <p>简洁、直观的保研资讯，丰富、详细的保研经验，助力你的研究生申请之旅！</p>
                            <a href='postgraduate' class='btn'>Read more</a>
                        </div>
                    </div>
                    {/* <div class="fuction-section">
                        <h2></h2>
                        <div class="row">
                            <div class="function-container">
                                <div class="function container-wrap">
                                </div>
                            </div>
                        </div>
                    </div> */}
                </body>  
            </DefaultLayout>
        );
    }
}