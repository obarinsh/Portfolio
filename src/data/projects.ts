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
    id: 'project-2',
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
    id: 'project-3',
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
];

export const socialLinks = {
  github: 'https://github.com/obarinsh',
  linkedin: 'https://www.linkedin.com/in/olga-barinshteyn-332006103/',
  email: 'mailto:obarinshteyn@gmail.com',
};
