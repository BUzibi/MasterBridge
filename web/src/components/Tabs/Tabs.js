import React, { Component } from 'react';
import './Tabs.scss';
import PropTypes from 'prop-types';
import ss from 'classnames';

export default class Tabs extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
        value: PropTypes.any.isRequired,
        children: PropTypes.any,

        onChange: PropTypes.func.isRequired,
    };

    render() {
        const {items, value, onChange, children} = this.props;
        const index = items.findIndex(item => item === value);
        let content = children;
        if (index > -1) {
            content = children[index];
        }
        return (
            <div className="tabs">
                <ul className="tabs-head">
                    {items.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className={ss({active: item === value})}
                                onClick={(e) => onChange(e, item)}>
                                {item}
                            </li>
                        );
                    })}
                </ul>
                <div className="tabs-content">
                    {content}
                </div>
            </div>
        );
    }
}