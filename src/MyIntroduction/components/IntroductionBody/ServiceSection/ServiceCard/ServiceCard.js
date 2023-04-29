import React from "react";
import "./ServiceCard.css";
import _ from "lodash";

function ServiceCard(props) {
    const {cardDetails} = props;

    return (
        <div className="cardContainer">
            <div className="topStone">
                <div className="topStoneIcon">
                {_.get(cardDetails,"icon","")}
                </div>
            </div>
            <div className="cardInnerContainer">
                <div className="cardHeader">
                    {_.get(cardDetails,"label","")}
                </div>
                <div className="cardDetails">
                    {_.get(cardDetails,"description","")}
                </div>
            </div>
        </div>
    )
}

export default ServiceCard;