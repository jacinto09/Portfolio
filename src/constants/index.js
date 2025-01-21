import {
  mobile,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  threejs,
  router,
  resumebuilder,
  jobs,
  meals,
  youtube
} from '../assets'
export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
]
export const services = [
  {
    title: 'Web Developer',
    icon: web
  },
  {
    title: 'React Native Developer',
    icon: mobile
  }
]
export const technologies = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'TypeScript',
    icon: typescript
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Redux Toolkit',
    icon: redux
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind
  },
  {
    name: 'Three JS',
    icon: threejs
  },
  {
    name: 'git',
    icon: git
  }
]
export const experiences = [
  {
    title: 'Frontend Developer',
    company_name: 'Xpeer MedEd',
    icon: reactjs,
    iconBg: '#383E56',
    date: 'May  2023 - present',
    points: [
     "Technologies: React Native • React with redux • Next.js • GraphQL • Node.js",
"Recreate the existing web app with more than 30k users from React16 to Next 14",
"Improve UI/UX, accesibility, performance and SEO up to 90+ in lighthouse",
"Rebuild the corporate page boosting the rendering time to 80% faster",
"Agile and SOLID methodology",
"Git quality practices",
"Teamwork with backend and design team",
"GraphQL querys implement for frontend from scratch",
"Authorization routes with google, apple and credentials",
"Bug fixes",
"Debug and implement new features for the app in React Native",
"Jira software",
"Google Analitycs implementation",
"Clean and documented code"
    ]
  },
  {
    title: 'Frontend Developer',
    company_name: 'Miguel Catalán',
    icon: reactjs,
    iconBg: '#383E56',
    date: 'February  2022 - August  2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Designing and implementing user interfaces for web applications.',
      'Improving SEO and accessibility of web applications.',
      'Implementing a database for booking appointments '
    ]
  }
]

export const projects = [
  {
    name: 'Router for React with npm package',
    description:
    'Router with basic React capabilities, compiled with SWC and deployed in npm',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient'
      },
      {
        name: 'Vitest',
        color: 'green-text-gradient'
      },
      {
        name: 'SWC',
        color: 'pink-text-gradient'
      }
    ],
    image: router,
    sourceCodeLink: 'https://github.com/jacinto09/jacinto-router'
  },
  {
    name: 'Job App',
    description:
        'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'React Native',
        color: 'blue-text-gradient'
      },
      {
        name: 'Expo router',
        color: 'green-text-gradient'
      },
      {
        name: 'Axios',
        color: 'pink-text-gradient'
      }
    ],
    image: jobs,
    sourceCodeLink: 'https://github.com/jacinto09/react-native-app'
  },
  {
    name: 'Resume Builder',
    description:
    'Resume builder enhanced with openai AI using Typescript, Next.js, Prisma, Clerk and Stripe',
    tags: [
      {
        name: 'Typescript',
        color: 'blue-text-gradient'
      },
      {
        name: 'OpenAi',
        color: 'green-text-gradient'
      },
      {
        name: 'Next.js',
        color: 'pink-text-gradient'
      }
    ],
    image: resumebuilder,
    sourceCodeLink: 'https://github.com/jacinto09/cv-builder'
  },
  {
    name: 'Meals Finder',
    description:
    'Web application to find the perfect recipe with the desired ingredients',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient'
      },
      {
        name: 'React Router',
        color: 'green-text-gradient'
      },
      {
        name: 'Next UI',
        color: 'pink-text-gradient'
      }
    ],
    image: meals,
    sourceCodeLink: 'https://github.com/jacinto09/meals'
  },
  {
    name: 'Youtube Clone',
    description:
    'Youtube Clone with basic functionality',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient'
      },
      {
        name: 'React Player',
        color: 'green-text-gradient'
      },
      {
        name: 'Material-UI',
        color: 'pink-text-gradient'
      }
    ],
    image: youtube,
    sourceCodeLink: 'https://github.com/jacinto09/YoutubeClone'
  }
]

export const keys = {
  service: 'service_wy71x5q',
  template: 'template_ealn74h',
  key: 'r54DMzEQbrxto_D9c'
}
