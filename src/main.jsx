import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import { ModeToggle } from "@/components/mode-toggle.jsx";
import { ThemeProvider } from "@/components/theme-provider";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <ModeToggle />
    <App />
  </ThemeProvider>,
);
