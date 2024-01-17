import { bean } from '../sprites'

export function addPlayer() {
  return add([bean, pos(center()), rotate(0), anchor('center')])
}
