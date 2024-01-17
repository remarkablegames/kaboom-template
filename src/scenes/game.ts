import { addCursorKeys } from '../events'
import { addPlayer } from '../gameobjects'

scene('game', () => {
  const player = addPlayer()

  player.onUpdate(() => {
    player.angle += 120 * dt()
  })

  addCursorKeys(player)

  onClick(() => addKaboom(mousePos()))

  add([text('Press arrow keys', { width: width() / 2 }), pos(12, 12)])
})
