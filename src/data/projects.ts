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
  impact: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: 'glioblastoma-cell-dynamics',
    title: 'Glioblastoma Cell Dynamics',
    kicker: 'Scientific computing · stochastic modelling · cancer research',
    description:
      'A rebuilt research-oriented simulation framework for glioblastoma cell-population dynamics, based on continuous-time Markov chains and therapy-effect modelling.',
    longDescription:
      'Originally developed as a mathematics bachelor thesis, this project models glioblastoma multiforme as a dynamic cell-population system. The new version is structured as a cleaner research codebase with modular model assumptions, reproducible experiments, stronger documentation, and space for future extensions such as therapy schedules, heterogeneous states and data-driven calibration.',
    tags: ['CTMC', 'Scientific Computing', 'Stochastic Processes', 'Cancer Modelling'],
    status: 'Rebuilt research project',
    year: '2024–2026',
    repo: 'https://github.com/felixklein84/glioblastoma-multiforme-ssa',
    impact: [
      'Turns a thesis prototype into a reproducible research-style codebase.',
      'Connects mathematical modelling with biological cell-state dynamics.',
      'Designed for visual experiments, documentation and future model refinement.',
    ],
    stack: ['Python / Julia', 'NumPy', 'Matplotlib', 'Sphinx', 'Markov Chains'],
  },
  {
    slug: 'autonomous-field-operations',
    title: 'Autonomous Field Operations',
    kicker: 'Robotics · multi-agent scheduling · agricultural autonomy',
    description:
      'A multi-agent simulation for autonomous tractors coordinating plowing and seeding under realistic field and timing constraints.',
    longDescription:
      'This project explores how multiple agricultural machines can coordinate field operations. Two slower tractors plow while a faster seeder may only enter already prepared swaths. The system focuses on scheduling, collision avoidance, field geometry, boundary constraints and event-driven replanning.',
    tags: ['Multi-Agent Systems', 'Robotics', 'Scheduling', 'GIS'],
    status: 'Active simulation project',
    year: '2025–2026',
    repo: 'https://github.com/felixklein84',
    impact: [
      'Models real operational dependencies between different machine types.',
      'Combines geometry, graph search and discrete simulation logic.',
      'Built to support demo GIFs and clear visual project communication.',
    ],
    stack: ['Python', 'Shapely', 'NetworkX', 'GeoJSON', 'Matplotlib'],
  },
  {
    slug: 'india-python-course',
    title: 'India Python Course',
    kicker: 'Education · practical computing · teaching material',
    description:
      'A beginner-friendly Python and digital-skills course built for practical workshops with students in India.',
    longDescription:
      'The course introduces students with limited computer experience to practical programming, digital confidence and project-based learning. It is designed to be approachable, visual and useful beyond the classroom.',
    tags: ['Teaching', 'Python', 'Digital Skills', 'Education'],
    status: 'Teaching material',
    year: '2025–2026',
    repo: 'https://github.com/felixklein84',
    impact: [
      'Transforms abstract programming into practical exercises.',
      'Designed for students with little prior exposure to computers.',
      'Can be extended into English-language workshop material.',
    ],
    stack: ['Python', 'Jupyter', 'Markdown', 'Teaching Design'],
  },
  {
    slug: 'winery-digital-system',
    title: 'Weingut Martin Klein Digital System',
    kicker: 'E-commerce · UX · product data · local brand building',
    description:
      'A digital operating system for a family winery: product data, WooCommerce, SEO, design system, local visibility and online sales.',
    longDescription:
      'This work connects a real family business with modern digital infrastructure. It includes product pages, WooCommerce structure, SEO, Google visibility, product photography workflows, customer-facing UX and B2B sales material.',
    tags: ['WooCommerce', 'SEO', 'UX Design', 'Product Data'],
    status: 'Real-world business system',
    year: '2024–2026',
    demo: 'https://weingut-martin-klein.de',
    impact: [
      'Connects brand, technology and real sales operations.',
      'Improves product presentation, discoverability and customer trust.',
      'Shows practical execution beyond academic code projects.',
    ],
    stack: ['WordPress', 'WooCommerce', 'Elementor', 'ACF', 'RankMath'],
  },
  {
    slug: 'supply-chain-analytics',
    title: 'Supply Chain Analytics & Automation',
    kicker: 'Operations · SAP data · Power BI · supplier visibility',
    description:
      'Conceptual and analytical work on supplier data quality, delivery-date transparency and process automation in aerospace supply chains.',
    longDescription:
      'This project area focuses on turning messy operational data into usable visibility. It includes SAP export logic, supplier confirmation monitoring, delivery-date quality, internal data ownership and dashboards for procurement and supply-chain coordination.',
    tags: ['Supply Chain', 'SAP', 'Power BI', 'Data Quality'],
    status: 'Professional workstream',
    year: '2025–2026',
    impact: [
      'Builds visibility for missing, wrong or unconfirmed delivery dates.',
      'Connects analytics with process ownership and supplier collaboration.',
      'Good example of applied data work in a real industrial setting.',
    ],
    stack: ['SAP', 'Excel', 'Power BI', 'Python', 'Process Design'],
  },
];

export const featuredProjects = projects.slice(0, 4);
