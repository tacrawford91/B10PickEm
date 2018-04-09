import React from "react";



// class MainHeader extends Component {

//     state = {
//         score: 0,
//         topScore: 0,
//         gameMessage: "Click an Image to begin!"
//     }


//    render() {
//        return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <p className="navbar-brand">B1GPickEm</p>
//             <div className="navbar-nav">
//             <p className="nav-item nav-link gameMessage">Game Message: {this.state.gameMessage}<span className="sr-only">(current)</span></p>
//             <p className="nav-item nav-link Score">Score:{this.state.score}</p>
//             <p className="nav-item nav-link topScore">Top Score: {this.state.topScore}</p>
//             </div>
//         </nav>   
//        )
//    };
// };


const MainHeader = (props) => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <p className="navbar-brand">B1GPickEm</p>
        <div className="navbar-nav">
            <p className="nav-item nav-link gameMessage">Game Message: {props.gameMessage}<span className="sr-only">(current)</span></p>
            <p className="nav-item nav-link Score">Score:{props.score}</p>
            <p className="nav-item nav-link topScore">Top Score: {props.topScore}</p>
    </div>
</nav> 
    )
};

  
export default MainHeader;