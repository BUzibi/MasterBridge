import PropTypes from 'prop-types';
import React, {Component} from 'react';
import './DefaultLayout.scss';
import {withRouter} from 'react-router-dom';
import cls from 'classnames';

class EmptyLayout extends Component {
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.any,
    };


    render() {
        const {children, className} = this.props;

        return (
            <div className={cls('empty-layout', className)}>
                {children}
            </div>
        );
    }
}

export default withRouter(EmptyLayout);