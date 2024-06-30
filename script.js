import {Hit, Move, Person} from "./class.js"

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
const person = new Person(arr,1)
const move = new Move(person)
const hit= new Hit(person)
function draw(position) {
	
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.fillRect(
		position.positionBody.x,
		position.positionBody.y,
		position.positionBody.sizeX,
		position.positionBody.sizeY
	)
	ctx.fillRect(position.positionHead.x, position.positionHead.y, 25, 25)
	ctx.fillRect(position.positionHead.x, position.positionHead.y, 25, 25)
	ctx.fillRect(
		position.positionHandRight.x,
		position.positionHandRight.y,
		position.positionHandRight.sizeX,
		position.positionHandRight.sizeY
	)
	ctx.fillRect(
		position.positionHandLeft.x,
		position.positionHandLeft.y,
		position.positionHandLeft.sizeX,
		position.positionHandLeft.sizeY
	)
	ctx.fillRect(
		position.positionLegLeft.x,
		position.positionLegLeft.y,
		position.positionLegRight.sizeX,
		position.positionLegRight.sizeY
	)
	
	ctx.fillRect(
		position.positionLegRight.x,
		position.positionLegRight.y,
		position.positionLegLeft.sizeX,
		position.positionLegLeft.sizeY
	)
}

document.addEventListener("keydown", async (event) => {
	pressedKeys[event.key.toLowerCase()] = true

	if (event.key === "d" || event.key === "D") {
		const position= move.moveForward()
		console.log("da")
	 draw(position)
	}
	if (event.key === "q" || event.key === "Q") {
 hit.HitHand()
		
	}
	if (event.key === "a" || event.key === "A") {
		const position = move.moveBack()

		draw(position)
	}if (event.key === "s" || event.key === "S") {
		const position = move.changeSide()

		draw(position)
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
			const position = move.positionBody
			draw(position)
		}, 50)
	}
})

document.addEventListener("keyup", (event) => {
	delete pressedKeys[event.key.toLowerCase()]
})
