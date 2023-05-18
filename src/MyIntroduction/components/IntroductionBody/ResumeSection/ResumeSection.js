import React from "react";
import "./ResumeSection.css"
import SectionHeader from "MyIntroduction/CommonComponents/SectionHeader";
import ResumeListPage from "./ResumeListPage";

const styles = {
    titleContainerStyle: {
        alignItems: "center"
    }
}

function ResumeSection(props) {
    return (
        <div className="resumeSectionContainer">
            <SectionHeader sectionTitle="Resume" subTitle="Qualifications" titleContainerStyle={styles.titleContainerStyle} />
            <div className="resumeSectionBody">
                <ResumeListPage />
                <ResumeListPage />
            </div>
        </div>
    )
}

export default ResumeSection;