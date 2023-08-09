import React, { createContext } from "react";

const Tname = createContext();

const App = () => {
    return(
        <Tname.Provider value={"vashishtha"}>

        </Tname.Provider>
    );
};

export default App;
export { Tname };


