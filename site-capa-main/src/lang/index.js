import fr from './fr';
import en from './en';

import france from '../assets/flags/france.svg'
import unitedKingdom from '../assets/flags/uk.svg'

const languages = [
    { code: 'fr', translation: fr , label: "Français", flag: france, },
    { code: 'en', translation: en , label: "English", flag: unitedKingdom }
];

export default languages;