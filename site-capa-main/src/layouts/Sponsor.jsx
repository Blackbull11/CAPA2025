import HighlightedText from "../components/HighlightedText";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import '@splidejs/react-splide/css';
import { useTranslation } from "react-i18next";
import sponsorList from "../data/list-sponsor";

//TODO : Faire fonctionner le tooltip


const Sponsor = () => {

    const { t } = useTranslation();

    const splideOptions = {
        type: 'loop',
        drag: 'free',
        pagination: false,
        arrows: false,
        focus: 'center',
        autoWidth: true,
        gap: "4rem",
        autoScroll: {
            speed: 1,
            pauseOnFocus: false,
            pauseOPOnHover: false
        }
    }

    return (
        <>
        <div className="z-10 relative">
            <HighlightedText className='mt-32 mb-16 text-3xl md:text-5xl text-center font-extrabold font-title m-auto w-max'>
                { t('home.sponsors.titre') }
            </HighlightedText>
        </div>
        

        <div className="text-center">
            <div className="mx-auto w-screen sm:max-w-lg md:max-w-3xl lg:max-w-6xl [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]">
                <Splide aria-label="Sponsors" hasTrack={ false } options={ splideOptions } extensions={{ AutoScroll }}>
                    <SplideTrack>
                        { sponsorList.map((sponsor, index) => { return (
                            <SplideSlide key={ index }>
                                <a href={ sponsor.link }>
                                    <img className="max-w-none h-20 grayscale transition-all duration-300 hover:grayscale-0 text-neutral" src={ sponsor.src } alt={ sponsor.name } />
                                </a>
                            </SplideSlide>
                        )})}
                    </SplideTrack>
                </Splide>
            </div>
        </div>
        </>
    )
}

/*
<ul className="flex items-center justify-center md:justify-start gap-16 mx-8 animate-infinite-scroll">
    <SponsorImages />
</ul>
<ul className="flex items-center justify-center md:justify-start gap-16 mx-8 animate-infinite-scroll" aria-hidden="true">
    <SponsorImages />
</ul>      
*/

export default Sponsor;