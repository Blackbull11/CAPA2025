import { useRef, useState } from "react";
import HighlightedText from "../components/HighlightedText";
import ScrollToTop from "../components/ScrollToTop";
import assos from '../data/list-assos';



const Assos = () => {

    const listeBde = ['capa', 'brasseurs', 'imternational', 'egalimt', 'air', 'cameleon', 'ingecitoyen', 'sobrimt', 'meca', 'robotique', 'cotrad', 'imtalks','imterstellar'];
    const listeBda = ['artelier', 'video', 'imtremplin', 'theatre', 'dance', 'oeno', 'photo', 'dj', 'mine', 'cuisine', 'orchestre', 'poker', 'cine', 'chorale'];
    const listeBds = ['cartel', 'maritimt', 'monkesport', 'rugby', 'ultra', 'weski', 'chessmate', 'pompims', 'irunmines', 'imtrail', 'minotaure'];
    const listeBdh = ['telethon', 'onlyhuman', 'eurotandem', 'dmc'];

    const [currentAsso, setCurrentAsso] = useState(null);
    const modalAssos = useRef(null);

    const openModal = ( asso ) => {
        setCurrentAsso(asso);
        modalAssos.current.showModal();
    }

    
    return(
        <>
        <ScrollToTop />
        <div className="flex flex-col px-8 w-full max-w-6xl mx-auto mt-12 mb-24 items-center md:items-start gap-8  z-10 relative">
            <HighlightedText className="text-4xl mb-6 before:bg-[#b8c4a6] md:text-5xl text-center font-extrabold font-title mx-auto">Le BDE et ses comités</HighlightedText>
            <Association 
                className="mx-auto"
                asso={ assos['bde'] }
                onClick={() => openModal('bde')}
                big 
            />
            <div className="flex flex-row flex-wrap justify-evenly gap-x-10 gap-y-6">
                { listeBde.map((asso, index) => 
                    <Association key={ index } asso={ assos[asso] } onClick={() => openModal(asso)} />
                )}
            </div>
        </div>
        <div className="flex flex-col px-8 w-full max-w-6xl mx-auto mt-12 mb-24 items-center md:items-start gap-8 z-10 relative">
            <HighlightedText className="text-4xl mb-6 before:bg-[#bd57c7] md:text-5xl text-center font-extrabold font-title mx-auto">Le BDA et ses comités</HighlightedText>
            <Association 
                className="mx-auto"
                asso={ assos['bda'] }
                onClick={() => openModal('bda')}
                big 
            />
            <div className="flex flex-row flex-wrap justify-evenly gap-x-10 gap-y-6">
                { listeBda.map((asso, index) => 
                    <Association key={ index } asso={ assos[asso] } onClick={() => openModal(asso)} />
                )}
            </div>
        </div>
        <div className="flex flex-col px-8 w-full max-w-6xl mx-auto mt-12 mb-24 items-center md:items-start gap-8  z-10 relative">
            <HighlightedText className="text-4xl mb-6 before:bg-[#8b1eed] md:text-5xl text-center font-extrabold font-title mx-auto">Le BDS et ses comités</HighlightedText>
            <Association 
                className="mx-auto"
                asso={ assos['bds'] }
                onClick={() => openModal('bds')}
                big 
            />
            <div className="flex flex-row flex-wrap justify-evenly gap-x-10 gap-y-6">
                { listeBds.map((asso, index) => 
                    <Association key={ index } asso={ assos[asso] } onClick={() => openModal(asso)} />
                )}
            </div>
        </div>
        <div className="flex flex-col px-8 w-full max-w-6xl mx-auto mt-12 mb-24 items-center md:items-start gap-8 z-10 relative">
            <HighlightedText className="text-4xl mb-6 before:bg-[#fdb381] md:text-5xl text-center font-extrabold font-title mx-auto">Le BDH et ses comités</HighlightedText>
            <Association 
                className="mx-auto"
                asso={ assos['bdh'] }
                onClick={() => openModal('bdh')}
                big 
            />
            <div className="flex flex-row flex-wrap justify-evenly gap-x-10 gap-y-6">
                { listeBdh.map((asso, index) => 
                    <Association key={ index } asso={ assos[asso] } onClick={() => openModal(asso)} />
                )}
            </div>
        </div>
        <div className="flex flex-col px-8 w-full max-w-6xl mx-auto mt-12 mb-24 items-center md:items-start gap-8 z-10 relative">
            <HighlightedText className="text-4xl mb-6 before:bg-primary md:text-5xl text-center font-extrabold font-title mx-auto">Comités indépendants</HighlightedText>
            <div className="flex flex-row flex-wrap justify-evenly w-full gap-8">
                <Association 
                    className="mx-auto"
                    asso={ assos['jine'] }
                    onClick={() => openModal('jine')}
                    big 
                />
                <Association 
                    className="mx-auto"
                    asso={ assos['gala'] }
                    onClick={() => openModal('gala')}
                    big 
                />
            </div>
        </div>
        <dialog ref={ modalAssos } className="modal modal-bottom sm:modal-middle">
            <div className="modal-box lg:max-w-2xl xl:max-w-4xl z-10 relative">
                { currentAsso && (<>
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <HighlightedText className="font-bold text-xl w-max">{ assos[currentAsso].name }</HighlightedText>
                    <div className="py-4">
                        <img src={`https://hypair.imt-ne.fr/storage/images/entites/${assos[currentAsso].hypairLogoURL}`} className="size-32 float-end rounded-full drop-shadow-md ml-4 mb-1"/>
                        <p className="space-y-2 text-pretty">
                            { assos[currentAsso].description }
                        </p>
                        </div>
                </>)}
            </div>
        </dialog>
        </>
    );
}

const Association = ({ asso, onClick, big, className }) => {
    return (
        <>
        <btn className={`group hover:scale-105 transition-all duration-150 text-center ${className}`} onClick={ onClick }>
            <img src={`https://hypair.imt-ne.fr/storage/images/entites/${asso.hypairLogoURL}`} className={`mx-auto rounded-full ${big ? 'size-64' : 'size-48'} group-hover:drop-shadow-lg`} />
            <div className={`mx-auto mt-2 ${big ? 'text-2xl' : 'text-xl'} font-bold`}>{ asso.name }</div>
        </btn>
        </>
    );
}

export default Assos;