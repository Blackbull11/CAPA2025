import ScrollToTop from "../components/ScrollToTop";
import HighlightedText from "../components/HighlightedText";
import sacImage from "../assets/logo-wei.png";

// Images WEI (gauche : 1 à 6, droite : 7 à 12)
import wei1 from "../assets/wei/wei1.jpg";
import wei2 from "../assets/wei/wei2.jpg";
import wei3 from "../assets/wei/wei3.jpg";
import wei4 from "../assets/wei/wei4.jpg";
import wei5 from "../assets/wei/wei5.jpg";
import wei6 from "../assets/wei/wei6.jpg";
import wei7 from "../assets/wei/wei7.jpg";
import wei8 from "../assets/wei/wei8.jpg";
import wei9 from "../assets/wei/wei9.jpg";
import wei10 from "../assets/wei/wei10.jpg";
import wei11 from "../assets/wei/wei11.jpg";
import wei12 from "../assets/wei/wei12.jpg";
import wei13 from "../assets/wei/wei13.jpg";
import wei14 from "../assets/wei/wei14.jpg"; 
import wei15 from "../assets/wei/wei15.jpg"; 
import wei16 from "../assets/wei/wei16.jpg";
import wei17 from "../assets/wei/wei17.jpg";
import wei18 from "../assets/wei/wei18.jpg";
import wei19 from "../assets/wei/wei19.jpg";
import wei20 from "../assets/wei/wei20.jpg";
import wei21 from "../assets/wei/wei21.jpg";
import wei22 from "../assets/wei/wei22.jpg";
import wei23 from "../assets/wei/wei23.jpg";
import wei24 from "../assets/wei/wei24.jpg";
import wei25 from "../assets/wei/wei25.jpg";
import wei26 from "../assets/wei/wei26.jpg";
import wei27 from "../assets/wei/wei27.jpg";


const leftImages = [wei13, wei2, wei11, wei9, wei6, wei7, wei5];
const rightImages = [wei1, wei4, wei3, wei15, wei8, wei12, wei10, wei14];
const Wei = () => {
  return (
    <div className="w-full px-4">
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-4 max-w-7xl mx-auto mt-28 mb-24">
        
        {/* Colonne gauche */}
        <div className="hidden lg:flex flex-col gap-8 max-w-[20vw]">
          {leftImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`photo wei${i + 1}`}
              className="w-full max-w-[20vw] rounded-xl shadow-lg mx-auto transition-all duration-300 hover:scale-105"
            />
          ))}
        </div>

        {/* Contenu principal */}
        <div className="flex flex-col items-center gap-8 px-4 relative z-10">
          <HighlightedText className="text-3xl md:text-5xl text-center font-extrabold font-title">
            C'est quoi le WEI ?
          </HighlightedText>
          <p className="text-lg leading-relaxed text-center">
            Le Week-End d’Intégration, ou <strong>WEI</strong>, c’est LE moment phare de ton arrivée à l’école ! <br />
            Trois jours de pure ambiance du 12 au 14 septembre, départ vendredi en début d'après-midi, retour dimanche soir, destination surprise.
            C'est l'occasion parfaite pour faire connaissance avec ta promo et créer des souvenirs inoubliables !
          </p>
          <img
            src={sacImage}
            alt="Sac pour le WEI"
            className="w-40 md:w-60 mx-auto -mt-10"
          />

          {/* Checklist */}
          <HighlightedText className="text-3xl md:text-5xl text-center font-extrabold font-title">
            Prépare ton sac pour le WEI !
          </HighlightedText>
          <p className="text-center text-lg">
            Voici une petite checklist pour ne rien oublier avant de partir !
          </p>
          <ul className="w-full max-w-lg flex flex-col gap-4">
            {[
              "Un seul sac par personne",
              "Un sandwich pour le vendredi soir",
              "Des vêtements qui peuvent être salis",
              "De la crème solaire",
              "Une gourde",
              "Un maillot de bain (shorts de bain interdit)",
              "Une casquette",
              "Une serviette",
              "Des chaussures qui peuvent se salir",
              "Une trousse de toilette",
              "Ta carte d’identité et carte vitale",
              "Ta super éco-cup CAPA",
              "Et enfin ta voix pour pouvoir crier C'EST LE WEIII",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 p-3 bg-base-200 rounded-xl shadow-md"
              >
                <input
                  type="checkbox"
                  className="checkbox checkbox-warning"
                  disabled
                />
                <span className="text-md md:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne droite */}
        <div className="hidden lg:flex flex-col gap-8 max-w-[20vw]">
          {rightImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`photo wei${i + 7}`}
              className="w-full max-w-[20vw] rounded-xl shadow-lg mx-auto transition-all duration-300 hover:scale-105"
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Wei;