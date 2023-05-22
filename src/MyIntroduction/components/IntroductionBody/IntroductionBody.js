import React from "react";
import "./IntroductionBody.css";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import ServiceSection from "./ServiceSection";
import ResumeSection from "./ResumeSection";
import SkillSection from "./SkillSection";

function IntroductionBody() {
    return (
        <div className="bodyContainer">
            <HomeSection />
            <AboutSection />
            <ServiceSection />
            <ResumeSection />
            <SkillSection />
        </div>
    )
}

export default IntroductionBody;