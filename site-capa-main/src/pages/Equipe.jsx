import HighlightedText from '../components/HighlightedText';
import photoLog from '../assets/equipe/log.jpg';
import photoSponso from '../assets/equipe/sponso.png';
import photoWei from '../assets/equipe/wei.jpg';
import photoCom from '../assets/equipe/com.jpg';
import photoAnim from '../assets/equipe/anim.jpg';
import photoBureau from '../assets/equipe/bureau.jpg';
import { useRef, useState } from 'react';
import ScrollToTop from '../components/ScrollToTop';
import equipes from '../data/list-equipe';
import { useTranslation } from 'react-i18next';

// TODO: Ajout titre (tenter fond bleu police subtitle)

const Equipe = () => {

    const { t } = useTranslation();

    return (
        <>
        <ScrollToTop />
        <div className="flex flex-col gap-20 md:gap-28 mt-16 mb-20">
            <SectionEquipe
                title={ t('equipe.bureau.titre') }
                description={ t('equipe.bureau.description') }
                peopleList={ equipes.bureau }
                img={ photoBureau }
            />
            <SectionEquipe
                title={ t('equipe.anim.titre') }
                description={ t('equipe.anim.description') }
                peopleList={ equipes.anim }
                img={ photoAnim }
            />
            <SectionEquipe
                title={ t('equipe.com.titre') }
                description={ t('equipe.com.description') }
                peopleList={ equipes.com }
                img={ photoCom }
            />
            <SectionEquipe
                title={ t('equipe.sponso.titre') }
                description={ t('equipe.sponso.description') }
                peopleList={ equipes.sponso }
                img={ photoSponso }
            />
            <SectionEquipe
                title={ t('equipe.log.titre') }
                description={ t('equipe.log.description') }
                peopleList={ equipes.log }
                img={ photoLog }
            />
            <SectionEquipe
                title={ t('equipe.wei.titre') }
                description={ t('equipe.wei.description') }
                peopleList={ equipes.wei }
                img={ photoWei }
            />
        </div>
        </>
    );
}


const SectionEquipe = ({ title, description, peopleList, img}) => {

    const [displayHighlighter, setDisplayHighlighter] = useState(false);
    const highlightedPerson = useRef(null);
    const higlighter = useRef(null);
    
    return (
        <>
        <div className="lg:flex odd:flex-row even:flex-row-reverse gap-16 max-w-[500px] lg:max-w-6xl mx-auto px-8">
            <div className="lg:w-1/2 flex flex-col gap-8 z-10 relative">
                    <HighlightedText className="text-4xl md:text-5xl text-center font-extrabold font-title mx-auto mb-2">
          { title }
        </HighlightedText>
                
                <img className="lg:hidden w-full rounded-3xl mx-auto" src={ img } alt={`Photo de groupe ${ title }`}/>
                <span className='text-center text-pretty'>{ description }</span>
                <div className='flex flex-col gap-2 w-72 mx-auto'>
                    { peopleList.map((people, index) => (
                        <Personne 
                            key={ index }
                            name={ people.name }
                            job={ people.job ? people.job : null }
                            onMouseOver={() => {
                                setDisplayHighlighter(true);
                                highlightedPerson.current = people;
                            }}
                            onMouseOut={() => setDisplayHighlighter(false)}
                        />
                    ))}
                </div>
            </div>
            <div className='hidden lg:block lg:w-1/2 h-full top-[20%] sticky'>
                <img className={`rounded-3xl transition-all duration-200 ${displayHighlighter ? 'brightness-50' : ''}`} src={ img } alt={`Photo de groupe ${ title }`}/>
                <div 
                    ref={ higlighter }
                    style={highlightedPerson.current && {
                        height: `${highlightedPerson.current.size}%`, 
                        top:`${highlightedPerson.current.position[0]}%`,
                        left: `${highlightedPerson.current.position[1]}%`,
                        opacity: displayHighlighter ? 1 : 0
                    }}
                    className={`absolute opacity-0 rounded-3xl transition-all duration-200 aspect-square z-10 backdrop-brightness-200 tooltip tooltip-bottom tooltip-open tooltip-primary`}
                    data-tip={ highlightedPerson.current != null && highlightedPerson.current.name }
                />
            </div>
        </div>
        </>
    );
}

const Personne = ({ name, job, className, onMouseOver, onMouseOut }) => {

    const { t } = useTranslation();

    return (
        <>
        <div className={`group bg-secondary/20 hover:bg-secondary/40 py-2 px-4 w-full rounded-xl text-left hover:shadow-md hover:shadow-primary/20 outline outline-0 hover:outline-1 outline-primary transition-all duration-75 cursor-pointer inline-flex flex-row justify-center gap-2 ${ className }`} onMouseOver={ onMouseOver } onMouseOut={ onMouseOut }>
            <span className='font-bold'>{ name }</span>
            { job && (
                <>
                <span className="text-neutral-500">-</span>
                <span className="text-neutral-500">{ t(`equipe.job.${job}`) }</span>
                </>
            )}
        </div>
        </>
    );
}

export default Equipe;