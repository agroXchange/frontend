import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1 CLassName="App-title">AgroXchange</h1>
        </div>
      </Router>
    );
  }
}

export default App;
