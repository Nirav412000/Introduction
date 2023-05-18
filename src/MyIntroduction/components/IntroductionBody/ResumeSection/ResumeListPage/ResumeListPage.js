import React from "react";
import "./ResumeListPage.css";
import ExperianceDetailsCard from "./ExperianceDetailsCard";
import { DesktopIconV2 } from "MyIntroduction/SvgComponents";
import _ from "lodash";

function ResumeListPage(props) {
    const { listDetails } = props;
    const { listTitle, listLogo, listCards } = listDetails;

    return (
        <div className="resumeListPageContainer">
            <div className="listHeader">
                {listLogo}
                <div className="listHeaderTitle">
                    {listTitle}
                </div>
            </div>
            <div className="listPageCardsContainer">
                {_.map(listCards, card => {
                    return (
                        <ExperianceDetailsCard cardDetails={card}/>
                    )
                })}
            </div>
        </div>
    )
}

export default ResumeListPage;