import React from "react";
import "./NavigationBar.css";
import _ from "lodash";
import NavigationTab from "MyIntroduction/CommonComponents/NavigationTab";

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
    return (
        <div className="navigation_bar">
            {_.map(HEADER_NAVIGATION_OPTIONS, option => {
                return <NavigationTab tabDetail={option} />
            })}
        </div>
    )
}

export default NavigationBar;