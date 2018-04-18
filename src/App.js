import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SignupPage from './components/signup/SignupPage'
import AdminPage from './components/admin/LandingPage'
import PendingUserList from './components/admin/PendingUserList'
import PendingUserPage from './components/admin/PendingUserPage'
import ProductsList from './components/admin/ProductsList'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Product from './components/products/Product'
import ExampleTranslation from './components/ExampleTranslation'
import OrdersListPage from './components/admin/OrdersListPage'
import UsersList from './components/admin/UsersList'
import OrderList from './components/orders/OrderList'
import OrderDetail from './components/orders/OrderDetail'
import NavBar from './components/NavBar'
import LoginPage from './components/login/LoginPage'
import ProfilePage from './components/profile/ProfilePage'
import LogoutPage from './components/logout/LogoutPage'
import ResetPasswordPage from './components/password/ResetPasswordPage'
import AddProductContainer from './components/products/AddProductContainer'
import MyProducts from './components/products/MyProducts'
import ProductsPage from './components/products/ProductsPage'
import Dashboard from './components/dashboard/Dashboard'
import Home from './components/default/default'
import { createMuiTheme } from 'material-ui/styles';
import './styles/App.css';

const  theme = createMuiTheme({
  palette: {
    primary: {
      main:'#588D61'
    },
  },
})

class App extends Component {

  render() {
    return (
      <MuiThemeProvider  theme={theme} >
        <Router>
          <div className="App">
            <NavBar />
            <Route exact path="/" component={ Home } />
            <Route exact path="/admin" component={AdminPage} />
            <Route exact path="/admin/pending" component={PendingUserList} />
            <Route exact path="/admin/products" component={ProductsList} />
            <Route exact path="/admin/pending/profiles/:id([0-9]+)" component={PendingUserPage} />
            <Route exact path="/admin/profiles/:id([0-9]+)/orders" component={OrderList} />
            <Route exact path="/admin/profiles/:id([0-9]+)/products" component={MyProducts} />
            <Route exact path="/admin/profiles/:id([0-9]+)" component={ProfilePage} />
            <Route exact path="/admin/orders" component={OrdersListPage} />
            <Route exact path="/admin/orders/:id([0-9]+)" component={OrderDetail} />
            <Route exact path="/admin/users" component={UsersList} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/translation" component={ ExampleTranslation } />
            <Route exact path="/orders" component={OrderList} />
            <Route exact path="/orders/received" component={OrderList} />
            <Route exact path="/orders/:id([0-9]+)" component={OrderDetail} />
            <Route exact path="/products" component={ ProductsPage } />
            <Route exact path="/products/new" component={ AddProductContainer } />
            <Route exact path="/products/:id([0-9]+)" component={ Product } />
            <Route exact path="/profiles/:id([0-9]+)" component={ProfilePage} />
            <Route exact path="/profiles/:id([0-9]+)/products" component={ MyProducts } />
            <Route exact path="/reset-password" component={ ResetPasswordPage } />
            <Route exact path="/dashboard" component={ Dashboard } />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App
