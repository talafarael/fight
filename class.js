export class Person {
	positionBody
	positionHead
	constructor(position) {
		this.positionBody = position
		this.positionHead = {x:position.x+18.5,y: position.y-25}
	}
	
}
export class Move extends Person {
	constructor(positionBody) {
		super(positionBody)
		this.stateDoubleJump = 0
	}

	moveForward() {
		if (this.positionBody.positionBody.x < 725) {
			console.log("forward")
			this.positionBody.positionBody.x += 10
		
		}
		return this.positionBody.positionBody
	}
	moveBack() {
		if (this.positionBody.positionBody.x > 25) {
			this.positionBody.positionBody.x =
				this.positionBody.positionBody.x - 10
			
		}
		return this.positionBody.positionBody
	}

	 jumpUp(rotate) {
		console.log(this.stateDoubleJump)
		if(this.stateDoubleJump<2){
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
					
                    return 'aaa'
					
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
