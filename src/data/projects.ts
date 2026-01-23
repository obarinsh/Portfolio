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
    description: 'A digital card game that sparks real conversations — helping couples, families, and friends reconnect beyond their screens.',
    image: '/cardersation_static.png',
    gif: '/gifs/cardersation.gif',
    longDescription: `
      Cardersation transforms quality time into meaningful moments. One phone, one deck, endless conversations. 
      Users choose from curated themed decks, swipe through thought-provoking questions, and discover new sides of the people they love.
    `,
    problem: 'People crave deeper connections but struggle to break away from small talk and screen time during moments that matter.',
    approach: 'Designed an intuitive mobile-first experience with themed decks for different relationships and occasions — from first dates to family dinners to girls night.',
    outcome: 'Launched with 10+ conversation decks covering intimacy, friendship, parenting, and self-reflection. Users report more meaningful conversations and quality time together.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Framer Motion'],
    liveUrl: 'https://cardersation.vercel.app',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'FairShot',
    description: 'Stop wondering why you\'re not getting callbacks. AI-powered CV analysis that gives job seekers the honest feedback recruiters won\'t.',
    longDescription: `
      FairShot acts as your objective career advisor — analyzing your CV against real hiring patterns and telling you exactly what to fix.
    `,
    problem: 'Job seekers apply to hundreds of positions without knowing why they\'re being rejected. They need honest, actionable feedback — not generic advice.',
    approach: 'Focused on making the value obvious from the first interaction. Simplified the CV upload flow and made AI feedback feel personal, not robotic.',
    outcome: 'Users now understand their CV\'s strengths and weaknesses within minutes, with clear next steps to improve their chances.',
    tags: ['Product Strategy', 'UX Design', 'AI Integration'],
    liveUrl: 'https://landingpageprototype.vercel.app/',
    featured: false,
  },
  {
    id: 'project-3',
    title: 'Kryora',
    description: 'Making AI actually useful for facility managers. A dashboard that turns complex energy optimization into simple, actionable recommendations.',
    image: '/kryora.png',
    gif: '/gifs/kryora.gif',
    longDescription: `
      Kryora puts AI-powered energy savings in the hands of the people who need it — facility teams who don't have time for complexity.
    `,
    problem: 'Powerful AI models existed for optimizing energy use, but facility teams couldn\'t access their insights without a data science degree.',
    approach: 'Translated complex algorithms into a clear dashboard with plain-language recommendations: "Adjust Chiller-02 to save $450/month."',
    outcome: 'Operations teams now act on AI recommendations daily, reducing energy costs without needing to understand the math behind it.',
    tags: ['Product Design', 'Data Visualization', 'Enterprise UX'],
    liveUrl: 'https://dashboard.kryora.ai/home',
    featured: true,
  },
];

export const socialLinks = {
  github: 'https://github.com/obarinsh',
  linkedin: 'https://www.linkedin.com/in/olga-barinshteyn-332006103/',
  email: 'mailto:obarinshteyn@gmail.com',
};
