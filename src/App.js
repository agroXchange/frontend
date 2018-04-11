import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import AdminPage from './components/admin/LandingPage'
import PendingPage from './components/admin/PendingPage'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TransactionsPage from './components/admin/TransactionsPage'

import Product from './components/Product'
import ExampleTranslation from './components/ExampleTranslation'
//import OrderList from './components/OrderList'

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
            <button onClick={() => changeLanguage("es")}><img className="LanguageDetector" src="https://lipis.github.io/flag-icon-css/flags/4x3/es.svg" /></button>
            <button onClick={() => changeLanguage("en")}><img className="LanguageDetector" src="https://lipis.github.io/flag-icon-css/flags/4x3/gb.svg" /></button>
            <Route exact path="/admin" component={AdminPage} />
            <Route exact path="/admin/transactions" component={TransactionsPage} />
            <Route exact path="/admin/pending" component={PendingPage} />
            <h1 className="App-title">AgroXchange</h1>
            <Route exact path="/product" component={ Product } />
            <Route exact path="/translation" component={ ExampleTranslation } />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default translate("translations")(App)
