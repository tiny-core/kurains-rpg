import { defineStore } from 'pinia'

export const useNPCStore = defineStore('NPC', {
  state: () => ({
    nonHuman: [] as Array<NPC>,
    human: [] as Array<HumanNPC>
  }),

  getters: {},

  actions: {}
})

//------------------------------------------------------------------------------------------------
//  Definitions
//------------------------------------------------------------------------------------------------
