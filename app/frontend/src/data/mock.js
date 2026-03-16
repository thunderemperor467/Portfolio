export const mockData = {
  personal: {
    name: 'Aditya Chauhan',
    title: 'Full Stack MERN Developer',
    subtitle: 'B.Tech CSE Student | Aspiring Software Developer',
    year: '3rd Year',
    university: 'GLA University, Mathura',
    graduationYear: '2023 - 2027',
    phone: '+91 7453940160',
    email: 'thunderemperor467@gmail.com',
    github: 'https://github.com/thunderemperor467',
    linkedin: 'https://www.linkedin.com/in/adityachauhan2307/',
    summary: 'Aspiring MERN Stack Developer with strong knowledge in full-stack development, building responsive user interfaces, scalable backend systems, and real-time applications. Passionate about solving real-world problems using technology and preparing to crack top tech companies.',
  },

  skills: {
    languages: ['HTML', 'CSS', 'JavaScript', 'Java'],
    frontend: ['React', 'EJS', 'Tailwind CSS', 'Redux', 'Redux Toolkit'],
    backend: ['Node.js', 'Express.js'],
    database: ['MongoDB', 'Basic SQL'],
    tools: ['Git', 'GitHub'],
  },

  projects: [
    {
      id: 1,
      title: 'ApnaThikana - Indian Airbnb Clone',
      description: 'Developed a full-stack property rental platform with features like listing, editing, and deleting properties.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'EJS'],
      features: [
        'Implemented authentication and authorization using Express.js and MongoDB',
        'Used EJS and Tailwind CSS for responsive UI',
        'RESTful CRUD routes for dynamic property management',
      ],
    },
    {
      id: 2,
      title: 'Excel Analytics Platform - MERN Stack Data Insight Tool',
      description: 'Built Excel upload, parsing, AI trend analysis, and visualization features with secure backend logic.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Recharts'],
      features: [
        'Used JWT auth and Multer for upload',
        'Recharts with filters and KPIs for dashboard visualizations',
        'AI-powered trend analysis for business insights',
      ],
    },
    {
      id: 3,
      title: 'Simon Says Game - Classic Memory Game',
      description: 'Built using HTML, CSS, and JavaScript with responsive layout and animation.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      features: [
        'Implemented random color-sequence logic',
        'Real-time input detection',
        'Smooth animations and responsive design',
      ],
    },
  ],

  experience: [
    {
      id: 1,
      role: 'Web Developer Intern',
      company: 'Zidio Development',
      duration: 'June 2025 (1 Month, Remote)',
      responsibilities: [
        'Developed and deployed Excel Analytics Platform using the MERN stack',
        'Integrated file upload, AI trend logic, and chart-based insights using Recharts',
        'Built a clean dashboard UI with user auth and KPI tracking',
      ],
    },
  ],

  achievements: [
    'Solved 100+ DSA questions on LeetCode',
    'Cisco Networking Academy - Basics of Cybersecurity',
    'Apna College - MERN Stack Development Certification',
  ],

  education: {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    university: 'GLA University, Mathura',
    duration: '2023 - 2027',
    currentYear: '3rd Year',
  },
};