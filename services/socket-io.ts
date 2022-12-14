import { Server } from 'socket.io'
import masterConnected from './master'
import playerConnected from './players'

export default () => ({
  name: 'socket.io',
  configureServer(server: any) {
    // create io server
    const io = new Server(server.httpServer, { serveClient: false })

    const master = io.of('/master')
    const players = io.of('/player')

    master.on('connection', (socket) => masterConnected(socket, players))

    players.on('connection', async (socket) => playerConnected(master, socket))
  }
})
