import React from "react";
import "./MyIntroduction.css";
import IntroductionHeader from "./components/IntroductionHeader";
import IntroductionBody from "./components/IntroductionBody";
import IntroductionFooter from "./components/IntroductionFooter";
import GlobalContextProvider from "./GlobalContextProvider";

function MyIntroduction() {
    return (
        <GlobalContextProvider>
            <div className="my_introduction">
                <IntroductionHeader />
                <IntroductionBody />
                <IntroductionFooter />
            </div>
        </GlobalContextProvider>
    )
}

export default MyIntroduction;