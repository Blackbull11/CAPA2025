import HighlightedText from "../components/HighlightedText";
import coverGuideMeudien from "../assets/guide/guide-meudien-cover.jpg";
import coverMeudiansGuide from "../assets/guide/meudians-guide-cover.jpg";
import Book from "../components/Book";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import jardin from '../assets/douai/meud/jardin.jpg';
import resto from '../assets/douai/meud/resto.jpg';
import bar from '../assets/douai/meud/bar.jpg';
import gifMeud from '../assets/gifs/video-meud.gif';
import gifCapabini from '../assets/gifs/video-capabini.gif';
import { useTranslation } from "react-i18next";
import links from "../data/links";


const SavoirPlus = () => {

    const { t, i18n } = useTranslation();

    return(
        <>
        <HighlightedText className='mt-32 mb-16 text-3xl md:text-5xl text-center font-extrabold font-title m-auto w-max'>
            { t('home.savoir-plus.titre') }
        </HighlightedText>
        <div className="flex flex-col items-center lg:flex-row w-auto mx-4 sm:max-w-96 sm:mx-auto lg:mx-auto lg:max-w-6xl gap-8">
            <div className="flex flex-col justify-end gap-6 items-center h-[30rem] w-full lg:w-1/3 bg-secondary/35 rounded-3xl pb-6">
                <a href={ i18n.language=='en' ? links.meudianGuide : links.guideMeudien } target="_blank">
                    <Book cover={i18n.language=='en' ? coverMeudiansGuide : coverGuideMeudien} />
                </a>
                <a className='btn btn-primary' href={ i18n.language=='en' ? links.meudianGuide : links.guideMeudien } target="_blank">{ t('home.savoir-plus.btn-guide') }</a>
            </div>
            <div className="flex flex-col justify-end gap-10 items-center h-[30rem] w-full lg:w-1/3 bg-secondary/35 rounded-3xl pb-6">
                <div className="flex flex-col gap-4">
                    <Link to='/videos' className="relative group aspect-video w-72 hover:scale-105 transition-transform duration-300">
                        <img src={ gifMeud } className="absolute rounded-2xl transition-all duration-200 group-hover:brightness-75  group-hover:shadow-sm" />
                        <Play strokeWidth={4} className="relative w-10 h-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white fill-white opacity-0 transition-all duration-300 group-hover:opacity-100" />
                    </Link>
                    <Link to='/videos' className="relative group aspect-video w-72 hover:scale-105 transition-transform duration-300">
                        <img src={ gifCapabini } className="absolute rounded-2xl transition-all duration-200 group-hover:brightness-75 group-hover:shadow-sm" />
                        <Play strokeWidth={4} className="relative w-10 h-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white fill-white opacity-0 transition-all duration-300 group-hover:opacity-100" />
                    </Link>
                </div>
                <Link className='btn btn-primary' to='/videos'>{ t('home.savoir-plus.btn-videos') }</Link>
            </div>
            <div className="flex flex-col justify-end gap-5 items-center h-[30rem] w-full lg:w-1/3 bg-secondary/35 rounded-3xl pb-6">
                <Link to='/douai' className="w-[17rem] carousel rounded-box">
                    <div className="carousel-item w-full">
                        <img src={ jardin } className="w-full aspect-[3/4] object-cover" alt="Résidence" />
                    </div> 
                    <div className="carousel-item w-full">
                        <img src={ resto } className="w-full aspect-[3/4] object-cover" alt="Résidence" />
                    </div> 
                    <div className="carousel-item w-full">
                        <img src={ bar } className="w-full aspect-[3/4] object-cover" alt="Résidence" />
                    </div>
                </Link>
                <Link className='btn btn-primary' to='/douai'>{ t('home.savoir-plus.btn-residences') }</Link>
            </div>
        </div>
        </>
    );
}


export default SavoirPlus;