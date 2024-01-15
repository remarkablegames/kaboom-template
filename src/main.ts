import "kaboom/global"

import kaboom from "kaboom"

import bean from "/sprites/bean.png"

kaboom()

loadSprite("bean", bean)

add([pos(120, 80), sprite("bean")])

onClick(() => addKaboom(mousePos()))
