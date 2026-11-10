// Icons live in /public/img/skills:
// - technology logos: Devicon (devicon.dev), Pinia official logo, Simple Icons (Statamic)
// - concepts without a logo: Tabler Icons (tabler.io/icons)
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
      { name: 'SPA', icon: icon('app-window') },
      { name: 'Responsive Design', icon: icon('devices') },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Laravel 11', icon: icon('laravel') },
      { name: 'PHP 8', icon: icon('php') },
      { name: 'Python', icon: icon('python') },
      { name: 'Eloquent ORM', icon: icon('database-cog') },
      { name: 'Sanctum Auth', icon: icon('shield-lock') },
      { name: 'REST API consumption', icon: icon('api') },
      { name: 'Artisan CLI', icon: icon('terminal-2') },
      { name: 'Middleware', icon: icon('filter') },
      { name: 'MVC', icon: icon('stack-2') },
    ],
  },
  {
    category: 'Bases de datos',
    skills: [
      { name: 'MySQL', icon: icon('mysql') },
      { name: 'Migraciones', icon: icon('database-import') },
      { name: 'Seeders', icon: icon('seedling') },
    ],
  },
  {
    category: 'Herramientas',
    skills: [
      { name: 'Docker', icon: icon('docker') },
      { name: 'Git', icon: icon('git') },
      { name: 'GitHub', icon: icon('github') },
      { name: 'pnpm', icon: icon('pnpm') },
      { name: 'Node.js', icon: icon('nodejs') },
      { name: 'CI/CD Vercel', icon: icon('vercel') },
      { name: 'CMS Statamic (Laravel-based)', icon: icon('statamic') },
    ],
  },
  {
    category: 'Metodologías',
    skills: [
      { name: 'Control de versiones', icon: icon('git-branch') },
      { name: 'Trabajo en equipo', icon: icon('users-group') },
      { name: 'SCRUM', icon: icon('layout-board') },
    ],
  },
]
