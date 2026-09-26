import { translations } from './translations'
import { useLanguage } from './LanguageContext'

export const useTranslation = () => {
  const { language } = useLanguage()
  return translations[language]
}
