import React from 'react';
import FeedItem from './FeedItem';
import './feed.css';

class Feed extends React.Component {
  render() {
    const { stories } = this.props;
    return(
      <div className='feed'>
        {
          stories.map(story => <FeedItem story={story} />)
        }
      </div>
    );
  }
}

export default Feed;