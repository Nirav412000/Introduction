import React from "react";
import "./IntroductionBody.css";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import ServiceSection from "./ServiceSection";
import ResumeSection from "./ResumeSection";

function IntroductionBody() {
    return (
        <div className="bodyContainer">
            <HomeSection />
            <AboutSection />
            <ServiceSection />
            <ResumeSection />
        </div>
    )
}

export default IntroductionBody;