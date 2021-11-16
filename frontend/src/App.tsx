import React from "react";
import { Router } from "./routes";
import GlobalStyles from "./styles/global";
import "./App.css";

function App(): JSX.Element {
  return (
    <div className="App">
      <Router />
      <GlobalStyles />
    </div>
  );
}

export default App;
