import React from "react";
import "./ServiceSection.css";
import _ from "lodash";
import SectionHeader from "MyIntroduction/CommonComponents/SectionHeader";
import ServiceCard from "./ServiceCard";
import { MobileIcon, WebIcon, DesktopIcon } from "MyIntroduction/SvgComponents";

const SERVICE_CARDS = [
    {
        id: "webDevelopment",
        label: "Web Development",
        description: "I am good at technologies like ReactJS, NodeJS and ExpressJS which are the key pillors of Web Development.",
        icon: <WebIcon fill="orange" width={25} height={25} />
    },
    {
        id: "mobileDevelopment",
        label: "Mobile Development",
        description: "React Native is a popular library to develop mobile app for multi platform support.",
        icon: <MobileIcon fill="orange" width={25} height={25} />
    },
    {
        id: "desktopAppDevelopment",
        label: "Desktop Development",
        description: "To build a desktop software for many different purposes like inventory management, medical shop record keeper, etc",
        icon: <DesktopIcon fill="orange" width={25} height={25} />
    }
]

function ServiceSection(props) {
    return(
        <div className="serviceSectionContainer">
            <SectionHeader sectionTitle="Services" subTitle="What I Offer" />
            <div className="serviceCardContainer">
                {_.map(SERVICE_CARDS, card => <ServiceCard cardDetails={card}/>)}
            </div>
        </div>
    )
}

export default ServiceSection;