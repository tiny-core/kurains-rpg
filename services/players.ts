import type { Namespace, Socket } from 'socket.io'

export default (master: Namespace, player: Socket) => {
  console.log('[io] player connected: ', player.id)

  player.once('disconnect', () => master.emit('leave-the-room', player.id))

  player.once('enter-the-room', (id) => {
    if (master.adapter.rooms.has(id)) {
      player.join(id)
      master.emit('joined-the-room', player.id)
      player.emit('joined-the-room', true)
    } else player.emit('joined-the-room', false)
  })
}
