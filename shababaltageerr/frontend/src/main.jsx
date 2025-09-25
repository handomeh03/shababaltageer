import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Go from "./context/Gocontext.jsx";
import AuthorProvider from "./context/AuthorContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <AuthorProvider>
      <Go>
        <App />
      </Go>
    </AuthorProvider>
    </BrowserRouter>
  </StrictMode>
);
