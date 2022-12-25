import i18nNext from 'i18next'
import * as zod from 'zod'
import { zodI18nMap } from 'zod-i18n-map'
import translation from 'zod-i18n-map/locales/pt/zod.json'

i18nNext.init({
  lng: 'pt',
  resources: {
    pt: { zod: translation }
  }
})

zod.setErrorMap(zodI18nMap)

export default zod
