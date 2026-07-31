export type Lang = 'fr' | 'en' | 'de' | 'ru' | 'it';

export const LANGUAGES: { code: Lang; flag: string; label: string }[] = [
  { code: 'fr', flag: '🇫🇷', label: 'Français' },
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'de', flag: '🇩🇪', label: 'Deutsch' },
  { code: 'ru', flag: '🇷🇺', label: 'Русский' },
  { code: 'it', flag: '🇮🇹', label: 'Italiano' },
];

export const T = {
  // ── Nav / global ──
  nav: {
    home:       { fr: 'Accueil',     en: 'Home',        de: 'Startseite', ru: 'Главная',     it: 'Home'         },
    activities: { fr: 'Activités',   en: 'Activities',  de: 'Aktivitäten', ru: 'Активности', it: 'Attività'     },
    packages:   { fr: 'Formules',    en: 'Packages',    de: 'Pakete',      ru: 'Пакеты',     it: 'Pacchetti'    },
    booking:    { fr: 'Réservation', en: 'Booking',     de: 'Buchung',     ru: 'Бронирование', it: 'Prenotazione'  },
    contact:    { fr: 'Contact',     en: 'Contact',     de: 'Kontakt',     ru: 'Контакт',    it: 'Contatto'     },
  },

  // ── HomePage ──
  home: {
    badge:      { fr: '✦ Djerba, Tunisie ✦', en: '✦ Djerba, Tunisia ✦', de: '✦ Djerba, Tunesien ✦', ru: '✦ Джерба, Тунис ✦', it: '✦ Djerba, Tunisia ✦' },
    h1a:        { fr: 'Les meilleures',       en: 'The best',            de: 'Die besten',            ru: 'Лучшие',            it: 'Le migliori'         },
    h1b:        { fr: 'activités',            en: 'activities',          de: 'Aktivitäten',           ru: 'развлечения',       it: 'attività'            },
    h1c:        { fr: 'à Djerba —',           en: 'in Djerba —',         de: 'auf Djerba —',          ru: 'на Джербе —',       it: 'a Djerba —'          },
    h1d:        { fr: 'au même endroit',      en: 'all in one place',    de: 'alles an einem Ort',    ru: 'в одном месте',     it: 'tutto in un posto'   },
    subtitle:   {
      fr: 'Jet-ski, bateaux privatisés, excursions dans le désert, cuisine locale et bien plus. Une île, mille façons de s\'évader.',
      en: 'Jet-ski, private boats, desert excursions, local cuisine and much more. One island, a thousand ways to escape.',
      de: 'Jet-Ski, private Boote, Wüstenausflüge, lokale Küche und vieles mehr. Eine Insel, tausend Möglichkeiten zu entfliehen.',
      ru: 'Гидроциклы, частные яхты, пустынные экскурсии, местная кухня и многое другое. Один остров — тысяча способов отдохнуть.',
      it: 'Moto d\'acqua, barche private, escursioni nel deserto, cucina locale e molto altro. Un\'isola, mille modi per evadere.',
    },
    cta1:       { fr: 'Découvrir les activités 🌴', en: 'Explore Activities 🌴', de: 'Aktivitäten entdecken 🌴', ru: 'Смотреть активности 🌴', it: 'Scopri le attività 🌴'   },
    cta2:       { fr: 'Voir les formules',           en: 'View Packages',        de: 'Pakete ansehen',           ru: 'Смотреть пакеты',       it: 'Vedi i pacchetti'        },
    stat_clients:    { fr: 'Clients',    en: 'Clients',    de: 'Kunden',     ru: 'Клиентов',  it: 'Clienti'    },
    stat_activities: { fr: 'Activités', en: 'Activities', de: 'Aktivitäten', ru: 'Активностей', it: 'Attività'    },
    stat_rating:     { fr: 'Note Moy.', en: 'Avg Rating', de: 'Ø Bewertung', ru: 'Рейтинг',   it: 'Valutazione'},
    stat_support:    { fr: 'Support',   en: 'Support',    de: 'Support',     ru: 'Поддержка', it: 'Supporto'   },
    reviews_label:   { fr: '✦ Témoignages ✦',         en: '✦ Reviews ✦',      de: '✦ Bewertungen ✦',    ru: '✦ Отзывы ✦',            it: '✦ Recensioni ✦'          },
    reviews_title:   { fr: 'Ce que disent nos',        en: 'What our',         de: 'Was unsere',         ru: 'Что говорят наши',       it: 'Cosa dicono i nostri'    },
    reviews_title2:  { fr: 'clients',                  en: 'clients say',      de: 'Kunden sagen',       ru: 'клиенты',               it: 'clienti'                 },
  },

  // ── ActivitiesPage ──
  activities: {
    label:      { fr: '✦ Ce que nous offrons ✦', en: '✦ What we offer ✦',     de: '✦ Unser Angebot ✦',    ru: '✦ Наши предложения ✦', it: '✦ La nostra offerta ✦'   },
    title:      { fr: 'Nos',                      en: 'Our',                    de: 'Unsere',               ru: 'Наши',                 it: 'Le nostre'               },
    title2:     { fr: 'Activités',                en: 'Activities',             de: 'Aktivitäten',          ru: 'Активности',           it: 'Attività'                },
    filter_all: { fr: 'Tous',                     en: 'All',                    de: 'Alle',                 ru: 'Все',                  it: 'Tutti'                   },
    book_btn:   { fr: 'Réserver',                 en: 'Book now',               de: 'Buchen',               ru: 'Забронировать',        it: 'Prenota'                 },
    per_person: { fr: '/ pers.',                  en: '/ p.p.',                 de: '/ Pers.',              ru: '/ чел.',               it: '/ pers.'                 },
  },

  // ── PackagesPage ──
  packages: {
    label:      { fr: '✦ Nos Formules ✦',               en: '✦ Our Packages ✦',             de: '✦ Unsere Pakete ✦',             ru: '✦ Наши Пакеты ✦',              it: '✦ I nostri Pacchetti ✦'        },
    title:      { fr: 'Choisissez votre',               en: 'Choose your',                  de: 'Wählen Sie Ihr',                ru: 'Выберите свой',                it: 'Scegli il tuo'                 },
    title2:     { fr: 'Formule',                        en: 'Package',                       de: 'Paket',                         ru: 'Пакет',                        it: 'Pacchetto'                     },
    subtitle:   { fr: 'Des formules sur mesure pour chaque envie.', en: 'Tailor-made packages for every wish.', de: 'Maßgeschneiderte Pakete für jeden Wunsch.', ru: 'Индивидуальные пакеты на любой вкус.', it: 'Pacchetti su misura per ogni desiderio.' },
    per_person: { fr: '/ pers.', en: '/ p.p.', de: '/ Pers.', ru: '/ чел.', it: '/ pers.' },
    book_pack:  { fr: 'Réserver ce pack', en: 'Book this pack', de: 'Paket buchen', ru: 'Забронировать', it: 'Prenota ora'  },
  },

  // ── BookingPage ──
  booking: {
    label:      { fr: '✦ Réservation ✦',               en: '✦ Booking ✦',                  de: '✦ Buchung ✦',                   ru: '✦ Бронирование ✦',             it: '✦ Prenotazione ✦'              },
    title1:     { fr: 'Réservez votre',                 en: 'Book your',                    de: 'Buchen Sie Ihr',                ru: 'Забронируйте свой',            it: 'Prenota la tua'                },
    title2:     { fr: 'expérience',                     en: 'experience',                   de: 'Erlebnis',                      ru: 'опыт',                         it: 'esperienza'                    },
    subtitle:   { fr: 'En 3 étapes simples — confirmation directe par WhatsApp', en: '3 simple steps — direct WhatsApp confirmation', de: '3 einfache Schritte — direkte WhatsApp-Bestätigung', ru: '3 простых шага — подтверждение через WhatsApp', it: '3 semplici passi — conferma diretta via WhatsApp' },
    step1:      { fr: 'Activité',      en: 'Activity',     de: 'Aktivität',   ru: 'Активность', it: 'Attività'   },
    step2:      { fr: 'Vos infos',     en: 'Your info',    de: 'Ihre Daten',  ru: 'Ваши данные', it: 'I tuoi dati' },
    step3:      { fr: 'Confirmer',     en: 'Confirm',      de: 'Bestätigen',  ru: 'Подтвердить', it: 'Confermare'  },
    choose_act: { fr: 'Choisissez l\'activité que vous souhaitez réserver :', en: 'Choose the activity you want to book:', de: 'Wählen Sie die gewünschte Aktivität:', ru: 'Выберите активность для бронирования:', it: 'Scegli l\'attività da prenotare:' },
    next_info:  { fr: 'Suivant — Vos informations →', en: 'Next — Your info →', de: 'Weiter — Ihre Daten →', ru: 'Далее — Ваши данные →', it: 'Avanti — I tuoi dati →' },
    chosen_act: { fr: 'Activité choisie', en: 'Chosen activity', de: 'Gewählte Aktivität', ru: 'Выбранная активность', it: 'Attività scelta' },
    change:     { fr: 'Changer', en: 'Change', de: 'Ändern', ru: 'Изменить', it: 'Cambiare' },
    your_info:  { fr: '👤 Vos coordonnées', en: '👤 Your details', de: '👤 Ihre Kontaktdaten', ru: '👤 Ваши данные', it: '👤 I tuoi dati' },
    full_name:  { fr: 'Nom complet', en: 'Full name', de: 'Vollständiger Name', ru: 'Полное имя', it: 'Nome completo' },
    email:      { fr: 'Email', en: 'Email', de: 'E-Mail', ru: 'Эл. почта', it: 'Email' },
    email_or_phone: { fr: '— email ou téléphone requis', en: '— email or phone required', de: '— E-Mail oder Telefon erforderlich', ru: '— email или телефон обязательны', it: '— email o telefono richiesti' },
    phone:      { fr: 'Téléphone / WhatsApp', en: 'Phone / WhatsApp', de: 'Telefon / WhatsApp', ru: 'Телефон / WhatsApp', it: 'Telefono / WhatsApp' },
    details:    { fr: '📅 Détails', en: '📅 Details', de: '📅 Details', ru: '📅 Детали', it: '📅 Dettagli' },
    date:       { fr: 'Date souhaitée', en: 'Preferred date', de: 'Gewünschtes Datum', ru: 'Желаемая дата', it: 'Data preferita' },
    people:     { fr: 'Nombre de personnes', en: 'Number of people', de: 'Anzahl Personen', ru: 'Количество человек', it: 'Numero di persone' },
    person:     { fr: 'personne', en: 'person', de: 'Person', ru: 'человек', it: 'persona' },
    persons:    { fr: 'personnes', en: 'people', de: 'Personen', ru: 'человек', it: 'persone' },
    note:       { fr: 'Note optionnelle', en: 'Optional note', de: 'Optionale Notiz', ru: 'Примечание (необязательно)', it: 'Nota (facoltativa)' },
    note_ph:    { fr: 'Préférence matin, allergie, demande spéciale...', en: 'Morning preference, allergy, special request...', de: 'Morgenpräferenz, Allergie, Sonderwunsch...', ru: 'Пожелания, аллергии, особые запросы...', it: 'Preferenze, allergie, richieste speciali...' },
    required:   { fr: '* Nom + date + (email ou téléphone) sont requis pour continuer', en: '* Name + date + (email or phone) are required', de: '* Name + Datum + (E-Mail oder Telefon) sind erforderlich', ru: '* Имя + дата + (email или телефон) обязательны', it: '* Nome + data + (email o telefono) sono obbligatori' },
    back:       { fr: '← Retour', en: '← Back', de: '← Zurück', ru: '← Назад', it: '← Indietro' },
    next_confirm: { fr: 'Suivant — Confirmer →', en: 'Next — Confirm →', de: 'Weiter — Bestätigen →', ru: 'Далее — Подтвердить →', it: 'Avanti — Confermare →' },
    check_booking: { fr: 'Vérifiez votre réservation avant d\'envoyer :', en: 'Review your booking before sending:', de: 'Überprüfen Sie Ihre Buchung vor dem Absenden:', ru: 'Проверьте бронирование перед отправкой:', it: 'Verifica la prenotazione prima di inviare:' },
    client_section: { fr: '👤 Client', en: '👤 Client', de: '👤 Kunde', ru: '👤 Клиент', it: '👤 Cliente' },
    booking_section: { fr: '🎯 Réservation', en: '🎯 Booking', de: '🎯 Buchung', ru: '🎯 Бронирование', it: '🎯 Prenotazione' },
    recap_activity: { fr: 'Activité', en: 'Activity', de: 'Aktivität', ru: 'Активность', it: 'Attività' },
    recap_date:     { fr: 'Date', en: 'Date', de: 'Datum', ru: 'Дата', it: 'Data' },
    recap_people:   { fr: 'Personnes', en: 'People', de: 'Personen', ru: 'Чел.', it: 'Pers.' },
    recap_price:    { fr: 'Prix est.', en: 'Est. price', de: 'Geschätzter Preis', ru: 'Прим. цена', it: 'Prezzo est.' },
    recap_note:     { fr: 'Note', en: 'Note', de: 'Notiz', ru: 'Примечание', it: 'Nota' },
    wa_info:        { fr: '💬 Vos coordonnées + détails seront envoyés sur notre WhatsApp. Nous vous confirmons la disponibilité rapidement.', en: '💬 Your details will be sent to our WhatsApp. We will confirm availability promptly.', de: '💬 Ihre Daten werden an unser WhatsApp gesendet. Wir bestätigen die Verfügbarkeit schnell.', ru: '💬 Ваши данные будут отправлены в наш WhatsApp. Мы подтвердим наличие мест в ближайшее время.', it: '💬 I tuoi dati verranno inviati al nostro WhatsApp. Confermeremo la disponibilità al più presto.' },
    confirm_wa:     { fr: '💬 Confirmer via WhatsApp', en: '💬 Confirm via WhatsApp', de: '💬 Per WhatsApp bestätigen', ru: '💬 Подтвердить через WhatsApp', it: '💬 Conferma via WhatsApp' },
    edit:           { fr: '← Modifier', en: '← Edit', de: '← Bearbeiten', ru: '← Изменить', it: '← Modifica' },
    new_booking:    { fr: 'Nouvelle réservation', en: 'New booking', de: 'Neue Buchung', ru: 'Новое бронирование', it: 'Nuova prenotazione' },
  },

  // ── ContactPage ──
  contact: {
    label:     { fr: '✦ Contactez-nous ✦',        en: '✦ Contact us ✦',          de: '✦ Kontaktieren Sie uns ✦',    ru: '✦ Свяжитесь с нами ✦',         it: '✦ Contattaci ✦'                },
    title1:    { fr: 'Prêt pour votre',            en: 'Ready for your',           de: 'Bereit für Ihr',              ru: 'Готовы к своему',               it: 'Pronto per la tua'             },
    title2:    { fr: 'aventure VIP ?',             en: 'VIP adventure?',           de: 'VIP-Abenteuer?',              ru: 'VIP-приключению?',              it: 'avventura VIP?'                },
    subtitle:  { fr: 'Notre équipe est disponible 24h/24.', en: 'Our team is available 24/7.', de: 'Unser Team ist rund um die Uhr erreichbar.', ru: 'Наша команда доступна круглосуточно.', it: 'Il nostro team è disponibile 24/7.' },
    your_name: { fr: 'Votre nom',                  en: 'Your name',                de: 'Ihr Name',                    ru: 'Ваше имя',                      it: 'Il tuo nome'                   },
    email_wa:  { fr: 'Email ou WhatsApp',          en: 'Email or WhatsApp',        de: 'E-Mail oder WhatsApp',        ru: 'Email или WhatsApp',            it: 'Email o WhatsApp'              },
    message:   { fr: 'Votre message',              en: 'Your message',             de: 'Ihre Nachricht',              ru: 'Ваше сообщение',               it: 'Il tuo messaggio'              },
    msg_ph:    { fr: 'Dites-nous ce que vous souhaitez réserver...', en: 'Tell us what you want to book...', de: 'Sagen Sie uns, was Sie buchen möchten...', ru: 'Расскажите, что вы хотите забронировать...', it: 'Dicci cosa vuoi prenotare...' },
    send:      { fr: 'Envoyer le message ✉️',       en: 'Send message ✉️',          de: 'Nachricht senden ✉️',         ru: 'Отправить сообщение ✉️',        it: 'Invia messaggio ✉️'            },
    or_wa:     { fr: 'Ou directement sur WhatsApp', en: 'Or directly on WhatsApp', de: 'Oder direkt über WhatsApp',  ru: 'Или напрямую в WhatsApp',       it: 'O direttamente su WhatsApp'    },
    sent_title: { fr: 'Message envoyé !', en: 'Message sent!', de: 'Nachricht gesendet!', ru: 'Сообщение отправлено!', it: 'Messaggio inviato!' },
    sent_sub:   { fr: 'Notre équipe vous répondra dans les plus brefs délais.', en: 'Our team will get back to you as soon as possible.', de: 'Unser Team wird sich so schnell wie möglich melden.', ru: 'Наша команда ответит вам как можно скорее.', it: 'Il nostro team ti risponderà il prima possibile.' },
    new_msg:    { fr: 'Nouveau message', en: 'New message', de: 'Neue Nachricht', ru: 'Новое сообщение', it: 'Nuovo messaggio' },
    name_ph:    { fr: 'Sophie Martin', en: 'John Smith', de: 'Max Müller', ru: 'Иван Иванов', it: 'Marco Rossi' },
  },
} as const;

/** Helper : t(T.home.badge, lang) → string */
export function t(entry: Record<Lang, string>, lang: Lang): string {
  return entry[lang] ?? entry['fr'];
}
