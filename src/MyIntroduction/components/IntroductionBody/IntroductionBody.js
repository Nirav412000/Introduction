import React from "react";
import "./IntroductionBody.css";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";

function IntroductionBody() {
    return (
        <div className="bodyContainer">
            <HomeSection />
            <AboutSection />
        </div>
    )
}

export default IntroductionBody;