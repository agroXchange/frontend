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
import NavBar from './components/NavBar'

import './styles/App.css';
import {translate} from "react-i18next"

class App extends Component {
  render() {

    const { i18n } = this.props

    const changeLanguage = lng => {
      i18n.changeLanguage(lng)
    }

    return (
      <MuiThemeProvider>
        <Router>
          <div className="App">
            <NavBar />
            <button onClick={() => changeLanguage("es")}><img className="LanguageDetector" src="https://lipis.github.io/flag-icon-css/flags/4x3/es.svg" /></button>
            <button onClick={() => changeLanguage("en")}><img className="LanguageDetector" src="https://lipis.github.io/flag-icon-css/flags/4x3/gb.svg" /></button>
            <h1 className="App-title">AgroXchange</h1>
            <Route exact path="/admin" component={AdminPage} />
            <Route exact path="/admin/pending" component={PendingPage} />
            <Route exact path="/admin/orders" component={OrdersPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/product" component={ Product } />
            <Route exact path="/translation" component={ ExampleTranslation } />
            <Route exact path="/:id/orderlistBuyer" component={OrderListBuyer} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default translate("translations")(App)
