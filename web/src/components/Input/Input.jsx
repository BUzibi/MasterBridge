import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ss from 'classnames';
import './Input.scss';

class Input extends Component {
    static propTypes = {
        className: PropTypes.string,
        type: PropTypes.oneOf(['text', 'number']),
        value: PropTypes.any,
        onChange: PropTypes.func,
    };

    static defaultProps = {
        type: 'text',
    };

    onChange = (e) => {
        const {onChange} = this.props;
        if (onChange) {
            const v = e.target.value;
            onChange(v);
        }
    };
   
    render() {
        const { className, value, type, onChange, ...otherProps } = this.props;
        return (
            <input {...otherProps}
                className={ss('custom-input', className)}
                type={type}
                value={value}
                onChange={this.onChange}/>
        )
    }
}

export default Input;