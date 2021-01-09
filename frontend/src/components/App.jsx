import React, { Component } from "react";
import { observer } from "mobx-react";
import '../App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages';
import RootStore from "../models/RootStore";
import {RootStoreProvider} from "../models/RootStoreContext"


const rootStore = RootStore.create()

class App extends Component {
  render() {
    return (
      <div style={{background: "#FFE7E5"}}>
        <RootStoreProvider value={rootStore}>
          <Router>
            <Switch>
              <Route path='/'>
                <Home/>
              </Route>
            </Switch>
          </Router>
        </RootStoreProvider>
      </div>
    );
  }
}

export default observer(App);
