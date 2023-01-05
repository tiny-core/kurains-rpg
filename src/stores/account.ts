import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { defineStore } from 'pinia'

import { auth, firestore } from '@/firebase'
import type { AccountProfileSchema, AccountSchema } from '@/schemas'
import type zod from '@/schemas/zod'

const USER_COLLECTION = 'accounts'

export const useAccountStore = defineStore('account', {
  state: () => ({
    googlePopupIsOpen: false,
    profile: {} as Profile
  }),

  getters: {
    isConnected: ({ profile }) => profile.uid.length > 0
  },

  actions: {
    async signInWithGoogleAccount() {
      try {
        const provider = new GoogleAuthProvider()

        provider.addScope('https://www.googleapis.com/auth/contacts.readonly')

        this.googlePopupIsOpen = true

        await signInWithPopup(auth, provider)

        if (auth.currentUser) {
          const data = auth.currentUser.toJSON() as zod.infer<typeof AccountSchema>

          const userDoc = doc(firestore, USER_COLLECTION, auth.currentUser.uid)

          const document = await getDoc(userDoc)

          if (!document.exists()) await setDoc(userDoc, { isAdministrator: false })

          this.profile = { ...data, isAdministrator: document.data()?.isAdministrator ?? false }
        }
      } catch (error) {
        console.error('[account]', error)
      } finally {
        this.googlePopupIsOpen = false
      }
    },

    async signOut() {
      await signOut(auth)

      this.$reset()
    }
  },

  persist: { enabled: true }
})

//------------------------------------------------------------------------------------------------
//  Definitions
//------------------------------------------------------------------------------------------------
type Profile = zod.infer<typeof AccountProfileSchema>
