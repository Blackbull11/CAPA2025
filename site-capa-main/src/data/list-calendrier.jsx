import events from "./list-events";
import terroir from '../assets/events/terroir.png';
import beffroi from '../assets/events/beffroi.jpg';
import retourEnfance from '../assets/events/retour-enfance.png';
import beauxArts from '../assets/events/beaux-arts.jpg';
import beauf from '../assets/events/beauf.png';
import bde from '../assets/events/bde.jpg';
import bda from '../assets/events/bda.jpg';
import bds from '../assets/events/bds.jpg';
import bdh from '../assets/events/bdh.jpg';
import mouettes from '../assets/events/mouettes.png';
import blocnote from '../assets/events/bloc-note.png';
import capannes from '../assets/events/capannes.jpg';
import duoico from '../assets/events/duoico.jpg';


const calendrier = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    {
        jour: 'samedi',
        date: '23',
        mois: 'aout',
        events: [
            events['accueil-fillot-1'],
            events['warmup-disco']
        ],
    },
    {
        jour: 'dimanche',
        date: '24',
        mois: 'aout',
        events: [
            events['accueil-fillot-2'],
            events['terroir']
        ],
        img: terroir,
        imgDescription: 'Soirée Terroir (CAPA 2024)'
    },
    {
        jour: 'lundi',
        date: '25',
        mois: 'aout',
        events: [
            events['visite-douai'],
            events['chic']
        ],
        img: beffroi,
        imgDescription: 'Beffroi de Douai'
    },
    {
        jour: 'mardi',
        date: '26',
        mois: 'aout',
        events: [
            events['kermesse'],
            events['retour-enfance']
        ],
        img: retourEnfance,
    },
    {
        jour: 'mercredi',
        date: '27',
        mois: 'aout',
        events: [
            events['aprem-bde'],
            events['bbq-beauf']
        ],
        img: beauf,
        imgDescription: 'Soirée Beauf (CAPA 2024)'
    },
    {
        jour: 'jeudi',
        date: '28',
        mois: 'aout',
        events: [
            events['capalibu'],
            events['capalpes']
        ],

    },
    {
        jour: 'vendredi',
        date: '29',
        mois: 'aout',
        events: [
            events['visite-lille']
        ],
        img: beauxArts
    },
    {
        jour: 'samedi',
        date: '30',
        mois: 'aout',
        events: [
            events['aprem-bds'],
            events['soiree-bda']
        ],
        img: bds,
        imgDescription: 'Le BDS'
    },
    {
        jour: 'dimanche',
        date: '31',
        mois: 'aout',
        events: [
            events['journee-bda'],
            events['soiree-bde']
        ],
        img: bda,
        imgDescription: 'Le BDA'
    },
    {
        jour: 'lundi',
        date: '01',
        mois: 'septembre',
        events: [
            events['defis'],
            events['capacannes']
        ],
        img : capannes,
        imgDescription: 'Soirée CA(PA)nnes (CAPA 2024)'
    },
    {
        jour: 'mardi',
        date: '02',
        mois: 'septembre',
        events: [
            events['rentree'],
            events['travesti']
        ]
    },
    {
        jour: 'mercredi',
        date: '03',
        mois: 'septembre',
        events: [
            events['cours'],
            events['soiree-bdh']
        ]
    },
    {
        jour: 'jeudi',
        date: '04',
        mois: 'septembre',
        events: [
            events['cours'],
            events['repos']
        ],
        img: bde,
        imgDescription: 'Le BDE'
    },
    {
        jour: 'vendredi',
        date: '05',
        mois: 'septembre',
        events: [
            events['welcome-day'],
            events['duo']
        ],
        img : duoico,
        imgDescription: 'Soirée Duo Iconiques (CAPA 2024)'
    },
    {
        jour: 'samedi',
        date: '06',
        mois: 'septembre',
        events: [
            events['matinee-bdh'],
            events['surprise']
        ],
        img: bdh,
        imgDescription: 'Le BDH'
    },
    {
        jour: 'dimanche',
        date: '07',
        mois: 'septembre',
        events: [
            events['marathon-film']
        ],
        img: bdh,
        imgDescription: 'Le BDH'
    },
    {
        jour: 'lundi',
        date: '08',
        mois: 'septembre',
        events: [
            events['cours'],
            events['soiree-liste']
        ]
    },
    {
        jour: 'mardi',
        date: '09',
        mois: 'septembre',
        events: [
            events['cours'],
            events['m-comme']
        ],
        img: mouettes,
        imgDescription: 'Soirée M comme (CAPA 2024)'
    },
    {
        jour: 'mercredi',
        date: '10',
        mois: 'septembre',
        events: [
            events['cours'],
            events['abba-waaqayyoo']
        ]
    },
    {
        jour: 'jeudi',
        date: '11',
        mois: 'septembre',
        events: [
            events['cours'],
            events['resultat-bloc-note']
        ],
        img: blocnote,
        imgDescription: 'Soirée Bloc-Note (CAPA 2024)'
    },
    {
        jour: 'vendredi',
        date: '12',
        mois: 'septembre',
        events: [
            events['cours'],
            events['wei']
        ]
    },
    {
        jour: 'samedi',
        date: '13',
        mois: 'septembre',
        events: [
            events['wei']
        ]
    },
    {
        jour: 'dimanche',
        date: '14',
        mois: 'septembre',
        events: [
            events['wei']
        ]
    }
]

export default calendrier;