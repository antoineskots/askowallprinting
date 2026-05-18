/* ===== NAVBAR SCROLL ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* ===== MOBILE NAV ===== */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
function toggleNav() {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
}
function closeNav() {
  navToggle.classList.remove('open');
  navLinks.classList.remove('open');
}

/* ===== LANGUAGE PICKER ===== */
const langPicker = document.getElementById('langPicker');
const langBtn = document.getElementById('langBtn');
const langLabel = document.getElementById('langLabel');
const langOptions = document.querySelectorAll('.lang-option');

// Toggle dropdown
langBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  langPicker.classList.toggle('open');
});

// Close on outside click
document.addEventListener('click', () => {
  langPicker.classList.remove('open');
});

// Prevent closing when clicking inside the dropdown itself
langPicker.addEventListener('click', (e) => {
  e.stopPropagation();
});

// Translation data
const translations = {
  en: {
    // Navbar
    navServices: 'Services',
    navPortfolio: 'Portfolio',
    navProcess: 'Process',
    navContact: 'Contact',
    navCta: 'Get a Quote',
    // Hero
    heroHeadline1: 'YOUR WALLS.',
    heroHeadline2: 'YOUR VISION.',
    heroSub: 'Large-format wall printing for spaces that demand attention. Based in Montreal, built for bold ideas.',
    heroBtnPrimary: 'Get a Free Quote',
    heroBtnSecondary: 'View Our Work',
    // Ticker
    tickerItems: ['Restaurants', 'Offices', 'Retail', 'Homes', 'Hotels', 'Gyms', 'Galleries', 'Cafés', 'Schools', 'Clinics', 'Studios', 'Festivals'],
    // Services
    servicesLabel: 'What We Do',
    servicesTitle: 'Services',
    service1Tag: 'Exterior',
    service1Title: 'Outdoor Murals',
    service1Desc: 'Weather-resistant, UV-protected prints that dominate any exterior wall. Built to last seasons and turn heads year-round.',
    service2Tag: 'Interior',
    service2Title: 'Indoor Walls',
    service2Desc: "Transform lobbies, hallways, and workspaces with crisp, high-resolution wall graphics that reflect your brand's identity.",
    service3Tag: 'Bespoke',
    service3Title: 'Custom Décor',
    service3Desc: 'From textured finishes to artistic one-offs — we create fully custom wall décor pieces tailored to your space and taste.',
    // Value Proposition
    valuePropHeadline: 'Transform blank walls<br>into <span class="accent">visual statements</span>',
    valuePropSub: 'We print directly on walls — no vinyl, no seams. Just durable, high-quality, custom mural solutions that make an impact.',
    benefit1Title: 'Strong Visual Impact',
    benefit1Desc: 'Bold, large-format prints that command attention and transform any environment.',
    benefit2Title: 'Clean, Modern Finish',
    benefit2Desc: 'No seams, no peeling edges — just a seamless, premium result every time.',
    benefit3Title: 'On-Site Installation',
    benefit3Desc: 'Our crew comes to you — professional setup done in hours, not days.',
    benefit4Title: 'Durable & Professional',
    benefit4Desc: 'UV-protected, weather-resistant results built to withstand time and traffic.',
    benefit5Title: 'Fully Customized',
    benefit5Desc: 'Every design and layout is tailored to your space, brand, and vision.',
    // Portfolio
    portfolioLabel: 'Selected Work',
    portfolioTitle: 'Portfolio',
    portfolio1Tag: 'Custom Mural',
    portfolio1Title: "Children's Room Mural",
    portfolio1Desc: "A vibrant Lion King scene printed directly onto the wall — bringing imagination to life in a child's bedroom.",
    portfolio2Tag: 'Corporate Signage',
    portfolio2Title: 'Office Wayfinding',
    portfolio2Desc: 'Professional directory signage printed in-situ for a corporate campus — clean, precise, and installation-ready.',
    portfolio3Tag: 'Interior Décor',
    portfolio3Title: 'Vintage World Map',
    portfolio3Desc: 'An antique-style world map mural spanning an entire lobby wall — a bold statement piece for a boutique hotel.',
    portfolio4Tag: 'Object Printing',
    portfolio4Title: 'Custom Bin Graphics',
    portfolio4Desc: 'Detailed iconography and labeling printed directly onto recycling stations — durable, precise, and brand-aligned.',
    // Video Portfolio
    portfolioV1Tag: 'Wall Print',
    portfolioV1Title: 'Raccoon Mural',
    portfolioV1Desc: 'Watch our wall printer bring a detailed raccoon illustration to life — printed directly on the surface.',
    portfolioV2Tag: 'Wall Print',
    portfolioV2Title: 'Astronaut Mural',
    portfolioV2Desc: 'A stunning astronaut mural printed stroke by stroke — see the precision of direct wall printing in action.',
    portfolioV3Tag: 'Wall Print',
    portfolioV3Title: 'Coffee Art Print',
    portfolioV3Desc: 'A rich coffee-themed mural — perfect for cafés and restaurants, printed with precision on any wall surface.',
    portfolioV4Tag: 'Wall Print',
    portfolioV4Title: 'Phone Box Mural',
    portfolioV4Desc: 'A classic London phone box — printed with vivid colors and crisp detail directly on an interior wall.',
    portfolioV5Tag: 'Wall Print',
    portfolioV5Title: 'Custom Print',
    portfolioV5Desc: "Another stunning mural showcase — demonstrating our wall printer's precision across any design style.",
    // Process
    processLabel: 'How It Works',
    processTitle: 'Our Process',
    step1Title: 'Consult',
    step1Desc: 'We visit your space, take measurements, and learn about your vision and goals.',
    step2Title: 'Design',
    step2Desc: 'Our team creates custom mockups and renders fitted to your exact wall dimensions.',
    step3Title: 'Print & Install',
    step3Desc: 'High-resolution printing on premium materials — vibrant, durable, and detail-perfect. Professional on-site installation by our crew, done in hours — not days.',
    // Contact
    contactLabel: 'Get In Touch',
    contactHeading: "Let's Make<br>Your Walls<br>Unforgettable.",
    contactDesc: "Whether you've got a design ready or just an idea, we'll help you bring it to life. Drop us a message and we'll get back to you within 24 hours.",
    contactLocation: 'Montreal, QC — Canada',
    contactEmail: 'hello@muralmtl.com',
    contactPhone: '(438) 936-6478',
    formName: 'Your Name',
    formNamePlaceholder: 'Full name',
    formEmail: 'Email Address',
    formEmailPlaceholder: 'you@email.com',
    formProject: 'Project Type',
    formProjectDefault: 'Select a project type',
    formProjectOutdoor: 'Outdoor Mural',
    formProjectIndoor: 'Indoor Wall',
    formProjectCustom: 'Custom Décor',
    formProjectOther: 'Other / Not Sure',
    formMessage: 'Message',
    formMessagePlaceholder: 'Tell us about your project — size, location, timeline, inspiration...',
    formSubmit: 'Send Quote Request',
    // Footer
    footerCopy: '© 2026 ASKO Wallprinting — All rights reserved.',
    // FAQ
    faqLabel: 'Got Questions?',
    faqTitle: 'FAQ',
    faq1Q: 'What is wall printing?',
    faq1A: 'Wall printing is a new technology that uses a vertical inkjet printer to print directly onto walls, floors, or other flat surfaces. Think of it like a giant printer that creates custom murals with precision, vibrant color, and durability.',
    faq2Q: 'Is it safe?',
    faq2A: 'Yes. The inks are eco-friendly, odorless, and safe for kids and pets. They dry quickly and won\'t damage your walls.',
    faq3Q: 'What surfaces can you print on?',
    faq3A: 'We can print on most flat indoor and outdoor surfaces, including drywall, plaster, brick, wood, glass, tile, and concrete. If the surface is smooth and clean, we can likely print on it.',
    faq4Q: 'Can I remove or replace the mural later?',
    faq4A: 'Yes. Prints can be painted over like a normal wall. If you\'d like a new design, we can print directly over the old one as well.',
    faq5Q: 'How big can prints be?',
    faq5A: 'There\'s no limit to the width — we can keep printing seamlessly across large walls. The maximum height is typically up to 13 feet, but extensions can be used for taller spaces.',
    faq6Q: 'Do you design artwork too, or do I need to supply it?',
    faq6A: 'Both options are available. You can provide your own artwork or we can help with custom design services, including photo prep, graphics, and consultation.',
    faq7Q: 'How durable is the print?',
    faq7A: 'Indoor murals last 10–12 years, while outdoor prints can last 5+ years depending on exposure. For added protection, we can apply a clear protective coat to extend the life of your mural.',
    faq8Q: 'How much does it cost?',
    faq8A: 'Pricing depends on wall size, complexity, and location. Since every project is unique, we provide a free custom quote after reviewing your wall and artwork.',
    faq9Q: 'How long does it take?',
    faq9A: 'Most projects can be completed in just a few hours. Larger walls or multiple surfaces may take a full day or more. There\'s no messy cleanup — once the print is done, it\'s ready to enjoy.',
    faq10Q: 'Who are your clients?',
    faq10A: 'We work with homeowners, gyms, schools, offices, restaurants, retail stores, real estate developers, and more. Anywhere there\'s a wall, there\'s an opportunity.',
    faq11Q: 'Do you only print indoors?',
    faq11A: 'No — we print indoors and outdoors. Exterior walls, garages, storefronts, fences, and even floors are all possible.',
    faq12Q: 'How do I book a mural?',
    faq12A: 'Simply contact us through our website or call us to book a free consultation. We\'ll review your space, confirm artwork, and schedule your installation.'
  },
  fr: {
    // Navbar
    navServices: 'Services',
    navPortfolio: 'Portfolio',
    navProcess: 'Processus',
    navContact: 'Contact',
    navCta: 'Obtenir un devis',
    // Hero
    heroHeadline1: 'VOS MURS.',
    heroHeadline2: 'VOTRE VISION.',
    heroSub: "Impression murale grand format pour des espaces qui marquent les esprits. Basé à Montréal, conçu pour les idées audacieuses.",
    heroBtnPrimary: 'Devis gratuit',
    heroBtnSecondary: 'Voir nos réalisations',
    // Ticker
    tickerItems: ['Restaurants', 'Bureaux', 'Commerce', 'Maisons', 'Hôtels', 'Gyms', 'Galeries', 'Cafés', 'Écoles', 'Cliniques', 'Studios', 'Festivals'],
    // Services
    servicesLabel: 'Ce que nous faisons',
    servicesTitle: 'Services',
    service1Tag: 'Extérieur',
    service1Title: 'Murales extérieures',
    service1Desc: "Impressions résistantes aux intempéries et protégées contre les UV qui dominent n'importe quel mur extérieur. Conçues pour durer et impressionner à longueur d'année.",
    service2Tag: 'Intérieur',
    service2Title: 'Murs intérieurs',
    service2Desc: "Transformez halls, couloirs et espaces de travail avec des graphiques muraux haute résolution qui reflètent l'identité de votre marque.",
    service3Tag: 'Sur mesure',
    service3Title: 'Décor personnalisé',
    service3Desc: 'Des finitions texturées aux créations artistiques uniques — nous créons des pièces de décor mural entièrement personnalisées selon votre espace et vos goûts.',
    // Value Proposition
    valuePropHeadline: 'Transformez vos murs vides<br>en <span class="accent">déclarations visuelles</span>',
    valuePropSub: 'Nous imprimons directement sur les murs — pas de vinyle, pas de joints. Des solutions murales durables, de haute qualité et personnalisées.',
    benefit1Title: 'Impact visuel fort',
    benefit1Desc: 'Des impressions grand format audacieuses qui captent l\'attention et transforment tout environnement.',
    benefit2Title: 'Finition propre et moderne',
    benefit2Desc: 'Pas de joints, pas de bords décollés — juste un résultat premium et sans couture à chaque fois.',
    benefit3Title: 'Installation sur site',
    benefit3Desc: 'Notre équipe se déplace chez vous — installation professionnelle en quelques heures, pas en jours.',
    benefit4Title: 'Durable et professionnel',
    benefit4Desc: 'Des résultats protégés contre les UV et résistants aux intempéries, conçus pour durer.',
    benefit5Title: 'Entièrement personnalisé',
    benefit5Desc: 'Chaque design et mise en page est adapté à votre espace, votre marque et votre vision.',
    // Portfolio
    portfolioLabel: 'Travaux sélectionnés',
    portfolioTitle: 'Portfolio',
    portfolio1Tag: 'Murale personnalisée',
    portfolio1Title: "Murale chambre d'enfant",
    portfolio1Desc: "Une scène vibrante du Roi Lion imprimée directement sur le mur — donnant vie à l'imagination dans une chambre d'enfant.",
    portfolio2Tag: 'Signalétique',
    portfolio2Title: 'Orientation bureaux',
    portfolio2Desc: "Signalétique directionnelle professionnelle imprimée sur place pour un campus d'entreprise — propre, précise et prête à l'emploi.",
    portfolio3Tag: 'Décor intérieur',
    portfolio3Title: 'Carte du monde vintage',
    portfolio3Desc: "Une murale de carte du monde antique couvrant un mur entier de lobby — une pièce maîtresse audacieuse pour un hôtel boutique.",
    portfolio4Tag: "Impression d'objets",
    portfolio4Title: 'Graphiques de bacs',
    portfolio4Desc: "Iconographie et étiquetage détaillés imprimés directement sur les stations de recyclage — durables, précis et alignés avec la marque.",
    // Video Portfolio
    portfolioV1Tag: 'Impression murale',
    portfolioV1Title: 'Murale Raton Laveur',
    portfolioV1Desc: 'Regardez notre imprimante murale donner vie à une illustration détaillée de raton laveur — imprimée directement sur la surface.',
    portfolioV2Tag: 'Impression murale',
    portfolioV2Title: 'Murale Astronaute',
    portfolioV2Desc: 'Une murale d\'astronaute époustouflante imprimée trait par trait — découvrez la précision de l\'impression murale directe.',
    portfolioV3Tag: 'Impression murale',
    portfolioV3Title: 'Impression Café',
    portfolioV3Desc: 'Une murale sur le thème du café — parfaite pour les cafés et restaurants, imprimée avec précision sur toute surface murale.',
    portfolioV4Tag: 'Impression murale',
    portfolioV4Title: 'Signalisation de bureau',
    portfolioV4Desc: 'Transformez les murs de bureau ternes en signalisation directionnelle professionnelle avec une impression de précision. Épuré, moderne et imprimé directement sur la surface pour un look haut de gamme qui dure.',
    portfolioV5Tag: 'Impression murale',
    portfolioV5Title: 'Impression Personnalisée',
    portfolioV5Desc: 'Une autre vitrine murale époustouflante — démontrant la précision de notre imprimante sur tout style de design.',
    // Process
    processLabel: 'Comment ça marche',
    processTitle: 'Notre processus',
    step1Title: 'Consultation',
    step1Desc: 'Nous visitons votre espace, prenons les mesures et découvrons votre vision et vos objectifs.',
    step2Title: 'Design',
    step2Desc: 'Notre équipe crée des maquettes personnalisées et des rendus adaptés aux dimensions exactes de votre mur.',
    step3Title: 'Impression & Installation',
    step3Desc: "Impression haute résolution sur matériaux premium — vibrante, durable et parfaite dans les détails. Installation professionnelle sur site par notre équipe, en quelques heures — pas en jours.",
    // Contact
    contactLabel: 'Contactez-nous',
    contactHeading: 'Rendons vos<br>murs<br>inoubliables.',
    contactDesc: "Que vous ayez un design prêt ou juste une idée, nous vous aiderons à le concrétiser. Envoyez-nous un message et nous vous répondrons dans les 24 heures.",
    contactLocation: 'Montréal, QC — Canada',
    contactEmail: 'contact@askowallprinting.com',
    contactPhone: '(438) 936-6478',
    formName: 'Votre nom',
    formNamePlaceholder: 'Nom complet',
    formEmail: 'Adresse courriel',
    formEmailPlaceholder: 'vous@courriel.com',
    formProject: 'Type de projet',
    formProjectDefault: 'Sélectionnez un type de projet',
    formProjectOutdoor: 'Murale extérieure',
    formProjectIndoor: 'Mur intérieur',
    formProjectCustom: 'Décor personnalisé',
    formProjectOther: 'Autre / Pas sûr',
    formMessage: 'Message',
    formMessagePlaceholder: 'Parlez-nous de votre projet — taille, emplacement, délai, inspiration...',
    formSubmit: 'Envoyer la demande',
    // Footer
    footerCopy: '© 2026 MURAL.MTL — Tous droits réservés.',
    // FAQ
    faqLabel: 'Des questions ?',
    faqTitle: 'FAQ',
    faq1Q: 'Qu\'est-ce que l\'impression murale ?',
    faq1A: 'L\'impression murale est une nouvelle technologie qui utilise une imprimante à jet d\'encre verticale pour imprimer directement sur les murs, les planchers ou d\'autres surfaces planes. Imaginez une imprimante géante qui crée des murales personnalisées avec précision, des couleurs vibrantes et une grande durabilité.',
    faq2Q: 'Est-ce sécuritaire ?',
    faq2A: 'Oui. Les encres sont écologiques, inodores et sans danger pour les enfants et les animaux. Elles sèchent rapidement et n\'endommagent pas vos murs.',
    faq3Q: 'Sur quelles surfaces pouvez-vous imprimer ?',
    faq3A: 'Nous pouvons imprimer sur la plupart des surfaces planes intérieures et extérieures, y compris le gypse, le plâtre, la brique, le bois, le verre, la céramique et le béton. Si la surface est lisse et propre, nous pouvons probablement y imprimer.',
    faq4Q: 'Puis-je retirer ou remplacer la murale plus tard ?',
    faq4A: 'Oui. Les impressions peuvent être recouvertes de peinture comme un mur normal. Si vous souhaitez un nouveau design, nous pouvons également imprimer directement par-dessus l\'ancien.',
    faq5Q: 'Quelle taille les impressions peuvent-elles atteindre ?',
    faq5A: 'Il n\'y a pas de limite en largeur — nous pouvons continuer à imprimer de manière continue sur de grands murs. La hauteur maximale est généralement de 13 pieds, mais des extensions peuvent être utilisées pour les espaces plus hauts.',
    faq6Q: 'Créez-vous aussi les visuels, ou dois-je les fournir ?',
    faq6A: 'Les deux options sont disponibles. Vous pouvez fournir vos propres visuels ou nous pouvons vous aider avec des services de design personnalisé, y compris la préparation de photos, les graphiques et la consultation.',
    faq7Q: 'Quelle est la durabilité de l\'impression ?',
    faq7A: 'Les murales intérieures durent 10 à 12 ans, tandis que les impressions extérieures peuvent durer plus de 5 ans selon l\'exposition. Pour une protection accrue, nous pouvons appliquer un revêtement protecteur transparent pour prolonger la durée de vie de votre murale.',
    faq8Q: 'Combien ça coûte ?',
    faq8A: 'Le prix dépend de la taille du mur, de la complexité et de l\'emplacement. Chaque projet étant unique, nous fournissons un devis personnalisé gratuit après avoir examiné votre mur et vos visuels.',
    faq9Q: 'Combien de temps ça prend ?',
    faq9A: 'La plupart des projets peuvent être réalisés en quelques heures seulement. Les murs plus grands ou les surfaces multiples peuvent prendre une journée complète ou plus. Pas de nettoyage compliqué — une fois l\'impression terminée, c\'est prêt à admirer.',
    faq10Q: 'Qui sont vos clients ?',
    faq10A: 'Nous travaillons avec des propriétaires, des gyms, des écoles, des bureaux, des restaurants, des commerces de détail, des promoteurs immobiliers et plus encore. Partout où il y a un mur, il y a une opportunité.',
    faq11Q: 'Imprimez-vous uniquement à l\'intérieur ?',
    faq11A: 'Non — nous imprimons à l\'intérieur et à l\'extérieur. Les murs extérieurs, les garages, les devantures de magasins, les clôtures et même les planchers sont tous possibles.',
    faq12Q: 'Comment réserver une murale ?',
    faq12A: 'Contactez-nous simplement via notre site web ou appelez-nous pour réserver une consultation gratuite. Nous examinerons votre espace, confirmerons les visuels et planifierons votre installation.'
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  // Update active state in dropdown
  langOptions.forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  // Update button label
  langLabel.textContent = lang.toUpperCase();

  // Close dropdown
  langPicker.classList.remove('open');

  // Update HTML lang attribute
  document.documentElement.lang = lang === 'fr' ? 'fr' : 'en';

  // --- Apply translations ---
  // Navbar
  document.querySelector('[data-i18n="navServices"]').textContent = t.navServices;
  document.querySelector('[data-i18n="navPortfolio"]').textContent = t.navPortfolio;
  document.querySelector('[data-i18n="navProcess"]').textContent = t.navProcess;
  document.querySelector('[data-i18n="navContact"]').textContent = t.navContact;
  document.querySelector('[data-i18n="navCta"]').textContent = t.navCta;

  // Hero
  document.querySelector('[data-i18n="heroHeadline1"]').textContent = t.heroHeadline1;
  document.querySelector('[data-i18n="heroHeadline2"]').textContent = t.heroHeadline2;
  document.querySelector('[data-i18n="heroSub"]').textContent = t.heroSub;
  document.querySelector('[data-i18n="heroBtnPrimary"]').innerHTML = t.heroBtnPrimary + ' <span>→</span>';
  document.querySelector('[data-i18n="heroBtnSecondary"]').textContent = t.heroBtnSecondary;

  // Hero Reel — swap video based on language
  const reelEN = document.getElementById('heroReelEN');
  const reelFR = document.getElementById('heroReelFR');
  if (lang === 'fr') {
    if (reelEN) { reelEN.classList.remove('active'); reelEN.pause(); }
    if (reelFR) { reelFR.classList.add('active'); reelFR.currentTime = 0; reelFR.play().catch(() => { }); }
  } else {
    if (reelFR) { reelFR.classList.remove('active'); reelFR.pause(); }
    if (reelEN) { reelEN.classList.add('active'); reelEN.currentTime = 0; reelEN.play().catch(() => { }); }
  }

  // Ticker
  const tickerItems = document.querySelectorAll('.ticker-item');
  const tickerTexts = t.tickerItems;
  if (tickerTexts && tickerItems.length > 0) {
    tickerItems.forEach((item, i) => {
      item.textContent = tickerTexts[i % tickerTexts.length];
    });
  }

  // Services
  document.querySelector('[data-i18n="servicesLabel"]').textContent = t.servicesLabel;
  document.querySelector('[data-i18n="servicesTitle"]').textContent = t.servicesTitle;
  document.querySelector('[data-i18n="service1Tag"]').textContent = t.service1Tag;
  document.querySelector('[data-i18n="service1Title"]').textContent = t.service1Title;
  document.querySelector('[data-i18n="service1Desc"]').textContent = t.service1Desc;
  document.querySelector('[data-i18n="service2Tag"]').textContent = t.service2Tag;
  document.querySelector('[data-i18n="service2Title"]').textContent = t.service2Title;
  document.querySelector('[data-i18n="service2Desc"]').textContent = t.service2Desc;
  document.querySelector('[data-i18n="service3Tag"]').textContent = t.service3Tag;
  document.querySelector('[data-i18n="service3Title"]').textContent = t.service3Title;
  document.querySelector('[data-i18n="service3Desc"]').textContent = t.service3Desc;

  // Value Proposition
  document.querySelector('[data-i18n="valuePropHeadline"]').innerHTML = t.valuePropHeadline;
  document.querySelector('[data-i18n="valuePropSub"]').textContent = t.valuePropSub;
  document.querySelector('[data-i18n="benefit1Title"]').textContent = t.benefit1Title;
  document.querySelector('[data-i18n="benefit1Desc"]').textContent = t.benefit1Desc;
  document.querySelector('[data-i18n="benefit2Title"]').textContent = t.benefit2Title;
  document.querySelector('[data-i18n="benefit2Desc"]').textContent = t.benefit2Desc;
  document.querySelector('[data-i18n="benefit3Title"]').textContent = t.benefit3Title;
  document.querySelector('[data-i18n="benefit3Desc"]').textContent = t.benefit3Desc;
  document.querySelector('[data-i18n="benefit4Title"]').textContent = t.benefit4Title;
  document.querySelector('[data-i18n="benefit4Desc"]').textContent = t.benefit4Desc;
  document.querySelector('[data-i18n="benefit5Title"]').textContent = t.benefit5Title;
  document.querySelector('[data-i18n="benefit5Desc"]').textContent = t.benefit5Desc;

  // Portfolio
  document.querySelector('[data-i18n="portfolioLabel"]').textContent = t.portfolioLabel;
  document.querySelector('[data-i18n="portfolioTitle"]').textContent = t.portfolioTitle;
  document.querySelector('[data-i18n="portfolio1Tag"]').textContent = t.portfolio1Tag;
  document.querySelector('[data-i18n="portfolio1Title"]').textContent = t.portfolio1Title;
  document.querySelector('[data-i18n="portfolio1Desc"]').textContent = t.portfolio1Desc;
  document.querySelector('[data-i18n="portfolio2Tag"]').textContent = t.portfolio2Tag;
  document.querySelector('[data-i18n="portfolio2Title"]').textContent = t.portfolio2Title;
  document.querySelector('[data-i18n="portfolio2Desc"]').textContent = t.portfolio2Desc;
  document.querySelector('[data-i18n="portfolio3Tag"]').textContent = t.portfolio3Tag;
  document.querySelector('[data-i18n="portfolio3Title"]').textContent = t.portfolio3Title;
  document.querySelector('[data-i18n="portfolio3Desc"]').textContent = t.portfolio3Desc;
  document.querySelector('[data-i18n="portfolio4Tag"]').textContent = t.portfolio4Tag;
  document.querySelector('[data-i18n="portfolio4Title"]').textContent = t.portfolio4Title;
  document.querySelector('[data-i18n="portfolio4Desc"]').textContent = t.portfolio4Desc;

  // Video Portfolio
  document.querySelector('[data-i18n="portfolioV1Tag"]').textContent = t.portfolioV1Tag;
  document.querySelector('[data-i18n="portfolioV1Title"]').textContent = t.portfolioV1Title;
  document.querySelector('[data-i18n="portfolioV1Desc"]').textContent = t.portfolioV1Desc;
  document.querySelector('[data-i18n="portfolioV2Tag"]').textContent = t.portfolioV2Tag;
  document.querySelector('[data-i18n="portfolioV2Title"]').textContent = t.portfolioV2Title;
  document.querySelector('[data-i18n="portfolioV2Desc"]').textContent = t.portfolioV2Desc;
  document.querySelector('[data-i18n="portfolioV3Tag"]').textContent = t.portfolioV3Tag;
  document.querySelector('[data-i18n="portfolioV3Title"]').textContent = t.portfolioV3Title;
  document.querySelector('[data-i18n="portfolioV3Desc"]').textContent = t.portfolioV3Desc;
  document.querySelector('[data-i18n="portfolioV4Tag"]').textContent = t.portfolioV4Tag;
  document.querySelector('[data-i18n="portfolioV4Title"]').textContent = t.portfolioV4Title;
  document.querySelector('[data-i18n="portfolioV4Desc"]').textContent = t.portfolioV4Desc;
  document.querySelector('[data-i18n="portfolioV5Tag"]').textContent = t.portfolioV5Tag;
  document.querySelector('[data-i18n="portfolioV5Title"]').textContent = t.portfolioV5Title;
  document.querySelector('[data-i18n="portfolioV5Desc"]').textContent = t.portfolioV5Desc;

  // Process
  document.querySelector('[data-i18n="processLabel"]').textContent = t.processLabel;
  document.querySelector('[data-i18n="processTitle"]').textContent = t.processTitle;
  document.querySelector('[data-i18n="step1Title"]').textContent = t.step1Title;
  document.querySelector('[data-i18n="step1Desc"]').textContent = t.step1Desc;
  document.querySelector('[data-i18n="step2Title"]').textContent = t.step2Title;
  document.querySelector('[data-i18n="step2Desc"]').textContent = t.step2Desc;
  document.querySelector('[data-i18n="step3Title"]').textContent = t.step3Title;
  document.querySelector('[data-i18n="step3Desc"]').textContent = t.step3Desc;

  // Contact
  document.querySelector('[data-i18n="contactLabel"]').textContent = t.contactLabel;
  document.querySelector('[data-i18n="contactHeading"]').innerHTML = t.contactHeading;
  document.querySelector('[data-i18n="contactDesc"]').textContent = t.contactDesc;
  document.querySelector('[data-i18n="contactLocation"]').textContent = t.contactLocation;
  document.querySelector('[data-i18n="contactEmail"]').textContent = t.contactEmail;
  document.querySelector('[data-i18n="contactPhone"]').textContent = t.contactPhone;
  document.querySelector('[data-i18n="formName"]').textContent = t.formName;
  document.getElementById('formName').placeholder = t.formNamePlaceholder;
  document.querySelector('[data-i18n="formEmail"]').textContent = t.formEmail;
  document.getElementById('formEmail').placeholder = t.formEmailPlaceholder;
  document.querySelector('[data-i18n="formProject"]').textContent = t.formProject;
  document.querySelector('[data-i18n="formProjectDefault"]').textContent = t.formProjectDefault;
  document.querySelector('[data-i18n="formProjectOutdoor"]').textContent = t.formProjectOutdoor;
  document.querySelector('[data-i18n="formProjectIndoor"]').textContent = t.formProjectIndoor;
  document.querySelector('[data-i18n="formProjectCustom"]').textContent = t.formProjectCustom;
  document.querySelector('[data-i18n="formProjectOther"]').textContent = t.formProjectOther;
  document.querySelector('[data-i18n="formMessage"]').textContent = t.formMessage;
  document.getElementById('formMessage').placeholder = t.formMessagePlaceholder;
  document.querySelector('[data-i18n="formSubmit"]').textContent = t.formSubmit;

  // Footer
  document.querySelector('[data-i18n="footerCopy"]').textContent = t.footerCopy;

  // FAQ
  document.querySelector('[data-i18n="faqLabel"]').textContent = t.faqLabel;
  document.querySelector('[data-i18n="faqTitle"]').textContent = t.faqTitle;

  const faq1Q = document.querySelector('[data-i18n="faq1Q"]');
  if (faq1Q) faq1Q.innerHTML = t.faq1Q + ' <span class="faq-icon">+</span>';
  const faq1A = document.querySelector('[data-i18n="faq1A"]');
  if (faq1A) faq1A.textContent = t.faq1A;

  const faq2Q = document.querySelector('[data-i18n="faq2Q"]');
  if (faq2Q) faq2Q.innerHTML = t.faq2Q + ' <span class="faq-icon">+</span>';
  const faq2A = document.querySelector('[data-i18n="faq2A"]');
  if (faq2A) faq2A.textContent = t.faq2A;

  const faq3Q = document.querySelector('[data-i18n="faq3Q"]');
  if (faq3Q) faq3Q.innerHTML = t.faq3Q + ' <span class="faq-icon">+</span>';
  const faq3A = document.querySelector('[data-i18n="faq3A"]');
  if (faq3A) faq3A.textContent = t.faq3A;

  const faq4Q = document.querySelector('[data-i18n="faq4Q"]');
  if (faq4Q) faq4Q.innerHTML = t.faq4Q + ' <span class="faq-icon">+</span>';
  const faq4A = document.querySelector('[data-i18n="faq4A"]');
  if (faq4A) faq4A.textContent = t.faq4A;

  const faq5Q = document.querySelector('[data-i18n="faq5Q"]');
  if (faq5Q) faq5Q.innerHTML = t.faq5Q + ' <span class="faq-icon">+</span>';
  const faq5A = document.querySelector('[data-i18n="faq5A"]');
  if (faq5A) faq5A.textContent = t.faq5A;

  const faq6Q = document.querySelector('[data-i18n="faq6Q"]');
  if (faq6Q) faq6Q.innerHTML = t.faq6Q + ' <span class="faq-icon">+</span>';
  const faq6A = document.querySelector('[data-i18n="faq6A"]');
  if (faq6A) faq6A.textContent = t.faq6A;

  const faq7Q = document.querySelector('[data-i18n="faq7Q"]');
  if (faq7Q) faq7Q.innerHTML = t.faq7Q + ' <span class="faq-icon">+</span>';
  const faq7A = document.querySelector('[data-i18n="faq7A"]');
  if (faq7A) faq7A.textContent = t.faq7A;

  const faq8Q = document.querySelector('[data-i18n="faq8Q"]');
  if (faq8Q) faq8Q.innerHTML = t.faq8Q + ' <span class="faq-icon">+</span>';
  const faq8A = document.querySelector('[data-i18n="faq8A"]');
  if (faq8A) faq8A.textContent = t.faq8A;

  const faq9Q = document.querySelector('[data-i18n="faq9Q"]');
  if (faq9Q) faq9Q.innerHTML = t.faq9Q + ' <span class="faq-icon">+</span>';
  const faq9A = document.querySelector('[data-i18n="faq9A"]');
  if (faq9A) faq9A.textContent = t.faq9A;

  const faq10Q = document.querySelector('[data-i18n="faq10Q"]');
  if (faq10Q) faq10Q.innerHTML = t.faq10Q + ' <span class="faq-icon">+</span>';
  const faq10A = document.querySelector('[data-i18n="faq10A"]');
  if (faq10A) faq10A.textContent = t.faq10A;

  const faq11Q = document.querySelector('[data-i18n="faq11Q"]');
  if (faq11Q) faq11Q.innerHTML = t.faq11Q + ' <span class="faq-icon">+</span>';
  const faq11A = document.querySelector('[data-i18n="faq11A"]');
  if (faq11A) faq11A.textContent = t.faq11A;

  const faq12Q = document.querySelector('[data-i18n="faq12Q"]');
  if (faq12Q) faq12Q.innerHTML = t.faq12Q + ' <span class="faq-icon">+</span>';
  const faq12A = document.querySelector('[data-i18n="faq12A"]');
  if (faq12A) faq12A.textContent = t.faq12A;
}

// Handle language option clicks
langOptions.forEach(opt => {
  opt.addEventListener('click', () => {
    setLanguage(opt.dataset.lang);
  });
});

/* ===== SCROLL REVEAL ===== */
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.05, rootMargin: '0px 0px 0px 0px' });
reveals.forEach(el => revealObserver.observe(el));

/* ===== FORM HANDLING ===== */
const quoteForm = document.getElementById('quoteForm');
const submitBtn = document.getElementById('formSubmitBtn');
quoteForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Sending...';
  submitBtn.style.pointerEvents = 'none';

  fetch("https://formsubmit.co/ajax/websiteform@askowallprinting.com", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      Name: document.getElementById('formName').value,
      Email: document.getElementById('formEmail').value,
      Project_Type: document.getElementById('formProject').value,
      Message: document.getElementById('formMessage').value
    })
  })
    .then(response => response.json())
    .then(data => {
      submitBtn.textContent = 'Sent ✓';
      submitBtn.style.background = '#2a9d3a';
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
        submitBtn.style.pointerEvents = '';
        quoteForm.reset();
      }, 3000);
    })
    .catch(error => {
      console.error(error);
      submitBtn.textContent = 'Error!';
      submitBtn.style.background = '#e8400c';
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
        submitBtn.style.pointerEvents = '';
      }, 3000);
    });
});

/* ===== SMOOTH ANCHOR SCROLLING ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = navbar.offsetHeight;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ===== FAQ ===== */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

/* ===== CMYK STREAK SPAWNER ===== */
(function () {
  const cmykContainer = document.getElementById('heroCmyk');
  const colors = [
    { bg: '#e8400c', name: 'orange' },
    { bg: '#f5a623', name: 'amber' },
    { bg: '#f5c842', name: 'gold' }
  ];

  function rand(min, max) { return Math.random() * (max - min) + min; }

  function getPageHeight() {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight
    );
  }

  const presetFractions = [0, 0.05, 0.10, 0.15, 0.20, 0.25, 0.30, 0.35, 0.40, 0.45, 0.50, 0.55, 0.60, 0.65, 0.70, 0.75, 0.80, 0.85, 0.90, 0.95, 1.0];
  const activeLocations = new Set();

  function spawnStreak() {
    const available = presetFractions.filter(f => !activeLocations.has(f));
    if (available.length === 0) return;

    const el = document.createElement('div');
    el.classList.add('cmyk-swipe');

    const color = colors[Math.floor(Math.random() * colors.length)];
    const fraction = available[Math.floor(Math.random() * available.length)];
    activeLocations.add(fraction);

    const pageH = getPageHeight();
    const topPx = fraction * pageH;

    const height = rand(60, 160);
    const peakOpacity = rand(0.06, 0.15);
    const duration = rand(8, 16);
    const delay = rand(0, 0.5);

    el.style.background = color.bg;
    el.style.top = topPx + 'px';
    el.style.height = height + 'px';
    el.style.setProperty('--peak-opacity', peakOpacity);
    el.style.setProperty('--dur', duration + 's');
    el.style.setProperty('--delay', delay + 's');

    cmykContainer.appendChild(el);

    const totalMs = (duration + delay) * 1000;
    setTimeout(() => {
      el.remove();
      activeLocations.delete(fraction);
    }, totalMs + 200);
  }

  function scheduleNext() {
    spawnStreak();
    setTimeout(scheduleNext, rand(500, 1500));
  }

  // Wait for full page load so scrollHeight is accurate
  window.addEventListener('load', () => {
    for (let i = 0; i < 12; i++) {
      setTimeout(spawnStreak, i * 250);
    }
    setTimeout(scheduleNext, 3500);
  });
})();

/* ===== PORTFOLIO VIDEO HOVER ===== */
(function () {
  const videoItems = document.querySelectorAll('.portfolio-video-item');

  videoItems.forEach(item => {
    const video = item.querySelector('.portfolio-video');
    let restartTimeout = null;
    let isHovering = false;

    // When metadata is loaded, seek to the last frame as preview
    video.addEventListener('loadedmetadata', () => {
      video.currentTime = Math.max(0, video.duration - 0.1);
    });

    // Mouse enter — start playing from the beginning
    item.addEventListener('mouseenter', () => {
      isHovering = true;
      clearTimeout(restartTimeout);
      video.currentTime = 0;
      video.play().catch(() => { });
      item.classList.add('playing');
    });

    // Mouse leave — pause and show last frame preview
    item.addEventListener('mouseleave', () => {
      isHovering = false;
      clearTimeout(restartTimeout);
      video.pause();
      item.classList.remove('playing');
      // Seek back to last frame for preview
      if (video.duration) {
        video.currentTime = Math.max(0, video.duration - 0.1);
      }
    });

    // Video ended while hovering — pause on last frame, then restart after delay
    video.addEventListener('ended', () => {
      if (isHovering) {
        restartTimeout = setTimeout(() => {
          if (isHovering) {
            video.currentTime = 0;
            video.play().catch(() => { });
          }
        }, 1500);
      }
    });
  });
})();