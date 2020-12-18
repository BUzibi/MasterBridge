import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ss from 'classnames';
import './SvgIcon.scss';

class SvgIcon extends Component {
    static propTypes = {
        className: PropTypes.string,
        name: PropTypes.string.isRequired,
        onClick: PropTypes.func,
    };
   
    render() {
        const { className, name, onClick } = this.props;
        return (
            <svg className={ss('svg-icon', className)} onClick={onClick}>
                <use xlinkHref={"#icon-" + name}/>
            </svg>
        )
    }
}

export default SvgIcon;