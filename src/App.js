import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Product from './components/Product'
//import OrderList from './components/OrderList'
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1 ClassName="App-title">AgroXchange</h1>
          <Route exact path="/product" component={ Product } />
        </div>
      </Router>
    );
  }
}

export default App;
