import React from "react";
import "./ResumeListPage.css";
import ExperianceDetailsCard from "./ExperianceDetailsCard";
import { DesktopIconV2 } from "MyIntroduction/SvgComponents";

function ResumeListPage(props) {
    return (
        <div className="resumeListPageContainer">
            <div className="listHeader">
                <DesktopIconV2 width={40} height={40} fill={"red"} />
                <div className="listHeaderTitle">
                    My Experiances
                </div>
            </div>
            <div className="listPageCardsContainer">
                <ExperianceDetailsCard />
                <ExperianceDetailsCard />
            </div>
        </div>
    )
}

export default ResumeListPage;