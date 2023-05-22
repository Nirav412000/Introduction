import React from "react";
import "./ProgressBar.css";

function ProgressBar(props) {

    const { skill } = props;
    const { label, percentage } = skill;
    
    const percentageStyle = { width: `${percentage}%` }

    return (
        <div className="progressBarContainer">
            <div className="progressBarLabel">
                {label}
            </div>
            <div className="progressBarTab">
                <div className="progressBarProgressTab" style={percentageStyle} />
                <div className="progressBarProgressBlock" />
            </div>
        </div>
    )
}

export default ProgressBar;