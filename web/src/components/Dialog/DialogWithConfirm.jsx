import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ss from 'classnames';
import DialogWithHead from './DialogWithHead';
import './DialogWithConfirm.scss';

export default class DialogWithConfirm extends Component {
    static propTypes = {
        onCancel: PropTypes.func,
        onConfirm: PropTypes.func,
    };

    render() {
        const { title, children, onCancel, onConfirm, ...otherProps } = this.props;
        return (
            <DialogWithHead className={ss('dialog-with-confirm')}
                {...otherProps}>
                {children}
                <div className={ss('dialog-actions')}>
                    <button onClick={onCancel}>取消</button>
                    <button onClick={onConfirm}>确认</button>
                </div>
            </DialogWithHead>
        );
    }
}
