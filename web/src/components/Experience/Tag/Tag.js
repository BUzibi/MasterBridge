import PropTypes from 'prop-types';
import ss from 'classnames';
import React, { Component } from 'react';
import './Tag.scss';


class Tag extends Component {
    static propTypes = {
        item: PropTypes.object,
        active: PropTypes.bool,
        onClick: PropTypes.func,
    };

    static defaultProps = {
        active: false,
    };

    onClick = () => {
        const {item, active, onClick} = this.props;
        if (onClick) {
            onClick(item, active);
        }
    };

    render() {
        const { item, active } = this.props;
        const { name } = item || {};
        return (
            <a className="tag-link" onClick={this.onClick}>
                <div className={ss("tag", {active})}>
                    <span className="text">{name}</span>
                </div>
            </a>
        );
    }
}

export default Tag;