import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { PagesProvider } from "./hooks/usePages";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <PagesProvider>
        <App />
      </PagesProvider>
    </Router>
  </React.StrictMode>
);
