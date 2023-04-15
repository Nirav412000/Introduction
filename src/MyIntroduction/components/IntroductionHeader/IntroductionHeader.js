import React from "react";
import "./IntroductionHeader.css";
import Logo from "MyIntroduction/Assets/Logo.svg";
import NavigationBar from "./NavigationBar";

function IntroductionHeader () {
    return (
        <div className="header_container">
            <div className="header_name">
                <div className="name_logo">
                    <img src={Logo} width={40} height={40} alt="Logo"/>
                </div>
                <div className="name_text">
                    Nirav Dadhaniya
                </div>
            </div>
            <NavigationBar />
        </div>
    )
}

export default IntroductionHeader;