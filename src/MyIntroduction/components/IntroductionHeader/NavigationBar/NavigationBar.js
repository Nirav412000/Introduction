import React from "react";
import "./NavigationBar.css";
import _ from "lodash";
import NavigationTab from "MyIntroduction/CommonComponents/NavigationTab";
import { GlobalContextStore } from "MyIntroduction/GlobalContextProvider";

const HEADER_NAVIGATION_OPTIONS = [
    {
        id: "home",
        label: "Home"
    },
    {
        id: "about",
        label: "About"
    },
    {
        id: "services",
        label: "Services"
    },
    {
        id: "resume",
        label: "Resume"
    },
    {
        id: "portfolio",
        label: "Portfolio"
    },
    {
        id: "reviews",
        label: "Reviews"
    },
    {
        id: "blog",
        label: "Blogs"
    },
    {
        id: "contact",
        label: "Contact"
    }
]

function NavigationBar() {
    const { currentTab, changeTab } = GlobalContextStore();
    
    return (
        <div className="navigation_bar">
            {_.map(HEADER_NAVIGATION_OPTIONS, option => {
                const tabId = _.get(option,"id","");
                return <NavigationTab tabDetail={option} key={tabId} isCurrentTab={tabId == currentTab} changeTab={changeTab} />
            })}
        </div>
    )
}

export default NavigationBar;