import "./styles/app.sass"
import Routing from "./containers/Routing/";
import LanguageOption from "./containers/LanguageOption";
import MenuContextProvider from "./context/menuContext";
import CategoryContextProvider from "./context/categoryContext";
import React, { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <MenuContextProvider>
        <CategoryContextProvider>
          <LanguageOption />
          <Routing />
        </CategoryContextProvider>
      </MenuContextProvider>
    </div>
  );
}

export default App;