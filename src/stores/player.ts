import { defineStore } from 'pinia'
import { io, Socket } from 'socket.io-client'

let socket = {} as Socket

export const usePlayerStore = defineStore('player', {
  state: (): Player => ({
    email: '',
    name: '',
    connected: false,
    isTheMaster: false,
    characters: []
  }),

  getters: {},

  actions: {
    addItem(item: Item) {},

    removeItem(id: string) {},

    listen() {
      socket = io({})

      socket.on('joined-the-room', (connected) => (this.connected = connected))

      return this
    },

    joinTheRoom(id: string) {
      socket.emit('enter-the-room', id)
    }
  },

  persist: { enabled: true }
})
