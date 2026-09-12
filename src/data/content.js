// ============================================================
//  WEBSITE CONTENT (edit this file to update the website)
//  Everything the visitor reads comes from here.
//  Values are based on Ahmed Wael's CV (the_ref/CV.pdf).
//  Leave a field empty ("") to hide it from the page.
// ============================================================

export const content = {
    seo: {
        title: 'Ahmed Wael - Data Analyst | Data Science | Teaching',
        metaDescription:
            'Data Analyst and educator with a top-ranking Statistics and Computer Science degree from Sohag University. Python, SQL, Power BI, Tableau, Machine Learning and Big Data.',
        keywords:
            'Data Analyst, Data Science, Python, SQL, Power BI, Tableau, Business Intelligence, Big Data, Machine Learning',
        author: 'Ahmed Wael Ahmed Khalifa',
        // The address shown in the browser tab / search results.
        favicon: '/favicon.svg',
    },

    // Used in the navbar and footer.
    brand: {
        name: 'Ahmed Wael',
        fullName: 'Ahmed Wael Ahmed Khalifa',
    },

    // Top navigation links (order matters). href must match a section id.
    navigation: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Experience', href: '#experience' },
        { label: 'Education', href: '#education' },
        { label: 'Projects', href: '#projects' },
        { label: 'Certificates', href: '#certificates' },
    ],

    // The first full-screen section.
    hero: {
        greeting: "Hi, I'm",
        name: 'Ahmed Wael',
        // Job titles separated by a separator character.
        separator: ' | ',
        roles: ['Data Analyst', 'Business Intelligence', 'Data Engineering'],
        description:
            'Top-ranking graduate in Statistics and Programming from Sohag University, with a strong foundation in data science, programming, and research. I turn raw data into clear insights and love helping others learn.',
        buttons: {
            // href can be a local file (e.g. '/CV.pdf') or any link.
            cv: { label: 'View My CV', href: '/CV.pdf' },
            contact: { label: 'Contact Me', href: '#contact' },
        },
        socials: [
            {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/ahmed-w-khalifa-818a30302',
                icon: 'fab fa-linkedin',
            },
        ],
    },

    // The second section: photo + intro.
    about: {
        title: 'About Me',
        heading: 'Who I Am',
        paragraphs: [
            "I'm a data analyst and passionate educator with a strong foundation in statistics, programming, and research. I focus on cleaning, analysing, and visualising data to support confident decision-making.",
            "Beyond analysis, I love teaching. I lead sessions for young learners, train teachers on programming and web development, and mentor undergraduates in research methodology and academic writing.",
        ],
        photo: {
            // Leave src empty to show a colored circle with initials instead.
            src: '',
            alt: 'Ahmed Wael Profile',
        },
        // Contact details shown under "Who I Am".
        details: [
            { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Sohag, Egypt' },
            { icon: 'fas fa-envelope', label: 'Email', value: 'koremwael@gmail.com', href: 'mailto:koremwael@gmail.com' },
            { icon: 'fas fa-phone', label: 'Phone', value: '+20 122 795 7256', href: 'tel:+201227957256' },
            {
                icon: 'fab fa-linkedin',
                label: 'LinkedIn',
                value: 'linkedin.com/in/ahmed-w-khalifa-818a30302',
                href: 'https://www.linkedin.com/in/ahmed-w-khalifa-818a30302',
                external: true,
            },
            { icon: 'fas fa-language', label: 'Languages', value: 'Arabic (Native) - English (Full Professional)' },
        ],
    },

    // Grid of skill cards. "spanCenter" makes the card wider on desktop.
    skills: {
        title: 'Skills',
        categories: [
            {
                title: 'Programming Languages',
                icon: 'fas fa-code',
                items: ['Python', 'C#', 'HTML', 'CSS', 'JavaScript'],
            },
            {
                title: 'Data Science & Analysis',
                icon: 'fas fa-chart-line',
                items: ['Pandas', 'NumPy', 'Matplotlib', 'Tableau', 'Excel'],
            },
            {
                title: 'Tools & Environment',
                icon: 'fas fa-tools',
                items: ['Jupyter Notebooks', 'Git', 'MS Office'],
            },
            {
                title: 'Teaching & Communication',
                icon: 'fas fa-person-chalkboard',
                items: ['Public Speaking', 'Workshop Delivery', 'Simplifying Complex Ideas'],
            },
            {
                title: 'Soft Skills',
                icon: 'fas fa-users',
                items: ['Leadership', 'Collaboration', 'Time Management', 'Creativity'],
                spanCenter: true,
            },
        ],
    },

    // Timeline of teaching and volunteering roles.
    experience: {
        title: 'Experience & Volunteering',
        items: [
            {
                role: 'Session Lead',
                company: 'Udacity',
                period: 'Jul 2025 - Present',
                points: [
                    'Deliver live technical sessions and mentorship to learners in data science and programming aged 12 to 17.',
                    'Support students in understanding key concepts and overcoming project challenges.',
                    'Cultivate an engaging, inclusive, and collaborative learning environment.',
                ],
            },
            {
                role: 'Teacher Trainer',
                company: 'Giza Systems (for Misr El Kheir Foundation)',
                period: 'Aug 2025 - Present',
                points: [
                    'Trained teachers at Misr El Kheir schools on the fundamentals of programming and web development.',
                ],
            },
            {
                role: 'Research Mentor',
                company: 'Faculty of Science, Sohag University',
                period: '2023 - Present',
                points: [
                    'Teach research methodology and academic writing to undergraduate students.',
                    'Conduct workshops on platforms such as ResearchGate and the Egyptian Knowledge Bank.',
                    'Promote research literacy and inquiry-based learning.',
                ],
            },
            {
                role: 'Programming Instructor',
                company: 'Sohag Public Library',
                period: 'Jan - Mar 2025',
                points: [
                    'Taught basic programming to children (ages 8-14) using Scratch and beginner-level Python.',
                ],
            },
            {
                role: 'Batch Coordinator',
                company: 'Statistics and Programming Dept., Sohag University',
                period: '2021 - 2025',
                points: [
                    'Organized academic support and acted as liaison between faculty and students.',
                ],
            },
            {
                role: 'Volunteer',
                company: 'Association of Good Desires and Orphan Sponsorship',
                period: '2022 - 2023',
                points: [
                    'Conducted needs assessments and participated in charity event coordination.',
                ],
            },
        ],
    },

    education: {
        title: 'Education',
        degree: "Bachelor's Degree, Statistics and Computer Science",
        university: 'Sohag University, Faculty of Science',
        period: 'June 2025',
        highlightsHeading: 'Highlights:',
        highlights: [
            'Top-ranking graduate in Statistics and Programming',
            'Grade: Very Good',
            'Department of Mathematical Statistics and Programming',
        ],
    },

    // Carousel slides. Leave "image" empty to show a gradient placeholder.
    projects: {
        title: 'Featured Projects',
        items: [
            {
                title: 'Customer Churn Prediction',
                challenge: 'Predict which customers are likely to churn using real-world data.',
                action: 'Built and evaluated a logistic regression model in Python on a real dataset.',
                result: 'Demonstrated a complete analysis workflow, from data exploration to model evaluation.',
                tech: ['Python', 'Pandas', 'Logistic Regression', 'Machine Learning'],
                image: '',
                links: [],
            },
            {
                title: 'Sales Data Analysis',
                challenge: 'Uncover retail insights from sales figures and key performance indicators.',
                action: 'Designed Tableau dashboards to visualize sales trends and KPIs.',
                result: 'Delivered clear, data-driven retail insights through interactive dashboards.',
                tech: ['Tableau', 'Data Visualization', 'Excel'],
                image: '',
                links: [],
            },
            {
                title: 'Secure File Transfer System',
                challenge: 'Transfer files between parties securely over the network.',
                action: 'Created a secure Python application using sockets and RSA encryption.',
                result: 'Produced a working encrypted file-transfer prototype built from network fundamentals.',
                tech: ['Python', 'Sockets', 'RSA Encryption'],
                image: '',
                links: [],
            },
            {
                title: 'Generative AI (ChatGPT) in Educational Support',
                challenge: 'Explore how generative AI can support teaching and learning.',
                action: 'Authored a research paper on the application of generative AI in educational support.',
                result: 'Published in the Sohag Journal of Scientific Innovation, Sohag University.',
                tech: ['Research', 'Academic Writing', 'Generative AI'],
                image: '',
                links: [
                    {
                        label: 'View Paper',
                        href: 'https://sjsci.journals.ekb.eg/article_442599.html',
                        icon: 'fas fa-external-link-alt',
                        external: true,
                    },
                ],
            },
        ],
    },

    certificates: {
        title: 'Certificates',
        items: [
            {
                title: 'Mentor Certificate',
                meta: 'Udacity • Issued 2025',
                description: 'Certification for mentoring learners in data science and programming programs.',
                skills: ['Mentoring', 'Data Science', 'Programming'],
                // Put a certificate link here if available; leave empty to hide the icon.
                link: '',
            },
            {
                title: 'IBM Applied Data Science Specialization',
                meta: 'Coursera • Issued 2023',
                description: 'Applied data science specialization covering the tools, methods, and workflows of the field.',
                skills: ['Data Science', 'Python', 'Machine Learning'],
                link: '',
            },
            {
                title: 'Cybersecurity Training',
                meta: 'ITI • Issued 2024',
                description: 'Security-focused training covering foundational cybersecurity concepts and practices.',
                skills: ['Cybersecurity', 'Security Basics'],
                link: '',
            },
            {
                title: 'Mahara-Tech Courses in Data Science and Programming',
                meta: 'Mahara-Tech',
                description: 'A series of courses in data science and programming foundations.',
                skills: ['Data Science', 'Programming'],
                link: '',
            },
        ],
    },

    contact: {
        // Label used in the navbar pill button.
        shortLabel: 'Contact',
        title: 'Contact Me',
        heading: 'Contact Information',
        intro: "Feel free to reach out if you're looking for a data analyst, an educator, or just have a question.",
        items: [
            { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Sohag, Egypt' },
            { icon: 'fas fa-envelope', label: 'Email', value: 'koremwael@gmail.com', href: 'mailto:koremwael@gmail.com' },
            { icon: 'fas fa-phone', label: 'Phone', value: '+20 122 795 7256', href: 'tel:+201227957256' },
        ],
        followMeHeading: 'Follow Me',
        socials: [
            {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/ahmed-w-khalifa-818a30302',
                icon: 'fab fa-linkedin',
            },
        ],
        form: {
            title: 'Send Me a Message',
            submit: 'Send Message',
            // The address the message opens in. Use your email.
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
        // The copyright line. Leave empty to hide it.
        rights: 'All rights reserved.',
    },
};