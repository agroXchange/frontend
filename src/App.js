import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import SignupPage from './components/signup/SignupPage'
import AdminPage from './components/admin/LandingPage'
import PendingPage from './components/admin/PendingPage'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ProductsList from './components/products/ProductsList'
import Product from './components/products/Product'
import ExampleTranslation from './components/ExampleTranslation'
import OrdersPage from './components/admin/OrdersPage'
import UsersList from './components/admin/UsersList'
import OrderListBuyer from './containers/orderList/OrderListBuyer'
import OrderListSeller from './containers/orderList/OrderListSeller'
import NavBar from './components/NavBar'
import LoginPage from './components/login/LoginPage'
import ProductForm from './components/products/ProductForm'
import LogoutPage from './components/logout/LogoutPage'
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div className="App">
            <NavBar />
            <Route exact path="/admin" component={AdminPage} />
            <Route exact path="/admin/pending" component={PendingPage} />
            <Route exact path="/admin/orders" component={OrdersPage} />
            <Route exact path="/admin/users" component={UsersList} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/translation" component={ ExampleTranslation } />
            <Route exact path="/:id/orderlistBuyer" component={OrderListBuyer} />
            <Route exact path="/:id/orderlistSeller" component={OrderListSeller} />
            <Route exact path="/products" component={ ProductsList } />
            <Route exact path="/product" component={ Product } />
            <Route exact path="/orderlistBuyer" component={OrderListBuyer} />
            <Route exact path="/productform" component={ ProductForm } />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App
