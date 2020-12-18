import React, {Component} from 'react';
import './Article.scss';
import EmptyLayout from 'layouts/EmptyLayout';

export default class Article extends Component {

    componentDidMount() {
        // const {} = this.props;
        // console.log(this.props)
        // 
    }

    render() {
        return (
            <EmptyLayout className='article'>
                <div>Article id:</div>
            </EmptyLayout>
        );
    }
}
