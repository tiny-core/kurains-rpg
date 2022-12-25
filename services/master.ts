import { MersenneTwister19937, uuid4 } from 'random-js'
import type { Namespace, Socket } from 'socket.io'

export default (master: Socket, player: Namespace) => {
  console.log('[io] master connected: ', master.id)

  const roomID = uuid4(MersenneTwister19937.autoSeed())

  master.join(roomID)
  master.emit('room-id', roomID)
}
