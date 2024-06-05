export class Person {
	positionBody
	constructor(position) {
		this.positionBody = position
	}
	set positionBody(value) {
		this.positionBody = value
	}
	get positionBody() {
		return this.positionBody
	}
}
export class Move extends Person {
	constructor(positionBody) {
		super(positionBody)
		this.stateDoubleJump = 0
	}

	moveForward() {
		if (this.positionBody.positionBody.x < 725) {
			this.positionBody.positionBody.x =
				this.positionBody.positionBody.x + 10
			return this.positionBody.positionBody
		}
		return this.positionBody.positionBody
	}
	moveBack() {
		if (this.positionBody.positionBody.x > 25) {
			this.positionBody.positionBody.x =
				this.positionBody.positionBody.x - 10
			return this.positionBody.positionBody
		}
		return this.positionBody.positionBody
	}
	async jumpUp() {
		return new Promise((resolve) => {
			let startPosition = this.positionBody.positionBody.y
			this.stateDoubleJump++
			const startJump = setInterval(() => {
				this.positionBody.positionBody.y -= 10
				if (this.stateDoubleJump === 2) {
					startPosition = this.positionBody.positionBody.y
                    console.log('di')
                    this.stateDoubleJump=0
                    clearInterval(startJump); 
                    
                    return; 
				}
console.log(this.positionBody.positionBody.y)
				if (startPosition - 100 > this.positionBody.positionBody.y) {
                    console.log('end')
					clearInterval(startJump)
					const jumpEnd = setInterval(() => {
						this.positionBody.positionBody.y += 10
						if (this.positionBody.positionBody.y === 300) {
                            console.log('aaaaa')
							clearInterval(jumpEnd)
							resolve(true)
						}
					}, 50)
				}
			}, 50)
		})
	}
	get positionBody() {
		return this.positionBody
	}
}
