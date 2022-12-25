import { doc, getDoc, setDoc } from 'firebase/firestore'
import { defineStore } from 'pinia'
import type * as zod from 'zod'

import firebase from '@/firebase'
import type { AccountSchema, PlayerSchema } from '@/schemas/player'

export const usePlayerStore = defineStore('player', {
  state: (): Player => ({
    account: {
      uid: '',
      email: '',
      displayName: '',
      photoURL: '',
      refreshToken: '',
      isAdministrator: false
    },
    characters: []
  }),

  getters: {
    isAuthenticated: (store): boolean => store.account.uid !== ''
  },

  actions: {
    async authStore(account: Account) {
      let isAdministrator = false
      const docRef = doc(firebase.firestore, 'users', account.uid)

      const user = await getDoc(docRef)

      if (user.exists()) {
        const data = user.data()

        isAdministrator = data.isAdministrator ?? false
      } else {
        await setDoc(docRef, {
          isAdministrator: account.isAdministrator
        })
      }

      this.account = Object.assign({}, { ...account }, { isAdministrator })
    }
  },

  persist: { enabled: true, strategies: [{ storage: localStorage }] }
})

//------------------------------------------------------------------------------------------------
//  Definitions
//------------------------------------------------------------------------------------------------
type Account = zod.infer<typeof AccountSchema>
type Player = zod.infer<typeof PlayerSchema>
