import  { useState, useEffect } from 'react';
import confetti from '../assets/emojis/confetti.svg';

const Countdown = () => {

    const [restant, setRestant] = useState(Math.round((new Date(2025, 7, 23, 14, 0, 0, 0).getTime() - new Date().getTime())/1000));

    useEffect(() => {
        const boucle = setInterval(() => {
            setRestant(restant-1);
        }, 1000);
        return () => clearInterval(boucle);
    }, [restant]);

    const days = Math.trunc(restant / 86400);
    const hours = Math.trunc((restant % 86400) / 3600);
    const min = Math.trunc((restant % 3600) / 60);
    const sec = Math.trunc(restant % 60);

    if (days >= 0) return (
        <>
        <div className="card p-2 bg-secondary max-w-fit mx-auto my-2 hidden md:flex">
            <span className="countdown mx-2">
                <img className="h-4 w-4" src={ confetti }/>&nbsp;
                Début de l&apos;intégration dans&nbsp;
                {days < 100 && (<span className="mr-1" style={{"--value": days }}></span>)}
                {days >= 100 && (<span>days&nbsp;</span>)}jour{days>1 && "s"},&nbsp;
                <span className="mr-1" style={{"--value": hours }}></span>heure{hours>1 && "s"},&nbsp;
                <span className="mr-1" style={{"--value": min }}></span>minute{min>1 && "s"} et&nbsp;
                <span className="mr-1" style={{"--value": sec }}></span>seconde{sec>1 && "s"} !
            </span>
        </div>
        </>
    );
    else return (<></>);
}
 
export default Countdown;