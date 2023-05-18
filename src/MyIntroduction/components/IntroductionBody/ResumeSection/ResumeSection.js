import React from "react";
import "./ResumeSection.css"
import SectionHeader from "MyIntroduction/CommonComponents/SectionHeader";
import ResumeListPage from "./ResumeListPage";
import { DesktopIconV2, GraduationCap } from "MyIntroduction/SvgComponents";
import _ from "lodash";

const styles = {
    titleContainerStyle: {
        alignItems: "center"
    }
}

const RESUME_SECTION_LIST = [
    {
        listTitle: "My Experiances",
        listLogo: <DesktopIconV2 width={40} height={40} fill={"red"} />,
        listCards: [
            {
                experianceTitle: "Toddle (Software Engineer)",
                experianceDuration: "July, 2021 - December, 2022",
                experianceDescription: "Worked as Software enginner and have responsibility of developing new features with technologies like React.JS and Node.JS"
            },
            {
                experianceTitle: "Toddle (Software Engineer Intern)",
                experianceDuration: "January, 2021 - June, 2021",
                experianceDescription: "Worked as an Software engineer Intern and having responsibility of checking the code consistancy and optimisation."
            },
            {
                experianceTitle: "Infosys (Python Introduction Intern)",
                experianceDuration: "March, 2020 - June, 2020",
                experianceDescription: "Understanding the concept of Python and it's fundamentals with appplication of pythin in ML, DL and AI technologies."
            }
        ]
    },
    {
        listTitle: "My Education",
        listLogo: <GraduationCap width={40} height={40} fill={"red"} />,
        listCards: [
            {
                experianceTitle: "B.Tech in Computer Engineering",
                experianceDuration: "August, 2017 - June, 2021",
                experianceDescription: "Completed B.Tech degree from Nirma University, Ahmedabad with 8.29 CGPA and completed all the courses and subjects in first attempt."
            },
            {
                experianceTitle: "Higher Secondary Education ",
                experianceDuration: "January, 2015 - June, 2017",
                experianceDescription: "Completed 11th and 12th with science stream with 94% in Physics, Chemistry and Mathamatics subjects."
            },
            {
                experianceTitle: "Secondary Education",
                experianceDuration: "March, 2020 - June, 2020",
                experianceDescription: "Completed secondary education till level 10th with 90% with every subjects passed in first attemp."
            }
        ]
    }
]

function ResumeSection(props) {
    return (
        <div className="resumeSectionContainer">
            <SectionHeader sectionTitle="Resume" subTitle="Qualifications" titleContainerStyle={styles.titleContainerStyle} />
            <div className="resumeSectionBody">
                {_.map(RESUME_SECTION_LIST, list => {
                    return (
                        <ResumeListPage listDetails={list}/>
                    )
                })}
            </div>
        </div>
    )
}

export default ResumeSection;