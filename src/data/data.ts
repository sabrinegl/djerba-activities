export interface Activity {
  id: number;
  tag: string;
  title: string;
  desc: string;
  price: string;
  unit: string;
  img: string;
  category: string;
  points: number;
}

export interface Review {
  name: string;
  flag: string;
  text: string;
  stars: number;
}

export interface Pack {
  name: string;
  accent: string;
  badge: string;
  price: string;
  features: string[];
}

export const ACTIVITIES: Activity[] = [
  {
    id: 1, tag: 'Populaire', title: 'Balade en Mer',
    desc: "Naviguez en liberté sur les eaux turquoise de Djerba. Profitez de la beauté de la mer et des paysages côtiers à bord de notre bateau privatisé.",
    price: '150€', unit: '/ sortie', category: 'Mer', points: 80,
    img: '/src/assets/activities/balade-mer.jpg'
  },
  {
    id: 3, tag: 'Aventure', title: 'Excursion Désert',
    desc: "Partez à l'aventure au cœur du désert tunisien et découvrez des paysages uniques entre dunes dorées, oasis et villages traditionnels. Une expérience authentique entre découverte, culture et dépaysement.",
    price: '80€', unit: '/ pers.', category: 'Désert', points: 60,
    img: '/src/assets/activities/desert.jpg'
  },
  {
    id: 4, tag: 'Aventure', title: 'Balade Cheval • Chameau • Calèche',
    desc: "Profitez d'une balade exceptionnelle pour explorer les magnifiques paysages de Djerba. Plages, palmeraies et couchers de soleil — un moment relaxant à vivre.",
    price: '80€', unit: '/ pers.', category: 'Désert', points: 55,
    img: '/src/assets/activities/chameau.jpg'
  },
  {
    id: 5, tag: 'Découverte', title: "Tour de l'Île",
    desc: "Découvrez les incontournables de Djerba à travers un circuit riche en histoire, traditions et paysages. Explorez les villages typiques, marchés locaux et sites emblématiques de l'île.",
    price: '80€', unit: '/ pers.', category: 'Désert', points: 40,
    img: '/src/assets/activities/tour-ile.jpg'
  },
  {
    id: 7, tag: 'Populaire', title: 'Excursion Quads',
    desc: "Faites le plein d'adrénaline avec une excursion en quad à travers pistes, dunes et chemins sauvages. Une activité idéale pour les amateurs d'aventure et de sensations fortes.",
    price: '30€', unit: '/ pers.', category: 'Mobilité', points: 50,
    img: '/src/assets/activities/quads.jpg'
  },
  {
    id: 9, tag: 'Aventure', title: 'Sports Nautiques',
    desc: "Vivez des moments inoubliables en mer avec nos activités nautiques : jet ski, parachute ascensionnel, bouée tractée et bien plus encore. Sensations, fun et soleil garantis.",
    price: '45€', unit: '/ pers.', category: 'Mer', points: 60,
    img: '/src/assets/activities/nautique.jpg'
  },
  {
    id: 10, tag: 'Culture', title: 'Atelier Poterie',
    desc: "Initiez-vous à l'artisanat traditionnel tunisien à travers un atelier de poterie convivial et créatif. Découvrez le savoir-faire local et créez votre propre souvenir unique.",
    price: '45€', unit: '/ pers.', category: 'Gastronomie', points: 45,
    img: '/src/assets/activities/poterie.jpg'
  },
  {
    id: 13, tag: 'Culture', title: 'Découverte Culturelle',
    desc: "Plongez dans l'histoire, les traditions et les saveurs de Djerba. Explorez le patrimoine local, l'artisanat traditionnel et découvrez la richesse de la gastronomie tunisienne.",
    price: '40€', unit: '/ pers.', category: 'Gastronomie', points: 55,
    img: '/src/assets/activities/culturel.jpg'
  },
];

export const REVIEWS: Review[] = [
  { name: 'Sophie M.', flag: '🇫🇷', text: "Expérience inoubliable ! Le tour en bateau était magnifique.", stars: 5 },
  { name: 'Karim B.',  flag: '🇩🇿', text: "Djerba activities a rendu mon séjour vraiment exceptionnel !", stars: 5 },
  { name: 'Marie D.',  flag: '🇧🇪', text: "Organisation au top. L'excursion dans le désert était magique.", stars: 5 },
];

export const PACKS: Pack[] = [
  { name: 'Essentiel', accent: '#7a9a7a', badge: '', price: '99€',
    features: ['1 sortie Jet-Ski (30 min)', 'Livraison repas incluse', 'Support WhatsApp', 'Transfert aéroport'] },
  { name: 'VIP', accent: '#C9A84C', badge: '⭐ Populaire', price: '199€',
    features: ['Bateau privatisé ½ journée', 'Jet-Ski illimité 1h', 'Brunch VIP inclus', 'Location voiture 1 jour', 'Support 24/7'] },
  { name: 'Prestige', accent: '#F5E07A', badge: '👑 Best', price: '349€',
    features: ['Bateau privatisé journée', 'Jet-Ski illimité', 'Excursion désert 2j', 'Brunch + Dîner VIP', 'Location voiture 3j', 'Guide privé'] },
];

export const REWARDS = [
  {
    points: 200,
    icon: '🎁',
    reward: { fr: 'Un souvenir de Djerba offert', en: 'A Djerba souvenir gift', de: 'Ein Djerba-Souvenir geschenkt', ru: 'Сувенир из Джербы в подарок', it: 'Un souvenir di Djerba in omaggio' },
  },
  {
    points: 350,
    icon: '🏷️',
    reward: { fr: '20% de réduction sur votre prochaine activité', en: '20% off your next activity', de: '20% Rabatt auf Ihre nächste Aktivität', ru: 'Скидка 20% на следующую активность', it: '20% di sconto sulla prossima attività' },
  },
];
