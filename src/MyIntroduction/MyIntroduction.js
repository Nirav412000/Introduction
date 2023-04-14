import React from "react";
import "./MyIntroduction.css";
import IntroductionHeader from "./components/IntroductionHeader";
import IntroductionBody from "./components/IntroductionBody";
import IntroductionFooter from "./components/IntroductionFooter";

function MyIntroduction() {
    return (
        <div className="my_introduction">
            <IntroductionHeader />
            <IntroductionBody />
            <IntroductionFooter />
        </div>
    )
}

export default MyIntroduction;