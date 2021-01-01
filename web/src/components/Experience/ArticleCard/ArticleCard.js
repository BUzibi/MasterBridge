import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './ArticleCard.scss';


class ArticleCard extends Component {
    static propTypes = {
        item: PropTypes.object,
    };
    
    render() {
        const {item} = this.props;
        const {area, create_time, desc, img_url, major, meta, title, university, _id} = item;
        const {views} = meta || {};
        return (
            <div className="article-card">
                <div className="article-card_content">
                    <div className="content">
                        <div className="article">
                            <div className="title">{title}</div>
                            <div className="subtitle">{desc}</div>
                        </div>
                        <div className="action_group">
                            <div className="message">Sufer • {create_time} • {area} • {university} • {major} • 阅读 {views}</div>
                        </div>
                    </div>
                    <div className="thumbnail">
                        <div className="place_holder">
                            <picture>
                                <img className="photo" src={img_url} alt="" />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ArticleCard;