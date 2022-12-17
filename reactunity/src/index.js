import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <iframe
      id="test"
      title="test"
      width={900}
      height={600}
      src="https://embedcellmembranetutorial.web.app/"
    />
  </React.StrictMode>
);
