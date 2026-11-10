// Logo for each technology name used in projects.js (files in /public/img/skills).
// Technologies without an entry are shown without a logo.
const techIcons = {
  'vue 3': 'vuejs',
  vue: 'vuejs',
  nuxt: 'nuxtjs',
  'tailwind 4': 'tailwindcss',
  'tailwind css': 'tailwindcss',
  tailwind: 'tailwindcss',
  vite: 'vitejs',
  laravel: 'laravel',
  php: 'php',
  javascript: 'javascript',
  typescript: 'typescript',
  mysql: 'mysql',
  docker: 'docker',
  'node.js': 'nodejs',
  pinia: 'pinia',
  python: 'python',
}

export function getTechIcon(name) {
  const file = techIcons[name.toLowerCase()]
  return file ? `/img/skills/${file}.svg` : null
}
