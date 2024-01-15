import { addCursorKeys } from '../events'
import { addPlayer } from '../gameobjects'

scene('game', () => {
  addCursorKeys(addPlayer())

  onClick(() => addKaboom(mousePos()))

  add([text('Press arrow keys', { width: width() / 2 }), pos(12, 12)])
})
