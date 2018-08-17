import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Navbar/>
        <Content/>
      </div>
    );
  }
}

export default App;