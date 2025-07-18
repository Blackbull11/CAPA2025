import HighlightedText from "../components/HighlightedText";

import studio from '../assets/douai/chambres/studio.jpg';
import cuisineStudio from '../assets/douai/chambres/cuisine-studio.jpg';
import chambreDescartes from '../assets/douai/chambres/chambre-descartes.jpg';
import chambreCondo from '../assets/douai/chambres/chambre-condo.jpg';
import restoPauvre from '../assets/douai/meud/resto-pauvre.jpg';
import jardin from '../assets/douai/meud/jardin.jpg';
import city from '../assets/douai/meud/city.jpg';
import muscu from '../assets/douai/meud/muscu.jpg';
import resto from '../assets/douai/meud/resto.jpg';
import bar from '../assets/douai/meud/bar.jpg';
import hall from '../assets/douai/bourseul/hall.jpeg';
import entree from '../assets/douai/bourseul/entree.jpeg';
import cafet from '../assets/douai/bourseul/cafet.jpeg';
import amphi from '../assets/douai/bourseul/amphi.jpeg';
import { Rotate3D } from "lucide-react";
import ScrollToTop from "../components/ScrollToTop";


const Douai = () => {
    return (
        <>
        <ScrollToTop />
        <Gallery
            title='Les Chambres'
            images={[
                {
                    description: 'Studio individuel',
                    img: studio
                },{
                    description: "Cuisine d'un studio individuel",
                    img: cuisineStudio
                },{
                    description: 'Chambre à la Résidence Descartes',
                    img: chambreDescartes
                },{
                    description: 'Chambre à la Résidence Condorcet',
                    img: chambreCondo
                }
            ]}
        >
            <div className="w-full">
                <div className="w-full text-center text-pretty text-secondary mb-4">
                    Si vous êtes curieux.ses, l&apos;IMT propose une visite virtuelle des chambres
                </div>
                <div className="flex flex-col-reverse gap-4 items-center w-full justify-center">
                    <a href='https://spaces.wondavr.com/embed/?course=915f6cc0-b52c-11ea-a57d-8fb6129faf85' className="group btn btn-primary w-full max-w-96 md:w-auto font-bold">
                        <Rotate3D className="group-hover:animate-spin" size={20} strokeWidth={2.3}/>
                        Le studio de Lavoisier
                    </a>
                    <a href='https://spaces.wondavr.com/embed/?course=ec42eda0-acc7-11ea-839b-09fbb86ec010' className="group btn btn-primary w-full max-w-96 md:w-auto font-bold">
                        <Rotate3D className="group-hover:animate-spin" size={20} strokeWidth={2.3}/>
                        La co-douche de Lavoisier
                    </a>
                    <a href='https://spaces.wondavr.com/embed/?course=8a9d7360-ac7f-11ea-80c0-2d357d724ddb' className="group btn btn-primary w-full max-w-96 md:w-auto font-bold">
                        <Rotate3D className="group-hover:animate-spin" size={20} strokeWidth={2.3}/>
                        Les chambres de Condorcet et Descartes
                    </a>
                </div>
            </div>
            
        </Gallery>
        <Gallery
            title='La MEUD'
            images={[
                {
                    description: 'Restaurant',
                    img: resto
                },{
                    description: "Jardin",
                    img: jardin
                },{
                    description: 'Salle de musculation',
                    img: muscu
                },{
                    description: 'City',
                    img: city
                },{
                    description: 'Second restaurant',
                    img: restoPauvre
                },{
                    description: 'Bar',
                    img: bar
                }
            ]}
        />
        <Gallery
            title="L'école"
            images={[
                {
                    description: 'Hall',
                    img: hall
                },{
                    description: "Entrée",
                    img: entree
                },{
                    description: 'Cafétéria',
                    img: cafet
                },{
                    description: 'Amphi',
                    img: amphi
                }
            ]}
        />
        
        </>
    )
}

const Gallery = ({ images, title, children }) => {
    return (
        <>
        <div className="flex flex-col w-full max-w-5xl mx-auto mt-12 mb-24 px-6 items-center md:items-start gap-8 z-10 relative">
            <HighlightedText className='text-3xl mb-6 md:text-5xl text-center font-extrabold font-title mx-auto'>{ title }</HighlightedText>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 gap-x-10 mx-auto">
                { images.map((image, index) => (<>
                    <div key={ index } className="max-w-96 text-center">
                        <img src={ image.img } className="rounded-3xl object-cover aspect-[4/3]"/>
                        <div className="font-bold text-lg mt-2">{ image.description }</div>
                    </div>
                </>)) }
            </div>
            { children }
        </div>
        </>
    )
}

export default Douai;