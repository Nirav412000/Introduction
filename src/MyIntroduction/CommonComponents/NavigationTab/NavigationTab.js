import React from "react";
import "./NavigationTab.css"

function NavigationTab(props) {
    const { label } = props;
    return(
        <div className="label_container">
            {label}
        </div>
    )
}

export default NavigationTab;