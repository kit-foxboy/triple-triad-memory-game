import React from "react";

function StatusBar(props) {
    return(
        <div>
            <h1>{props.message}</h1>
            <h2>Current Score: {props.currentScore}</h2>
            <h2>Top Score: {props.topScore}</h2>
        </div>
    );
}

export default StatusBar;