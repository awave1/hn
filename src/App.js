import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';

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
    return (
      <div id="app">
        <Navbar/>
      </div>
    );
  }
}

export default App;