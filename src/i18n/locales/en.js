// English texts. Same keys as es.js.
// Vue I18n special characters: avoid "@", "{", "}", "|" and "$" in plain text
// ("{name}" is a placeholder, "a | b" is a plural form).
export default {
  meta: {
    // {'|'} prints a literal "|" (a plain "|" would be read as a plural separator)
    title: "Daniel Bucaloiu Morales {'|'} Full-Stack Web Developer",
    description:
      'Portfolio of Daniel Bucaloiu Morales, Full-Stack web developer with extensive practical experience in Vue 3. Projects like SpainBeaches and Telamonet, skills and contact.',
  },

  common: {
    code: 'Code',
    screenshotOf: 'Screenshot of {name}',
    open: 'Open {name}',
    language: 'Language',
  },

  profile: {
    role: 'Web Application Developer',
    tagline: 'I build web applications that work well and make sense for the people who use them.',
    about: [
      "I'm a Full-Stack Developer. I enjoy building complete web applications, from the database to the interface, making sure everything is clear and easy to use.",
      "I work mostly with Vue 3. I've built several projects for learning purposes; the exception is SpainBeaches, a real project published at spainbeaches.es.",
      "I'm currently taking React courses, and I'm looking for Full-Stack opportunities where I can learn new technologies or keep working with the ones I already use.",
    ],
    // Must match the text above exactly
    aboutHighlights: [
      'Full-Stack Developer',
      'complete web applications',
      'Vue 3',
      'SpainBeaches',
      'real project',
      'React',
      'Full-Stack opportunities',
    ],
  },

  projects: {
    spainbeaches: {
      description:
        'A web application to search information on 3,554 beaches across Spain, featuring an interactive map, filters, and statistics.',
    },
    telamonet: {
      description:
        'A web application that simulates an educational social forum, designed to connect schools and students. Built as my final degree project.',
    },
  },

  skills: {
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      databases: 'Databases',
      tools: 'Tools',
      methodologies: 'Methodologies',
    },
    names: {
      typescriptBasic: 'TypeScript (basic)',
      restApi: 'REST API consumption',
      migrations: 'Migrations',
      statamic: 'Statamic CMS (Laravel-based)',
      versionControl: 'Version control',
      teamwork: 'Teamwork',
    },
  },

  portfolio: {
    nav: {
      label: 'Main',
      projects: 'Projects',
      about: 'About',
      skills: 'Skills',
      contact: 'Contact',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    desktopVersion: 'Desktop version',
    openDesktopVersion: 'Open the desktop version',
    theme: {
      toLight: 'Switch to light theme',
      toDark: 'Switch to dark theme',
      light: 'Light theme',
      dark: 'Dark theme',
    },
    hero: {
      greeting: "Hi, I'm",
      viewProjects: 'View projects',
      contact: 'Contact',
      retroQuestion: 'Into something more retro?',
      retroLink: 'Open the desktop version',
    },
    projects: {
      title: 'Projects',
      visit: 'Visit site ↗',
    },
    about: {
      title: 'About me',
    },
    skills: {
      title: 'Skills',
    },
    contact: {
      title: "Let's talk",
      text: "I'm looking for new opportunities. If you have a project or a job offer, write to me and I'll get back to you as soon as possible.",
      copy: 'Copy',
      copied: 'Copied',
    },
  },

  desktop: {
    desktopLabel: 'Desktop',
    start: 'start',
    openWindows: 'Open windows',
    window: {
      minimize: 'Minimize',
      maximize: 'Maximize',
      restore: 'Restore',
      close: 'Close',
    },
    apps: {
      projects: 'Projects',
      about: 'Biography.txt',
      skills: 'Skills',
      contact: 'Contact',
      github: 'GitHub',
    },
    startMenu: {
      githubProfile: 'GitHub profile',
      linkedin: 'LinkedIn',
      sendEmail: 'Send an email',
      classicPortfolio: 'Classic portfolio',
      wallpaper: 'Wallpaper',
      switchLanguage: 'Español',
    },
    wallpapers: {
      default: 'Default',
      first: 'Wallpaper 1',
      second: 'Wallpaper 2',
    },
    explorer: {
      address: 'Address',
      path: 'C:\\Portfolio\\Projects',
      details: 'Details',
      folderName: 'Projects',
      folderType: 'File folder',
      items: '0 items | 1 item | {count} items',
      objects: '0 objects | 1 object | {count} objects',
    },
    projectDetail: {
      technologies: 'Technologies',
      demo: 'View demo',
    },
    notepad: {
      menu: ['File', 'Edit', 'Format', 'View', 'Help'],
    },
    contact: {
      send: 'Send',
      to: 'To:',
      subject: 'Subject:',
      message: 'Message',
      placeholder: 'Write your message here...',
    },
    github: {
      go: 'Go',
      openProfile: 'Open GitHub profile',
      featuredRepos: 'Featured repositories',
    },
  },
}
