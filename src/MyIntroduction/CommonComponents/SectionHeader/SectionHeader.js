import React from "react";
import "./SectionHeader.css";

function SectionHeader(props) {
    const { sectionTitle, subTitle, titleContainerStyle = {} } = props;
    return(
        <div className="titleContainer" style={titleContainerStyle}>
            <div className="title">{sectionTitle}</div>
            <div className="nameTitle">
            <div className="title" style={{opacity: 0, height: 0}}>{sectionTitle}</div>
                {subTitle}
            </div>
        </div>
    )
}

export default SectionHeader;