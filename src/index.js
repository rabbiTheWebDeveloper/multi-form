import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import axios from "axios ";

// axios.defaults.baseURL = "https://career.softitdev.xyz/api/v1/job/";
// axios.defaults.headers.common ["AUTHORIZATION"] = "AUTH_TOKEN";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
    <App /><ToastContainer />
  </React.StrictMode>
);
