import { Link } from 'react-router-dom';
import logo from '../assets/logo-capa.svg';
import { ChevronsDown, CalendarFold, Trophy, Contact, Clapperboard } from 'lucide-react';
import { useMessage } from '../hooks/useAPI';
import { Megaphone } from 'lucide-react';
import { Trans, useTranslation } from 'react-i18next';


const Hero = () => {

    const { t } = useTranslation();

    return (
        <>
        <div className="hero min-h-[70vh]">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                <div className="max-w-sm">
                    {/*<div className="z-0 bg-primary pointer-events-none absolute start-20 aspect-square w-96 rounded-full opacity-20 blur-3xl"></div>*/}
                    <img src={ logo } className='min-w-72 sm:min-w-96 mt-4 lg:mt-0'/>
                </div>
                <div className='text-center lg:text-left'>
                    <Message />
                    <h1 className="text-5xl font-extrabold font-subtitle">{ t('home.hero.titre') }</h1>
                    <p className="py-6 font-body">
                        <Trans t={t} i18nKey={'home.hero.description'} />
                    </p>
                    <div className="flex flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start">
                        <Link to='/infos' className="btn btn-primary h-14 rounded-box text-md font-bold font px-6 hover:shadow-md">{ t('home.hero.lien-infos') }</Link>
                        <LinksMenu />
                    </div>
                </div>
            </div>
        </div>
        <DownArrow />
        </>
    );
}



const DownArrow = () => {

    const { t } = useTranslation();

    return (
        <>
        <button 
            className='flex w-full flex-col gap-3 items-center text-secondary mb-10 lg:mb-20 mt-6 lg:mt-0' 
            id='scroll-down' 
            onClick={() => window.scrollBy({
                top: document.getElementById("scroll-down").getBoundingClientRect().top,
                behavior:'smooth'
            })}
        >
            { t('home.hero.down-arrow') }
            <ChevronsDown id='down' size={40} strokeWidth={1.5} className='animate-bounce'/>
        </button>
        </>
    );
}



const LinksMenu = () => {

    const { t } = useTranslation();

    return (
        <>
        <ul className="menu menu-horizontal bg-base-200 rounded-box">
            <li className='tooltip tooltip-bottom' data-tip={ t('navbar.inte.calendrier') }>
                <Link to='/calendrier'>
                    <CalendarFold />
                </Link>
            </li>
            <li className='tooltip tooltip-bottom' data-tip={ t('navbar.inte.equipe') }>
                <Link to='/equipe'>
                    <Contact />
                </Link>
            </li>
            <li className='tooltip tooltip-bottom' data-tip={ t('navbar.ecole.videos') }>
                <Link to='/videos'>
                    <Clapperboard />
                </Link>
            </li>
            <li className='tooltip tooltip-bottom' data-tip={ t('navbar.inte.classement') }>
                <Link to='/classement'>
                    <Trophy />
                </Link>
            </li>
        </ul>
        </>
    );
}



const Message = () => {
    const { message, error, isLoading } = useMessage()

    return (
        <>
        { !isLoading && !error && message.display && message.color &&
        <div className={`flex rounded-full flex-row items-center gap-3 max-w-max py-2 pl-3 pr-4 mb-6 mx-auto lg:mx-0 ${message.color=='primary' ? 'bg-primary' : message.color=='secondary' ? 'bg-secondary' : message.color=='accent' ? 'bg-accent' :''} `}>
            <Megaphone className='w-6'/> 
            <span className='text-center'>{ message.message }</span>
        </div>
        }
        </>
    );
}



export default Hero;