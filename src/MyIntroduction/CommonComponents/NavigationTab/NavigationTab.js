import React from "react";
import "./NavigationTab.css";
import _ from "lodash";

function NavigationTab(props) {
    const { tabDetail } = props;
    return (
        <div className="label_container">
            {_.get(tabDetail,"label","")}
        </div>
    )
}

export default NavigationTab;