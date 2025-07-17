const events = {
    'accueil-fillot-1': {
        nom: 'Accueil',
        description: 'Bienvenue à la MEUD, c\'est lors de cette première après-midi que nous t\'accueillerons ! La remise des clés de studios, chambres et co-douches (toutes résidences comprises) se fait à partir de 14h au sein de la résidence Lavoisier. De nombreux stands d\'associations seront présents afin de te présenter cette nouvelle vie associative qui s\'ouvre à toi !',
        moment: 'aprem',
        color: 'primary'
    },
    'warmup-disco': {
        nom: 'Soirée Colors',
        description: 'C\'est la première soirée de l\'inté fillot.te ! Alors une fois tes affaires déballées et tes marques prises dans la résidence,viens nous rejoindre habillé(e) de la couleur de ton équipe pour discuter et danser avec les gens de ta promo et nous-mêmes, le CAPA !',
        moment: 'soir',
        color: 'accent'
    },
    'accueil-fillot-2': {
        nom: 'Accueil',
        description: 'Si tu n\'as pas réussi.e à venir le jour d\'avant, pas de panique ! Comme précédemment, la remise des clés de studios, chambres et co-douches (toutes résidences comprises) se fait à partir de 14h au sein de la résidence Lavoisier. Les stands d\'associations seront toujours présents afin de te présenter cette nouvelle vie associative qui s\'ouvre à toi ! Essaie d\'être présent.e pour ne rien rater !',
        moment: 'aprem',
        color: 'primary'
    },
    'terroir': {
        nom: 'Soirée Terroir',
        description: 'Pour cette soirée, apporte une spécialité de ta région à faire déguster aux autres lors d\'un apéro géant ! Produits sucrés et salés sont les bienvenus ! Si tu considères que tu n\'as pas vraiment de spécialité d\'où tu viens, amène juste un produit que tu aimes et que tu veux faire découvrir !',
        moment: 'soir',
        color: 'accent'
    },
    'visite-douai': {
        nom: 'Visite Douai',
        description: 'Découvre Douai, capitale de la France,  lors d\'un parcours ponctué de quelques défis...',
        moment: 'aprem',
        color: 'primary'
    },
    'capacannes': {
        nom: 'Soirée Festival de CA(PA)nnes',
        description: 'Attention les yeux, ça va briller ! Ce soir on t\'attend sapé.e comme jamais, le tapis rouge t\'attend et toutes les caméras seront sur toi !',
        moment: 'soir',
        color: 'accent'
    },
    'kermesse': {
        nom: 'Kermesse',
        description: 'La kermesse, c\'est un grande compétition sportive entre toutes les team. On espère que t\'es motivé.e, car tous les sports les plus loufoques y passeront !',
        moment: 'aprem',
        color: 'primary'
    },
    'duo': {
        nom: 'Soirée Duo iconique',
        description: 'Prépare-toi à incarner les tandems les plus légendaires ! De Batman & Robin aux dafts punks, viens en duo et fais sensation sur la piste. À deux ou en groupe, c’est toujours mieux.',
        moment: 'soir',
        color: 'accent'
    },
    'chic': {
        nom: 'Soirée Chic Détail Choc',
        description: 'Ce soir, place à la soirée Chic Détail Choc ! Le principe est simple : viens bien habillé, version élégante façon rooftop parisien, hippodrome de Longchamp ou style old money. Mais attention, pour casser le côté trop sérieux, ajoute un détail choc à ta tenue : crocs, serre-tête fluo, claquettes-chaussettes, lunettes de ski… L’idée, c’est d’avoir un look soigné avec une touche totalement décalée. À toi de jouer le contraste à fond et de faire preuve d’originalité. Classe, mais avec une touche qui fait sourire !',
        moment: 'soir',
        color: 'accent'
    },
    'visite-lille': {
        nom: 'Visite Lille',
        description: 'Tu pourras réaliser une grande visite de Lille, la plus belle ville du monde ! Mais quelques surprises détermineront ton chemin...',
        moment: 'jour',
        color: 'primary'
    },
    'bbq-beauf': {
        nom: 'Soirée Beauf',
        description: 'Alors pour cette soirée exceptionnelle fillot.e, tu es prié.e de ramener ta meilleure tenue beauf, avec laquelle tu pourras apprécier les meilleures chipos et merguez de ta vie autour d\'une bonne bière !',
        moment: 'soir',
        color: 'accent'
    },
    'capalibu': {
        nom: 'Capalpes',
        description: 'L\'été n\'est pas fini ! Si tu rêves encore de te promener autours des lacs et te baigner dans les rivières fraîches, vient toute l\'aprem dans le jardin de Lavoir. Sors ta plus belle tenue estivale et viens profiter des derniers rayons de soleil ! Tenue recommandée : ne pas hésiter à mettre un maillot de bain sous sa tenue, ou une tenue qui ne craint pas l\'eau !',
        moment: 'aprem',
        color: 'accent'
    },
    'capalpes': {
        nom: 'Soirée Capalpes',
        description: 'L\'été est fini ! Viens dès 20h dans le chalet chaleureux du Capa pour te protéger du vent hivernal! Dress code : full white et vacances à la montagne ',
        moment: 'soir',
        color: 'accent'
    
    },   
    'aprem-bds': {
        nom: 'Aprem BDS',
        description: 'Viens découvrir le BDS et ses comités. Tu pourras parler avec les 2A qui participent à la vie associative et, on l\'espère, être recruté dans certains comités !',
        moment: 'aprem',
        color: 'accent'
    
    },
    'soiree-bda': {
        nom: 'Soirée BDA',
        description: 'Pour cette soirée, le CAPA laisse la voie libre aux pixart pour t\'organiser une soirée digne d\'un film !',
        moment: 'soir',
        color: 'accent'
    },
    'repos': {
        nom: 'Repos soldat',
        description: 'Pour cette soirée, le CAPA laisse la voie libre aux voyageurs du temps pour t\'organiser une soirée intemporelle !',
        moment: 'jour',
        color: 'accent'
    },
    'journee-bda': {
        nom: 'Aprem BDA',
        description: 'Viens découvrir le BDA et ses comités. Tu pourras parler avec les 2A qui participent à la vie associative et, on l\'espère, être recruté dans certains comités !',
        moment: 'jour',
        color: 'accent'
    },
    'soiree-bde': {
        nom: 'Soirée BDE',
        description: 'Pour cette soirée, le CAPA laisse la voie libre aux suns pour t\'organiser une soirée paradisiaque !',
        moment: 'soir',
        color: 'accent'
    },
    'defis': {
        nom: 'Défis',
        description: 'Avec ton équipe, prépare toi à relever plein de défis. Le but : Récolter le plus de points pour ton équipe. On espère que tu seras chaud !',
        moment: 'jour',
        color: 'primary'
    },
    'retour-enfance': {
        nom: 'Pyjama Party',
        description: 'Tu rêves de danser en charentaises ? Ce soir, c\'est ton moment de gloire : viens en pyjama, en peignoir, en couche ou en combi licorne, on jugera pas. Oreillers, bouffe, dancefloor en chaussettes... La nuit promet d\'être molle, moelleuse, et totalement incontrôlable. Attention : risque élevé de bataille d\'oreillers',
        moment: 'soir',
        color: 'accent'
    },
    'travesti': {
        nom: 'Soirée Travestie',
        description: 'Pour cette soirée, les genres sont inversés ! À vous de vous habiller dans le genre qui vous oppose. Alors vraiment, lâchez vous : maquillage, fausses moustaches, robes, tout est le bienvenu ! Qui, du CAPA ou des fillot.e.s, poussera le jeu le plus loin ???',
        moment: 'soir',
        color: 'accent'
    },
    'soiree-bdh': {
        nom: 'Soirée BDH',
        description: 'Pour cette soirée, le CAPA laisse la voie libre aux manchots pour t\'organiser une soirée magique !',
        moment: 'soir',
        color: 'accent'
    },
    'aprem-bde': {
        nom: 'Aprem BDE',
        description: 'Viens découvrir le BDE et ses comités. Tu pourras parler avec les 2A qui participent à la vie associative et, on l\'espère, être recruté dans certains comités !',
        moment: 'aprem',
        color: 'accent'
    },
    'welcome-day': {
        nom: "Welcome day",
        description: 'Un grand évènement organisé par l\'admin dans le prestigieux Hippodrome de Douai. Les nouveaux arrivants de tous les campus seront présents !',
        moment: 'jour',
        color: 'primary'
    },
    'soiree-exte': {
        nom: 'Soirée Exté BDE',
        description: 'Le BDE nous à réservé une boite pour nous, rien que pour nous ! Autant te dire qu\'on a hâte !!',
        moment: 'soir',
        color: 'primary'
    },
    'surprise': {
        nom: 'Surprise...',
        description: 'Y\'a quoi que tu comprends pas dans "surprise" ???',
        moment: 'jour',
        color: 'accent'
    },
    'matinee-bdh': {
        nom: 'Matinée BDH',
        description: 'Viens découvrir le BDH et ses comités. Tu pourras parler avec les 2A qui participent à la vie associative et, on l\'espère, être recruté dans certains comités !',
        moment: 'matin',
        color: 'accent'
    },
    'marathon-film': {
        nom: 'Marathon Film',
        description: 'Le club Popcorn te propose un marathon de film. Un instant de calme bien mérité !',
        moment: 'soir',
        color: 'accent'
    },
    'soiree-liste': {
        nom: 'Soirée Liste',
        description: 'C\'est la soirée liste.',
        moment: 'soir',
        color: 'accent'
    },
    'm-comme': {
        nom: 'Soirée M comme...',
        description: 'Alors là fillot.e, laisse courir ton imagination, et déguise toi en quelque chose qui commence par M ! Alors, qui sera le.la plus original.e ? Matelas !?',
        moment: 'soir',
        color: 'accent'
    },
    'abba-waaqayyoo': {
        nom: 'ABBA WAAQAYYOO',
        description: 'ays arratsaldean come sretsi abbuposkaa waaqayyoo ani allt kaaga tomodachi blahodat pou CAPA',
        moment: 'soir',
        color: 'primary'
    },
    'resultat-bloc-note': {
        nom: 'RESULTATS x Bloc Note',
        description: 'Prépare un t-shirt blanc auquel tu tiens pas trop et un marqueur. Tu pourras dessiner et écrire sur les t-shirt des autres, et ils pourront faire de même sur le tien ! Accessoirement, ce sera le reveal tant attendu des scores de chaque équipe, et de la grande gagnante de l\'inté !',
        moment: 'soir',
        color: 'accent'
    },
    'wei': {
        nom: 'WEI',
        description: 'Départ vendredi en début d\'après-midi, retour dimanche soir, destination surprise. Si il y a bien un incontournable lors de l\'inté, c\'est le Week-End d\'Intégration. Ca va être une folie !',
        moment: 'weekend',
        color: 'primary'
    },
    'rentree': {
        nom: 'Rentrée CI1',
        description: 'Ton premier jour à l\'école. L\'admin te présentera tout ce que tu dois savoir pour bien commencer ton année.',
        moment: 'jour',
        color: 'secondary'
    },
    'theatre-vss': {
        nom: 'Débat Théatre VSS',
        description: 'L\'école te propose une pièce de théatre participative afin de te sensibiliser aux violences sexistes et sexuelles. Tu pourras ensuite débattre sur le sujet avec les acteurs et les autres spectateurs.',
        moment: 'aprem',
        color: 'secondary'
    },
    'tests-langues': {
        nom: 'Tests de langues',
        description: 'Histoire que ton groupe de langue corresponde le mieux possible a tes capacités, ce test permettra de te situer dans la promo. Good Luck ! 我不是老师，我是学生!',
        moment: 'aprem',
        color: 'secondary'
    },
    'cours': {
        nom: 'Cours',
        description: 'Va en cours fillot ☝️🤓',
        moment: 'jour',
        color: 'secondary'
    }
}

export default events;