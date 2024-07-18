import { IPerson, Person } from "./class";

export interface IHit  {
	
  
}

export class Hit implements IHit{
    private positionBody: IPerson;

    constructor(positionBody: IPerson) {
        this.positionBody = positionBody;
    }
   HitLeftHand() {
		if (this.positionBody.hit == 0) {
			let positionAddX = -20

			let side = "left"
			let position = 0
			let maximum = 4
			let positionAddY = -10
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
						this.positionBody.positionHandRight.y - 18 - 20

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
	// 			 const res=healBarAndHit.checkHit(this.positionBody.player)
	// 			if(res&&position>0){
	
	// maximum=position
	
// }
				if (maximum == position) {
					position = position * -1
					positionAddY = 10
					positionAddX = positionAddX * -1
				}

				if (0 == position) {
					this.positionBody.statusHit=0
					this.positionBody.hit = 0
					clearInterval(startHit)
				}
			}, 50)
		}
	}

}