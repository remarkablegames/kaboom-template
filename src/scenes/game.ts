import { addCursorKeys } from '../events'
import { addPlayer } from '../gameobjects'

scene('game', () => {
  addCursorKeys(addPlayer())

  onClick(() => addKaboom(mousePos()))
})
