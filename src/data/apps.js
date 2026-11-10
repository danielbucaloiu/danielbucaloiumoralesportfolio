import AboutApp from '@/components/apps/AboutApp.vue'
import ContactApp from '@/components/apps/ContactApp.vue'
import GithubApp from '@/components/apps/GithubApp.vue'
import ProjectsApp from '@/components/apps/ProjectsApp.vue'
import SkillsApp from '@/components/apps/SkillsApp.vue'

// Icons shown on the desktop and in the start menu.
// Each entry is passed straight to windowManager.open().
export const desktopApps = [
  { id: 'projects', title: 'Proyectos', icon: '/img/folder.png', component: ProjectsApp, width: 640, height: 420 },
  { id: 'about', title: 'Biografía.txt', icon: '/img/txt.png', component: AboutApp, width: 540, height: 400 },
  { id: 'skills', title: 'Skills', icon: '/img/languages.png', component: SkillsApp, width: 680, height: 600 },
  { id: 'contact', title: 'Contacto', icon: '/img/mail.png', component: ContactApp, width: 520, height: 420 },
  { id: 'github', title: 'GitHub', icon: '/img/github.png', component: GithubApp, width: 620, height: 440 },
]
