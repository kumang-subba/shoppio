import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/shoppio/"}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
