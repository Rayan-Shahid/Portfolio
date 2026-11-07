export interface Project {
  title: string;
  slug: string;
  year: string;
  liveurl: string;
  thumbnail: string;
  techStack: string[];
  description: string;
  role: string;
}
type My_STACKitem = {
  name: string;
  icon: string;
};

export const MY_STACK = {
  Frontend: [
    {
      name: "JavaScript",
      icon: "/logo/js.png",
    },
    {
      name: "TypeScript",
      icon: "/logo/ts.png",
    },
    {
      name: "React",
      icon: "/logo/react.png",
    },
    {
      name: "Next.js",
      icon: "/logo/next.png",
    },
    {
      name: "Redux",
      icon: "/logo/redux.png",
    },
    {
      name: "Tailwind CSS",
      icon: "/logo/tailwind.png",
    },
    {
      name: "GSAP",
      icon: "/logo/gsap.png",
    },
    {
      name: "Framer Motion",
      icon: "/logo/framer-motion.png",
    },
    {
      name: "Sass",
      icon: "/logo/sass.png",
    },
    {
      name: "Bootstrap",
      icon: "/logo/bootstrap.svg",
    },
  ],
  Backend: [
    {
      name: "Node.js",
      icon: "/logo/node.png",
    },
    {
      name: "NestJS",
      icon: "/logo/nest.svg",
    },
    {
      name: "Express.js",
      icon: "/logo/express.png",
    },
  ],
  Database: [
    {
      name: "MySQL",
      icon: "/logo/mysql.svg",
    },
    {
      name: "PostgreSQL",
      icon: "/logo/postgreSQL.png",
    },
    {
      name: "MongoDB",
      icon: "/logo/mongodb.svg",
    },
    {
      name: "Prisma",
      icon: "/logo/prisma.png",
    },
  ],
  Tools: [
    {
      name: "Git",
      icon: "/logo/git.png",
    },
    {
      name: "Docker",
      icon: "/logo/docker.svg",
    },
    {
      name: "AWS",
      icon: "/logo/aws.png",
    },
  ],
};

export const MY_EXPERIENCE = [
  {
    title: "Software Engineer (Frontend)",
    company: "NP Marts",
    duration: "January 2026 - Present",
  },
  {
    title: "Frontend Developer",
    company: "Flaxtasks",
    duration: "August 2024 - Nov 2024",
  },
  {
    title: "Frontend Intern",
    company: "Flaxtasks",
    duration: "June 2024 - August 2024",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "FitMatch",
    slug: "fitmatch",
    liveurl:
      "https://github.com/Tajmirul/portfolio-2.0/blob/main/app/_components/Project.tsx",
    year: "2026",
    thumbnail: "/logo/js.png",
    techStack: ["Next.js", "Payload CMS", "Tailwind CSS", "Swiper.js"],
    description: `
                    A complete agency portfolio platform built for Electro EV to showcase their services, blog content, and product offerings. <br/> <br/>
                    
                    Key Features:<br/>
                    <ul>
                        <li>🛠️ Service Display System: Interactive service showcase with synchronized sliders</li>
                        <li>✍️ Blog Management: SEO-friendly blog with categorization and search</li>
                        <li>🛒 Product Catalog: Organized product display with filtering capabilities</li>
                        <li>📱 Fully Responsive: Optimized for all device sizes</li>
                        <li>⚡ Fast Performance: Optimized Next.js frontend with ISR (Incremental Static Regeneration)</li>
                    </ul><br/>
                    
                    Technical Highlights:
                    <ul>
                        <li>Implemented complex slider synchronization logic using Swiper.js</li>
                        <li>Customized Payload CMS admin panel for intuitive content management</li>
                        <li>Developed reusable UI components with shadcn for design consistency</li>
                        <li>Configured efficient data fetching strategies in Next.js</li>
                    </ul>
                    `,
    role: `
                Full-Stack Developer <br/>
                Owned the entire development lifecycle:
                <ul>
                    <li>✅ Backend: Configured Payload CMS with custom collections for services, blogs, and products</li>
                    <li>🎨 Frontend: Built all UI components using Tailwind CSS and shadcn</li>
                    <li>🔄 State Management: Implemented client-side data fetching and caching</li>
                    <li>🖥️ CMS Customization: Created admin interfaces for content editors</li>
                    <li>🚀 Deployment: Set up CI/CD pipeline for Vercel hosting</li>
                    <li>🧩 Third-Party Integration: Added Swiper.js for interactive sliders</li>
                </ul>
                `,
  },
  {
    title: "Speech Emotion Recognition",
    slug: "speech-emotion-recognition",
    liveurl: "www.yts.com",
    year: "2026",
    thumbnail: "/logo/node.png",
    techStack: ["Python", "TensorFlow", "Librosa", "Streamlit", "Scikit-Learn"],
    description: `
                    An AI-powered web application that analyzes audio inputs to detect and classify human emotions (such as happy, sad, angry, fearful, and neutral) from speech patterns. <br/> <br/>
                    
                    Key Features:<br/>
                    <ul>
                        <li>🎙️ Real-time Audio Processing: Upload audio files or record voice directly in the browser</li>
                        <li>📊 Feature Extraction: Extracts audio features like MFCCs, Chroma, and Mel-spectrograms using Librosa</li>
                        <li>🤖 Deep Learning Model: Trained Convolutional Neural Network (CNN) / LSTM model for high classification accuracy</li>
                        <li>📈 Visual Analytics: Interactive graphs showing emotion probability distributions</li>
                        <li>🚀 Interactive UI: Clean and user-friendly web interface built with Streamlit</li>
                    </ul><br/>
                    
                    Technical Highlights:
                    <ul>
                        <li>Preprocessed and augmented audio datasets (RAVDESS/TESS) to improve model robustness</li>
                        <li>Optimized feature extraction pipelines for low-latency inference</li>
                        <li>Integrated machine learning models with a lightweight web frontend</li>
                    </ul>
                    `,
    role: `
                Machine Learning & Full-Stack Developer <br/>
                Spearheaded the AI model development and deployment:
                <ul>
                    <li>🧠 Model Training: Designed, trained, and evaluated deep learning models for speech classification</li>
                    <li>🎧 Data Pipeline: Built automated preprocessing and feature extraction scripts using Librosa</li>
                    <li>🌐 Web Application: Developed an interactive deployment interface using Streamlit</li>
                    <li>📉 Performance Optimization: Tuned hyperparameters to improve real-time prediction accuracy</li>
                </ul>
                `,
  },
  {
    title: "Flaxtasks",
    slug: "flaxtasks",
    liveurl: "https://flaxtasks.com",
    year: "2026",
    thumbnail: "/logo/react.png",
    techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    description: `
                    A modern corporate company website and digital platform built for Flaxtasks to showcase enterprise services, solutions, and client success stories. <br/> <br/>
                    
                    Key Features:<br/>
                    <ul>
                        <li>🏢 Enterprise Showcase: Clean, modern architecture highlighting core business solutions and tech services</li>
                        <li>📞 Interactive Contact & Inquiry Flows: Optimized conversion paths and consultation booking forms</li>
                        <li>📱 Mobile-First Design: Seamless user experience across desktops, tablets, and mobile devices</li>
                        <li>⚡ High-Speed SEO Optimization: Server-side rendering for optimal search engine visibility</li>
                    </ul><br/>
                    
                    Technical Highlights:
                    <ul>
                        <li>Architected reusable component systems for rapid layout assembly</li>
                        <li>Integrated smooth animations and transitions to elevate brand presence</li>
                        <li>Configured robust form handling with validation and notification triggers</li>
                    </ul>
                    `,
    role: `
                Frontend & UI/UX Developer <br/>
                Led the design implementation and frontend architecture:
                <ul>
                    <li>🎨 UI/UX Implementation: Translated wireframes into pixel-perfect Tailwind CSS components</li>
                    <li>⚡ Performance Tuning: Optimized image assets and lazy loading for swift page loads</li>
                    <li>🔒 Form Integration: Managed secure form submissions and state handling</li>
                </ul>
                `,
  },
  {
    title: "Howard Engineering",
    slug: "howard-engineering",
    liveurl: "https://howardsengineering.com/",
    year: "2026",
    thumbnail: "/logo/next.png",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    description: `
                    A professional corporate platform built for Howard Engineering to showcase specialized engineering services, industrial projects, and technical capabilities. <br/> <br/>
                    
                    Key Features:<br/>
                    <ul>
                        <li>🏗️ Project Portfolio: Comprehensive grid and detail views showcasing completed engineering works</li>
                        <li>📋 Service Breakdown: Detailed breakdowns of engineering specialties, consultations, and solutions</li>
                        <li>📑 Resource Downloads: Secure access point for technical documentation and company profiles</li>
                        <li>🌐 Professional Aesthetics: Minimalist, authoritative design tailored for industrial and engineering clients</li>
                    </ul><br/>
                    
                    Technical Highlights:
                    <ul>
                        <li>Employed advanced layout structures to present complex technical content cleanly</li>
                        <li>Integrated smooth layout transitions using Framer Motion</li>
                        <li>Optimized metadata and Open Graph tags for professional networking visibility</li>
                    </ul>
                    `,
    role: `
                Full-Stack Web Developer <br/>
                Managed the end-to-end design and deployment of the platform:
                <ul>
                    <li>📐 Structure & Design: Collaborated on structuring project categories and case studies</li>
                    <li>💻 Development: Built responsive page layouts and dynamic routing with Next.js</li>
                    <li>🚀 Deployment & Maintenance: Handled production builds, DNS setup, and ongoing optimizations</li>
                </ul>
                `,
  },
  {
    title: "CloudBook",
    slug: "cloudbook",
    liveurl: "", // Add live URL if available
    year: "2026",
    thumbnail: "/logo/next.png",
    techStack: ["Next.js", "React", "Tailwind CSS", "Node.js", "Database"],
    description: `
                    A cloud-based note-taking web application designed to let users securely create, organize, and store notes on the cloud from any device. <br/> <br/>
                    
                    Key Features:<br/>
                    <ul>
                        <li>📝 Rich Note Management: Create, edit, delete, and categorize personal notes seamlessly</li>
                        <li>☁️ Cloud Synchronization: Real-time syncing and cloud storage ensuring notes are accessible anywhere</li>
                        <li>🔒 Secure Authentication: Protected user accounts with safe data privacy measures</li>
                        <li>📂 Organization System: Folders, tags, and search functionality to find notes instantly</li>
                        <li>📱 Responsive Dashboard: Clean, distraction-free UI optimized for both desktop and mobile use</li>
                    </ul><br/>
                    
                    Technical Highlights:
                    <ul>
                        <li>Implemented secure CRUD operations and backend database connectivity</li>
                        <li>Designed a fast, snappy user interface with modern component libraries</li>
                        <li>Handled state management for seamless offline/online syncing capabilities</li>
                    </ul>
                    `,
    role: `
                Full-Stack Developer <br/>
                Built the application from scratch:
                <ul>
                    <li>💻 Frontend Development: Crafted an intuitive workspace layout and editor using React and Tailwind CSS</li>
                    <li>🗄️ Backend & Database: Configured secure user sessions, APIs, and cloud data persistence</li>
                    <li>🚀 Deployment: Deployed and tested the application for smooth performance</li>
                </ul>
                `,
  },
];
