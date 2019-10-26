import React from "react";
import ReactDOM from "react-dom";

// Components
import AppNav from "./components/AppNav";

// Styles
import "./styles.css";

function App() {
  return (
    <div className="App">
      <AppNav />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
