import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import SignupPage from './components/signup/SignupPage'

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/signup" component={SignupPage} />
        </div>
      </Router>
    );
  }
}

export default App;
