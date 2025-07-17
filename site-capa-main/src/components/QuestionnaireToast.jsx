import { useState, useEffect } from "react";

const QuestionnaireToast = () => {
    const [displayToast, setDisplayToast] = useState(false);

    useEffect(() => {
        setDisplayToast(true);
        const timeoutId = setTimeout(() => {
            setDisplayToast(false);
        }, 20000)
        return () => {clearTimeout(timeoutId)}
    }, [])

    return (
        <>
        <div className={`transition-all duration-300 toast ${displayToast ? 'block' : 'hidden'}`}>
            <div className="alert bg-primary">
                <span className="font-bold whitespace-normal">Pense à répondre au questionnaire parrain-fillot ;)</span>
            </div>
        </div>
        </>
    );
}

export default QuestionnaireToast;