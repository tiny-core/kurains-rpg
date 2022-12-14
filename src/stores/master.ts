import { defineStore } from 'pinia'
import { io, Socket } from 'socket.io-client'

let socket = {} as Socket

export const useMasterStore = defineStore('master', {
  state: () => ({
    roomID: '',
    players: [] as Array<string>
  }),

  getters: {},

  actions: {
    listen() {
      socket = io('/master', {})

      socket.on('joined-the-room', (id) => {
        this.players.push(id)
      })

      socket.on('leave-the-room', (id) => {
        const index = this.players.findIndex((player) => player === id)
        if (index > -1) this.players.splice(index, 1)
      })

      socket.on('room-id', (id) => (this.roomID = id))

      return this
    }
  }
})
