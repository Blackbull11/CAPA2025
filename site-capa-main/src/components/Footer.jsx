import logo from '../assets/logo-capa.svg';
import { Instagram, Youtube, Cloud } from 'lucide-react';
import imtDark from '../assets/imt/imt-dark.png';
import imtLight from '../assets/imt/imt-light.png';
import blueHeart from '../assets/emojis/blue-heart.svg';
import lightBlueHeart from '../assets/emojis/light-blue-heart.svg';
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';
import { useTranslation, Trans } from 'react-i18next';

const ThemeController = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const darkTheme = (theme == 'capa2025-dark');

    const handleChange = (e) => 
        setTheme(e.target.checked ? 'capa2025-dark' : 'capa2025-light');

    return (
        <label className="swap swap-flip">
            <input type="checkbox" className="theme-controller" defaultChecked={darkTheme} onChange={(e) => handleChange(e)}/>
            <span className="swap-off"><img className='h-5' src={ blueHeart } /></span>
            <span className="swap-on"><img className='h-5' src={ lightBlueHeart } /></span>
        </label>
    );
}


const LogoIMT = () => {
    const { theme } = useContext(ThemeContext);

    const image = (theme == 'capa2025-dark') ? imtLight : imtDark;

    return (
        <img className='h-16 opacity-90' src={ image }></img>
    )
}


const Footer = () => {
    
    const { t } = useTranslation();

    return (
        <>
        <footer className="footer p-10 bg-yellow-300 text-black transition-colors duration-200 ease-in-out">
            
            <aside className='gap-0'>
                <img className="h-[126px]" src={ logo } />
                <p><b className='text-2xl font-title'>CAPA 2025</b></p>
                <p className='flex gap-1'>
                    <span className='opacity-50'>{ t('footer.love') }</span>
                    <ThemeController />
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">{ t('footer.liens-ecole') }</h6> 
                <a className="link link-hover" href='https://isis.imt-nord-europe.fr/'>
                    <Trans t={t} i18nKey={'footer.isis'} />
                </a>
                <a className="link link-hover" href='https://myservices.imt-nord-europe.fr/'>
                    <Trans t={t} i18nKey={'footer.myservices'} />
                </a>
                <a className="link link-hover" href='https://hypair.imt-ne.fr/'>
                    <Trans t={t} i18nKey={'footer.hypair'} />
                </a>
            </nav>
            <nav className='flex justify-between flex-col w-full h-full gap-y-10 md:gap-y-0'>
                <div className='grid gap-1'>
                    <h6 className="footer-title">{ t('footer.reseaux') }</h6> 
                    <div className="grid grid-flow-col gap-6 w-min">
                        <a className='tooltip tooltip-bottom w-min' data-tip='Instagram' href='https://www.instagram.com/capa2024imtne/' target="_blank">
                            <Instagram />
                        </a>
                        {/*<a className='tooltip tooltip-bottom' data-tip='Facebook' href='https://www.facebook.com/people/CAPA-IMT-Nord-Europe/100070338273703/' target="_blank">
                            <Facebook />
                        </a>*/}
                        <a className='tooltip tooltip-bottom w-min' data-tip='YouTube' href='https://www.youtube.com/@capa2025imtne' target="_blank">
                            <Youtube />
                        </a>
                        <a className='tooltip tooltip-bottom w-min' data-tip='HypAIR' href='https://hypair.imt-ne.fr/capa' target="_blank">
                            <Cloud />
                        </a>
                    </div>
                    { t('footer.suis-nous') }
                </div>
                <a className='md:ml-auto' href='https://imt-nord-europe.fr/'>
                    <LogoIMT />
                </a>
            </nav>
        </footer>
        </>
    );
};

export default Footer;