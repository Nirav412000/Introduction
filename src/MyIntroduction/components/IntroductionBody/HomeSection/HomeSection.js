import React from "react";
import "./HomeSection.css";
import SocialMediaIcon from "./SocialMediaIcon";
import _ from "lodash";

const iconDetails = [
    {
        id: "facebook",
        url: "https://www.facebook.com/nirav.dadhaniya.52"
    },
    {
        id: "instagram",
        url: "https://www.instagram.com/mr__p.e.r.f.e.ct/"
    },
    {
        id: "twitter",
        url: "https://twitter.com/NiravDadhaniya1"
    },
    {
        id: "linkdin",
        url: "https://www.linkedin.com/in/nirav-dadhaniya-b5b718152/"
    },
    {
        id: "github",
        url: "https://github.com/Nirav412000"
    },
    {
        id: "stopstalk",
        url: "https://www.stopstalk.com/user/profile/NiravDadhaniya"
    },
]

function HomeSection() {
    return (
        <div className="homeSectionContainer">
            <div className="helloContainer">Hello</div>
            <div className="nameContainer">I'm <span className="redNameContainer">Nirav</span> Dadhaniya</div>
            <div className="introContainer">I'm Web Developer</div>
            <div className="mediaContainer">
                {_.map(iconDetails, icon => <SocialMediaIcon icon={icon} key={_.get(icon,"id","")} />)}
            </div>
        </div>
    )
}

export default HomeSection;