export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  problem: string;
  approach: string;
  outcome: string;
  tags: string[];
  image?: string;
  gif?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'LaLúz',
    description: 'Plan beautifully, travel freely. Enter a destination, get curated recommendations, and drag-and-drop to build your perfect day-by-day itinerary.',
    image: '/laluz.png',
    gif: '/gifs/laluz.gif',
    longDescription: '',
    problem: 'Planning a trip often means juggling multiple tabs, spreadsheets, and apps. Travelers need a simple way to organize destinations into a cohesive itinerary.',
    approach: '',
    outcome: 'Built a clean, intuitive travel planning experience where users can search destinations, explore curated recommendations, and visually build their trip day by day.',
    tags: ['UX/UI Design', 'User Flow', 'Code'],
    liveUrl: 'https://to-travel-henna.vercel.app/',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'iKi',
    description: 'An AI-powered self-discovery app that helps people find their Ikigai (reason for being) through guided questions and intelligent analysis.',
    image: '/iki.png',
    gif: '/gifs/iki.gif',
    longDescription: '',
    problem: 'Many people struggle to find meaningful direction in life, unsure how to connect what they love, what they\'re good at, what the world needs, and what they can be paid for.',
    approach: '',
    outcome: 'Built a guided journey through the four pillars of Ikigai with AI-generated personalized insights, career suggestions, and actionable next steps based on user responses.',
    tags: ['UX/UI Design', 'AI Integration', 'Code'],
    liveUrl: 'https://iki-two.vercel.app/',
    featured: true,
  },
  {
    id: 'project-3',
    title: 'Cardersation',
    description: 'Cardersation transforms quality time into meaningful moments. One phone, one deck, endless conversations. Users choose from curated themed decks, swipe through thought-provoking questions, and discover new sides of the people they love.',
    image: '/cardersation_static.png',
    gif: '/gifs/cardersation.gif',
    longDescription: '',
    problem: 'People crave deeper connections but struggle to break away from small talk and screen time during moments that matter.',
    approach: 'Designed an intuitive mobile-first experience with themed decks for different relationships and occasions — from first dates to family dinners to girls night.',
    outcome: 'Launched with 10+ conversation decks covering intimacy, friendship, parenting, and self-reflection. Users report more meaningful conversations and quality time together.',
    tags: ['Design Thinking', 'User Flow', 'UX/UI Design', 'Code'],
    liveUrl: 'https://cardersation.vercel.app',
    featured: true,
  },
  {
    id: 'project-3',
    title: 'FairShot',
    description: 'This project explores how AI can give job seekers clearer, more honest feedback on their CVs.',
    image: '/fairshot.png',
    gif: '/gifs/fairshot.gif',
    longDescription: '',
    problem: 'Job seekers apply to hundreds of positions without knowing why they\'re being rejected. They need honest, actionable feedback, not another generic advice.',
    approach: '',
    outcome: 'I joined to support the product side: helping evaluate which features mattered most, simplifying the user journey, improving UI/UX, and shaping the tone and target audience. The goal was to turn raw analysis into something users can actually understand and act on.',
    tags: ['User Flow', 'UX/UI Design', 'AI Integration'],
    liveUrl: 'https://www.fairshot.work/',
    featured: true,
  },
  {
    id: 'project-4',
    title: 'Kryora',
    description: 'Kryora puts AI-powered energy savings in the hands of the people who need it daily, facility teams who don\'t have time for complexity.',
    image: '/kryora.png',
    gif: '/gifs/kryora.gif',
    longDescription: '',
    problem: 'Powerful AI models existed for optimizing energy use, but facility teams and upper management couldn\'t access their insights without a data science degree.',
    approach: '',
    outcome: 'Translated complex algorithms into a clear dashboard with plain-language recommendations, used for PoC of the company',
    tags: ['Product Strategy', 'Data Visualization', 'UX/UI Design', 'Code'],
    liveUrl: 'https://dashboard.kryora.ai/home',
    featured: true,
  },
  {
    id: 'project-5',
    title: 'Close Enough',
    description: 'A word game that tests the "illusion of explanatory depth" — the psychological phenomenon where people believe they understand common concepts until they try to explain them.',
    image: '/closeenough.png',
    gif: '/gifs/ce.gif',
    longDescription: '',
    problem: 'People think they understand everyday words until they try to explain them. This cognitive bias goes unnoticed in daily life.',
    approach: '',
    outcome: 'Built a playful AI-powered game where players explain familiar words in their own words and receive encouraging, educational feedback comparing their explanation to the actual definition.',
    tags: ['UX/UI Design', 'AI Integration', 'Code'],
    liveUrl: 'https://close-enough.vercel.app/',
    featured: true,
  },
];

export const socialLinks = {
  github: 'https://github.com/obarinsh',
  linkedin: 'https://www.linkedin.com/in/olga-barinshteyn-332006103/',
  email: 'mailto:obarinshteyn@gmail.com',
};
