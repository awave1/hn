import React from 'react';
import './feedItem.css';

class FeedItem extends React.Component {
  render() {
    const { story } = this.props;
    return(
      <div className='feed_item'>
        <div className='feed_item_score_container'>
          <span>{ story.score }</span>
        </div>
        <div className='feed_item_container'>
          <a className='feed_item_title' href={ story.url }>
            { story.title } <small>({ story.host })</small>
          </a>
          <div className='feed_item_info_container'>
            <small>by: { story.by } | { story.since } ago | { story.comments } comments </small>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedItem;