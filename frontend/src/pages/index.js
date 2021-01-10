import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from "./landing"
import MainPage from "./mainPage"
import { FaPaw } from "react-icons/fa";
import forest1 from "../assets/forest.jpg"
import forest2 from "../assets/fall-forest.jpg"
import forest3 from "../assets/forest1.jpg"
import forest4 from "../assets/forest2.png"
import forest5 from "../assets/night.jpg"
import bear from "../assets/bear.jpg"
import bear2 from "../assets/bear2.jpg"

const Home = () => {
  return (
  <div className="Background" style={{backgroundImage: `url(${forest4})`}}>
    <div className="header"> 
      <div style={{height: 4}}></div>
      <div className = "labelbg">
        <p className = "labell"><FaPaw/> bear - buddies <FaPaw/></p>
      </div>
    </div>
    <div className="InnerApp" style={{backgroundImage: `url(${forest5})`}}> 
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
