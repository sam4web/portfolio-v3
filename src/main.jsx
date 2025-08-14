import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.jsx";
import "@/assets/styles/main.scss";
import { ThemeProvider } from "@/context/ThemeContext";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (import.meta.env.VITE_NODE_ENV === "production") {
  disableReactDevTools();
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
