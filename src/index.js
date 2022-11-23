import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Assets/main.css";
import { BrowserRouter } from "react-router-dom";
import { TokentContext } from "./Context/Context";
import { SiteInfo } from "./Context/SiteInfo";
// import axios from "axios";

// axios.interceptors.request.use((request) => {
//   console.log(request);
// });  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <TokentContext>
      <SiteInfo>
        <App />
      </SiteInfo>
    </TokentContext>
  </BrowserRouter>
);
