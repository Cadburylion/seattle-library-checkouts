import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Dashboard from './component/dashboard/index.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default App;
