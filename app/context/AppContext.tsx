import React from "react";
import useWindowSize from "../hooks/useWindowSize";

const AppContext = React.createContext({ windowWidth: 0, windowHeight: 0 });

interface AppDataProviderProps {}

const AppDataProvider: React.FC<AppDataProviderProps> = (props) => {
  const windowDimensions = useWindowSize();

  return (
    <AppContext.Provider value={windowDimensions}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppDataProvider };
