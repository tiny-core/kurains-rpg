import { defineStore } from 'pinia'
import type * as zod from 'zod'

import type { AccountSchema, PlayerSchema } from '@/schemas/player'

export const usePlayerStore = defineStore('player', {
  state: (): Player => ({
    account: { uid: '', email: '', displayName: '', photoURL: '', refreshToken: '' },
    characters: []
  }),

  getters: {
    isAuthenticated: (store): boolean => store.account.uid !== ''
  },

  actions: {
    authStore(account: Account) {
      this.account = account
    }
  },

  persist: { enabled: true, strategies: [{ storage: localStorage }] }
})

//------------------------------------------------------------------------------------------------
//  Definitions
//------------------------------------------------------------------------------------------------
type Account = zod.infer<typeof AccountSchema>
type Player = zod.infer<typeof PlayerSchema>
