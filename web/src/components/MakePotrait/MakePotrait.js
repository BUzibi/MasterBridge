import React, { Component } from 'react';
import './MakePotrait.scss';
import PotraitLayout from 'layouts/PotraitLayout';



export default class MakePotrait extends Component {
    render() {
    return (
        <PotraitLayout className='potraitreport'>
            <div className="makepotrait-box">
                <div className="box-header">模拟画像</div>
                
            </div>
        </PotraitLayout>
    );
}
}
