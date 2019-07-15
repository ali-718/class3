import React, { Component } from 'react';
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom'
import Home from './screens/Home';
import Cart from './screens/Cart';
import {Provider} from 'react-redux';
import store from './store';
import Login from './screens/Login';
import { GET_VALUE } from './actions/type';


export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/login" component={Login} />
            <Route component={Login} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}
