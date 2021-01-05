import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './AnnouncementCard.scss';


class AnnouncementCard extends Component {
    static propTypes = {
        item: PropTypes.object,
    };


    render() {
        const { item } = this.props;
        const { title, university, school, ann_url, publish_time } = item;
        return (
            <div className="announcement-card">
                <div className="announcement-card_content">
                    <a href={ann_url} className="card-title">{title}</a>
                </div>
                <div className="title-info">
                    <div className="university">{university}  {school}  {publish_time}</div>
                </div>
            </div>
        );
    }
}

export default AnnouncementCard;