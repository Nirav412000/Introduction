import React from "react";
import "./SkillSection.css";
import SectionHeader from "MyIntroduction/CommonComponents/SectionHeader";
import ProgressBar from "MyIntroduction/CommonComponents/ProgressBar";
import _ from "lodash";

const styles = {
    titleContainerStyle: {
        alignItems: "center"
    }
}

const SKILL_SET = [
    {
        label: "HTML",
        percentage: 80
    },
    {
        label: "CSS",
        percentage: 70
    },
    {
        label: "JavaScript",
        percentage: 80
    },
    {
        label: "Java",
        percentage: 70
    },
    {
        label: "React",
        percentage: 90
    },
    {
        label: "React Native",
        percentage: 60
    }
]

function SkillSection (props) {
    return (
        <div className="skillSectionContainer">
            <SectionHeader sectionTitle="Skills" subTitle="My skills" titleContainerStyle={styles.titleContainerStyle} />
            <div className="skillSectionBody">
                {_.map(SKILL_SET, skill => {
                    return (
                        <ProgressBar skill={skill}/>
                    )
                })}
            </div>
        </div>
    )
}

export default SkillSection;