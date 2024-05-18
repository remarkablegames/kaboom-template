import './game'
import './preload'

import { Scene } from '../types'

export function start() {
  go(Scene.preload)
}
