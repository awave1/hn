import React from 'react';
import { getTopStories } from '../api/stories';
import { Feed } from '../components/Feed';

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
      stories: topStories,
    });
  }

  render() {
    const { stories } = this.state;
    return (
      <Feed stories={stories} />
    );
  }
}

export default MainPage;
