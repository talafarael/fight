export class Person {
	positionBody
	positionHead
	positionLegLeft
	positionLegRight
	constructor(position) {
		this.positionBody = position
		this.positionHead = {x: position.x + 18.5, y: position.y - 25}
		this.positionLegLeft = {
			x: position.x + 35,
			y: position.y + 75,
			sizeX:25,
			sizeY: 75
		}
		this.positionLegRight = {
			x: position.x + 3,
			y: position.y + 75,
			sizeX:25,
			sizeY: 75
		}
	}
}
export class Move extends Person {
	constructor(positionBody) {
		super(positionBody)
		this.stateDoubleJump = 0
	}

	moveForward() {
		if (this.positionBody.positionBody.x < 725) {
			this.positionBody.positionBody.x += 10
			this.positionBody.positionHead.x += 10
			this.positionBody.positionLegLeft.x += 10
			this.positionBody.positionLegRight.x += 10
		}
		return this.positionBody
	}
	moveBack() {
		if (this.positionBody.positionBody.x > 25) {
			this.positionBody.positionBody.x =
				this.positionBody.positionBody.x - 10
			this.positionBody.positionHead.x =
				this.positionBody.positionHead.x - 10
			this.positionBody.positionLegRight.x =
				this.positionBody.positionLegRight.x - 10
			this.positionBody.positionLegLeft.x =
				this.positionBody.positionLegLeft.x - 10
		}
		return this.positionBody
	}

	jumpUp(rotate) {
		console.log(this.stateDoubleJump)
		if (this.stateDoubleJump < 2) {
			let positionY = -10

			let startPosition = this.positionBody.positionBody.y

			const startJump = setInterval(() => {
				if (rotate === "left") {
					this.moveBack()
				}
				if (rotate === "right") {
					this.moveForward()
				}
				this.positionBody.positionBody.y += positionY
				this.positionBody.positionHead.y += positionY
				this.positionBody.positionLegLeft.y += positionY
				this.positionBody.positionLegRight.y += positionY
				if (this.stateDoubleJump === 2) {
					startPosition = this.positionBody.positionBody.y
					console.log("di")
					positionY = -10
					this.stateDoubleJump++
				}

				if (startPosition - 100 > this.positionBody.positionBody.y) {
					positionY = +10
				}

				if (this.positionBody.positionBody.y === 300) {
					console.log("null")
					this.stateDoubleJump = 0
					clearInterval(startJump)

					return "aaa"
				}
			}, 50)
			if (this.stateDoubleJump === 1) {
				clearInterval(startJump)
			}
			this.stateDoubleJump++
		}
	}

	get positionBody() {
		return this.positionBody
	}
}
