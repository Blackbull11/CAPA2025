import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languages from "./lang/index";

const getRessources = () => {
  let ressources = {};
  for (const lang in languages) {
    ressources[languages[lang].code] = {translation: languages[lang].translation};
  }
  return ressources;
}

i18n.use(initReactI18next).init({
    lng: "fr",
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false,
    },
    resources: getRessources(),
  });

export default i18n;