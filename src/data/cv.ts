export const profile = {
  name: 'Felix Klein',
  role: 'Robotics, Cognition & Intelligence (M.Sc.) at TUM',
  location: 'Munich',
  email: 'felixklein84@gmail.com',
  github: 'https://github.com/felixklein84',
  linkedin: 'https://www.linkedin.com/in/felix-klein-007bba218/',
  winery: 'https://weingut-martin-klein.de',
  site: 'https://felixklein84.github.io',
};

/** What is happening right now. Update `asOf` whenever this list changes. */
export const now = {
  asOf: 'October 2026',
  items: [
    {
      what: 'Started the M.Sc. Robotics, Cognition & Intelligence at TUM',
      detail: 'This semester: Machine Learning, Fundamentals of AI, Automation & Robotics in Agriculture, Real-Time Systems, Product Development.',
    },
    {
      what: 'Coordinating autonomous tractors at the TUM Chair of Agricultural Mechatronics',
      detail: 'Research assistant on multi-agent routing for field robots, extended to March 2027.',
      href: '/projects/autonomous-field-operations',
    },
    {
      what: 'Applied to the Bosch × VDMA challenge on robotic leak detection',
      detail: 'Acoustic sensing on a mobile robot to find compressed-air leaks during production. Kick-off on 18 November.',
      href: '/projects/compressed-air-leak-detection',
    },
    {
      what: 'Back to teach at MS Memorial Khatoli School in India',
      detail: 'Four weeks in November, continuing the English, digital-skills and Python classes I started there in 2025.',
    },
    {
      what: 'Working student at Deutsche Aircraft',
      detail: 'Supplier data and process automation for the D328eco production ramp-up.',
    },
  ],
};

export type Entry = {
  when: string;
  title: string;
  org: string;
  place?: string;
  points: string[];
};

export const experience: Entry[] = [
  {
    when: '02/2026 – 03/2027',
    title: 'Student research assistant, collaborative routing & simulation',
    org: 'TUM, Chair of Agricultural Mechatronics',
    place: 'Garching',
    points: [
      'Python simulation environment for route-allocation and consensus algorithms on realistic agricultural field graphs.',
      'Collaborative routing heuristics for Controlled Traffic Farming, evaluated on runtime, solution quality and scalability.',
    ],
  },
  {
    when: '02/2026 – now',
    title: 'Working student, process automation & digitalisation',
    org: 'Deutsche Aircraft',
    place: 'Oberpfaffenhofen',
    points: [
      'Data flows between ERP and the SupplyOn supplier platform for the D328eco serial-production ramp-up.',
      'Quantitative metrics for data quality, order confirmations and delivery-date reliability.',
    ],
  },
  {
    when: '05/2025 – now',
    title: 'Aerostructures team, landing gear',
    org: 'HORYZN student initiative',
    place: 'TUM',
    points: ['Landing-gear concepts for autonomous aircraft: impact loads, structural sizing, CAD prototypes.'],
  },
  {
    when: '04/2025 – 09/2025',
    title: 'Intern, engineering operations & data analytics',
    org: 'BMW Group Research & Innovation Centre',
    place: 'Munich',
    points: [
      'Forecasting pipeline for axle-assembly demand in prototype production (Python, time series, Power BI).',
      'Discrete-event simulation of warehouse utilisation at the Parsdorf supply centre.',
      'Prototype cubing support with CATIA V5 and tolerance analysis.',
    ],
  },
  {
    when: '03/2025',
    title: 'Intern, strategy & financial analysis',
    org: 'KombiRail Europe',
    place: 'Frankfurt',
    points: ['Cost-saving scenarios of about EUR 400k p.a. as decision support in an M&A process.'],
  },
  {
    when: '09/2024 – 02/2025',
    title: 'Intern, AI & data science consulting',
    org: 'KPMG Lighthouse',
    place: 'Saarbrücken',
    points: [
      'Numerical modules for a simulation backend; vectorisation and caching cut scenario runtime by about 25 %.',
      'Selenium UI regression tests in an Azure DevOps CI pipeline, about half the manual testing per sprint.',
      'Refactored R code for stochastic reserve forecasting.',
    ],
  },
  {
    when: '08/2021 – 09/2022',
    title: 'Working student, revenue operations',
    org: 'Cosuno',
    place: 'Berlin',
    points: ['Automated KPI reporting with HubSpot and VBA: two days of preparation down to three hours.'],
  },
  {
    when: '2015 – now',
    title: 'Digital lead',
    org: 'Weingut Martin Klein (family winery)',
    place: 'Johannisberg, Rheingau',
    points: ['Shop, product data, search visibility, brand system and B2B sales material.'],
  },
];

export const education: Entry[] = [
  {
    when: '10/2026 – now',
    title: 'M.Sc. Robotics, Cognition & Intelligence',
    org: 'Technical University of Munich',
    points: [
      'Machine Learning, Fundamentals of AI, Automation & Robotics in Agriculture, Real-Time Systems, Methods of Product Development.',
    ],
  },
  {
    when: '10/2025 – 09/2026',
    title: 'Physics studies and engineering prerequisites',
    org: 'Technical University of Munich',
    points: ['Bridge from mathematics into engineering: robot dynamics, control engineering, signal processing, physics.'],
  },
  {
    when: '09/2020 – 09/2024',
    title: 'B.Sc. Business Mathematics',
    org: 'University of Mannheim',
    points: [
      'Stochastic processes, Markov chains, dynamical systems, numerical methods, optimisation, scientific programming.',
      'Thesis: Mathematical brain-tumour modelling using the example of glioblastoma. Cell dynamics and therapy effects with continuous-time Markov chains.',
    ],
  },
  {
    when: '07/2023 – 02/2024',
    title: 'Exchange semester, mathematics & computer science',
    org: 'Western Sydney University',
    place: 'Australia',
    points: ['Machine learning, data science, mathematical modelling; CNN image classification in PyTorch.'],
  },
  {
    when: '2020',
    title: 'Abitur',
    org: 'Rheingau-Gymnasium, Geisenheim',
    points: ['Physics prize of the German Physical Society (DPG).'],
  },
];

export const engagement: Entry[] = [
  {
    when: '2024',
    title: '2nd place, ChefTreff Hackathon',
    org: 'Lufthansa Industry Solutions & ZeroG',
    place: 'Hamburg',
    points: ['Stochastic forecasting pipeline with XGBoost and Monte Carlo simulation to plan onboard catering under demand uncertainty.'],
  },
  {
    when: '2023',
    title: 'STADS Datathon, EY challenge',
    org: 'Student Association for Data Analytics & Statistics',
    place: 'Mannheim',
    points: ['Matching algorithm for duplicate financial transactions using fuzzy hashing and feature engineering.'],
  },
  {
    when: '08/2025 – 09/2025, 11/2026',
    title: 'Volunteer teacher',
    org: 'MS Memorial Khatoli School',
    place: 'Rajasthan, India',
    points: [
      'Designed and taught an “English for job interviews” course for grades 10–12, with mock interviews.',
      'Digital literacy and AI module: students wrote CVs, used generative AI for guided research and built small projects.',
    ],
  },
  {
    when: '01/2024, 01/2025',
    title: 'Snowboard instructor',
    org: 'TG Rüdesheim JuSki',
    place: 'Hochkönig, Austria',
    points: ['Coaching about 50 teenagers aged 14–17 as part of a 12-person team.'],
  },
  {
    when: '09/2022 – 09/2023',
    title: 'Student council mathematics, budget and quality assurance',
    org: 'University of Mannheim',
    points: ['Allocation of an annual student-body budget of about EUR 500k.'],
  },
];

export const languages = 'German (native), English (C2), Spanish (B1), Japanese (A2)';

export const skills = [
  { area: 'Mathematics', items: 'Stochastic processes, Markov chains, Monte Carlo, numerical optimisation, dynamical systems' },
  { area: 'Robotics', items: 'Kinematics and dynamics, control, multi-agent planning, discrete-event simulation' },
  { area: 'Programming', items: 'Python, Julia, C, R, MATLAB, SQL, TypeScript, basic C++; Git, CI/CD, Sphinx, LaTeX' },
  { area: 'Libraries', items: 'NumPy, SciPy, pandas, scikit-learn, PyTorch, XGBoost, NetworkX, Shapely, React' },
  { area: 'Embedded', items: 'Infineon PSOC Edge, ModusToolbox, DEEPCRAFT Studio, multi-channel audio capture' },
  { area: 'Engineering tools', items: 'CATIA V5, Power BI, SAP, SupplyOn, HubSpot, WordPress, WooCommerce' },
];

export const reading = {
  now: { title: 'The Beginning of Infinity', author: 'David Deutsch' },
  favourites: [
    { title: 'Sapiens', author: 'Yuval Noah Harari' },
    { title: 'Factfulness', author: 'Hans Rosling' },
    { title: 'A Brief History of Time', author: 'Stephen Hawking' },
  ],
};

export const offline = [
  'Snowboarding. Until 2025 I was an instructor on the JuSki youth trip.',
  'Teaching English for job interviews, digital skills and Python at a school in Rajasthan, India.',
  'Half-marathons, calisthenics, surfing when I can.',
  'Making things by hand: restoring an old wine barrel, forging a ring, a goldsmithing course, and filming all of it.',
];
