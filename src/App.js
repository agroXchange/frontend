import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Product from './components/Product'
import ProductForm from './components/ProductForm'
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1 ClassName="App-title">AgroXchange</h1>
          <Route exact path="/product" component={ Product } />
          <Route exact path="/productform" component={ ProductForm } />
        </div>
      </Router>
    );
  }
}

export default App;
