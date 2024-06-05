 function jump() {

		this.positionBody.positionBody.y -= 10
		if (this.stateDoubleJump === 2) {
			startPosition = this.positionBody.positionBody.y
			console.log("two")
			this.stateDoubleJump = 0
			clearInterval(startJump)
			startJump()
			return
		}
		console.log(this.positionBody.positionBody.y)
		if (startPosition - 100 > this.positionBody.positionBody.y) {
			console.log("end")
			clearInterval(startJump)
			const jumpEnd = setInterval(() => {
				this.positionBody.positionBody.y += 10
				if (this.positionBody.positionBody.y === 300) {
					console.log("aaaaa")
					clearInterval(jumpEnd)
					resolve(true)
				}
			}, 50)
		}
	
}
