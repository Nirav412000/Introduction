import React from "react";
import "./ServiceCard.css";

function ServiceCard(props) {
    return (
        <div className="cardContainer">
            <div className="topStone" />
            <div className="cardInnerContainer">
                <div className="cardHeader">
                    Web Development
                </div>
                <div className="cardDetails">
                    I am good at technologies like ReactJS, NodeJS and ExpressJS which are the key pillors of Web Development.
                </div>
            </div>
        </div>
    )
}

export default ServiceCard;