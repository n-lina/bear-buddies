import React, { Component } from "react";
import { observer } from "mobx-react";
import '../App.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages';
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import RootStore from "../models/RootStore";
import {RootStoreProvider} from "../models/RootStoreContext"
import { auth } from "../firebase"
import PrivateRoute from "../components/PrivateRoute"
import LoggedInRoute from "../components/LoggedInRoute"


const rootStore = RootStore.create()

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        this.setState({user});
      }
    })
  }

  render() {
    return (
      <div>
        <RootStoreProvider value={rootStore}>
          <Router>
            <Switch>
              <LoggedInRoute path='/signin' component={SignIn} other="/" exact={true}/>
              <LoggedInRoute path='/signup' component={SignUp} other="/" exact={true}/>
              <PrivateRoute path='/' component={Home} other="/signin" user={this.state.user}/>
            </Switch>
          </Router>
        </RootStoreProvider>
      </div>
    );
  }
}

export default observer(App);
