import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import AdminPage from './components/admin/LandingPage'
import PendingPage from './components/admin/PendingPage'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TransactionsPage from './components/admin/TransactionsPage'

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <Router>
        <div className="App">
        <Route exact path="/admin" component={AdminPage} />
        <Route exact path="/admin/pending" component={PendingPage} />
        <Route exact path="/admin/transactions" component={TransactionsPage} />
        </div>
      </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
