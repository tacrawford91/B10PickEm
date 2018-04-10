import React from "react";

const MainHeader = (props) => {
    return (
    <nav className="navbar bg-light">
        <h1 className="navbar-brand">B1G<span className="black">PickEm</span></h1>
        <p className="instructions"> Try your best to click each image only once! If an image is selected twice, the game will reset and you must start at zero.</p>
        <div className="scoreDiv">
            <p className="headerp Score"><strong>Score:</strong> {props.score}</p>
            <p className="headerp topScore"><strong>Top Score:</strong> {props.topScore}</p>
            <div className="messageDiv text-center">
            <p className="headerp gameMessage">{props.gameMessage}</p>
            </div>
        </div>
    </nav> 
    )
};
  
export default MainHeader;
