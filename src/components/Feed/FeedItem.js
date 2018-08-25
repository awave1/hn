import React from 'react';
import { Link } from 'react-router-dom';
import './feedItem.css';

class FeedItem extends React.Component {
  render() {
    const { story: { score, title, host, by, since, id, comments, url } } = this.props;
    return(
      <div className='feed_item'>
        <div className='feed_item_score_container'>
          <span>{score}</span>
        </div>
        <div className='feed_item_container'>
          <Link className='feed_item_title' href={url}>
            {title} <small>({host})</small>
          </Link>
          <div className='feed_item_info_container'>
            <small>
              by: {by} | {since} ago | <Link to={`${id}/comments`}>{comments} comments</Link>
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedItem;