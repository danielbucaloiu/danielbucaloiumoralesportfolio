// Spanish texts.
// Vue I18n special characters: avoid "@", "{", "}", "|" and "$" in plain text
// ("{name}" is a placeholder, "a | b" is a plural form).
export default {
  meta: {
    // {'|'} prints a literal "|" (a plain "|" would be read as a plural separator)
    title: "Daniel Bucaloiu Morales {'|'} Desarrollador Web Full-Stack",
    description:
      'Portfolio de Daniel Bucaloiu Morales, desarrollador web Full-Stack especializado en Vue 3 y Laravel. Proyectos como SpainBeaches y Telamonet, skills y contacto.',
  },

  common: {
    code: 'Código',
    screenshotOf: 'Captura de {name}',
    open: 'Abrir {name}',
    language: 'Idioma',
  },

  profile: {
    role: 'Desarrollador de Aplicaciones Web',
    tagline: 'Construyo aplicaciones web que funcionan bien y tienen sentido para quien las usa.',
    about: [
      'Soy Desarrollador Full-Stack. Me gusta construir aplicaciones web completas, desde la base de datos hasta la interfaz, cuidando que todo sea claro y fácil de usar.',
      'Trabajo sobre todo con Vue 3. He realizado varios proyectos con fines para el aprendizaje; la excepción es SpainBeaches, que es un proyecto real y está publicado en spainbeaches.es.',
      'Ahora mismo estoy haciendo cursos de React, y busco oportunidades Full-Stack donde pueda aprender tecnologías nuevas o seguir trabajando con las que ya uso.',
    ],
    // Must match the text above exactly
    aboutHighlights: [
      'Desarrollador Full-Stack',
      'aplicaciones web completas',
      'Vue 3',
      'SpainBeaches',
      'proyecto real',
      'React',
      'oportunidades Full-Stack',
    ],
  },

  projects: {
    spainbeaches: {
      description:
        'Una aplicación web para buscar información de 3.554 playas de España, con mapa interactivo, filtros y estadísticas.',
    },
    telamonet: {
      description:
        'Una aplicación web que simula un foro social educativo, diseñada para conectar centros educativos y estudiantes. Desarrollada como proyecto final de grado (TFG).',
    },
  },

  skills: {
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      databases: 'Bases de datos',
      tools: 'Herramientas',
      methodologies: 'Metodologías',
    },
    names: {
      typescriptBasic: 'TypeScript (básico)',
      restApi: 'Consumo de APIs REST',
      migrations: 'Migraciones',
      statamic: 'CMS Statamic (basado en Laravel)',
      versionControl: 'Control de versiones',
      teamwork: 'Trabajo en equipo',
    },
  },

  portfolio: {
    nav: {
      label: 'Principal',
      projects: 'Proyectos',
      about: 'Sobre mí',
      skills: 'Skills',
      contact: 'Contacto',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
    },
    desktopVersion: 'Versión escritorio',
    openDesktopVersion: 'Abrir la versión escritorio',
    theme: {
      toLight: 'Cambiar a tema claro',
      toDark: 'Cambiar a tema oscuro',
      light: 'Tema claro',
      dark: 'Tema oscuro',
    },
    hero: {
      greeting: 'Hola, soy',
      viewProjects: 'Ver proyectos',
      contact: 'Contacto',
      retroQuestion: '¿Prefieres algo más retro?',
      retroLink: 'Abre la versión escritorio',
    },
    projects: {
      title: 'Proyectos',
      visit: 'Ver web ↗',
    },
    about: {
      title: 'Sobre mí',
    },
    skills: {
      title: 'Skills',
    },
    contact: {
      title: '¿Hablamos?',
      text: 'Estoy buscando nuevas oportunidades. Si tienes un proyecto o una oferta, escríbeme y te responderé lo antes posible.',
      copy: 'Copiar',
      copied: 'Copiado',
    },
  },

  desktop: {
    desktopLabel: 'Escritorio',
    start: 'inicio',
    openWindows: 'Ventanas abiertas',
    window: {
      minimize: 'Minimizar',
      maximize: 'Maximizar',
      restore: 'Restaurar',
      close: 'Cerrar',
    },
    apps: {
      projects: 'Proyectos',
      about: 'Biografía.txt',
      skills: 'Skills',
      contact: 'Contacto',
      github: 'GitHub',
    },
    startMenu: {
      githubProfile: 'Perfil de GitHub',
      linkedin: 'LinkedIn',
      sendEmail: 'Enviar un correo',
      classicPortfolio: 'Portfolio clásico',
      wallpaper: 'Fondo de pantalla',
      switchLanguage: 'English',
    },
    wallpapers: {
      default: 'Predeterminado',
      first: 'Fondo 1',
      second: 'Fondo 2',
    },
    explorer: {
      address: 'Dirección',
      path: 'C:\\Portfolio\\Proyectos',
      details: 'Detalles',
      folderName: 'Proyectos',
      folderType: 'Carpeta de archivos',
      items: '0 elementos | 1 elemento | {count} elementos',
      objects: '0 objetos | 1 objeto | {count} objetos',
    },
    projectDetail: {
      technologies: 'Tecnologías',
      demo: 'Ver demo',
    },
    notepad: {
      menu: ['Archivo', 'Edición', 'Formato', 'Ver', 'Ayuda'],
    },
    contact: {
      send: 'Enviar',
      to: 'Para:',
      subject: 'Asunto:',
      message: 'Mensaje',
      placeholder: 'Escribe aquí tu mensaje...',
    },
    github: {
      go: 'Ir',
      openProfile: 'Abrir perfil en GitHub',
      featuredRepos: 'Repositorios destacados',
    },
  },
}
