import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

// Translated content shared by the regular portfolio and the desktop version.
export function useContent() {
  const { t, tm, rt } = useI18n()

  // Arrays in the locale files are read with tm() and resolved with rt()
  const translateList = (key) => tm(key).map((message) => rt(message))

  const aboutParagraphs = computed(() => translateList('profile.about'))
  const aboutHighlights = computed(() => translateList('profile.aboutHighlights'))

  const skillName = (skill) => (skill.key ? t(`skills.names.${skill.key}`) : skill.name)
  const projectDescription = (project) => t(`projects.${project.id}.description`)
  const windowTitle = (win) => (win.titleKey ? t(win.titleKey) : win.title)

  return { t, translateList, aboutParagraphs, aboutHighlights, skillName, projectDescription, windowTitle }
}
