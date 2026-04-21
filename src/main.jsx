import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const Main = () => {
    useEffect(() => {
//checking if the user's operating system is set to dark        
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
        const savedTheme = 
        localStorage.getItem("theme") ||
        (prefersDarkScheme.matches ? "light-mode": "light-mode"); //if dark matches, use dark-mode, otherwise use light-mode
        document.body.classList.add(savedTheme); //adds the mode chosen as a CSS class to the <body> tag
//updating the class accordingly with real time updates. The [] means "only run this once on load, not repeteadly"        
        prefersDarkScheme.addEventListener("change", (e) =>{
            document.body.classList.toggle("dark-mode", e.matches);
            document.body.classList.toggle("light-mode", !e.matches);
        });
    }, []);
    return <App />;
};
//replacing our empty <div id="root"> in index.html for our new dynamic code
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Main />
  </StrictMode>
);
