// Icons live in /public/img/skills:
// - technology logos: Devicon (devicon.dev), Pinia official logo, Simple Icons (Statamic)
// - concepts without a logo: Tabler Icons (tabler.io/icons)
// mono: black single-color icon, inverted in dark mode
//
// Category names are translated (src/i18n/locales -> skills.categories.<id>).
// Skills use `name` when it's the same in every language, or `key` when it must be translated
// (src/i18n/locales -> skills.names.<key>). Use the useSkillName() helper to display them.
const icon = (name) => `/img/skills/${name}.svg`

export const skillGroups = [
  {
    id: 'frontend',
    skills: [
      { name: 'Vue 3', icon: icon('vuejs') },
      { name: 'JavaScript ES6+', icon: icon('javascript') },
      { key: 'typescriptBasic', icon: icon('typescript') },
      { name: 'HTML5', icon: icon('html5') },
      { name: 'CSS3', icon: icon('css3') },
      { name: 'Tailwind CSS', icon: icon('tailwindcss') },
      { name: 'Vite', icon: icon('vitejs') },
      { name: 'Vue Router', icon: icon('vuejs') },
      { name: 'Pinia', icon: icon('pinia') },
      { name: 'SPA', icon: icon('app-window'), mono: true },
      { name: 'Responsive Design', icon: icon('devices'), mono: true },
    ],
  },
  {
    id: 'backend',
    skills: [
      { name: 'Laravel 11', icon: icon('laravel') },
      { name: 'PHP 8', icon: icon('php') },
      { name: 'Python', icon: icon('python') },
      { name: 'Eloquent ORM', icon: icon('database-cog'), mono: true },
      { name: 'Sanctum Auth', icon: icon('shield-lock'), mono: true },
      { key: 'restApi', icon: icon('api'), mono: true },
      { name: 'Artisan CLI', icon: icon('terminal-2'), mono: true },
      { name: 'Middleware', icon: icon('filter'), mono: true },
      { name: 'MVC', icon: icon('stack-2'), mono: true },
    ],
  },
  {
    id: 'databases',
    skills: [
      { name: 'MySQL', icon: icon('mysql') },
      { key: 'migrations', icon: icon('database-import'), mono: true },
      { name: 'Seeders', icon: icon('seedling'), mono: true },
    ],
  },
  {
    id: 'tools',
    skills: [
      { name: 'Docker', icon: icon('docker') },
      { name: 'Git', icon: icon('git') },
      { name: 'GitHub', icon: icon('github'), mono: true },
      { name: 'pnpm', icon: icon('pnpm') },
      { name: 'Node.js', icon: icon('nodejs') },
      { name: 'CI/CD Vercel', icon: icon('vercel'), mono: true },
      { key: 'statamic', icon: icon('statamic'), mono: true },
    ],
  },
  {
    id: 'methodologies',
    skills: [
      { key: 'versionControl', icon: icon('git-branch'), mono: true },
      { key: 'teamwork', icon: icon('users-group'), mono: true },
      { name: 'SCRUM', icon: icon('layout-board'), mono: true },
    ],
  },
]
