import React from 'react';
import { getTopStories } from '../api/stories';
import Feed from '../components/Feed/Feed';

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
      <Feed stories={ this.state.stories }/>
    )
  }
}

export default MainPage;