export type Media =
  | { kind: 'image'; src: string; alt: string; caption?: string }
  | { kind: 'video'; src: string; poster: string; alt: string; caption?: string }
  | { kind: 'diagram'; name: 'doa' | 'leak'; alt: string; caption?: string };

export type Project = {
  slug: string;
  title: string;
  /** One sentence for cards and meta descriptions. */
  summary: string;
  domain: string;
  year: string;
  role: string;
  status: string;
  featured?: boolean;
  problem: string;
  approach: string[];
  outcome: string[];
  stack: string[];
  links: { label: string; href: string }[];
  media?: Media;
};

export const projects: Project[] = [
  {
    slug: 'acoustic-direction-of-arrival',
    title: 'Hearing where a siren comes from',
    summary:
      'Direction-of-arrival detection for emergency-vehicle sirens on an Infineon PSOC Edge microcontroller: multi-microphone capture, an on-device classifier and a live radar dashboard.',
    domain: 'Embedded perception',
    year: '2026',
    role: 'Hackathon team, EESTech Challenge LC Munich (Infineon)',
    status: 'Shipped and evaluated on hardware',
    featured: true,
    problem:
      'An autonomous car has to know not only that a siren is sounding, but where it is. The challenge kit ships with firmware that reads one microphone channel. A single channel carries no direction at all, so the obvious approach, training a better classifier on mono audio, cannot work.',
    approach: [
      'Treated direction as a geometry problem first: bearing lives in the level and arrival-time differences between microphones. Two collinear mics give a left/right axis with front/back ambiguity; a square of four resolves the full plane.',
      'Brought all four board microphones online: two PDM mics plus two analog mics routed through the opamps and SAR ADC of the Autonomous Analog subsystem, with time-aligned capture written directly against the Infineon HPPASS driver.',
      'Wrote a Python self-labelling tool that monitors per-channel levels and records labelled 4-channel WAV files ready for import into DEEPCRAFT Studio.',
      'Optimised for the actual scoring function, whose exponential bonus on the number of directions means an 8-direction model at 65 % accuracy beats a perfect 4-direction one.',
      'Built a Vite + React dashboard that reads the board over Web Serial and animates the detected bearing in real time.',
    ],
    outcome: [
      'A 4-direction model trained in DEEPCRAFT Studio, flashed to the PSOC Edge E84 and working live.',
      'Custom 4-channel firmware streaming time-aligned frames at 1 Mbaud, as the base for an 8-direction stage.',
      'Fully documented decisions, architecture notes and runbook in the repository.',
    ],
    stack: ['C', 'ModusToolbox', 'DEEPCRAFT Studio', 'PSOC Edge E84', 'Python', 'React', 'Web Serial'],
    links: [{ label: 'Repository', href: 'https://github.com/felixklein84/eestec-Autonomous-Driving' }],
    media: {
      kind: 'diagram',
      name: 'doa',
      alt: 'A sound wavefront reaching four microphones at different times; the time differences give the bearing.',
      caption: 'The core idea: arrival-time differences across a microphone array encode direction.',
    },
  },
  {
    slug: 'autonomous-field-operations',
    title: 'Autonomous tractors that share a field',
    summary:
      'Multi-agent simulation in which autonomous ploughs and a faster seeder coordinate under real field geometry, precedence constraints and collision avoidance.',
    domain: 'Multi-robot planning',
    year: '2026',
    role: 'Student research assistant, TUM Chair of Agricultural Mechatronics',
    status: 'Ongoing research',
    featured: true,
    problem:
      'Small autonomous machines only pay off in agriculture if several of them can work one field together. Two slower tractors plough while a faster seeder may only enter swaths that are already prepared. Each machine has its own speed, the headland is shared, and one delayed tractor ripples through everyone else’s plan.',
    approach: [
      'Modelled the field as polygons (Shapely) and the headland as a graph (NetworkX), so swaths, turns and transfers become edges with real lengths and times.',
      'Framed swath allocation under Controlled Traffic Farming as a combinatorial routing problem and implemented collaborative routing and consensus heuristics.',
      'Built a discrete-event simulation with precedence constraints, yielding at conflicts and event-driven replanning, plus animated playback of full operations.',
      'Evaluated heuristics on runtime, solution quality and scalability; documentation is generated with Sphinx.',
    ],
    outcome: [
      'A simulation environment for comparing route-allocation strategies on realistic field graphs.',
      'End-to-end ploughing and seeding runs with collision avoidance and logged replanning.',
    ],
    stack: ['Python', 'Shapely', 'NetworkX', 'Discrete-event simulation', 'Matplotlib', 'Sphinx'],
    links: [],
    media: {
      kind: 'video',
      src: '/media/field-ops.mp4',
      poster: '/media/field-ops-poster.jpg',
      alt: 'Animated simulation: two ploughing tractors and a seeder working parallel swaths of a field.',
      caption: 'Two ploughs (P1, P2) and a seeder (S1). The seeder may only enter swaths that are already ploughed.',
    },
  },
  {
    slug: 'compressed-air-leak-detection',
    title: 'Finding compressed-air leaks with a robot',
    summary:
      'My entry for the Bosch × VDMA challenge: a modular acoustic sensing payload on a mobile robot that patrols production floors and maps compressed-air leaks during operation.',
    domain: 'Industrial inspection',
    year: '2026–27',
    role: 'Applicant, Bosch × VDMA Startup Machine challenge (Bosch Feuerbach)',
    status: 'Applied · kick-off 18 Nov 2026',
    problem:
      'Compressed-air leaks waste energy quietly. At Bosch Feuerbach, 120 buildings and 800,000 m², leaks are checked by people with handheld ultrasound devices, so most areas go unmonitored most of the time. Production layouts change constantly and detection has to happen while machines are running.',
    approach: [
      'Leaks emit ultrasound well above machine noise, so a microphone array tuned to that band can localise them by the same time-difference principle I used for siren detection.',
      'Put that array on an off-the-shelf carrier (mobile base or legged robot) and plan patrols over the floor plan, as in my multi-robot field work at TUM.',
      'Fuse each detection with the robot’s pose to place leaks on the plant map, and rank them by estimated loss so maintenance fixes the costly ones first.',
      'Keep the payload modular and the data interface clean, so it can move between carriers and plants.',
    ],
    outcome: [
      'Application submitted in October 2026. Kick-off 18 Nov 2026, demo day 2 Feb 2027, finals 24 Feb 2027.',
    ],
    stack: ['Acoustic arrays', 'Localisation', 'Path planning', 'Python'],
    links: [
      { label: 'Challenge brief', href: 'https://www.prototype.club/project/bosch-compressed-air-leak-detection/' },
    ],
    media: {
      kind: 'diagram',
      name: 'leak',
      alt: 'A robot patrol route across a factory floor with detected leaks marked on the map.',
      caption: 'Concept: patrol, localise, put every leak on the plant map.',
    },
  },
  {
    slug: 'glioblastoma-cell-dynamics',
    title: 'Simulating glioblastoma under therapy',
    summary:
      'A continuous-time Markov chain of tumour cell states, simulated exactly with the Gillespie algorithm, comparing radiotherapy, temozolomide and the combined Stupp protocol.',
    domain: 'Stochastic modelling',
    year: '2024–26',
    role: 'Bachelor thesis, University of Mannheim; rebuilt as a research codebase',
    status: 'Thesis complete · codebase v0.2',
    featured: true,
    problem:
      'Glioblastoma recurs because a small population of stem-like and dormant cells survives treatment. Averaged ODE models hide exactly this: when few cells decide the outcome, randomness matters, and the question becomes a stochastic one.',
    approach: [
      'Modelled a four-state cell hierarchy (stem, progenitor, differentiated, quiescent) as a continuous-time Markov chain and simulated it exactly with Gillespie’s SSA.',
      'Implemented therapies behind one protocol: radiotherapy as discrete binomial kill pulses at fraction times, temozolomide as extra CTMC events inside treatment windows, Stupp as their composition.',
      'Wrote a segmented simulation engine that switches event sets at therapy breakpoints inside a single Gillespie loop.',
      'Separated literature-based schedules from placeholder kill rates, tagged in the configs, so the model never claims more than it can.',
      'Kept the original Julia thesis code alongside the Python rebuild for reproducibility.',
    ],
    outcome: [
      'Scenario comparison of no therapy, radiotherapy, temozolomide and Stupp under identical random seeds.',
      'A tested, versioned package with YAML scenario configs, citation file and literature summaries.',
    ],
    stack: ['Python', 'Julia', 'NumPy', 'SciPy', 'Gillespie SSA', 'pytest'],
    links: [
      { label: 'Python package', href: 'https://github.com/felixklein84/glioblastom-multiforme-ssa' },
      { label: 'Original thesis code (Julia)', href: 'https://github.com/felixklein84/glioblastoma-simmulation-ssa' },
    ],
    media: {
      kind: 'image',
      src: '/images/projects/glioblastoma.png',
      alt: 'Plot of total tumour burden over 200 days for four therapy scenarios.',
      caption: 'Total tumour burden across scenarios, one seed. Kill rates are placeholders, not clinical estimates.',
    },
  },
  {
    slug: 'uav-landing-gear',
    title: 'A landing gear sized by its own impact',
    summary:
      'Structural design of a curved-skid UAV landing gear: Castigliano’s theorem for the statically indeterminate structure, a spring-mass impact model, and a minimum-mass search.',
    domain: 'Structural mechanics',
    year: '2025',
    role: 'Aerostructures team, HORYZN student initiative (TUM)',
    status: 'Analysis complete',
    featured: true,
    problem:
      'Gear stiffness and landing load are coupled: a stiffer gear strokes less but sees a higher peak force. Sizing one without the other gives either a heavy gear or a broken one.',
    approach: [
      'Solved the tied-arch skid structure analytically with Castigliano’s theorem; the tie force is the single redundant quantity.',
      'Derived vertical stiffness from the unit-load response and fed it into a 1-DOF spring-mass touchdown model.',
      'Closed the loop geometry → stiffness → impact force → peak stress and swept bow radius, bow angle and skid length for the lightest feasible design.',
    ],
    outcome: [
      'A minimum-mass design that respects stress, stroke, height and track-width constraints.',
      'Sensitivity maps showing how the tie force shifts peak stress between crossbeam, bow and skid.',
    ],
    stack: ['Python', 'NumPy', 'SciPy', 'Matplotlib'],
    links: [{ label: 'Repository', href: 'https://github.com/felixklein84/landing-gear-analysis' }],
    media: {
      kind: 'image',
      src: '/images/projects/landing-gear.png',
      alt: 'Left: peak stress versus tie force. Right: contour map of peak stress over bow radius and angle.',
      caption: 'Peak stress against tie force, and the design space with its optimum.',
    },
  },
  {
    slug: 'python-course',
    title: 'Teaching Python in India',
    summary:
      'A seven-session course that takes complete beginners from first variables to interactive data dashboards, taught at MS Memorial Khatoli School in India and published for self-study.',
    domain: 'Teaching',
    year: '2025–26',
    role: 'Course author and volunteer teacher, MS Memorial Khatoli School',
    status: 'Taught · open material',
    problem:
      'Many students had little prior contact with computers. A syntax-first course would have lost them in the first week; they needed to see early what code can do with real data.',
    approach: [
      'Seven sessions from syntax to NumPy, pandas, plotting, code quality and finally a Dash web app.',
      'Each session as empty and filled lecture notebooks, exercises with solutions and a timed agenda.',
      'Certificate exams built on small real datasets.',
    ],
    outcome: ['A complete, reusable course published on GitHub.'],
    stack: ['Python', 'Jupyter', 'pandas', 'Plotly', 'Dash', 'Poetry'],
    links: [
      { label: 'Course material', href: 'https://github.com/felixklein84/python-course' },
      { label: 'MS Memorial Khatoli School', href: 'https://www.khatolischool-india.org' },
    ],
  },
  {
    slug: 'winery-digital-system',
    title: 'Running a family winery online',
    summary:
      'Shop, product data, search visibility and brand system for Weingut Martin Klein in the Rheingau, built and maintained by me.',
    domain: 'Web & e-commerce',
    year: '2015–now',
    role: 'Family business; digital lead',
    status: 'Live',
    problem:
      'A small family winery with no dedicated sales or marketing staff has to be found, trusted and bought from online, without an agency budget.',
    approach: [
      'WooCommerce shop with custom product taxonomies (grape, vineyard, vintage, quality level, taste, style), so every wine is described as structured data rather than free text.',
      'A redesigned product page template that reads well, ranks well and can be maintained in Elementor.',
      'schema.org structured data for products and the business, aimed at both Google and AI search.',
      'A written style guide with colour tokens, type scale, logo construction and print rules, shared by web and print.',
    ],
    outcome: [
      'One consistent system across shop, labels, price lists and print.',
      'Product data that can be filtered, compared and read by machines.',
    ],
    stack: ['WordPress', 'WooCommerce', 'Elementor', 'ACF', 'PHP', 'schema.org'],
    links: [{ label: 'weingut-martin-klein.de', href: 'https://weingut-martin-klein.de' }],
  },
  {
    slug: 'supplier-data-quality',
    title: 'Making supplier data trustworthy',
    summary:
      'Data-flow modelling between ERP and the SupplyOn supplier platform for the D328eco production ramp-up, with metrics for confirmation and delivery-date quality.',
    domain: 'Industrial data',
    year: '2026',
    role: 'Working student, Process Automation & Digitalisation, Deutsche Aircraft',
    status: 'Ongoing',
    problem:
      'Ramping up aircraft production depends on knowing when parts will really arrive. Missing, wrong or unconfirmed delivery dates hide in exports until they cause a shortage.',
    approach: [
      'Mapped how order and confirmation data move between ERP and SupplyOn and where they break.',
      'Defined quantitative metrics for data quality, order confirmation and delivery-date reliability.',
      'Automated monitoring so planners see problems instead of cleaning raw extracts by hand.',
    ],
    outcome: ['Visibility on unconfirmed and inconsistent delivery dates for procurement and planning.'],
    stack: ['SAP', 'SupplyOn', 'Python', 'SQL', 'Power BI'],
    links: [],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
