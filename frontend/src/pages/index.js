import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from "./landing"
import MainPage from "./mainPage"
import { FaPaw } from "react-icons/fa";


const Home = () => {
  return (
  <div className="Background">
    <div className="header"> 
      <div style={{height: 4}}></div>
      <div className = "labelbg">
        <p className = "labell"><FaPaw/> bear - buddies <FaPaw/></p>
      </div>
    </div>
    <div className="InnerApp"> 
      <Switch>
        <Route path='/else' component={Landing} />
        <Route path='/main' component={MainPage} />
        <Route path='/' component={Landing} />
      </Switch>
    </div>
  </div>
  );
};

export default Home;
