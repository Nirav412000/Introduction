import React from "react";
import "./ExperianceDetailsCard.css";

function ExperianceDetailsCard (props) {
    const { cardDetails } = props;
    const { experianceTitle, experianceDuration, experianceDescription} = cardDetails;

    return (
        <div className="experianceDetailsCardContainer">
           <div className="experianceDetailsCardPointer" />
           <div className="detailsCard">
                <div className="detailsCardArrow" />
                <div className="detailsCardBody">
                    <div className="detailsCardTitle">
                       {experianceTitle}
                    </div>
                    <div className="detailsCardDateContainer">
                        {experianceDuration}
                    </div>
                    <div className="detailsCardDescription">
                        {experianceDescription}                    
                    </div>
                </div>
           </div>
        </div>
    )
}

export default ExperianceDetailsCard;