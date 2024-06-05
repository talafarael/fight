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
            let position=-10
            
			let startPosition = this.positionBody.positionBody.y
			
			const startJump = setInterval(() => {
				this.positionBody.positionBody.y +=position
				if (this.stateDoubleJump === 2) {
					startPosition = this.positionBody.positionBody.y
                    console.log('di')
                    position=-10
                    this.stateDoubleJump=0
                    
                    
                    return; 
				}

				if (startPosition - 100 > this.positionBody.positionBody.y) {
                    position=+10
				
                    
                      
							
					
				}  
                console.log('aaaaaa')
                if (this.positionBody.positionBody.y === 300) {
                    console.log('null')
                            clearInterval(startJump)
                            this.stateDoubleJump=0
                    
                            resolve(true)
                        }
			}, 50)
            if(this.stateDoubleJump === 1){
                clearInterval(startJump)
            }
            this.stateDoubleJump++
		})
	}
	get positionBody() {
		return this.positionBody
	}
}
