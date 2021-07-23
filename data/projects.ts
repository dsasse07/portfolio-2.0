import { ProjectModel } from '../models/Project'

export const projects: ProjectModel[] = [
  {
    id: '1',
    title: 'Pycross',
    logo: 'https://i.imgur.com/k58W2eP.png',
    description:
      "Offline nonogram/picross game developed in Python using the Pygame module for Stanfard University's CS106A Code in Place program. A new game board is generated at each launch using the paramters in the settings. The board clues are generated through consecutive string analysis.",
    repoLink: 'https://github.com/dsasse07/pycross',
    url: null,
    demoVideo: 'https://youtu.be/np0uua3mhU0',
    embedId: 'np0uua3mhU0',
    technologies: ['Python, OOP, Pygame'],
  },
  {
    id: '2',
    title: 'Asian Americans Advancing Justice Hackathon',
    logo: 'https://i.imgur.com/XOD9l7T.png',
    description:
      'Developed as part of the Essteem AAPI Equalithon, hackathon competition. The challenge criteria was to redesign the landing page for the Asian Americans Advancing Justice organization to increase user enaggement.',
    repoLink: 'https://github.com/dsasse07/essteem-aapi-justice-team',
    url: 'https://aapi-justice-team.netlify.app/',
    demoVideo: 'https://youtu.be/20bi-eMu-_s',
    embedId: '20bi-eMu-_s',
    technologies: ['ReactJS', 'i18n', 'Bootstrap'],
  },
  {
    id: '3',
    title: 'Dronie',
    logo: 'https://i.imgur.com/s3wbqbY.png',
    description:
      'Developed as my capstone project for Flatiron School, it is a photo-sharing social media app for aerial photographers. It incorporates standard social media actions, a robust search feature, and real-time messaging.',
    repoLink: 'https://github.com/dsasse07/Dronie',
    url: 'dronie.netlify.app',
    demoVideo: 'https://youtu.be/CUclDYx6XKo',
    embedId: 'CUclDYx6XKo',
    technologies: [
      'ReactJS',
      'Ionic',
      'Redux',
      'Cloudinary',
      'Rails API',
      'ActionCable',
    ],
  },
  {
    id: '4',
    title: 'Outdoors Guide',
    logo: 'https://i.imgur.com/rHRSUxY.png',
    description:
      'Developed as a pair-programming project in ReactJS. Connects to the National Parks Service and Google Maps APIs with a Rails API backend',
    repoLink: 'https://github.com/dsasse07/Great-Outdoors-Guide',
    url: 'https://great-outdoors-guide.netlify.app/',
    demoVideo: 'https://youtu.be/nJc98KqjqLQ',
    embedId: 'nJc98KqjqLQ',
    technologies: [
      'ReactJS',
      'Styled-Components',
      'Rails API',
      'Google Maps',
      'NPS API',
    ],
  },
  {
    id: '5',
    title: 'Fludoku',
    logo: 'https://miro.medium.com/max/516/1*TStHCO5xf_9KQNvz0o8rmA.gif',
    description:
      'A Sudoku web-app that uses a custom backtracking algorithm to create Sudoku of user-defined difficulty, that have unique solutions.',
    repoLink: 'https://github.com/dsasse07/Fludoku',
    url: 'https://fludoku.netlify.app/',
    demoVideo: 'https://youtu.be/3SA975NHH00',
    embedId: '3SA975NHH00',
    technologies: ['vanillaJS', 'Backtracking', 'CSS GRID', 'Rails API'],
  },
  {
    id: '6',
    title: 'Family Organizer',
    logo: 'https://i.imgur.com/PmCMSXC.png',
    description:
      'A Ruby on Rails application utilizing the MVC framework and a PostgreSQL database. ActiveStorage is utilized for user uploads and storage',
    repoLink: 'https://github.com/dsasse07/Family-Organizer',
    url: null,
    demoVideo: 'https://youtu.be/7hwDpslkDH8',
    embedId: '7hwDpslkDH8',
    technologies: ['Ruby', 'Ruby on Rails', 'PostgreSQL', 'ActiveStorage'],
  },
  {
    id: '7',
    title: 'Subscription Tracker',
    logo: 'https://i.imgur.com/XgdJDPr.png',
    description:
      'Ruby CLI application developed using ActiveRecord and SQLite3 for creating reminders for subscription services and syncing those reminders to calendar applications through the creation of .ics files.',
    repoLink: 'https://github.com/simonjacobs212/subscription-tracker',
    url: null,
    demoVideo: 'https://youtu.be/PtoSdk4yNIY',
    embedId: 'PtoSdk4yNIY',
    technologies: ['Ruby', 'ActiveRecord', 'SQLite3', 'FileIO'],
  },
]
