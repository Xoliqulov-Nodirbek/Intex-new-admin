import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './Assets/main.css'
import { BrowserRouter } from "react-router-dom";
import { TokentContext } from "./Context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <TokentContext>
      <App />
    </TokentContext>
  </BrowserRouter>
);
