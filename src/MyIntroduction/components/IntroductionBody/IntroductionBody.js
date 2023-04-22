import React from "react";
import "./IntroductionBody.css";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import ServiceSection from "./ServiceSection";

function IntroductionBody() {
    return (
        <div className="bodyContainer">
            <HomeSection />
            <AboutSection />
            <ServiceSection />
        </div>
    )
}

export default IntroductionBody;