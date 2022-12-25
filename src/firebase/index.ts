import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

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

const firestore = getFirestore(app)
const auth = getAuth(app)

export enum ERROR_CODE {
  AUTH_WRONG_PASSWORD = 'auth/wrong-password',
  AUTH_USER_NOT_FOUND = 'auth/user-not-found',
  AUTH_TOO_MANY_REQUESTS = 'auth/too-many-requests',
  AUTH_POPUP_CLOSED_BY_USER = 'auth/popup-closed-by-user'
}

export const firebase = { app, auth, firestore }

export default firebase
