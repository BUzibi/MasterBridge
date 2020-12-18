import React, { Component } from 'react';
import './Payment.scss';
import PotraitLayout from 'layouts/PotraitLayout';
import qrcode from 'components/icon/qrcode.jpeg';

export default class Payment extends Component {

    render() {
        return (
            <PotraitLayout className='payment'>
                <div className="payment-box">
                    <div className="prompt">
                        请扫描以下二维码开始缴费
                    </div>
                    <div className="paymentarea">
                        <img className="QR-code" src={qrcode} alt=""/>
                    </div>
                    <div className="payment-result">
                        <button className="payed">已完成付费</button>
                        <button className="payfailed">缴费遇到问题</button>
                    </div>
                </div>
            </PotraitLayout>
        );
    }
}