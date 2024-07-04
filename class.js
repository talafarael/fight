export class Person {
	constructor(position, player) {
		this.stateDoubleJump = 0
		this.player = player
		this.side = "right"
		this.hit = 0
		this.positionHead = {x: position.x + 18.5, y: position.y - 25}
		this.positionLegLeft = {
			x: position.x + 35,
			y: position.y + 75,
			sizeX: 25,
			sizeY: 75,
		}
		this.positionBody = position
		this.positionLegRight = {
			x: position.x + 3,
			y: position.y + 75,
			sizeX: 25,
			sizeY: 75,
		}
		this.positionHandLeft = {
			x: position.x,
			y: position.y + 20,
			sizeX: 90,
			sizeY: 18,
		}
		this.positionHandRight = {
			x: position.x,
			y: position.y + 38,
			sizeX: 65,
			sizeY: 18,
		}
	}
}
export class Hit {
	constructor(positionBody) {
		this.positionBody = positionBody
	}
	HitLeftHand() {
		if (this.positionBody.hit == 0) {
			let positionAddX = -20

			let side = "left"
			let position = 0
			let maximum = 4
			let positionAddY = -5
			this.positionBody.hit += 1
			if (this.positionBody.side == "right") {
				positionAddX = 15

				side = "right"
			}
			const startHit = setInterval(() => {
				this.positionBody.positionHandLeft.sizeX += positionAddY * -1
				this.positionBody.positionHandLeft.y += positionAddY

				if (this.positionBody.side != side) {
					side = this.positionBody.side
					this.positionBody.positionHandLeft.sizeX = 100

					this.positionBody.positionHandLeft.y =
						this.positionBody.positionHandRight.y - 18 - 10

					positionAddY = 0
					if (side == "right") {
						this.positionBody.positionHandLeft.x =
							this.positionBody.positionBody.x
						positionAddX = 15
					}

					if (side == "left") {
						positionAddX = -20
						this.positionBody.positionHandLeft.x =
							this.positionBody.positionBody.x - 40
					}

					position = 0
					maximum = maximum / 2
				}

				this.positionBody.positionHandLeft.x += positionAddX
				position++

				if (maximum == position) {
					position = position * -1
					positionAddY = 5
					positionAddX = positionAddX * -1
				}

				if (0 == position) {
					this.positionBody.hit = 0
					clearInterval(startHit)
				}
			}, 50)
		}
	}
}

export class HealBarAndHit {
	constructor(positionBody1, positionBody2) {
		this.positionBody = positionBody
	}
}

export class Move {
	constructor(Position) {
		this.positionBody = Position
		// this.positionBody.stateDoubleJump = 0
	}

	moveForward() {
		if (this.positionBody.positionBody.x < 725) {
			this.positionBody.positionBody.x += 10
			this.positionBody.positionHead.x += 10
			this.positionBody.positionLegLeft.x += 10
			this.positionBody.positionLegRight.x += 10
			this.positionBody.positionHandRight.x += 10
			this.positionBody.positionHandLeft.x += 10
		}
		return this.positionBody
	}
	changeSide() {
		const position = this.positionBody.positionBody
		if (this.positionBody.side == "left") {
			;(this.positionBody.positionHead.x = position.x + 18.5),
				(this.positionBody.positionLegLeft.x = position.x + 35),
				(this.positionBody.positionLegRight.x = position.x + 3),
				(this.positionBody.positionHandLeft.x = position.x),
				(this.positionBody.positionHandRight.x = position.x)
			this.positionBody.side = "right"
			return this.positionBody
		}
		;(this.positionBody.positionHead.x = position.x + 15.5),
			(this.positionBody.positionLegLeft.x = position.x + 28),
			(this.positionBody.positionLegRight.x = position.x - 5),
			(this.positionBody.positionHandLeft.x = position.x - 40),
			(this.positionBody.positionHandRight.x = position.x - 10)
		this.positionBody.side = "left"

		return this.positionBody
	}
	moveBack() {
		if (this.positionBody.positionBody.x > 25) {
			this.positionBody.positionBody.x += -10
			this.positionBody.positionHead.x += -10
			this.positionBody.positionLegRight.x += -10
			this.positionBody.positionLegLeft.x += -10
			this.positionBody.positionHandRight.x += -10
			this.positionBody.positionHandLeft.x += -10
		}
		return this.positionBody
	}

	jumpUp(rotate) {
		console.log(this.positionBody.stateDoubleJump)
		if (this.positionBody.stateDoubleJump < 2) {
			let positionY = -10
			let size = -1.5
			let startPosition = this.positionBody.positionBody.y
let startSide=this.positionBody.side
			const startJump = setInterval(() => {
				if (rotate === "left") {
					this.moveBack()
				}
				if (rotate === "right") {
					this.moveForward()
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
