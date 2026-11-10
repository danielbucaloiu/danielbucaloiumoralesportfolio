// The description of each project lives in src/i18n/locales, under `projects.<id>.description`.
// - image: optional, path inside /public (e.g. '/img/projects/my-project.png')
// - icon: optional, shown in the desktop version (falls back to the folder icon)
// - invertIconOnLight: true for white icons, so they turn black over light backgrounds
// - repoUrl / demoUrl: optional, the buttons are hidden when empty
export const projects = [
  {
    id: 'spainbeaches',
    name: 'SpainBeaches',
    tech: ['Vue 3', 'Nuxt', 'Tailwind 4', 'Vite'],
    image: '/img/spainbeaches_image.png',
    icon: '/img/spainbeaches_icon.png',
    repoUrl: 'https://github.com/danielbucaloiu/spainBeaches',
    demoUrl: 'https://www.spainbeaches.es/',
  },
  {
    id: 'telamonet',
    name: 'Telamonet',
    tech: ['Laravel', 'Vue 3', 'Tailwind 4', 'Vite', 'Docker', 'MySQL'],
    image: '/img/telamonet_image.png',
    icon: '/img/telamonet_icon.png',
    invertIconOnLight: true,
    repoUrl: 'https://github.com/danielbucaloiu/Telamonet',
    demoUrl: 'https://telamonet.vercel.app/',
  },
]
