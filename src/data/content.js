// ============================================================
//  WEBSITE CONTENT (edit this file to update the website)
//  Everything the visitor reads comes from here.
//  Values are based on Ahmed Wael's CV.
//  Leave a field empty ("") to hide it from the page.
// ============================================================

export const content = {
    seo: {
        title: 'Ahmed Wael Ahmed Khalifa - Data Engineer | Teaching Assistant',
        metaDescription:
            'Data Engineer and Teaching Assistant with a top-ranking B.Sc. in Statistics and Computer Science from Sohag University. Expertise in Python, SQL, ETL Pipelines, and Data Architecture.',
        keywords:
            'Data Engineer, Teaching Assistant, Python, SQL, ETL, Apache Airflow, Docker, Power BI, Dimensional Modeling',
        author: 'Ahmed Wael Ahmed Khalifa',
        favicon: '/favicon.svg',
    },

    brand: {
        name: 'Ahmed Wael',
        fullName: 'Ahmed Wael Ahmed Khalifa',
    },

    navigation: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Experience', href: '#experience' },
        { label: 'Education', href: '#education' },
        { label: 'Projects', href: '#projects' },
        { label: 'Certificates', href: '#certificates' },
    ],

    hero: {
        greeting: "Hi, I'm",
        name: 'Ahmed Wael',
        separator: ' | ',
        roles: ['Data Engineer', 'Teaching Assistant', 'Academic Researcher'],
        description:
            'Top-ranking graduate in Statistics and Computer Science from Sohag University. Currently working as a Teaching Assistant at the Mathematical Statistics and Programming Department, and building robust end-to-end data pipelines as a Data Engineer.',
        buttons: {
            cv: { label: 'View My CV', href: '/CV.pdf' },
            contact: { label: 'Contact Me', href: '#contact' },
        },
        socials: [
            {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/ahmed-wael-khalifa',
                icon: 'fab fa-linkedin',
            },
            {
                label: 'GitHub',
                href: 'https://github.com/AhmedWaelAhmed',
                icon: 'fab fa-github',
            },
        ],
    },

    about: {
        title: 'About Me',
        heading: 'Who I Am',
        paragraphs: [
            "I am a Data Engineer and a Teaching Assistant with a multidisciplinary background in Mathematical Statistics and Technical Instruction. I specialize in designing dimensional data models, building end-to-end ETL pipelines, and delivering technical education.",
            "Beyond engineering, I am passionate about academia and research. As a Teaching Assistant at Sohag University and a former Coordinator Manager at EYouth, I actively lead educational operations, train instructors, and mentor students in data science and research methodology.",
        ],
        photo: {
            src: '/ahmed-profile.jpg',
            alt: 'Ahmed Wael Ahmed Khalifa Profile',
        },
        details: [
            { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Sohag, Egypt' },
            { icon: 'fas fa-envelope', label: 'Email', value: 'koremwael@gmail.com', href: 'mailto:koremwael@gmail.com' },
            { icon: 'fas fa-phone', label: 'Phone', value: '+20 122 795 7256', href: 'tel:+201227957256' },
            {
                icon: 'fab fa-linkedin',
                label: 'LinkedIn',
                value: 'linkedin.com/in/ahmed-wael-khalifa',
                href: 'https://linkedin.com/in/ahmed-wael-khalifa',
                external: true,
            },
            { icon: 'fas fa-language', label: 'Languages', value: 'Arabic (Native) - English (Professional)' },
        ],
    },

    skills: {
        title: 'Skills',
        categories: [
            {
                title: 'Data Engineering & Core',
                icon: 'fas fa-database',
                items: ['ETL Pipelines', 'Dimensional Modeling', 'Star Schema', 'Data Architecture'],
            },
            {
                title: 'Programming Languages',
                icon: 'fas fa-code',
                items: ['Python (Pandas, NumPy, OOP)', 'SQL', 'C++', 'C#'],
            },
            {
                title: 'Tools & Environment',
                icon: 'fas fa-tools',
                items: ['Apache Airflow', 'Docker', 'Power BI', 'Git/GitHub', 'Linux', 'LaTeX'],
            },
            {
                title: 'Teaching & Leadership',
                icon: 'fas fa-person-chalkboard',
                items: ['Technical Instruction', 'Curriculum Design', 'Academic Mentorship'],
            },
            {
                title: 'Research & Soft Skills',
                icon: 'fas fa-book-open',
                items: ['Academic Writing', 'ResearchGate / EKB', 'Operations Coordination'],
                spanCenter: true,
            },
        ],
    },

    experience: {
        title: 'Professional Experience',
        items: [
            {
                role: 'Teaching Assistant (Mathematical Statistics & Programming)',
                company: 'Faculty of Science, Sohag University',
                period: 'Sep 2026 - Present',
                points: [
                    'Assist in teaching and practical evaluation for mathematical statistics and programming courses.',
                    'Support the academic progression of students through lab sessions and coursework guidance.',
                ],
            },
            {
                role: 'Coordinator Manager',
                company: 'EYouth',
                period: 'Mar 2026 - Present',
                points: [
                    'Spearhead operations for instructor-led sessions across virtual and physical classrooms in Cairo (Hybrid).',
                    'Train and support instructors to enhance teaching delivery.',
                    'Coordinate logistics and troubleshoot real-time session issues.',
                ],
            },
            {
                role: 'Research Mentor',
                company: 'Faculty of Science, Sohag University',
                period: '2023 - Present',
                points: [
                    'Teach research methodology and academic writing.',
                    'Conduct workshops on ResearchGate and the Egyptian Knowledge Bank.',
                ],
            },
            {
                role: 'Teacher Trainer',
                company: 'Giza Systems (Misr El Kheir Foundation)',
                period: 'Aug 2025 - Oct 2025',
                points: [
                    'Trained school teachers on programming and web development fundamentals.',
                ],
            },
            {
                role: 'Session Lead (Data Science & Programming)',
                company: 'Udacity',
                period: 'Jun 2025 - Oct 2025',
                points: [
                    'Delivered one-on-one mentoring sessions in Python and Data Science.',
                    'Reviewed code, debugged projects, and provided actionable feedback.',
                ],
            },
        ],
    },

    education: {
        title: 'Education',
        degree: "B.Sc. in Statistics and Computer Science",
        university: 'Sohag University, Faculty of Science',
        period: '2021 - 2025',
        highlightsHeading: 'Highlights:',
        highlights: [
            'Grade: Very Good with Honors (Ranked 1st in Department)',
            'Relevant Coursework: Mathematical Statistics, Pattern Recognition, Modeling & Simulation',
            'Military Service: Exempt',
        ],
    },

    projects: {
        title: 'Featured Projects',
        items: [
            {
                title: 'Tower Pulse: Telecom Operations Intelligence',
                challenge: 'Process massive telecom data to extract actionable insights and calculate automated KPIs.',
                action: 'Built an end-to-end ETL pipeline with Python and SQL Server (Star Schema) and automated tasks via Apache Airflow.',
                result: 'Processed 750MB+ dataset reducing size by 90%, and developed Power BI dashboards identifying 15% emergency cost impact.',
                tech: ['Python', 'SQL Server', 'Apache Airflow', 'Power BI'],
                image: '',
                links: [],
            },
            {
                title: 'Generative AI (ChatGPT) in Educational Support',
                challenge: 'Explore and validate the impact of generative artificial intelligence on educational methodologies.',
                action: 'Authored and published a research paper detailing the applications of Generative AI in education.',
                result: 'Published in the Scientific Journal of the Faculty of Science, Sohag University (2025).',
                tech: ['Academic Research', 'LaTeX', 'Generative AI'],
                image: '',
                links: [],
            },
            {
                title: 'Bakery Sales & Salon Dashboard',
                challenge: 'Provide local businesses with data-driven insights for inventory and marketing.',
                action: 'Analyzed sales trends and built dynamic dashboards for customer behavior insights.',
                result: 'Optimized inventory planning and enhanced marketing strategies for the clients.',
                tech: ['Data Analysis', 'Dashboards'],
                image: '',
                links: [],
            },
            {
                title: 'Secure File Transfer System',
                challenge: 'Develop a reliable and secure method for transferring files across networks.',
                action: 'Developed a robust Python application using low-level sockets and RSA encryption.',
                result: 'Ensured high-security data transmission between endpoints.',
                tech: ['Python', 'Sockets', 'RSA Encryption'],
                image: '',
                links: [],
            },
        ],
    },

    certificates: {
        title: 'Internships, Professional Training & Certifications',
        items: [
            {
                title: 'DEPI - Data Engineering Track',
                meta: 'Ministry of Communications and Information Technology • May 2026',
                description: 'Intensive professional diploma covering Data Architecture, ETL Pipelines, and Cloud Data Solutions.',
                skills: ['Data Engineering', 'Cloud Solutions', 'Architecture'],
                link: '',
            },
            {
                title: 'ITI - Software Fundamentals',
                meta: 'Ministry of Communications and Information Technology • May 2026',
                description: 'Intensive training program focusing on core software engineering principles.',
                skills: ['C++', 'OOP', 'Data Structures', 'Algorithms'],
                link: '',
            },
            {
                title: 'Udacity Mentor Certificate',
                meta: 'Udacity • 2025',
                description: 'Certified as a mentor for Data Science and Programming tracks.',
                skills: ['Mentorship', 'Code Review', 'Debugging'],
                link: '',
            },
            {
                title: 'IBM Data Science',
                meta: 'Coursera • 2023',
                description: 'Comprehensive specialization covering the tools and methodologies of Data Science.',
                skills: ['Python', 'Data Science', 'Machine Learning'],
                link: '',
            },
        ],
    },

    contact: {
        shortLabel: 'Contact',
        title: 'Contact Me',
        heading: 'Get in Touch',
        intro: "Feel free to reach out if you're looking to collaborate on data engineering projects, academic research, or educational initiatives.",
        items: [
            { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Sohag, Egypt' },
            { icon: 'fas fa-envelope', label: 'Email', value: 'koremwael@gmail.com', href: 'mailto:koremwael@gmail.com' },
            { icon: 'fas fa-phone', label: 'Phone', value: '+20 122 795 7256', href: 'tel:+201227957256' },
        ],
        followMeHeading: 'Follow Me',
        socials: [
            {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/ahmed-wael-khalifa',
                icon: 'fab fa-linkedin',
            },
            {
                label: 'GitHub',
                href: 'https://github.com/AhmedWaelAhmed',
                icon: 'fab fa-github',
            },
        ],
        form: {
            title: 'Send Me a Message',
            submit: 'Send Message',
            recipient: 'koremwael@gmail.com',
            fields: [
                { label: 'Name', name: 'name', type: 'text', placeholder: 'Your Name', required: true },
                { label: 'Email', name: 'email', type: 'email', placeholder: 'Your Email', required: true },
                { label: 'Subject', name: 'subject', type: 'text', placeholder: 'Subject', required: true },
                { label: 'Message', name: 'message', type: 'textarea', placeholder: 'Type your message here...', required: true },
            ],
        },
    },

    footer: {
        rights: 'All rights reserved.',
    },
};