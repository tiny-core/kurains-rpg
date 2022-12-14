import type { Socket, Namespace } from 'socket.io'

export default (master: Namespace, player: Socket) => {
  console.log('[io] player connected: ', player.id)

  player.once('disconnect', () => master.emit('leave-the-room', player.id))

  player.once('enter-the-room', (id) => [
    /// !!! Verificar se existe uma sala com esse id !!!
    player.join(id),
    master.emit('joined-the-room', player.id)
  ])
}
