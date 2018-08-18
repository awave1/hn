import React from 'react';
import './feedItem.css';

class FeedItem extends React.Component {
  render() {
    const { story } = this.props;
    return(
      <div className='feed_item'>
        <a className='feed_item_url' href={ story.url }>
          <h3 className='feed_item_title'>{ story.title }</h3>
        </a>
      </div>
    );
  }
}

export default FeedItem;