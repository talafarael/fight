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
            console.log('forward')
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
    
	async jumpUp(rotate) {
		return new Promise((resolve) => {
            let positionY=-10
            let  positionX=0
			let startPosition = this.positionBody.positionBody.y
			
			const startJump = setInterval(() => {
                if(rotate==='left'){
                    positionX=-5
                }
                if(rotate==='right'){
                    positionX=5
                }
				this.positionBody.positionBody.y +=positionY
                this.positionBody.positionBody.x +=positionX
				if (this.stateDoubleJump === 2) {
					startPosition = this.positionBody.positionBody.y
                    console.log('di')
                    positionY=-10
                    this.stateDoubleJump=0
                    
                    
                    return; 
				}

				if (startPosition - 100 > this.positionBody.positionBody.y) {
                    positionY=+10
				
                    
                      
							
					
				}  
                
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
