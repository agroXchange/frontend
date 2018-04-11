import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import OrderListBuyer from './containers/OrderListBuyer'

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/orderlistBuyer" component={OrderListBuyer} />
        </div>
      </Router>
    );
  }
}

export default App;
