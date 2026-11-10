// Icons live in /public/img/skills:
// - technology logos: Devicon (devicon.dev), Pinia official logo, Simple Icons (Statamic)
// - concepts without a logo: Tabler Icons (tabler.io/icons)
// mono: black single-color icon, inverted in dark mode
const icon = (name) => `/img/skills/${name}.svg`

export const skillGroups = [
  {
    category: 'Frontend',
    skills: [
      { name: 'Vue 3', icon: icon('vuejs') },
      { name: 'JavaScript ES6+', icon: icon('javascript') },
      { name: 'TypeScript (básico)', icon: icon('typescript') },
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
    category: 'Backend',
    skills: [
      { name: 'Laravel 11', icon: icon('laravel') },
      { name: 'PHP 8', icon: icon('php') },
      { name: 'Python', icon: icon('python') },
      { name: 'Eloquent ORM', icon: icon('database-cog'), mono: true },
      { name: 'Sanctum Auth', icon: icon('shield-lock'), mono: true },
      { name: 'REST API consumption', icon: icon('api'), mono: true },
      { name: 'Artisan CLI', icon: icon('terminal-2'), mono: true },
      { name: 'Middleware', icon: icon('filter'), mono: true },
      { name: 'MVC', icon: icon('stack-2'), mono: true },
    ],
  },
  {
    category: 'Bases de datos',
    skills: [
      { name: 'MySQL', icon: icon('mysql') },
      { name: 'Migraciones', icon: icon('database-import'), mono: true },
      { name: 'Seeders', icon: icon('seedling'), mono: true },
    ],
  },
  {
    category: 'Herramientas',
    skills: [
      { name: 'Docker', icon: icon('docker') },
      { name: 'Git', icon: icon('git') },
      { name: 'GitHub', icon: icon('github'), mono: true },
      { name: 'pnpm', icon: icon('pnpm') },
      { name: 'Node.js', icon: icon('nodejs') },
      { name: 'CI/CD Vercel', icon: icon('vercel'), mono: true },
      { name: 'CMS Statamic (Laravel-based)', icon: icon('statamic'), mono: true },
    ],
  },
  {
    category: 'Metodologías',
    skills: [
      { name: 'Control de versiones', icon: icon('git-branch'), mono: true },
      { name: 'Trabajo en equipo', icon: icon('users-group'), mono: true },
      { name: 'SCRUM', icon: icon('layout-board'), mono: true },
    ],
  },
]
