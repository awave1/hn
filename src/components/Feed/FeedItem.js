import React from 'react';
import url from 'url';
import './feedItem.css';

class FeedItem extends React.Component {
  render() {
    const { story } = this.props;
    return(
      <div className='feed_item'>
        <div className='feed_item_score_container'>
          <span>{ story.score }</span>
        </div>
        <a className='feed_item_title' href={ story.url }>
          { story.title } <small>({ story.host })</small>
        </a>
      </div>
    );
  }
}

export default FeedItem;