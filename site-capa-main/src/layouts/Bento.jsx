import { Link } from 'react-router-dom';
import { ArrowRight, PersonStanding, BookMarked, LandPlot, Dribbble } from 'lucide-react';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import HighlightedText from '../components/HighlightedText';
import { useTranslation } from 'react-i18next';
import links from '../data/links';



const Card = ({ link, IconComponent, iconSize, title, description, linkText }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <>
        <Link to={ link } className={`group card cursor-pointer outline outline-1 outline-yellow-300 hover:outline-2 col-span-1 bg-base-100 ${(theme != 'capa2025-dark') ? "shadow-md hover:shadow-lg shadow-yellow-300 hover:shadow-yellow-300" : ""} transition-[25ms]`}>
                    <div className="card-body pointer-events-none">
                        <div>
                            <h2 className="card-title flex items-start mb-2">
                                <div className='h-6 w-6 mt-[1px] flex justify-center items-center bg-yellow-100 border border-accent/40 rounded group-hover:shadow-md group-hover:shadow-yellow-300'>
                                    <IconComponent size={iconSize} className='stroke-primary' />
                                </div>
                                { title }
                                </h2>
                            <p>{ description }</p>
                        </div>
                        <p className='group-hover:ml-2 transition-all ease-in-out transition-200'>
                            <ArrowRight size={16} className='h-[16px] inline stroke-primary mr-2'/> 
                            <span className="text-sm link link-primary">{ linkText }</span>
                        </p>
                    </div>
        </Link>
        </>
    )
}

const CardA = ({ link, IconComponent, iconSize, title, description, linkText }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <>
        <a href={ link } target='_blank' className={`group card cursor-pointer outline outline-1 outline-yellow-300 hover:outline-2 col-span-1 bg-base-100 ${(theme != 'capa2025-dark') ? "shadow-md hover:shadow-lg shadow-yellow-300 hover:shadow-yellow-300" : ""} transition-[25ms]`}>
                    <div className="card-body pointer-events-none">
                        <div>
                            <h2 className="card-title flex items-start mb-2">
                                <div className='h-6 w-6 mt-[1px] flex justify-center items-center bg-yellow-100 border border-yellow-300 rounded group-hover:shadow-md group-hover:shadow-yellow-300'>
                                    <IconComponent size={iconSize} className='stroke-primary' />
                                </div>
                                { title }
                                </h2>
                            <p>{ description }</p>
                        </div>
                        <p className='group-hover:ml-2 transition-all ease-in-out transition-200'>
                            <ArrowRight size={16} className='h-[16px] inline stroke-primary mr-2'/> 
                            <span className="text-sm link link-primary">{ linkText }</span>
                        </p>
                    </div>
        </a>
        </>
    )
}



const Bento = () => {

    const { t, i18n } = useTranslation();

    return (
        <>
        <HighlightedText className='text-3xl md:text-5xl text-center font-extrabold font-title mx-auto w-max' >
            { t('home.bento.titre') }
        </HighlightedText>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto px-8 max-w-sm sm:max-w-lg md:max-w-3xl lg:max-w-6xl my-12">
            <Card 
                link='/equipe'
                IconComponent={PersonStanding}
                iconSize={24}
                title= { t('home.bento.equipe.titre') }
                description= { t('home.bento.equipe.description') }
                linkText= { t('home.bento.equipe.lien') }
            />
            <CardA 
                link={ i18n.language=='en' ? links.meudianGuide : links.guideMeudien }
                IconComponent={BookMarked}
                iconSize={20}
                title= { t('home.bento.guide.titre') }
                description= { t('home.bento.guide.description') }
                linkText= { t('home.bento.guide.lien') }
            />
            <Card 
                link='/wei'
                IconComponent={LandPlot}
                iconSize={20}
                title= { t('home.bento.wei.titre') }
                description= { t('home.bento.wei.description') }
                linkText= { t('home.bento.wei.lien') }
            />
            <Card 
                link='/assos'
                IconComponent={Dribbble}
                iconSize={20}
                title= { t('home.bento.assos.titre') }
                description= { t('home.bento.assos.description') }
                linkText= { t('home.bento.assos.lien') }guide
            />
            
        </div>
        </>
    )
}







export default Bento;