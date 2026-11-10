const about = [
  'Soy Desarrollador Full-Stack. Me gusta construir aplicaciones web completas, desde la base de datos hasta la interfaz, cuidando que todo sea claro y fácil de usar.',
  'Trabajo sobre todo con Vue 3. He realizado varios proyectos con fines para el aprendizaje; la excepción es SpainBeaches, que es un proyecto real y está publicado en spainbeaches.es.',
  'Ahora mismo estoy haciendo cursos de React, y busco oportunidades Full-Stack donde pueda aprender tecnologías nuevas o seguir trabajando con las que ya uso.',
]

export const profile = {
  name: 'Daniel Bucaloiu Morales',
  role: 'Desarrollador de Aplicaciones Web',
  email: 'danielbucaloiu@gmail.com',
  githubUser: 'danielbucaloiu',
  githubUrl: 'https://github.com/danielbucaloiu',
  linkedinUrl: 'https://www.linkedin.com/in/daniel-bucaloiu-morales-7a41a0304/',

  // Regular portfolio
  tagline: 'Construyo aplicaciones web que funcionan bien y tienen sentido para quien las usa.',
  about,

  // Desktop version (Notepad window): same text as `about`
  bio: about.join('\n\n'),

  // Words inside `about` / `bio` that become links
  aboutLinks: {
    'spainbeaches.es': 'https://www.spainbeaches.es/',
  },

  // Words inside `about` / `bio` shown highlighted (must match the text exactly)
  aboutHighlights: [
    'Desarrollador Full-Stack',
    'aplicaciones web completas',
    'Vue 3',
    'SpainBeaches',
    'proyecto real',
    'React',
    'oportunidades Full-Stack',
  ],
}
