import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check'
import { enableIndexedDbPersistence, getFirestore } from 'firebase/firestore'

const app = initializeApp({
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
})

// const appCheck = initializeAppCheck(app, {
//   provider: new ReCaptchaV3Provider(import.meta.env.VITE_RE_CAPTCHA_SECRET),
//   isTokenAutoRefreshEnabled: true
// })

const firestore = getFirestore(app)
const auth = getAuth(app)

enableIndexedDbPersistence(firestore).catch((err) => console.log(err))

export { auth, firestore }
