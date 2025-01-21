import { Scene, Sprite } from '../constants'

scene(Scene.Preload, () => {
  loadSprite(Sprite.Bean, 'sprites/bean.png')
  loadSprite(Sprite.Ghosty, 'sprites/ghosty.png')
  go(Scene.Game)
})
