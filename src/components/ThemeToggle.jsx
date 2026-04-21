import React, {useState} from "react";

function ThemeToggle(){
//isDark defines the current value, true or false. setIsDark is the function we call to update that value. useState sets the initial value. It checks if the body already has the "dark-mode" class (which was set in main.jsx) and returns true or false.
    const [isDark, setIsDark] = useState(
        document.body.classList.contains("dark-mode")
    );

//.togle() adds the class if its missing, removes it if its there. 
    const toggleTheme = () => {
        document.body.classList.toggle("dark-mode");
        document.body.classList.toggle("light-mode");
//we are saving the opposite of the current state. If isDark is currently true (dark), save light-mode.
        setIsDark(!isDark);
        localStorage.setItem("theme", isDark ? "light-mode" : "dark-mode"); //saves the user choice in the browser memory
    }
    return (
        <button className="theme-toggle" onClick={toggleTheme}>
            {isDark ? "☀️" : "🌙"}
        </button>
    );
} export default ThemeToggle;