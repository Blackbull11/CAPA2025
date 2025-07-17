import { useLocation, Navigate } from "react-router-dom";
import { AlertContext } from "../contexts/AlertContext";
import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";

const WrongRoute = () => {
    const { throwAlert } = useContext(AlertContext);
    const { pathname } = useLocation();

    const { t } = useTranslation();

    useEffect(() => {
        throwAlert( t('alerts.wrong-route', {pathname: pathname}) );
    }, [throwAlert, pathname, t])
    
    return (<Navigate to='/' />)
}

export default WrongRoute;