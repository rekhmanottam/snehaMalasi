import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import "./index.css";

const rootElement = document.getElementById("root");
createRoot(rootElement).render(<App />);
