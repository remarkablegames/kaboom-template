import { addCursorKeys } from '../events'
import { addPlayer } from '../gameobjects'
import { ghosty } from '../sprites'

scene('game', () => {
  const player = addPlayer()

  player.onUpdate(() => {
    player.angle += 120 * dt()
  })

  addCursorKeys(player)

  onClick(() => addKaboom(mousePos()))

  add([text('Press arrow keys', { width: width() / 2 }), pos(12, 12)])

  for (let i = 0; i < 3; i++) {
    const x = rand(0, width())
    const y = rand(0, height())
    add([ghosty, pos(x, y)])
  }
})
