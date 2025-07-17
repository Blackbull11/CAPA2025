import { useRef, useState, useEffect } from 'react';
import useIsVisible from '../hooks/useIsVisible';

const HighlightedText = ({ children, className }) => {
    const ref = useRef();
    const isVisible = useIsVisible(ref);
    const [showHighlight, setShowHighlight] = useState(false);
    const hasBeenVisible = useRef(false);

    useEffect(() => {
        if (!hasBeenVisible.current && isVisible) {
            hasBeenVisible.current = true;
            setShowHighlight(true);
        }
    }, [isVisible])

    return (
        <>
        <svg xmlns="//www.w3.org/2000/svg" version="1.1" className="svg-filters" style={{"display":"none" }}>
            <defs>
                <filter id="marker-shape">
                <feTurbulence type="fractalNoise" baseFrequency="0 0.15" numOctaves="1" result="warp" />
                <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warp" />
                </filter>
            </defs>
        </svg>
        <h1 ref={ ref } className={`highligth-effect before:transition-all before:ease-in before:duration-700 before:-rotate-1 before:bg-yellow-500 before:delay-500 ${ showHighlight ? "before:opacity-70" : "before:opacity-0 before:w-0" } tracking-wide ${ className }`}>
            { children }
        </h1>
        </>
    )
}

export default HighlightedText;