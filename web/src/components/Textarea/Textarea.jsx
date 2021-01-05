import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ss from 'classnames';
import './Textarea.scss';

class Textarea extends Component {
    static propTypes = {
        className: PropTypes.string,
        value: PropTypes.any,
        onChange: PropTypes.func,
    };

    onChange = (e) => {
        const {onChange} = this.props;
        if (onChange) {
            const v = e.target.value;
            onChange(v);
        }
    };
   
    render() {
        const { className, value, onChange, ...otherProps } = this.props;
        return (
            <textarea {...otherProps}
                className={ss(className)}
                value={value}
                onChange={this.onChange}/>
        )
    }
}

export default Textarea;