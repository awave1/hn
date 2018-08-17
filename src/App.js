import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topStories: [],
    };
  }

  async componentWillMount() {
    try {
      const { data: topStories } = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json');
      this.setState({ topStories });
    } catch (error) {

    }
  }

  render() {
    const topStories = this.state.topStories.length ? this.state.topStories.map(s => <li>{s}</li>) : <li>Nothing</li>
    return (
      <div className="App">
        <ul>
          { topStories }
        </ul>
      </div>
    );
  }
}

export default App;