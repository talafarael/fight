import {Move, Person} from "./class.js"

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

let pressedKeys = {} // Define pressedKeys here

ctx.fillStyle = "green"
canvas.width = 800
canvas.height = 600
let jump = ""
let arr = {y: 300, x: 25, sizeX: 55, sizeY: 75}
ctx.fillRect(arr.x, arr.y, 55, 75)
ctx.fillRect(arr.x, arr.y + 20, 90, 18)
ctx.fillRect(arr.x, arr.y + 38, 65, 18)
ctx.fillRect(arr.x + 18.5, arr.y - 25, 25, 25)
ctx.fillRect(arr.x + 35, arr.y + 75, 25, 75)
ctx.fillRect(arr.x + 3, arr.y + 75, 25, 75)
const person = new Person(arr)
const move = new Move(person)

function draw() {
	// Clear canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.fillRect(
		arr.positionBody.x,
		arr.positionBody.y,
		arr.positionBody.sizeX,
		arr.positionBody.sizeY
	)
	ctx.fillRect(arr.positionHead.x, arr.positionHead.y, 25, 25)
	ctx.fillRect(arr.positionHead.x, arr.positionHead.y, 25, 25)
	ctx.fillRect(
		arr.positionHandRight.x,
		arr.positionHandRight.y,
		arr.positionHandRight.sizeX,
		arr.positionHandRight.sizeY
	)
	ctx.fillRect(
		arr.positionHandLeft.x,
		arr.positionHandLeft.y,
		arr.positionHandLeft.sizeX,
		arr.positionHandLeft.sizeY
	)
	ctx.fillRect(
		arr.positionLegLeft.x,
		arr.positionLegLeft.y,
		arr.positionLegRight.sizeX,
		arr.positionLegRight.sizeY
	)
	
	ctx.fillRect(
		arr.positionLegRight.x,
		arr.positionLegRight.y,
		arr.positionLegLeft.sizeX,
		arr.positionLegLeft.sizeY
	)
}

document.addEventListener("keydown", async (event) => {
	pressedKeys[event.key.toLowerCase()] = true

	if (event.key === "d" || event.key === "D") {
		arr = move.moveForward()
		console.log("da")
		draw()
	}
	if (event.key === "a" || event.key === "A") {
		arr = move.moveBack()

		draw()
	}if (event.key === "s" || event.key === "S") {
		arr = move.changeSide()

		draw()
	}

	if (event.key.toLowerCase() === "w") {
		let direction = null
		if (pressedKeys["d"]) {
			direction = "right"
		} else if (pressedKeys["a"]) {
			direction = "left"
		}

		move.jumpUp(direction)

		setInterval(() => {
			arr = move.positionBody
			draw()
		}, 50)
	}
})

document.addEventListener("keyup", (event) => {
	delete pressedKeys[event.key.toLowerCase()]
})
