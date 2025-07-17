import { useTranslation } from "react-i18next";
import ScrollToTop from "../components/ScrollToTop";
import calendrier from "../data/list-calendrier";
import HighlightedText from "../components/HighlightedText";
import { useState } from "react";
import { ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";

const Calendrier = () => {

    const { t } = useTranslation();
    const [currentModalDay, setCurrentModalDay] = useState(null);
    const colorMap = {
        accent: 'bg-[#fde047]',    // jaune utilisé dans le site
        primary: 'bg-[#8cdfed]',   // bleu clair
        secondary: 'bg-[#ccc]',
    };
    const openModal = (day) => {
        setCurrentModalDay(day);
        document.getElementById(`modal_day`).showModal();
    }
    
    return (
        <>
        <ScrollToTop />
        <div className="mt-10 mb-20 max-w-xl lg:max-w-7xl mx-auto">
            <HighlightedText className='text-3xl mb-12 md:text-5xl text-center font-extrabold font-title w-max mx-auto'>{ t('calendrier.titre') }</HighlightedText>
            <div className="hidden lg:grid lg:grid-cols-7 gap-4 mb-2 mx-6">
                <p className="font-subtitle font-extrabold text-center">{ t('calendrier.jours.lundi') }</p>
                <p className="font-subtitle font-extrabold text-center">{ t('calendrier.jours.mardi') }</p>
                <p className="font-subtitle font-extrabold text-center">{ t('calendrier.jours.mercredi') }</p>
                <p className="font-subtitle font-extrabold text-center">{ t('calendrier.jours.jeudi') }</p>
                <p className="font-subtitle font-extrabold text-center">{ t('calendrier.jours.vendredi') }</p>
                <p className="font-subtitle font-extrabold text-center">{ t('calendrier.jours.samedi') }</p>
                <p className="font-subtitle font-extrabold text-center">{ t('calendrier.jours.dimanche') }</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 mx-6">
                { calendrier.map((day, index) => (
                    day ?
                        <div key={index} className="flex flex-col justify-start bg-base-200 rounded-lg p-2 gap-2 hover:scale-105 lg:hover:scale-110 hover:shadow-xl lg:hover:shadow-2xl transition-all duration-150 cursor-pointer" onClick={ () => openModal(day) }>
                            <div className="flex flex-row gap-x-1 lg:gap-x-2 items-start">
                                <p className="text-md font-semibold lg:hidden">{ t(`calendrier.jours.${day.jour}`) }</p>
                                <p className="text-md lg:text-lg font-semibold">{day.date}</p>
                                <p className="text-md lg:text-sm font-semibold lg:font-medium">{ t(`calendrier.mois.${day.mois}`) }</p>
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                { day.events.map((event, index) => (
                                    <div key={index} className={`rounded-md p-1 ${colorMap[event.color]}`}>
                                        <p className='text-sm font-medium'>{ event.nom }</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    : <div key={index} className="hidden lg:block bg-base-300 rounded-lg"/>
                ))}
            </div>
            <div className="mt-14 mx-6 bg-secondary/35 px-7 pb-6 pt-5 rounded-2xl">
                <div className="flex flex-row justify-between items-center mb-3">
                    <div className="text-lg font-medium inline-flex gap-3 items-center">
                        <ShieldAlert className="w-6 shrink-0" size={20} strokeWidth={2.3}/>
                        Petit message pour toi fillot.te !
                    </div>
                    <div className="flex-row gap-4 z-10 hidden lg:flex">
                        <Link to='/equipe' className="btn btn-primary btn-sm">Découvrir l&apos;équipe</Link>
                        <Link to='/contact' className="btn btn-primary btn-sm">Découvrir les référents VSS</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-neutral/80 text-pretty"> 
                    <p>L&apos;intégration, c&apos;est 3 semaines de folie où tu vas pouvoir rencontrer les gens de ta promo et t&apos;habituer à un nouveau lieu, qui sera ton chez toi pendant longtemps. C&apos;est important que tu te sentes bien à Douai ! Et c&apos;est là qu&apos;intervient cette magnifique équipe CAPA.
                    Ces 42 personnes seront présentes pendant toute l&apos;intégration, à chaque soirée ; tu seras bien encadré.e ! <Link to='/equipe' className="underline decoration-primary/75 decoration-2 hover:decoration-4 font-medium">Tu pourras faire connaissance avec eux mais également les voir en cas de pépin : les repérer, c&apos;est facile, ils sont tous habillés en bleu !</Link></p>
                    <p>D&apos;ailleurs, il y aura aussi pendant toute l&apos;intégration des responsables et référents VSS <em>(Violences Sexistes et Sexuelles)</em>.
                    Les responsables, ce sont des étudiants qui sont présents à chaque soirée. Faciles à repérer grâce à leur brassard jaune, ces étudiants savent gérer les situations de VSS grâce à la formation qu&apos;ils ont suivi ! <Link to='/contact' className="underline decoration-primary/75 decoration-2 hover:decoration-4 font-medium">Les référents, ce sont soit des étudiants, soit des membres de l&apos;administration, n&apos;hésite pas à les appeler en cas de besoin.</Link></p>
                </div>
                <div className="flex flex-row flex-wrap w-full justify-center gap-4 z-10 mt-4 lg:hidden">
                    <Link to='/equipe' className="btn btn-primary btn-sm">Découvrir l&apos;équipe</Link>
                    <Link to='/contact' className="btn btn-primary btn-sm">Découvrir les référents VSS</Link>
                </div>
            </div>
        </div>
        <InfosJour day={ currentModalDay } />
        </>
    );
}


const InfosJour = ({ day }) => {

    const { t } = useTranslation();

    return (
        <>
        <dialog id={`modal_day`} className="modal modal-bottom sm:modal-middle">
            { day && <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div className="flex flex-col items-center mb-8">
                    <p className="font-title text-4xl">{ t(`calendrier.jours.${day.jour}`) }</p>
                    <p className="font-title text-7xl">{ day.date }</p>
                    <p className="font-title text-4xl">{ t(`calendrier.mois.${day.mois}`) }</p>
                </div>
                <div className="flex flex-col gap-6">
                    { day.events.map((event, index) => (
                        <div key={ index } className="flex flex-row gap-2">
                            <div className={`h-auto w-1 rounded-xl shrink-0 ${event.color === 'accent' ? 'bg-[#fde047]' : event.color === 'primary' ? 'bg-[#8cdfed]' : 'bg-[#ccc]'}`} />
                            <div>
                                <div className="flex flex-row gap-3 mb-1">
                                    <p className='text-lg font-extrabold'>{ event.nom }</p>
                                    <p className='text-lg text-gray-400 font-medium'>- { t(`calendrier.moment.${event.moment}`) }</p>
                                </div>
                                <p className='text-md font-medium text-pretty'>{ event.description }</p>
                            </div>
                        </div>
                    ))}
                </div>
                { day.img && <div className="w-full mt-6 text-center">
                    <img src={day.img} className="rounded-3xl w-full max-w-lg mx-auto p-2"/>
                    { day.imgDescription && <span className="text-gray-400 text-sm">{ day.imgDescription }</span>} 
                </div>}
            </div>
            }
        </dialog>
        </>
    );
}


export default Calendrier;