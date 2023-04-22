import React from "react";
import "./ServiceSection.css";
import SectionHeader from "MyIntroduction/CommonComponents/SectionHeader";
import ServiceCard from "./ServiceCard";

function ServiceSection(props) {
    return(
        <div className="serviceSectionContainer">
            <SectionHeader sectionTitle="Services" subTitle="What I Offer" />
            <div className="serviceCardContainer">
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
        </div>
    )
}

export default ServiceSection;