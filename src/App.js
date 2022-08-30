import "./styles/app.sass"
import Routing from "./containers/Routing/";
import LanguageOption from "./containers/LanguageOption";
import MenuContextProvider from "./context/menuContext";
import CategoryContextProvider from "./context/categoryContext";
import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <MenuContextProvider>
        <CategoryContextProvider>
          <LanguageOption />
          <Router>
            <Routing />
          </Router>
        </CategoryContextProvider>
      </MenuContextProvider>
    </div>
  );
}

export default App;