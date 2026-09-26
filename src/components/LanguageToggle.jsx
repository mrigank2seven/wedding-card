import { useLanguage } from '../lib/LanguageContext'
import '../styles/LanguageToggle.css'

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === 'en' ? 'Hindi' : 'English'}`}
    >
      {language === 'en' ? 'हिंदी' : 'English'}
    </button>
  )
}
