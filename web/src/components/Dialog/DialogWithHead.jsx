import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ss from 'classnames';
import Dialog from './Dialog';
import './DialogWithHead.scss';

export default class DialogWithHead extends Component {
    static propTypes = {
        className: PropTypes.string,
        title: PropTypes.string.isRequired,
        children: PropTypes.any,
    };

    render() {
        const {className, title, children, ...otherProps} = this.props;
        return (
            <Dialog className={ss('dialog-with-head', className)} {...otherProps}>
                <div className={ss('dialog-head')}>
                    {title}
                </div>
                {children}
            </Dialog>
        );
    }
}
