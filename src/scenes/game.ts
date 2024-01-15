import { bean } from '../sprites'

scene('game', () => {
  add([pos(120, 80), bean])

  onClick(() => addKaboom(mousePos()))
})
