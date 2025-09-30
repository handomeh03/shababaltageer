import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Go from "./context/Gocontext.jsx";
import AuthorProvider from "./context/AuthorContext.jsx";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./context/UserContext.jsx";
import EventProvider from "./context/EventContext.jsx";
import VolunterProvider from "./context/Volunter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <VolunterProvider>
            <EventProvider>

      <UserProvider>
      <BrowserRouter>
    <AuthorProvider>
      <Go>
        <App />
      </Go>
    </AuthorProvider>
    </BrowserRouter>

    </UserProvider>

    </EventProvider>
    </VolunterProvider>
   
    
    
  </StrictMode>
);
