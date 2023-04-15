import React from "react";
import "./IntroductionHeader.css";
import Logo from "MyIntroduction/Assets/Logo.svg";

function IntroductionHeader () {
    return (
        <div className="header_container">
            <div className="header_name">
                <div className="name_logo">
                    <img src={Logo} width={40} height={40}/>
                </div>
                <div className="name_text">
                    Nirav Dadhaniya
                </div>
            </div>
            <div className="header_navigation">
                
            </div>
        </div>
    )
}

export default IntroductionHeader;