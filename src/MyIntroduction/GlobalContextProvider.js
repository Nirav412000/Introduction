import React, { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

export function GlobalContextStore() {
    return useContext(GlobalContext);
}

function GlobalContextProvider({children}){
    const [currentTab, setCurrentTab] = useState("home");
    const changeTab = (tab) => {
        setCurrentTab(tab);
    }

    return(
        <GlobalContext.Provider value={{currentTab, changeTab}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;
