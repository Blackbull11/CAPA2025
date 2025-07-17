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

const leftImages = [wei1, wei2, wei3, wei4, wei5, wei6];
const rightImages = [wei7, wei8, wei9, wei10, wei11, wei12];

const Wei = () => {
  return (
    <>
      <ScrollToTop />

      {/* Images en colonne gauche */}
      <div className="absolute left-0 top-0 hidden lg:flex flex-col gap-8 mt-40 ml-4 z-0">
        {leftImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`photo wei${i + 1}`}
            className="w-80 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
          />
        ))}
      </div>

      {/* Images en colonne droite */}
      <div className="absolute right-0 top-0 hidden lg:flex flex-col gap-8 mt-40 mr-4 z-0">
        {rightImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`photo wei${i + 7}`}
            className="w-80 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
          />
        ))}
      </div>

      {/* Contenu principal */}
      <div className="flex flex-col w-full max-w-4xl mx-auto mt-28 mb-24 px-6 items-center gap-8 z-10 relative">
        <HighlightedText className="text-3xl md:text-5xl text-center font-extrabold font-title">
          C'est quoi le WEI ?
        </HighlightedText>
        <p className="text-lg leading-relaxed text-pretty text-center">
          Le Week-End d’Intégration, ou <strong>WEI</strong>, c’est LE moment
          phare de ton arrivée à l’école ! <br />
          Trois jours de pure ambiance du 12 au 14 septembre, départ vendredi en
          début d'après-midi, retour dimanche soir, destination surprise.
          C'est l'occasion parfaite pour faire connaissance avec ta promo
          et créer des souvenirs inoubliables !
        </p>
        <img
          src={sacImage}
          alt="Sac pour le WEI"
          className="w-48 md:w-60 mx-auto -mt-10"
        />
      </div>

      {/* Checklist */}
      <div className="flex flex-col w-full max-w-4xl mx-auto mt-12 mb-24 px-6 items-center gap-8 z-10 relative">
        <HighlightedText className="text-3xl md:text-5xl text-center font-extrabold font-title">
          Prépare ton sac pour le WEI !
        </HighlightedText>
        <p className="text-center text-lg text-pretty">
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
    </>
  );
};

export default Wei;