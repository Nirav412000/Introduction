import React from "react";
import "./IntroductionHeader.css";
import Logo from "MyIntroduction/Assets/Logo.svg";
import NavigationBar from "./NavigationBar";

function IntroductionHeader () {
    return (
        <div className="headerContainer">
            <div className="headerName">
                <div className="nameLogo">
                    <img src={Logo} width={40} height={40} alt="Logo"/>
                </div>
                <div className="nameText">
                    Nirav Dadhaniya
                </div>
            </div>
            <NavigationBar />
        </div>
    )
}

export default IntroductionHeader;