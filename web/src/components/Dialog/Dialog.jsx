import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ss from 'classnames';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import './Dialog.scss';

export default class Dialog extends Component {
    static propTypes = {
        show: PropTypes.bool,
        className: PropTypes.string,
        children: PropTypes.any,
        onClose: PropTypes.func,
        closeClassName: PropTypes.string,
        disableMaskClick: PropTypes.bool,
    };

    static defaultProps = {
        show: false,
        disableMaskClick: false,
    };

    onMaskClick(e) {
        const {disableMaskClick} = this.props;
        if (!disableMaskClick) {
            this.onClose(e);
        }
    }

    onClose(e) {
        e.stopPropagation();
        const {onClose} = this.props;
        if (onClose) {
            onClose();
        }
    }

    render() {
        const {show, className, children} = this.props;
        return (
            <div className={ss('dialog-wrap', {show})}>
                <div ref='dialog' className={ss('dialog', className)}>
                    <SvgIcon className={ss('close')} name='dialog_close_inner' onClick={(e) => this.onClose(e)}/>
                    {children}
                </div>
                <div className={ss('dialog-mask')}
                    onClick={(e) => this.onMaskClick(e)}></div>
            </div>
        );
    }
}
