import { Person } from "./class"
import { Movable } from "./move";

export class Jump {
	positionBody:Person
	private movable: Movable;
	constructor(movable: Movable,Position:Person) {
        this.positionBody = Position
		this.movable = movable;
    }
   
    jump(rotate:string | null) {
		console.log(this.positionBody.stateDoubleJump)
		if (this.positionBody.stateDoubleJump < 2) {
			let positionY = -10
			let size = -1.5
			let startPosition = this.positionBody.positionBody.y
let startSide=this.positionBody.side
			const startJump = setInterval(() => {
				if (rotate === "left") {
					this.movable.moveBack()
				}
				if (rotate === "right") {
					this.movable.moveForward()
				}

				this.positionBody.positionBody.y += positionY
				this.positionBody.positionHead.y += positionY
				this.positionBody.positionLegLeft.y += positionY * 1.25
				this.positionBody.positionLegRight.y += positionY * 1.25
				this.positionBody.positionBody.sizeY += size
				this.positionBody.positionLegLeft.sizeY += size
				this.positionBody.positionLegRight.sizeY += size
				this.positionBody.positionHandRight.y += positionY * 1.1
				this.positionBody.positionHandLeft.y += positionY * 1.1
				if (startSide == "right") {
					this.positionBody.positionLegRight.sizeY += positionY * 0.1
				} else {
					this.positionBody.positionLegLeft.sizeY += positionY * 0.1
				}
				if (this.positionBody.stateDoubleJump === 2) {
					startPosition = this.positionBody.positionBody.y

					positionY = -10
					size = -1.5
					this.positionBody.stateDoubleJump++
				}

				if (startPosition - 100 > this.positionBody.positionBody.y) {
					positionY = +10
					size = +1.5
				}

				if (this.positionBody.positionBody.y === 300) {
					console.log("null")
					this.positionBody.stateDoubleJump = 0
					clearInterval(startJump)

					return "aaa"
				}
			}, 50)
			if (this.positionBody.stateDoubleJump === 1) {
				clearInterval(startJump)
			}
			this.positionBody.stateDoubleJump++
		}
	}
}