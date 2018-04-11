import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import SignupPage from './components/signup/SignupPage'
import AdminPage from './components/admin/LandingPage'
import PendingPage from './components/admin/PendingPage'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Product from './components/Product'
import ExampleTranslation from './components/ExampleTranslation'
//import OrderList from './components/OrderList'
import OrdersPage from './components/admin/OrdersPage'
import OrderListBuyer from './containers/orderList/OrderListBuyer'
import OrderListSeller from './containers/orderList/OrderListSeller'
import NavBar from './components/NavBar'

import './styles/App.css';


class App extends Component {
  render() {


    return (
      <MuiThemeProvider>
        <Router>
          <div className="App">
            <NavBar />
            <h1 className="App-title">AgroXchange</h1>
            <Route exact path="/admin" component={AdminPage} />
            <Route exact path="/admin/pending" component={PendingPage} />
            <Route exact path="/admin/orders" component={OrdersPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/product" component={ Product } />
            <Route exact path="/translation" component={ ExampleTranslation } />
            <Route exact path="/:id/orderlistBuyer" component={OrderListBuyer} />
            <Route exact path="/:id/orderlistSeller" component={OrderListSeller} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App
