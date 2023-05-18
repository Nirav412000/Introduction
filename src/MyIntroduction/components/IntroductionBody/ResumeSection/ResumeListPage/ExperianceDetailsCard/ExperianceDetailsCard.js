import React from "react";
import "./ExperianceDetailsCard.css";

function ExperianceDetailsCard (props) {
    return (
        <div className="experianceDetailsCardContainer">
           <div className="experianceDetailsCardPointer" />
           <div className="detailsCard">
                <div className="detailsCardArrow" />
                <div className="detailsCardBody">
                    <div className="detailsCardTitle">
                        Web Development
                    </div>
                    <div className="detailsCardDateContainer">
                        2016-2020
                    </div>
                    <div className="detailsCardDescription">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                    </div>
                </div>
           </div>
        </div>
    )
}

export default ExperianceDetailsCard;