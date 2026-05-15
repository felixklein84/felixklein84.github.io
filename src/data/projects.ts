export type Project = {
  slug: string;
  title: string;
  kicker: string;
  description: string;
  longDescription: string;
  tags: string[];
  status: string;
  year: string;
  repo?: string;
  demo?: string;
  image?: string;
  impact: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: 'glioblastoma-cell-dynamics',
    title: 'Glioblastoma Cell Dynamics',
    kicker: 'Scientific computing · stochastic modelling · cancer research',
    description:
      'Bachelor thesis work and rebuilt simulation framework for glioblastoma cell-population dynamics, using continuous-time Markov chains and Gillespie SSA to model therapy effects.',
    longDescription:
      'Originally developed as a mathematics bachelor thesis at the University of Mannheim, this project models glioblastoma multiforme (GBM) as a dynamic cell-population system. Cancer cells transition between proliferating, quiescent, dead and therapy-damaged states via a continuous-time Markov chain. The rebuilt version is structured as a clean research codebase with modular model assumptions, Gillespie SSA simulation, reproducible experiments, publication-quality plots and space for extensions such as heterogeneous cell states, therapy schedules and data-driven calibration.',
    tags: ['CTMC', 'Gillespie SSA', 'Cancer Modelling', 'Stochastic Processes'],
    status: 'Bachelor thesis · rebuilt research project',
    year: '2023–2026',
    repo: 'https://github.com/felixklein84/glioblastoma-multiforme-ssa',
    image: '/images/projects/glioblastoma.png',
    impact: [
      'Rigorous mathematical model of cancer cell-state transitions using CTMC and SSA.',
      'Connects stochastic modelling with biological cell-state dynamics and therapy effects.',
      'Reproducible research codebase with publication-quality visualisations.',
    ],
    stack: ['Python', 'NumPy', 'Matplotlib', 'SciPy', 'Markov Chains', 'Gillespie SSA'],
  },
  {
    slug: 'autonomous-field-operations',
    title: 'Autonomous Field Operations',
    kicker: 'Robotics · multi-agent scheduling · agricultural autonomy',
    description:
      'A multi-agent simulation for autonomous tractors coordinating plowing and seeding under realistic field geometry, timing constraints and operational dependencies.',
    longDescription:
      'Built as part of my HiWi role at TUM’s Chair of Agricultural Mechatronics, this project explores how multiple agricultural machines can coordinate field operations autonomously. Two slower tractors plow while a faster seeder may only enter already-prepared swaths. The system handles scheduling, collision avoidance, field geometry, boundary constraints and event-driven replanning, connecting it to Controlled Traffic Farming and combinatorial route-allocation problems. Built in Python with Shapely for geometry and NetworkX for path planning; reproducible Sphinx documentation.',
    tags: ['Multi-Agent Systems', 'Robotics', 'Scheduling', 'GIS'],
    status: 'Active research project · TUM HiWi',
    year: '2025–2026',
    repo: 'https://github.com/felixklein84',
    image: '/images/projects/tractor-demo.gif',
    impact: [
      'Models real operational dependencies between heterogeneous machine types.',
      'Combines polygon geometry, graph search and discrete event simulation.',
      'Produces animated demos of full coordinated field operations.',
    ],
    stack: ['Python', 'Shapely', 'NetworkX', 'GeoJSON', 'Matplotlib', 'Pygame'],
  },
  {
    slug: 'india-python-course',
    title: 'India Python Course',
    kicker: 'Education · practical computing · teaching material',
    description:
      'A beginner-friendly Python and digital-skills curriculum built for workshops with students in India — designed to be approachable, project-based and useful beyond the classroom.',
    longDescription:
      'Built in partnership with Khatoli School in India, this curriculum introduces Python programming and digital skills to students with limited prior exposure to computers. Topics include basic programming, data handling, visualisation and digital workflows, designed to build real confidence with technology rather than just syntax knowledge. The material uses Jupyter notebooks and concrete real-world examples adapted to the classroom context.',
    tags: ['Teaching', 'Python', 'Digital Skills', 'Education'],
    status: 'Teaching material · in partnership with Khatoli School',
    year: '2025–2026',
    repo: 'https://github.com/felixklein84',
    demo: 'https://www.khatolischool-india.org',
    impact: [
      'Transforms abstract programming into practical, confidence-building exercises.',
      'Designed for students with little prior exposure to computers.',
      'Can be extended into English-language workshop material for further education contexts.',
    ],
    stack: ['Python', 'Jupyter', 'Pandas', 'Matplotlib', 'Markdown'],
  },
  {
    slug: 'winery-digital-system',
    title: 'Weingut Martin Klein',
    kicker: 'E-commerce · UX · product data · local brand building',
    description:
      'The complete digital operating system for a family winery: WooCommerce shop, product data architecture, SEO, Google visibility, product photography and B2B sales material.',
    longDescription:
      'This work connects a real family business with modern digital infrastructure. The project covers product page architecture, WooCommerce shop build, on-page and local SEO, Google Business Profile optimisation, product photography workflows, customer-facing UX and B2B sales material. It demonstrates that applied technical work extends well beyond academic code — real ownership, real customers, real business results.',
    tags: ['WooCommerce', 'SEO', 'UX Design', 'Product Data'],
    status: 'Live production system',
    year: '2020–present',
    demo: 'https://weingut-martin-klein.de',
    impact: [
      'Full digital build: brand, shop, SEO and customer experience from scratch.',
      'Measurable improvement in Google search visibility and online sales.',
      'Demonstrates real-world execution beyond academic and corporate code.',
    ],
    stack: ['WordPress', 'WooCommerce', 'Elementor', 'ACF', 'RankMath', 'PHP'],
  },
  {
    slug: 'supply-chain-analytics',
    title: 'Supply Chain Analytics & Automation',
    kicker: 'Operations · SAP data · Power BI · supplier visibility',
    description:
      'Supplier data quality monitoring, delivery-date transparency and process automation tools built for an aerospace supply chain at Deutsche Aircraft.',
    longDescription:
      'This professional workstream focused on turning messy operational data into usable visibility. It includes SAP export logic, automated supplier confirmation monitoring, delivery-date quality scoring, internal data ownership processes and Power BI dashboards for procurement and supply-chain coordination. The goal was to give planners reliable, actionable information rather than raw SAP extracts.',
    tags: ['Supply Chain', 'SAP', 'Power BI', 'Data Quality'],
    status: 'Professional workstream',
    year: '2024–2025',
    impact: [
      'Built delivery-date visibility for missing, wrong or unconfirmed confirmations.',
      'Reduced manual data cleanup for procurement teams with automated monitoring.',
      'Applied data quality thinking to a real industrial production environment.',
    ],
    stack: ['SAP', 'Excel', 'Power BI', 'Python', 'SQL', 'Process Design'],
  },
];

export const featuredProjects = projects.slice(0, 4);
