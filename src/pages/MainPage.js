import React from 'react';
import { getTopStories } from '../api/stories';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
    };
  }

  async componentDidMount() {
    const topStories = await getTopStories();
    this.setState({
      stories: topStories
    });
  }

  render() {
    return(
      <ul>
        {
          this.state.stories.map(story => <li key={story.id}>{story.title}</li>)
        }
      </ul>
    )
  }
}

export default MainPage;