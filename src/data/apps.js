import AboutApp from '@/components/apps/AboutApp.vue'
import ContactApp from '@/components/apps/ContactApp.vue'
import GithubApp from '@/components/apps/GithubApp.vue'
import ProjectsApp from '@/components/apps/ProjectsApp.vue'
import SkillsApp from '@/components/apps/SkillsApp.vue'

// Icons shown on the desktop and in the start menu.
// Each entry is passed straight to windowManager.open().
// titleKey: translation key (src/i18n/locales), so open windows update when the language changes.
export const desktopApps = [
  { id: 'projects', titleKey: 'desktop.apps.projects', icon: '/img/folder.png', component: ProjectsApp, width: 640, height: 420 },
  { id: 'about', titleKey: 'desktop.apps.about', icon: '/img/txt.png', component: AboutApp, width: 540, height: 400 },
  { id: 'skills', titleKey: 'desktop.apps.skills', icon: '/img/languages.png', component: SkillsApp, width: 680, height: 600 },
  { id: 'contact', titleKey: 'desktop.apps.contact', icon: '/img/mail.png', component: ContactApp, width: 520, height: 420 },
  { id: 'github', titleKey: 'desktop.apps.github', icon: '/img/github.png', component: GithubApp, width: 620, height: 440 },
]
