import PropTypes from 'prop-types';
import React, {Component} from 'react';
import './DefaultLayout.scss';
import {withRouter} from 'react-router-dom';
import AppHeader from 'components/AppHeader/AppHeader';
import cls from 'classnames';

class DefaultLayout extends Component {
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.any,
    };

    render() {
        const {children, className} = this.props;

        return (
            <div className={cls('default-layout', className)}>
                <AppHeader/>
                {children}
            </div>
        );
    }
}

export default withRouter(DefaultLayout);