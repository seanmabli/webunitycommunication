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
      height={460}
      src="http://127.0.0.1:8080/"
    />
  </React.StrictMode>
);
