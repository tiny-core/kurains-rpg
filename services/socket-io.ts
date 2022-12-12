import { Server } from 'socket.io'

export default () => ({
  name: 'socket.io',
  configureServer(server: any) {
    // create io server
    const io = new Server(server.httpServer, { serveClient: false })

    const master = io.of('/master')
    const player = io.of('/player')

    master.on('connection', (socket) => {
      console.log('[io] master connected: ', socket.id)
    })

    player.on('connection', (socket) => {
      console.log('[io] player connected: ', socket.id)

      socket.once('disconnect', () => master.emit('leave-the-room', socket.id))

      socket.once('enter-the-room', (id) => [
        socket.join(id),
        master.emit('joined-the-room', socket.id)
      ])
    })
  }
})
