import baladeMer from '../assets/activities/balade-mer.jpg';
import desert from '../assets/activities/desert.jpg';
import chameau from '../assets/activities/chameau.jpg';
import tourIle from '../assets/activities/tour-ile.jpg';
import quads from '../assets/activities/quads.jpg';
import nautique from '../assets/activities/nautique.jpg';
import poterie from '../assets/activities/poterie.jpg';
import culturel from '../assets/activities/culturel.jpg';
import type { Lang } from '../i18n/translations';

export interface Activity {
  id: number;
  title: Record<Lang, string>;
  desc: Record<Lang, string>;
  price: Record<Lang, string>;
  unit: Record<Lang, string>;
  img: string;
  category: string;
  points: number;
}


export interface Pack {
  name: Record<Lang, string>;
  accent: string;
  badge: Record<Lang, string>;
  price: string;
  features: Record<Lang, string[]>;
}

export interface Review {
  name: string;
  flag: string;
  text: Record<Lang, string>;
  stars: number;
}

export const ACTIVITIES: Activity[] = [
  {
    id: 1,
    title: { fr: 'Balade en bateau', en: 'Boat Trip', de: 'Bootsausflug', ru: 'Прогулка на лодке', it: 'Gita in barca' },
    desc: {
      fr: "Prenez le large et découvrez les eaux cristallines de Djerba. Profitez d'une balade relaxante le long des côtes et gardez l'œil ouvert : les dauphins font parfois leur apparition pour rendre cette sortie encore plus magique.",
      en: "Set sail and discover Djerba's crystal-clear waters. Enjoy a relaxing ride along the coast and keep an eye out — dolphins sometimes appear to make this outing even more magical.",
      de: "Stechen Sie in See und entdecken Sie die kristallklaren Gewässer von Djerba. Genießen Sie eine entspannte Fahrt entlang der Küste und halten Sie die Augen offen: Manchmal tauchen Delfine auf und machen den Ausflug noch magischer.",
      ru: "Отправьтесь в море и откройте кристально чистые воды Джербы. Насладитесь расслабляющей прогулкой вдоль побережья — иногда здесь появляются дельфины, делая поездку ещё более волшебной.",
      it: "Prendi il largo e scopri le acque cristalline di Djerba. Goditi una rilassante gita lungo la costa e tieni gli occhi aperti: a volte i delfini fanno la loro comparsa, rendendo l'uscita ancora più magica.",
    },
    price: { fr: '140€ (475 dt)', en: '140€ (475 dt)', de: '140€ (475 dt)', ru: '140€ (475 dt)', it: '140€ (475 dt)' },
    unit: { fr: '/ pers. · 1h30 · max 6 pers.', en: '/ p.p. · 1h30 · max 6 people', de: '/ Pers. · 1,5 Std · max. 6 Pers.', ru: '/ чел. · 1ч30 · макс. 6 чел.', it: '/ pers. · 1h30 · max 6 pers.' },
    category: 'Mer', points: 80,
    img: baladeMer
  },
  {
    id: 3,
    title: { fr: 'Excursion Désert', en: 'Desert Excursion', de: 'Wüstenausflug', ru: 'Экскурсия в пустыню', it: 'Escursione nel deserto' },
    desc: {
      fr: "Partez à l'aventure au cœur du désert tunisien et découvrez des paysages uniques entre dunes dorées, oasis et villages traditionnels. Une expérience authentique entre découverte, culture et dépaysement.",
      en: "Set off on an adventure into the heart of the Tunisian desert and discover unique landscapes of golden dunes, oases and traditional villages. An authentic experience of discovery, culture and a change of scenery.",
      de: "Begeben Sie sich ins Herz der tunesischen Wüste und entdecken Sie einzigartige Landschaften aus goldenen Dünen, Oasen und traditionellen Dörfern. Ein authentisches Erlebnis zwischen Entdeckung, Kultur und Tapetenwechsel.",
      ru: "Отправьтесь в приключение в сердце тунисской пустыни и откройте уникальные пейзажи золотых дюн, оазисов и традиционных деревень. Подлинный опыт открытий и культуры.",
      it: "Parti all'avventura nel cuore del deserto tunisino e scopri paesaggi unici tra dune dorate, oasi e villaggi tradizionali. Un'esperienza autentica tra scoperta, cultura e cambio di scenario.",
    },
    price: { fr: 'Sur demande', en: 'On request', de: 'Auf Anfrage', ru: 'По запросу', it: 'Su richiesta' },
    unit: { fr: '/ 1 à 2 jours · max 5 pers.', en: '/ 1-2 days · max 5 people', de: '/ 1-2 Tage · max. 5 Pers.', ru: '/ 1-2 дня · макс. 5 чел.', it: '/ 1-2 giorni · max 5 pers.' },
    category: 'Désert', points: 60,
    img: desert
  },
  {
    id: 4,
    title: { fr: 'Balade à Cheval', en: 'Horseback Ride', de: 'Reittour', ru: 'Прогулка верхом на лошади', it: 'Passeggiata a cavallo' },
    desc: {
      fr: "Profitez d'une balade exceptionnelle à cheval pour explorer les magnifiques paysages de Djerba. Plages, palmeraies et couchers de soleil — un moment relaxant à vivre.",
      en: "Enjoy an exceptional horseback ride to explore Djerba's magnificent landscapes. Beaches, palm groves and sunsets — a relaxing moment to experience.",
      de: "Genießen Sie einen außergewöhnlichen Ausritt durch die herrlichen Landschaften von Djerba. Strände, Palmenhaine und Sonnenuntergänge — ein entspannender Moment.",
      ru: "Насладитесь исключительной прогулкой верхом по великолепным пейзажам Джербы. Пляжи, пальмовые рощи и закаты — незабываемые моменты.",
      it: "Goditi una passeggiata a cavallo eccezionale per esplorare i magnifici paesaggi di Djerba. Spiagge, palmeti e tramonti — un momento di relax da vivere.",
    },
    price: { fr: '20€ (70dt)', en: '20€ (70dt)', de: '20€ (70dt)', ru: '20€ (70dt)', it: '20€ (70dt)' },
    unit: { fr: '/ pers. · 1h30', en: '/ p.p. · 1h30', de: '/ Pers. · 1,5 Std', ru: '/ чел. · 1ч30', it: '/ pers. · 1h30' },
    category: 'Désert', points: 55,
    img: chameau
  },
  {
    id: 6,
    title: { fr: 'Balade à Dromadaire', en: 'Camel Ride', de: 'Kamelritt', ru: 'Прогулка на верблюде', it: 'Passeggiata in dromedario' },
    desc: {
      fr: "Vivez une balade traditionnelle à dromadaire à travers les paysages typiques de Djerba, entre plages et palmeraies.",
      en: "Experience a traditional camel ride through Djerba's typical landscapes, between beaches and palm groves.",
      de: "Erleben Sie einen traditionellen Kamelritt durch die typischen Landschaften von Djerba, zwischen Stränden und Palmenhainen.",
      ru: "Прокатитесь на верблюде по традиционному маршруту среди типичных пейзажей Джербы — пляжей и пальмовых рощ.",
      it: "Vivi una tradizionale passeggiata in dromedario tra i paesaggi tipici di Djerba, tra spiagge e palmeti.",
    },
    price: { fr: '20€ (70dt)', en: '20€ (70dt)', de: '20€ (70dt)', ru: '20€ (70dt)', it: '20€ (70dt)' },
    unit: { fr: '/ pers. · 1h', en: '/ p.p. · 1h', de: '/ Pers. · 1 Std', ru: '/ чел. · 1ч', it: '/ pers. · 1h' },
    category: 'Désert', points: 55,
    img: chameau
  },
  {
    id: 8,
    title: { fr: 'Balade en Calèche', en: 'Horse-Drawn Carriage Ride', de: 'Kutschfahrt', ru: 'Прогулка на карете', it: 'Giro in carrozza' },
    desc: {
      fr: "Découvrez Djerba à un rythme paisible à bord d'une calèche traditionnelle, idéale pour profiter en famille ou entre amis des paysages de l'île.",
      en: "Discover Djerba at a peaceful pace aboard a traditional horse-drawn carriage — perfect for enjoying the island's landscapes with family or friends.",
      de: "Entdecken Sie Djerba in aller Ruhe an Bord einer traditionellen Pferdekutsche — ideal, um die Landschaften der Insel mit Familie oder Freunden zu genießen.",
      ru: "Откройте Джербу в спокойном темпе на борту традиционной конной повозки — идеально для отдыха в кругу семьи или друзей.",
      it: "Scopri Djerba a un ritmo tranquillo a bordo di una tradizionale carrozza, ideale per goderti i paesaggi dell'isola in famiglia o con gli amici.",
    },
    price: { fr: '45€', en: '45€', de: '45€', ru: '45€', it: '45€' },
    unit: { fr: '/ pers. · 1h30 · max 6 pers.', en: '/ p.p. · 1h30 · max 6 people', de: '/ Pers. · 1,5 Std · max. 6 Pers.', ru: '/ чел. · 1ч30 · макс. 6 чел.', it: '/ pers. · 1h30 · max 6 pers.' },
    category: 'Désert', points: 50,
    img: chameau
  },
  {
    id: 5,
    title: { fr: "Tour de l'Île", en: 'Island Tour', de: 'Inselrundfahrt', ru: 'Тур по острову', it: "Giro dell'isola" },
    desc: {
      fr: "Découvrez les incontournables de Djerba à travers un circuit riche en histoire, traditions et paysages. Explorez les villages typiques, marchés locaux et sites emblématiques de l'île.",
      en: "Discover Djerba's must-sees on a tour rich in history, traditions and landscapes. Explore typical villages, local markets and the island's iconic sites.",
      de: "Entdecken Sie die Highlights von Djerba auf einer Tour voller Geschichte, Traditionen und Landschaften. Erkunden Sie typische Dörfer, lokale Märkte und ikonische Orte.",
      ru: "Откройте главные достопримечательности Джербы в туре, богатом историей, традициями и пейзажами. Посетите деревни, рынки и знаковые места острова.",
      it: "Scopri gli imperdibili di Djerba in un tour ricco di storia, tradizioni e paesaggi. Esplora villaggi tipici, mercati locali e siti iconici.",
    },
    price: { fr: '80€', en: '80€', de: '80€', ru: '80€', it: '80€' },
    unit: { fr: '/ pers.', en: '/ p.p.', de: '/ Pers.', ru: '/ чел.', it: '/ pers.' },
    category: 'Désert', points: 40,
    img: tourIle
  },
  {
    id: 7,
    title: { fr: 'Excursion Quads', en: 'Quad Bike Excursion', de: 'Quad-Tour', ru: 'Экскурсия на квадроциклах', it: 'Escursione in quad' },
    desc: {
      fr: "Faites le plein d'adrénaline avec une excursion en quad à travers pistes, dunes et chemins sauvages. Une activité idéale pour les amateurs d'aventure et de sensations fortes.",
      en: "Get your adrenaline fix with a quad bike excursion across trails, dunes and wild paths. Ideal for adventure and thrill seekers.",
      de: "Holen Sie sich Ihren Adrenalinkick bei einer Quad-Tour über Pisten, Dünen und wilde Pfade. Ideal für Abenteuer- und Nervenkitzel-Liebhaber.",
      ru: "Получите заряд адреналина на квадроциклах по тропам, дюнам и диким маршрутам. Идеально для любителей острых ощущений.",
      it: "Fai il pieno di adrenalina con un'escursione in quad tra piste, dune e sentieri selvaggi. Ideale per gli amanti dell'avventura.",
    },
    price: { fr: '25€ / 45€', en: '25€ / 45€', de: '25€ / 45€', ru: '25€ / 45€', it: '25€ / 45€' },
    unit: { fr: 'solo / duo · 1h30', en: 'solo / duo · 1h30', de: 'solo / duo · 1,5 Std', ru: 'соло / вдвоём · 1ч30', it: 'solo / duo · 1h30' },
    category: 'Mobilité', points: 50,
    img: quads
  },
  {
    id: 9,
    title: { fr: 'Jet-Ski', en: 'Jet-Ski', de: 'Jet-Ski', ru: 'Гидроцикл', it: 'Jet-Ski' },
    desc: {
      fr: "Sensations garanties à bord de nos jet-skis pour explorer le littoral de Djerba à toute vitesse.",
      en: "Guaranteed thrills aboard our jet-skis as you explore Djerba's coastline at full speed.",
      de: "Garantierter Nervenkitzel auf unseren Jet-Skis entlang der Küste von Djerba mit voller Geschwindigkeit.",
      ru: "Гарантированные острые ощущения на гидроцикле — исследуйте побережье Джербы на полной скорости.",
      it: "Emozioni garantite a bordo dei nostri jet-ski per esplorare il litorale di Djerba a tutta velocità.",
    },
    price: { fr: '85€ / 110€', en: '85€ / 110€', de: '85€ / 110€', ru: '85€ / 110€', it: '85€ / 110€' },
    unit: { fr: 'solo / duo · 1h30 (30 min à 45€)', en: 'solo / duo · 1h30 (30 min at €45)', de: 'solo / duo · 1,5 Std (30 Min für 45€)', ru: 'соло / вдвоём · 1ч30 (30 мин за 45€)', it: 'solo / duo · 1h30 (30 min a 45€)' },
    category: 'Mer', points: 60,
    img: nautique
  },
  {
    id: 11,
    title: { fr: 'Parachute Ascensionnel', en: 'Parasailing', de: 'Parasailing', ru: 'Парасейлинг', it: 'Paracadute ascensionale' },
    desc: {
      fr: "Envolez-vous au-dessus de la mer de Djerba pour une vue imprenable, en duo ou en trio.",
      en: "Take flight above Djerba's sea for a breathtaking view, in duo or trio.",
      de: "Erheben Sie sich über das Meer von Djerba für einen atemberaubenden Ausblick — zu zweit oder zu dritt.",
      ru: "Взлетите над морем Джербы ради захватывающего вида — вдвоём или втроём.",
      it: "Vola sopra il mare di Djerba per una vista mozzafiato, in coppia o in tre.",
    },
    price: { fr: '45€ / 60€', en: '45€ / 60€', de: '45€ / 60€', ru: '45€ / 60€', it: '45€ / 60€' },
    unit: { fr: 'duo / trio · 10 min', en: 'duo / trio · 10 min', de: 'duo / trio · 10 Min', ru: 'вдвоём / втроём · 10 мин', it: 'duo / trio · 10 min' },
    category: 'Mer', points: 55,
    img: nautique
  },
  {
    id: 10,
    title: { fr: 'Atelier Poterie', en: 'Pottery Workshop', de: 'Töpferworkshop', ru: 'Мастер-класс по гончарному делу', it: 'Laboratorio di ceramica' },
    desc: {
      fr: "Initiez-vous à l'artisanat traditionnel tunisien à travers un atelier de poterie convivial et créatif. Découvrez le savoir-faire local et créez votre propre souvenir unique.",
      en: "Discover traditional Tunisian craftsmanship in a friendly, creative pottery workshop. Learn the local know-how and create your own unique souvenir.",
      de: "Entdecken Sie das traditionelle tunesische Handwerk in einem geselligen, kreativen Töpferworkshop. Lernen Sie das lokale Know-how kennen und gestalten Sie Ihr eigenes Souvenir.",
      ru: "Познакомьтесь с традиционным тунисским ремеслом на творческом мастер-классе по гончарному делу и создайте уникальный сувенир.",
      it: "Scopri l'artigianato tradizionale tunisino in un laboratorio di ceramica conviviale e creativo. Impara il know-how locale e crea il tuo souvenir unico.",
    },
    price: { fr: '7€ / 15€', en: '7€ / 15€', de: '7€ / 15€', ru: '7€ / 15€', it: '7€ / 15€' },
    unit: { fr: 'enfant / adulte · 1h - 1h30', en: 'child / adult · 1h - 1h30', de: 'Kind / Erwachsener · 1-1,5 Std', ru: 'ребёнок / взрослый · 1-1,5ч', it: 'bambino / adulto · 1h - 1h30' },
    category: 'Gastronomie', points: 45,
    img: poterie
  },
  {
    id: 13,
    title: { fr: 'Découverte Culturelle', en: 'Cultural Discovery', de: 'Kulturelle Entdeckung', ru: 'Культурное открытие', it: 'Scoperta culturale' },
    desc: {
      fr: "Plongez dans l'histoire, les traditions et les saveurs de Djerba. Explorez le patrimoine local, l'artisanat traditionnel et découvrez la richesse de la gastronomie tunisienne.",
      en: "Immerse yourself in Djerba's history, traditions and flavors. Explore local heritage and traditional craftsmanship, and discover the richness of Tunisian gastronomy.",
      de: "Tauchen Sie ein in die Geschichte, Traditionen und Aromen von Djerba. Entdecken Sie das lokale Erbe, das traditionelle Handwerk und die tunesische Gastronomie.",
      ru: "Погрузитесь в историю, традиции и вкусы Джербы. Исследуйте местное наследие и откройте богатство тунисской гастрономии.",
      it: "Immergiti nella storia, nelle tradizioni e nei sapori di Djerba. Esplora il patrimonio locale e scopri la ricchezza della gastronomia tunisina.",
    },
    price: { fr: '40€', en: '40€', de: '40€', ru: '40€', it: '40€' },
    unit: { fr: '/ pers.', en: '/ p.p.', de: '/ Pers.', ru: '/ чел.', it: '/ pers.' },
    category: 'Gastronomie', points: 55,
    img: culturel
  },
];


export const PACKS: Pack[] = [
  {
    name: { fr: 'Essentiel', en: 'Essential', de: 'Essential', ru: 'Базовый', it: 'Essenziale' },
    accent: '#7a9a7a',
    badge: { fr: '', en: '', de: '', ru: '', it: '' },
    price: '99€',
    features: {
      fr: ['1 sortie Jet-Ski (30 min)', 'Livraison repas incluse', 'Support WhatsApp', 'Transfert aéroport'],
      en: ['1 Jet-Ski session (30 min)', 'Meal delivery included', 'WhatsApp support', 'Airport transfer'],
      de: ['1 Jet-Ski-Ausfahrt (30 Min)', 'Essenslieferung inklusive', 'WhatsApp-Support', 'Flughafentransfer'],
      ru: ['1 сессия на гидроцикле (30 мин)', 'Доставка еды включена', 'Поддержка в WhatsApp', 'Трансфер из аэропорта'],
      it: ['1 uscita in Jet-Ski (30 min)', 'Consegna pasti inclusa', 'Supporto WhatsApp', 'Transfer aeroporto'],
    },
  },
  {
    name: { fr: 'VIP', en: 'VIP', de: 'VIP', ru: 'VIP', it: 'VIP' },
    accent: '#C9A84C',
    badge: { fr: '⭐ Populaire', en: '⭐ Popular', de: '⭐ Beliebt', ru: '⭐ Популярный', it: '⭐ Popolare' },
    price: '269€',
    features: {
      fr: ['Bateau privatisé ½ journée', 'Jet-Ski illimité 1h', 'Brunch VIP inclus', 'Location voiture 1 jour', 'Support 24/7'],
      en: ['Private boat ½ day', 'Unlimited Jet-Ski 1h', 'VIP brunch included', 'Car rental 1 day', '24/7 support'],
      de: ['Privates Boot ½ Tag', 'Unbegrenzt Jet-Ski 1 Std', 'VIP-Brunch inklusive', 'Autovermietung 1 Tag', '24/7-Support'],
      ru: ['Частная лодка на полдня', 'Безлимитный гидроцикл 1ч', 'VIP-бранч включён', 'Аренда авто на 1 день', 'Поддержка 24/7'],
      it: ['Barca privata ½ giornata', 'Jet-Ski illimitato 1h', 'Brunch VIP incluso', 'Noleggio auto 1 giorno', 'Supporto 24/7'],
    },
  },
  {
    name: { fr: 'Prestige', en: 'Prestige', de: 'Prestige', ru: 'Престиж', it: 'Prestige' },
    accent: '#F5E07A',
    badge: { fr: '👑 Best', en: '👑 Best', de: '👑 Best', ru: '👑 Лучший', it: '👑 Best' },
    price: '745€',
    features: {
      fr: ['Bateau privatisé journée', 'Jet-Ski illimité', 'Excursion désert 2j', 'Brunch + Dîner VIP', 'Location voiture 3j', 'Guide privé'],
      en: ['Private boat full day', 'Unlimited Jet-Ski', 'Desert excursion 2 days', 'VIP brunch + dinner', 'Car rental 3 days', 'Private guide'],
      de: ['Privates Boot ganztags', 'Unbegrenzt Jet-Ski', 'Wüstenausflug 2 Tage', 'VIP-Brunch + Abendessen', 'Autovermietung 3 Tage', 'Privater Guide'],
      ru: ['Частная лодка на весь день', 'Безлимитный гидроцикл', 'Экскурсия в пустыню на 2 дня', 'VIP-бранч + ужин', 'Аренда авто на 3 дня', 'Личный гид'],
      it: ['Barca privata giornata intera', 'Jet-Ski illimitato', 'Escursione deserto 2gg', 'Brunch + Cena VIP', 'Noleggio auto 3gg', 'Guida privata'],
    },
  },
];

export const REVIEWS: Review[] = [
  {
    name: 'Sophie M.', flag: '🇫🇷', stars: 5,
    text: {
      fr: "Expérience inoubliable ! Le tour en bateau était magnifique.",
      en: "An unforgettable experience! The boat tour was magnificent.",
      de: "Ein unvergessliches Erlebnis! Die Bootstour war wunderschön.",
      ru: "Незабываемые впечатления! Прогулка на лодке была великолепной.",
      it: "Un'esperienza indimenticabile! Il tour in barca è stato magnifico.",
    },
  },
  {
    name: 'Karim B.', flag: '🇩🇿', stars: 5,
    text: {
      fr: "Djerba activities a rendu mon séjour vraiment exceptionnel !",
      en: "Djerba Activities made my stay truly exceptional!",
      de: "Djerba Activities hat meinen Aufenthalt wirklich außergewöhnlich gemacht!",
      ru: "Djerba Activities сделали моё пребывание по-настоящему незабываемым!",
      it: "Djerba Activities ha reso il mio soggiorno davvero eccezionale!",
    },
  },
  {
    name: 'Marie D.', flag: '🇧🇪', stars: 5,
    text: {
      fr: "Organisation au top. L'excursion dans le désert était magique.",
      en: "Top-notch organization. The desert excursion was magical.",
      de: "Top-Organisation. Der Wüstenausflug war magisch.",
      ru: "Отличная организация. Экскурсия в пустыню была волшебной.",
      it: "Organizzazione impeccabile. L'escursione nel deserto è stata magica.",
    },
  },
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