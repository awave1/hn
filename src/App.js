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
    const { data: topStories } = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json');
    this.setState({ topStories });
  }

  render() {
    return (
      <div className="App">
        <ul>
          {
            this.state.topStories.map(s => <li>{s}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default App;