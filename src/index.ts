import 'kaboom/global'

import { bean } from './sprites'

add([pos(120, 80), bean])

onClick(() => addKaboom(mousePos()))
