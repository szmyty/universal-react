// Application entry point. Sets up global providers and mounts React to the DOM.
import React from "react";
import ReactDOM from "react-dom/client";
import "@universal/styles/app.css";

// Render the root component tree under <div id="root"> in index.html.
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div>Hello World</div>
  </React.StrictMode>
);
