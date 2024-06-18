export class Person {
	positionBody
	positionHead
	positionLegLeft
	positionLegRight
	positionHandRight
	positionHandLeft
	side
	constructor(position) {
		this.positionBody = position
		this.side-'right'
		this.positionHead = {x: position.x + 18.5, y: position.y - 25}
		this.positionLegLeft = {
			x: position.x + 35,
			y: position.y + 75,
			sizeX: 25,
			sizeY: 75,
		}
		this.positionLegRight = {
			x: position.x + 3,
			y: position.y + 75,
			sizeX: 25,
			sizeY: 75,
		}
		this.positionHandLeft = {
			x: position.x ,
			y: position.y +20,
			sizeX:90,
			sizeY: 18,
		}
		this.positionHandRight={
			x: position.x ,
			y: position.y+ 38,
			sizeX: 65,
			sizeY: 18,
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
			this.positionBody.positionHandRight.x+=10
			this.positionBody.positionHandLeft.x+=10
		}
		return this.positionBody
	}
	changeSide(){
		const position=this.positionBody.positionBody
		if(this.positionBody.side=='left'){
		
		
		this.positionBody.positionHead = {x: position.x + 18.5, y: position.y - 25}
		this.positionBody.positionLegLeft = {
			x: position.x + 35,
			y: position.y + 75,
			
		}
		this.positionBody.positionLegRight = {
			x: position.x + 3,
			y: position.y + 75,
			
		}
		this.positionBody.positionHandLeft = {
			x: position.x ,
			y: position.y +20,
			
		}
		this.positionBody.positionHandRight={
			x: position.x ,
			y: position.y+ 38,
			sizeX: 65,
			sizeY: 18,
		}
		return this.positionBody
		}
		this.positionBody.positionHead.x = position.x + 15.5, 
		this.positionBody.positionLegLeft.x=position.x + 28,
			
		this.positionBody.positionLegRight.x = position.x - 5,
			
		this.positionBody.positionHandLeft = {
			x: position.x ,
			y: position.y +20,
			
		}
		this.positionBody.positionHandRight={
			x: position.x ,
			y: position.y+ 38,
			sizeX: 65,
			sizeY: 18,
		}
		return this.positionBody
		



	}
	moveBack() {
		if (this.positionBody.positionBody.x > 25) {
			this.positionBody.positionBody.x+=- 10
			this.positionBody.positionHead.x += - 10
			this.positionBody.positionLegRight.x += - 10
			this.positionBody.positionLegLeft.x +=- 10
				this.positionBody.positionHandRight.x+=-10
			this.positionBody.positionHandLeft.x+=-10
		}
		return this.positionBody
	}

	jumpUp(rotate) {
		console.log(this.stateDoubleJump)
		if (this.stateDoubleJump < 2) {
			let positionY = -10
			let size = -1.5
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
				this.positionBody.positionLegLeft.y += positionY * 1.25
				this.positionBody.positionLegRight.y += positionY * 1.25
				this.positionBody.positionBody.sizeY += size
				this.positionBody.positionLegLeft.sizeY += size
				this.positionBody.positionLegRight.sizeY += size
				this.positionBody.positionHandRight.y += positionY*1.10
				this.positionBody.positionHandLeft.y += positionY*1.10
				
				
			
				this.positionBody.positionLegRight.sizeY += positionY*0.1
				
				if (this.stateDoubleJump === 2) {
					startPosition = this.positionBody.positionBody.y

					positionY = -10
					size = -1.5
					this.stateDoubleJump++
				}

				if (startPosition - 100 > this.positionBody.positionBody.y) {
					positionY = +10
					size = +1.5
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
