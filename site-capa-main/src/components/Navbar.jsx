import logo from '../assets/tete-logo-capa.svg'
import languages from '../lang'
import { Link } from 'react-router-dom';
import { Menu, ChevronDown, BookMarked, Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { UsersRound } from 'lucide-react';
import links from '../data/links';
import { useEffect, useState } from 'react';

const Navbar = () => {

    const { t, i18n } = useTranslation();

    const [indicatorQuestionnaire, setIndicatorQuestionnire] = useState(false);

    useEffect(() => {
        setIndicatorQuestionnire(true);
        const timeoutId = setTimeout(() => {
            setIndicatorQuestionnire(false);
        }, 20000)
        return () => {clearTimeout(timeoutId)}
    }, [])

    

    return (
        <>
        <nav className="navbar bg-gradient-to-b from-base-100 backdrop-blur-md bg-opacity-75 sticky top-0 shadow-sm z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                        <Menu className="h-8 w-8" />
                    </div>
                    {/* Menu mobile */}
                    <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='font-bold sm:hidden'><Link to='/'>{ t('navbar.accueil') }</Link></li>
                        <li className='font-bold'><Link to='/infos'>{ t('navbar.infos') }</Link></li>
                        <li>
                            <span className='menu-title'>{ t('navbar.ecole.section') }</span>
                            <ul className="p-2">
                                <li><Link to='/videos'>{ t('navbar.ecole.videos') }</Link></li>
                                <li><Link to='/douai'>{ t('navbar.ecole.douai') }</Link></li>
                                <li><Link to='/assos'>{ t('navbar.ecole.assos') }</Link></li>
                            </ul>
                        </li>
                        <li>
                            <span className='menu-title'>{ t('navbar.inte.section') }</span>
                            <ul className="p-2">
                                <li><Link to='/calendrier'>{ t('navbar.inte.calendrier') }</Link></li>
                                <li><Link to='/equipe'>{ t('navbar.inte.equipe') }</Link></li>
                                <li><Link to='/classement'>{ t('navbar.inte.classement') }</Link></li>
                                <li><Link to='/wei'>{ t('navbar.inte.wei') }</Link></li>
                            </ul>
                        </li>
                        <li className='font-bold md:hidden'><Link to='/contact'>{ t('navbar.contact') }</Link></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-2xl font-title hidden sm:flex">
                    <img className="h-8 mr-2" src={ logo }/>
                    CAPA 2025
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex gap-1">
                {/* Menu ordi */}
                <Link to='/infos' tabIndex="0" className="btn btn-ghost rounded-btn">{ t('navbar.accueil') }</Link>
                <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn btn-ghost rounded-btn">
                        { t('navbar.ecole.section') }
                        <ChevronDown className='h-4 w-4 opacity-60'/>
                    </div>
                    <ul tabIndex="0" className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-40 mt-4">
                        <li><Link to='/videos'>{ t('navbar.ecole.videos') }</Link></li>
                        <li><Link to='/douai'>{ t('navbar.ecole.douai') }</Link></li>
                        <li><Link to='/assos'>{ t('navbar.ecole.assos') }</Link></li>
                    </ul>
                </div>
                <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn btn-ghost rounded-btn">
                        { t('navbar.inte.section') }
                        <ChevronDown className='h-4 w-4 opacity-60'/>
                    </div>
                    <ul tabIndex="0" className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-30 mt-4">
                        <li><Link to='/calendrier'>{ t('navbar.inte.calendrier') }</Link></li>
                        <li><Link to='/equipe'>{ t('navbar.inte.equipe') }</Link></li>
                        <li><Link to='/classement'>{ t('navbar.inte.classement') }</Link></li>
                        <li><Link to='/wei'>{ t('navbar.inte.wei') }</Link></li>
                    </ul>
                </div>

            </div>
            <div className="navbar-end gap-1">
                <div className='relative tooltip tooltip-bottom' data-tip={ t('navbar.questionnaire') }>
                    <a className="relative btn btn-ghost rounded-btn" href={ links.questionnaireParrainFillot } target='blank'>
                        <UsersRound strokeWidth={2.2} />
                    </a>
                    <span className={`absolute top-0 right-0 flex h-3 w-3 ${indicatorQuestionnaire ? 'block' : 'hidden'}`}>
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-90"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                </div>
                <div className='tooltip tooltip-bottom' data-tip={ t('navbar.guide') }>
                    <a className="btn btn-ghost rounded-btn" href={ i18n.language=='en' ? links.meudianGuide : links.guideMeudien } target='blank'>
                        <BookMarked />
                    </a>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex="0" role="button" className="flex flex-row btn btn-ghost rounded-btn flex-nowrap">
                        <Languages />
                        <ChevronDown className='h-4 w-4 opacity-60'/>
                    </div>
                    <LanguageMenu />
                </div>
                <Link to='/contact' className="btn btn-secondary hidden md:inline-flex">{ t('navbar.contact') }</Link>
            </div>
        </nav>
        </>
    );
}


const LanguageMenu = () => {

    const { i18n } = useTranslation();

    const changeLang = (e) => i18n.changeLanguage(e.target.value);

    return (
        <>
        <ul tabIndex="0" className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-min-content mt-4">
            { languages.map(({ code, label, flag }) => 
                <li key={ code } >
                    <button onClick={ changeLang } value={ code }>
                        <img className="min-w-5 min-h-5" src={ flag }/>
                        { label }
                    </button>
                </li>
            )}
        </ul>
        </>
    )
}
 
export default Navbar;