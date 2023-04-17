import React from "react";
import "./SectionHeader.css";

function SectionHeader(props) {
    const { sectionTitle, subTitle } = props;
    return(
        <div className="titleContainer">
            <div className="title">{sectionTitle}
                <span className="nameTitle">{subTitle}</span>
            </div>
        </div>
    )
}

export default SectionHeader;