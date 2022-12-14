import { defineStore } from 'pinia'
import { io, Socket } from 'socket.io-client'

let socket = {} as Socket

export const usePlayerStore = defineStore('player', {
  state: (): Player => ({
    email: '',
    name: '',

    character: {
      name: '',
      level: 0,
      age: 0,
      born: '',
      origin: '',
      class: '',
      rank: 0, // 0 - 4

      protection: '',
      resistance: '',
      defense: 0,

      stats: {
        life: { current: 0, total: 0 },
        sanity: { current: 0, total: 0 },
        mana: { current: 0, total: 0 }
      },

      abilities: {
        agility: 0,
        strength: 0,
        intelligence: 0,
        presence: 0,
        vitality: 0
      },

      expertise: [],

      rituals: [],

      inventory: {
        slots: {
          used: 0,
          total: 0
        },

        items: []
      }
    }
  }),

  getters: {},

  actions: {
    addItem(item: Item) {
      this.character.inventory.items.push(item)
      this.character.inventory.slots.used += item.slots
    },

    removeItem(id: string) {
      const index = this.character.inventory.items.findIndex((item) => item.id === id)

      this.character.inventory.items.splice(index, 1)
    },

    listen() {
      socket = io('/player', {})

      socket.on('connect', () => {
        // this.profile = this.socket.id
      })

      return this
    },

    joinTheRoom(id: string) {
      socket.emit('enter-the-room', id)
    }
  }
})
