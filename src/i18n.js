import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import {initReactI18next} from 'react-i18next'

let currentLanguage = localStorage.getItem('lng')

if (!currentLanguage) {
    localStorage.setItem('lng', 'en')
    currentLanguage = 'en'
}

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        fallbackLng: currentLanguage,
        debug: false,
        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: true
        },
    })

export default i18n;