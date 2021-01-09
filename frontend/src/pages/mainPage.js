import React from 'react';
import "./main.css"
import ProgressBar from '@ramonak/react-progress-bar';


const MainPage = () => {
  return (
    <div className = "main">
        <div className = "leftSide">
            <div className = "level">
                <p className = "label"> Level </p>
                <ProgressBar completed={60}/>
            </div>
            <div className = "vitals">
                <p className = "label">Fullness</p>
                <ProgressBar completed={60}/>
                <p className = "label">Cleanliness</p>
                <ProgressBar completed={60}/>
                <p className = "label">Energy</p>
                <ProgressBar completed={60}/>
                <p className = "label">Happiness</p>
                <ProgressBar completed={60}/>
                <p className = "label">Calmness</p>
                <ProgressBar completed={60}/>
                <p className = "label">Health</p>
                <ProgressBar completed={60}/>
            </div>
            <div className = "userToolbar">
                <div className = "icon">Camera</div>
                <div className = "icon">Accessories</div>
            </div>
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