import { IProject } from '@/types';
// import { Icon, icons } from 'lucide-react';

export const GENERAL_INFO = {
    email: 'mbakweangela96@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Angela, I am reaching out to you because...',

    oldPortfolio: '#',
    hireLink: '#',
};

export const SOCIAL_LINKS = [
    // { name: 'GitHub', url: '#' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/angela-mbakwe-45953619a' },
    // { name: 'Instagram', url: '#' },
    // { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'Typescript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'NextJs',
            icon: '/logo/next.png',
        },
        {
            name: 'ViteJs',
            icon: '/logo/vite.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Frammer Motion',
            icon: '/logo/framer-motion.png',
        },
    ],
    mobile: [
        {
            name: 'React Native',
            icon: '/logo/reactNative.png',
        },
        {
            name: 'Expo',
            icon: '/logo/expo.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
    ],
    devOps :[
      {
        name: 'Nexus',
        icon: '/logo/Nexus.png',
      },
      {
        name: 'Kubernetes',
        icon: '/logo/Kubernetes.png',
      },
      {
        name: 'Digital Ocean',
        icon: '/logo/digitalOcean.png',
      },
      {
        name: 'Nginx',
        icon: '/logo/nginx.png',
      },
      {
        name: 'Tomcat',
        icon: '/logo/tomcat.png',
      },
      {
        name: 'Apache',
        icon: '/logo/apache.png',
      },
      {
        name: 'Ansible',
        icon: '/logo/ansible.png',
      },
      {
        name: 'Terraform',
        icon: '/logo/terraform.jpg',
      },
      {
        name: 'AWS (EC2, S3, RDS, ELB, Auto Scaling, IAM, CloudFormation)',
        icon: '/logo/aws.png',
    },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
          name: 'Jenkins',
          icon: '/logo/jenkins.png',
        },
        {
          name: 'GitHub',
          icon: '/logo/github.png',
        },
        {
          name: 'Azure',
          icon: '/logo/azure.webp',
        }
    ],
};

export const PROJECTS: IProject[] = [
  {
        title: 'Fouani',
        slug: 'fouani',
        liveUrl: 'https://fouani-sandbox.aff.ng/',
        year: 2025,
        description: `
    A web-based platform developed for managing credit card applications within the Fouani ecosystem. The system allows customers to apply for store-specific credit cards, while providing admin teams with tools for reviewing, approving, or rejecting applications.<br/> <br/>
    
    Technical Highlights:
    <ul>
      <li>Developed an end-to-end flow for customers to submit credit card applications with required personal and financial information.</li>
      <li>Built a secure dashboard for Fouani admins and backend staff to evaluate, approve, or reject applications in real time.</li>
      <li>Implemented detailed logs to track all admin actions (approvals, rejections, updates), enhancing accountability and traceability.</li>
      <li>Designed interfaces for users to monitor the status of their applications throughout the review process.</li>
      <li>Developed a mobile-first experience to allow users and admins to interact with the platform from any device. </li>
    </ul>
    `,
        role: `
    Frontend Lead <br/>
    <ul>
      <li>Designed and implemented application and admin dashboards with intuitive, user-friendly layouts.</li>
      <li>Created modular and reusable components for application forms, status indicators, tables, and modals.</li>
      <li>Integrated with backend APIs for submitting applications, fetching user data, handling approvals, and logging activities.</li>
      <li>Implemented secure login flows and role-based access control for different user types (customers, admins, backend admins).</li>
      <li>Developed powerful interfaces for admin tasks such as filtering applications, managing user accounts, and reviewing audit trails.</li>
      <li> Focused on fast rendering and efficient state management to support large volumes of applications. </li>
    </ul>
    `,
        techStack: [
            'React',
            'Tailwind CSS',
            'ViteJS',
            'Material-UI',
            'JavaScript',
        ],
        thumbnail: '/projects/thumbnail/Fouani.png',
        longThumbnail: '',
        images: [
            '/projects/images/FouaniLogIn.png',
            '/projects/images/fouaniLong.png',
        ],
        // note: 'Due to client confidentiality and security requirements, this project requires authentication and cannot be publicly accessed.',
    },
    {
        title: 'Dash',
        slug: 'dash',
        // liveUrl: '#',
        year: 2025,
        description: `Dash is a mobile-based carpooling application designed to offer commuters an efficient, cost-effective, and eco-friendly way to travel. Dash allows users to schedule rides, choose who they want to ride with using intelligent filters, and connect with other professionals heading in the same direction.  <br/> <br/>
    
    Technical Highlights:
    <ul>
      <li>Developed a logic-based system that matches drivers with potential passengers based on destination, route, schedule, and preferences.</li>
      <li>Enabled filtering based on user ratings, pickup proximity, route compatibility, and rider profiles.</li>
      <li>Integrated with real-time location services (Google Maps) to visualize available rides and optimize route planning.</li>
      <li>Designed user-friendly interfaces for selecting pickup/drop-off points, viewing driver/passenger profiles, and managing ride requests.</li>
      <li> Implemented secure sign-in flows and in-app rating/review systems to ensure safety and transparency among users. </li>
      <li> Enabled real-time updates for ride confirmations, driver arrival, ride cancellations, and messaging. </li>
      <li> Developed dashboards for viewing ride history, payment breakdowns, and ride patterns. </li>
    </ul>
    `,
        role: `
    Frontend Lead <br/>
    Responsible for student and teacher dashboard development:
    <ul>
      <li>Built responsive and interactive screens using React Native, ensuring seamless user experience on both iOS and Android.</li>
      <li>Integrated with backend services to fetch user profiles, ride data, routes, and filter options dynamically.</li>
      <li>Integrated geolocation APIs and map SDKs to display real-time user location, driver tracking, and route plotting</li>
      <li>Implemented sign-up/sign-in flows, profile creation, and role-specific UI for drivers and passengers.</li>
    </ul>
    `,
        techStack: [
            'React Native',
            'CSS',
            'React',
            'Expo',
            'JavaScript',
        ],
        thumbnail: '/projects/thumbnail/Dash.jpeg',
        longThumbnail: '',
        images: [
            '/projects/images/Dash1.jpeg',
            '/projects/images/Dash2.jpeg',
        ],
        // note: 'Due to client confidentiality and security requirements, this project requires authentication and cannot be publicly accessed.',
    },
    {
        title: 'FIRS Portal',
        slug: 'portal',
        liveUrl: 'https://firsfxportal.accessbankplc.com/login/',
        year: 2024,
        description: `
      This project was built to manage the inflow of accounts for FIRS (Federal Inland Revenue Service) responsible for assessing, collecting and accounting for tax and other revenue accruing to the Federal Government of Nigeria <br/> <br/>
      
      
      Technical Highlights:
      <ul>
        <li>Designed and developed an intuitive portal for taxpayers to track their remittance history.</li>
        <li>Enabled users to view contributions by payer, fiscal year, and currency type.</li>
        <li>Built dashboards for daily and monthly reporting cycles, used consistently across financial years.</li>
        <li>Ensured strict data integrity and secure access protocols for sensitive financial data. </li>
      </ul>
      `,
        role: `
      Frontend Led <br/>
      Led the frontend development:
      <ul>
        <li>Led the frontend architecture, setting up scalable and maintainable code structure using React (or relevant framework)</li>
        <li>Coordinated with backend and DevOps teams to ensure API integration and deployment workflows.</li>
        <li>Minimized load times through asset optimization and lazy loading strategies.</li>
        <li>Built modular, reusable components to accelerate development and ensure consistency.</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'React',
            'TailwindCSS',
            'TypeScript',
            'C#',
            'ASP.NET Core',
            'Redux',
            'SWR',
            'Azure',
            'Docker'
        ],
        thumbnail: '/projects/thumbnail/FIRSPortal.png',
        longThumbnail: '',
        images: [
            '/projects/thumbnail/FIRSPortal.png',
            '/projects/images/FIRSLong.png',
        ],
    },
    {
        title: 'AUTOX',
        slug: 'autox',
        liveUrl: 'https://autox.aff.ng/',
        year: 2024,
        description: `
      This is a project that was built to solve car purchase problems. It is a web-based application that gives clients a lot of options when seeking for vendors to buy, sell and rent cars.
 <br/> <br/>
      
      Technical Highlights:
      <ul>
        <li>Built dynamic interfaces to showcase multiple vendor listings for vehicle purchase, sales, and rentals.</li>
        <li>Integrated intelligent search and filtering options (e.g., by location, price range, vehicle type, availability).</li>
        <li>Connected frontend to APIs for real-time data retrieval and rendering of vendor offers and vehicle metadata.</li>
        <li>Ensured role-based access for clients and vendors to manage their listings securely.</li>
      </ul>
      `,
        role: `
      Frontend Lead <br/>
      Led the frontend development:
      <ul>
        <li>Led the design and development of scalable and reusable component structures using modern React</li>
        <li>Created modular components for vehicle cards, filter panels, and navigation.</li>
        <li>Implemented efficient state management using Redux </li>
        <li>inimized load times by optimizing asset bundling, lazy loading, and implementing best practices in frontend performance.</li>
        <li>Worked closely with backend developers to integrate RESTful APIs for dynamic content rendering and user actions.</li>
      </ul>
      `,
        techStack: ['React', 'Redux', 'TypeScript', 'Vite.js', 'TailwindCSS', 'C#', 'ASP.NET Core'],
        thumbnail: '/projects/thumbnail/AutoXThumb.png',
        longThumbnail: '',
        images: [
            '/projects/images/AutoXLong.png',
            '/projects/images/AutoXLong1.png',
            '/projects/images/AutoXLong2.png',
            '/projects/images/AutoXLong3.png',
        ],
    },
    // {
    //     title: 'ACCESS BANK’S RIGHT ISSUE PORTAL',
    //     slug: 'right-issue-portal',
    //     liveUrl: '#',
    //     year: 2024,
    //     description: `
    //   This project was built when CBN mandated bank recapitalization and we also integrated NGX (Nigerian Exchange Group) into the portal, making it seamless for both Access and non-Access bank customers to participate and raising 350 billion naira in August 2024. <br/> <br/>
      
    //   Key Features:<br/>
    //   <ul>
    //     <li>🔗 Link Shortening: Quick URL shortening using TinyURL API</li>
    //     <li>📋 Copy Feature: One-click copy to clipboard</li>
    //     <li>📱 Responsive Design: Mobile-first approach</li>
    //     <li>🎨 Modern UI: Clean and intuitive interface</li>
    //     <li>💾 Link History: Maintains list of shortened URLs</li>
    //   </ul><br/>
      
    //   Technical Highlights:
    //   <ul>
    //     <li>Built responsive layouts using CSS Modules</li>
    //     <li>Implemented state management with React Hooks</li>
    //     <li>Created smooth transitions and loading states</li>
    //     <li>Developed error handling and validation</li>
    //   </ul>
    //   `,
    //     role: `
    //   Frontend Lead <br/>
    //   Led the frontend development:
    //   <ul>
    //     <li>⚛️ React Development: Built component architecture</li>
    //     <li>🎨 UI Implementation: Created responsive layouts</li>
    //     <li>🔄 API Integration: Connected with TinyURL API</li>
    //     <li>📱 Mobile-First: Ensured cross-device compatibility</li>
    //     <li>🔍 Testing: Implemented error handling</li>
    //   </ul>
    //   `,
    //     techStack: [
    //         'React',
    //         'CSS Modules',
    //         'JavaScript',
    //         'Vite',
    //         'TinyURL API',
    //     ],
    //     thumbnail: '/projects/thumbnail/UrlShorten.png',
    //     longThumbnail: '/projects/long/UrlShorten.png',
    //     images: [
    //         '/projects/images/urlShorten-1.png',
    //         '/projects/images/urlShorten-2.png',
    //         '/projects/images/urlShorten-3.png',
    //         '/projects/images/urlShorten-4.png',
    //     ],
    // },
    {
        title: 'HOMEBUDDY',
        slug: 'homebuddy',
        liveUrl: 'https://homebuddy.ng/',
        year: 2023,
        description: `
      This is a project that was built to solve housing problems. It is a web-based application that gives clients a plethora of options when seeking for houses to buy, sell and rent.
 <br/> <br/>
      
      Technical Highlights:
      <ul>
        <li>Designed dynamic property cards to display location, pricing, images, and key features in real-time.</li>
        <li>Implemented location-based search with filter options such as property type, price range, availability, and amenities.</li>
        <li>Built detailed views with photo galleries, pricing history, descriptions, and contact actions for each listing.</li>
        <li>Developed mobile-friendly and desktop-compatible interfaces for broad user accessibility.</li>
        <li>Enabled secure login for clients, agents, and admins with role-based access controls.</li>
      </ul>
      `,
        role: `
      Frontend Lead <br/>
      Led the frontend implementation:
      <ul>
        <li>Led the creation of scalable, reusable UI components using modern frameworks like React or Vue. </li>,
        <li>Worked closely with backend engineers and product designers to align business logic with user interface flow. </li>
        <li>Integrated property data endpoints to display, update, and manage listings in real-time. </li>
        <li>Implemented lazy loading, image optimization, and code splitting for faster load times and smoother UX. </li>
      </ul>
      `,
        techStack: ['ViteJs', 'React', 'SCSS','Redux', 'SWR'],
        thumbnail: '/projects/thumbnail/HomeBuddy.png',
        longThumbnail: '',
        images: [
            '/projects/images/HomeBuddyLong.png',
            '/projects/images/HomeBuddyLong1.png',
            '/projects/images/HomeBuddyLong2.png',
            '/projects/images/HomeBuddyLong3.png',
        ],
    },
    {
        title: 'BREEZEPAY',
        slug: 'breezepay',
        liveUrl: 'https://walletportal.breezepay.io/sign-in',
        year: 2023,
        description: `
    This is a project that was built to solve all payment delay issues. It is a web application that helps with instant and seamless payment transactions. <br/> <br/>
    
    Technical Highlights:
    <ul>
      <li>Implemented a robust system for initiating and confirming payments with minimal latency.</li>
      <li>Developed user dashboards to view transaction history, payment status, and live processing feedback.</li>
      <li>Designed feedback systems for failed or delayed payments with clear error reporting and resolution suggestions.</li>
      <li>Connected frontend to scalable backend services for fast and reliable transaction processing.</li>
      <li>Integrated with third-party payment APIs ensuring compliance and encryption.</li>
    </ul>
    `,
        role: `
    Team member <br/>
    Responsible for student and teacher dashboard development:
    <ul>
      <li>Built clean, responsive interfaces for transaction forms, payment summaries, and user activity views.</li>
      <li>Integrated payment APIs for processing transactions, handling responses, and displaying real-time payment feedback.</li>
      <li>Created reusable input controls, alert modals, and status indicators to streamline development and UX consistency.</li>
      <li>Maintained user trust by implementing best practices for secure input handling, session management, and visual feedback.</li>
    </ul>
    `,
        techStack: [
            'React',
            'Tailwind CSS',
            'Material-UI',
            'JavaScript',
            'C#',
            'ASP.NET Core',
            'Azure',
            'SWR',
        ],
        thumbnail: '/projects/thumbnail/BreezePayPortal.png',
        longThumbnail: '',
        images: [
            '/projects/thumbnail/BreezePayPortal.png',
        ],
        // note: 'Due to client confidentiality and security requirements, this project requires authentication and cannot be publicly accessed.',
    },
    {
        title: 'TradeX',
        slug: 'tradex',
        liveUrl: 'https://nnpctradex.accessbankplc.com/login/',
        year: 2023,
        description: `
    A web-based application developed for the Nigerian National Petroleum Corporation (NNPC) to manage and track the inflow of remittances from Dangote Refinery and other affiliated refineries.  <br/> <br/>
    
    Technical Highlights:
    <ul>
      <li>Built an interactive dashboard for viewing refinery payments and remittance flows across fiscal periods.</li>
      <li>Designed interfaces to segment and display payment data from multiple refinery sources, including Dangote and other partners.</li>
      <li>Enabled filtering of payments by year, currency type, and refinery to facilitate targeted financial analysis.</li>
      <li>Connected the frontend to robust APIs for real-time sync with backend data systems, ensuring accuracy and up-to-date information.</li>
      <li>Developed tools for real-time and periodic reporting (daily, monthly, and annual) used by stakeholders across departments. </li>
    </ul>
    `,
        role: `
    Team member <br/>
    Responsible for student and teacher dashboard development:
    <ul>
      <li>Led the design and development of a modular frontend structure to support complex financial datasets.</li>
      <li>Consumed backend services to retrieve refinery payment data and dynamically render reporting components.</li>
      <li>Developed custom filters and search utilities to help users analyze data by refinery, time period, and currency.</li>
      <li>Implemented role-based interfaces for government personnel and financial admins with different levels of access.</li>
    </ul>
    `,
        techStack: [
            'React',
            'Tailwind CSS',
            'TypeScript',
            'Material-UI',
            'Redux',
        ],
        thumbnail: '/projects/thumbnail/TradeXPortal.png',
        longThumbnail: '',
        images: [
            '/projects/images/TradeXPortal.png',
        ],
        // note: 'Due to client confidentiality and security requirements, this project requires authentication and cannot be publicly accessed.',
    },
    // {
    //     title: 'MACXX STORE',
    //     slug: 'macxx-store',
    //     // liveUrl: '#',
    //     year: 2021,
    //     description: `
    // Macxx Store is an ecommerce app that solves the need of linking Sellers and buyers together with the sole purpose of exchanging goods and products for money. it has Functional Authentication, and a secured payment system. <br/> <br/>
    
    // Key Features:<br/>
    // <ul>
    //   <li>📊 Performance Analytics: Detailed academic performance tracking with interactive charts</li>
    //   <li>📈 Real-time Grade Visualization: Dynamic grade distribution and performance metrics</li>
    //   <li>👨‍🏫 Teacher Dashboard: Comprehensive class performance monitoring and analysis</li>
    //   <li>👨‍🎓 Student Portal: Personal academic tracking and result visualization</li>
    //   <li>📱 Responsive Design: Optimized for both desktop and mobile devices</li>
    // </ul><br/>
    
    // Technical Highlights:
    // <ul>
    //   <li>Built interactive data visualizations using Recharts for performance metrics</li>
    //   <li>Implemented responsive layouts with Tailwind CSS and Material-UI components</li>
    //   <li>Created dynamic grade distribution charts and attendance tracking</li>
    //   <li>Developed separate interfaces for student and teacher roles</li>
    // </ul>
    // `,
    //     role: `
    // Team member <br/>
    // Responsible for student and teacher dashboard development:
    // <ul>
    //   <li>🎨 UI Development: Designed and implemented student and teacher interfaces</li>
    //   <li>📊 Data Visualization: Created interactive charts for performance analysis</li>
    //   <li>📱 Responsive Design: Built mobile-friendly dashboard layouts</li>
    //   <li>🔄 State Management: Implemented efficient data flow for dashboard components</li>
    //   <li>🎯 Focus Areas: Student portal and teacher analytics sections</li>
    // </ul>
    // `,
    //     techStack: [
    //         'React',
    //         'Tailwind CSS',
    //         'Recharts',
    //         'Material-UI',
    //         'JavaScript',
    //         'Lucide Icons',
    //     ],
    //     thumbnail: '/projects/thumbnail/schoolManagement.png',
    //     longThumbnail: '/projects/long/schoolManagement.png',
    //     images: [
    //         '/projects/images/schoolManagement-1.png',
    //         '/projects/images/schoolManagement-2.png',
    //         '/projects/images/schoolManagement-3.png',
    //         '/projects/images/schoolManagement-4.png',
    //         '/projects/images/schoolManagement-5.png',
    //         '/projects/images/schoolManagement-6.png',
    //         '/projects/images/schoolManagement-7.png',
    //         '/projects/images/schoolManagement-8.png',
    //         '/projects/images/schoolManagement-9.png',
    //         '/projects/images/schoolManagement-10.png',
    //     ],
    //     note: 'Due to client confidentiality and security requirements, this project requires authentication and cannot be publicly accessed.',
    // },
];

export const MY_EXPERIENCE = [
    {
        title: 'Frontend Engineer',
        company: 'Africa Fintech Foundry (Access Bank)',
        duration: 'March 2023 - Present',
    },
    {
        title: 'Frontend Engineer',
        company: 'ISABITV',
        duration: 'Jan 2023 - July 2023',
    },
    {
        title: 'Software Engineer',
        company: 'SYNOVA TECHNOLOGY SOLUTIONS',
        duration: 'Nov 2021 - Dec 2022',
    },
    {
        title: 'Frontend Developer',
        company: 'ZURI',
        duration: 'Dec 2020 - July 2021',
    },
];
