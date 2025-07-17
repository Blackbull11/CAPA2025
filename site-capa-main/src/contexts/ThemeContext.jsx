import { createContext, useState, useEffect } from "react";
//import tailwindConfig from '../../tailwind.config';

export const ThemeContext = createContext({})


const metaThemeColor = document.querySelector('meta[name="theme-color"]')
const themeList = ['capa2025-light', 'capa2025-dark'];
const themeBgColor = {'capa2025-light': "#f6f8f8", 'capa2025-dark': "#070909"}

export const ThemeProvider = ({ children }) => {
    
    const [theme, setTheme] = useState(() => 
        themeList.includes(localStorage.getItem("theme")) ? 
            localStorage.getItem("theme") : themeList[0]
    );

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute('data-theme', theme);
        metaThemeColor.setAttribute('content', themeBgColor[theme]);
    }, [theme]);
    
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}