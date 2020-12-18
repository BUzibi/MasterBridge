import React, { Component } from 'react';
import './Home.scss';
import DefaultLayout from 'layouts/DefaultLayout';


export default class Home extends Component {

    render() {
        
        return (
            <DefaultLayout className='home'>
                home
                <div>
                About12323
                    <a href="/article/23423432423">direct to article details</a>
                </div>
            </DefaultLayout>
        );
    }
}