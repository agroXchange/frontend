import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
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
      <Router>
        <div className="App">
          <button onClick={() => changeLanguage("es")}><img className="LanguageDetector" src="https://lipis.github.io/flag-icon-css/flags/4x3/es.svg" /></button>
          <button onClick={() => changeLanguage("en")}><img className="LanguageDetector" src="https://lipis.github.io/flag-icon-css/flags/4x3/gb.svg" /></button>
          <h1 className="App-title">AgroXchange</h1>
          <Route exact path="/product" component={ Product } />
          <Route exact path="/translation" component={ ExampleTranslation } />
        </div>
      </Router>
    );
  }
}

export default translate("translations")(App)
