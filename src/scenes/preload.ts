import { sprites } from '../assets'
import { Scene } from '../types'

scene(Scene.preload, async () => {
  await Promise.all(
    Object.entries(sprites).map((sprite) => loadSprite(...sprite)),
  )

  go(Scene.game)
})
