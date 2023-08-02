import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/NavbarComp.jsx";
import { Provider } from "react-redux";
import StoreKit from "./ReduxToolKit/ReduxStore/StoreKit.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Provider store={StoreKit}>
      <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
