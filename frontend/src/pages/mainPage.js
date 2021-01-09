import React from 'react';
import "./main.css"
import ProgressBar from '@ramonak/react-progress-bar';


const MainPage = () => {
  return (
    <div className = "main">
        <div className = "leftSide">
            <div className = "level">Level</div>
            <div className = "vitals">
                <ProgressBar completed={60}/>
                <ProgressBar completed={60}/>
                <ProgressBar completed={60}/>
                <ProgressBar completed={60}/>
            </div>
            <div className = "userToolbar">toolbar</div>
        </div>
        <div className = "zdog"> Zdog
        </div>
        <div className = "rightSide">
            <div className = "control">Feed</div>
            <div className = "control">Bathe</div>
            <div className = "control">Play</div>
            <div className = "control">Sleep</div>
            <div className = "control">Breate</div>
            <div className = "control">Pet</div>
        </div>
    </div>
  );
};

export default MainPage;