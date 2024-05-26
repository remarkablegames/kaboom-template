import { Scene, Sprite } from '../types'

scene(Scene.preload, () => {
  loadSprite(Sprite.bean, 'sprites/bean.png')
  loadSprite(Sprite.ghosty, 'sprites/ghosty.png')

  go(Scene.game)
})
