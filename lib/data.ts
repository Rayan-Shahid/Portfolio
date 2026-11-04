export interface Project{
    title: string,
    slug: string,
    year: string,
    liveurl: string,
    thumbnail: string,
    techStack: string[],
    description: string,
    role: string
}
type My_STACKitem = {
    name: string,
    icon: string
}


export const MY_STACK = {

     Frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
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
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
      Backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'NestJS',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
        Database: [
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
                {
                    name: 'Prisma',
                    icon: '/logo/prisma.png',
                },
            ],
             Tools: [
                {
                    name: 'Git',
                    icon: '/logo/git.png',
                },
                {
                    name: 'Docker',
                    icon: '/logo/docker.svg',
                },
                {
                    name: 'AWS',
                    icon: '/logo/aws.png',
                },
            ],

}

export const MY_EXPERIENCE = [
    {
        title: 'Software Engineer (Frontend)',
        company: 'NP Marts',
        duration: 'January 2026 - Present',
    },
    {
        title: 'Frontend Developer',
        company: 'Flaxtasks',
        duration: 'August 2024 - Nov 2024',
    },
    {
        title: 'Frontend Intern',
        company: 'Flaxtasks',
        duration: 'June 2024 - August 2024',
    },
    
];


export const PROJECTS: Project[]= [
    {
        title: 'FitMatch', // Fixed typo from 'titel'
        slug: 'fitmatch',
        liveurl: 'https://github.com/Tajmirul/portfolio-2.0/blob/main/app/_components/Project.tsx',
        year: '2026',
        thumbnail: '/logo/js.png', // Make sure to add this if your Project interface requires it
        techStack: ['Next.js', 'Payload CMS', 'Tailwind CSS', 'Swiper.js'], // Common required array
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
    title: 'Speech Emotion Recognition',
        slug: 'speech-emotion-recognition',
        liveurl: 'www.github.com',
        year: '2026',
        thumbnail: '/logo/js.png',
        techStack: ['Python', 'TensorFlow', 'Librosa', 'Streamlit', 'Scikit-Learn'],
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
   }
 
]