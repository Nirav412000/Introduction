import React from "react";
import "./NavigationTab.css";
import _ from "lodash";

function NavigationTab(props) {
    const { tabDetail, isCurrentTab, changeTab } = props;
    const onClickTab = () => {
        changeTab(_.get(tabDetail,"id",""))
    }
    
    return (
        <div className={isCurrentTab ? "activeLabelContainer": "labelContainer"} onClick={onClickTab}>
            {_.get(tabDetail,"label","")}
        </div>
    )
}

export default NavigationTab;