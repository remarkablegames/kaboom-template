import { Sprite, Tag } from '../constants'

export function addPlayer(x = center().x, y = center().y) {
  return add([
    sprite(Sprite.Bean),
    pos(x, y),
    rotate(0),
    anchor('center'),
    Tag.Player,
  ])
}
