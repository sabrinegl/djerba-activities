import baladeMer from '../assets/activities/balade-mer.jpg';
import desert from '../assets/activities/desert.jpg';
import chameau from '../assets/activities/chameau.jpg';
import tourIle from '../assets/activities/tour-ile.jpg';
import quads from '../assets/activities/quads.jpg';
import nautique from '../assets/activities/nautique.jpg';
import poterie from '../assets/activities/poterie.jpg';
import culturel from '../assets/activities/culturel.jpg';
export interface Activity {
  id: number;
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
    id: 1, title: 'Balade en bateau',
    desc: "Prenez le large et découvrez les eaux cristallines de Djerba. Profitez d'une balade relaxante le long des côtes et gardez l'œil ouvert : les dauphins font parfois leur apparition pour rendre cette sortie encore plus magique.",
    price: '140€ (475 dt)', unit: '/ pers. · 1h30 · max 6 pers.', category: 'Mer', points: 80,
    img: baladeMer
  },
  {
    id: 3, title: 'Excursion Désert',
    desc: "Partez à l'aventure au cœur du désert tunisien et découvrez des paysages uniques entre dunes dorées, oasis et villages traditionnels. Une expérience authentique entre découverte, culture et dépaysement.",
    price: 'Sur demande', unit: '/ 1 à 2 jours · max 5 pers.', category: 'Désert', points: 60,
    img: desert
  },
  {
    id: 4, title: 'Balade à Cheval',
    desc: "Profitez d'une balade exceptionnelle à cheval pour explorer les magnifiques paysages de Djerba. Plages, palmeraies et couchers de soleil — un moment relaxant à vivre.",
    price: '20€ (70dt)', unit: '/ pers. · 1h30', category: 'Désert', points: 55,
    img: chameau
  },
  {
    id: 6, title: 'Balade à Dromadaire',
    desc: "Vivez une balade traditionnelle à dromadaire à travers les paysages typiques de Djerba, entre plages et palmeraies.",
    price: '20€ (70dt)', unit: '/ pers. · 1h', category: 'Désert', points: 55,
    img: chameau
  },
  {
    id: 8, title: 'Balade en Calèche',
    desc: "Découvrez Djerba à un rythme paisible à bord d'une calèche traditionnelle, idéale pour profiter en famille ou entre amis des paysages de l'île.",
    price: '45€', unit: '/ pers. · 1h30 · max 6 pers.', category: 'Désert', points: 50,
    img: chameau
  },
  {
    id: 5, title: "Tour de l'Île",
    desc: "Découvrez les incontournables de Djerba à travers un circuit riche en histoire, traditions et paysages. Explorez les villages typiques, marchés locaux et sites emblématiques de l'île.",
    price: '80€', unit: '/ pers.', category: 'Désert', points: 40,
    img: tourIle
  },
  {
    id: 7, title: 'Excursion Quads',
    desc: "Faites le plein d'adrénaline avec une excursion en quad à travers pistes, dunes et chemins sauvages. Une activité idéale pour les amateurs d'aventure et de sensations fortes.",
    price: '25€ / 45€', unit: 'solo / duo · 1h30', category: 'Mobilité', points: 50,
    img: quads
  },
  {
    id: 9, title: 'Jet-Ski',
    desc: "Sensations garanties à bord de nos jet-skis pour explorer le littoral de Djerba à toute vitesse.",
    price: '85€ / 110€', unit: 'solo / duo · 1h30 (30 min à 45€)', category: 'Mer', points: 60,
    img: nautique
  },
  {
    id: 11, title: 'Parachute Ascensionnel',
    desc: "Envolez-vous au-dessus de la mer de Djerba pour une vue imprenable, en duo ou en trio.",
    price: '45€ / 60€', unit: 'duo / trio · 10 min', category: 'Mer', points: 55,
    img: nautique
  },
  {
    id: 10, title: 'Atelier Poterie',
    desc: "Initiez-vous à l'artisanat traditionnel tunisien à travers un atelier de poterie convivial et créatif. Découvrez le savoir-faire local et créez votre propre souvenir unique.",
    price: '7€ / 15€', unit: 'enfant / adulte · 1h - 1h30', category: 'Gastronomie', points: 45,
    img: poterie
  },
  {
    id: 13, title: 'Découverte Culturelle',
    desc: "Plongez dans l'histoire, les traditions et les saveurs de Djerba. Explorez le patrimoine local, l'artisanat traditionnel et découvrez la richesse de la gastronomie tunisienne.",
    price: '40€', unit: '/ pers.', category: 'Gastronomie', points: 55,
    img: culturel
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
  { name: 'VIP', accent: '#C9A84C', badge: '⭐ Populaire', price: '269€',
    features: ['Bateau privatisé ½ journée', 'Jet-Ski illimité 1h', 'Brunch VIP inclus', 'Location voiture 1 jour', 'Support 24/7'] },
  { name: 'Prestige', accent: '#F5E07A', badge: '👑 Best', price: '745€',
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