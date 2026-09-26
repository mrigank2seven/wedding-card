import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { site } from "./data/site.config";
import { applyTheme } from "./lib/theme";
import { LanguageProvider } from "./lib/LanguageContext";
import "./index.css";
import App from "./App.jsx";

applyTheme(site);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
);
