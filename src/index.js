import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SplitScreenApp from "./SplitscreenApp";
import Lists from "./Lists";
import ModalApp from "./ModalApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SplitScreenApp />
    <Lists />
    <ModalApp />
  </React.StrictMode>
);
