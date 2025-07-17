import { createContext, useState, useEffect } from "react";
//import tailwindConfig from '../../tailwind.config';

export const AlertContext = createContext({})

export const AlertProvider = ({ children }) => {
    
    const [alert, throwAlert] = useState(null);
    const [displayAlert, setDisplayAlert] = useState(false);
    

    useEffect(() => {if (alert) {
        setDisplayAlert(true);
        const timeoutId = setTimeout(() => {
            setDisplayAlert(false);
        }, 7000);
        return () => clearTimeout(timeoutId);
    }}, [alert])
    
    
    return (
        <AlertContext.Provider value={{alert, displayAlert, throwAlert}}>
            {children}
        </AlertContext.Provider>
    );
}