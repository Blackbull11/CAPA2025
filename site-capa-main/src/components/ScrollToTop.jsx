import { useEffect } from "react";

const ScrollToTop = () => {

    useEffect(() => window.scrollTo({
        top: 0,
        behavior:'smooth'
    }), [])

    return (
        <></>
    );
}

export default ScrollToTop;