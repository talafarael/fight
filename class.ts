import { Movable } from "./move"
import { IConstructor, IInheritance, IPosition, Side } from "./type"

export interface IPerson{
	stateDoubleJump:number
	player:1|2
	side:'left'|'right'
	statusHit:number
	health:number
	hit:number
	positionHead:IPosition
	positionBody:IPosition
	positionLegLeft:IPosition
	positionLegRight:IPosition
	positionHandLeft:IPosition
	positionHandRight:IPosition
	draw(ctx: CanvasRenderingContext2D): void;
}
export class Person implements IPerson{
	stateDoubleJump:number
	player:1|2
	side:'left'|'right'
	statusHit:number
	health:number
	hit:number
	positionHead:IPosition
	positionBody:IPosition
	positionLegLeft:IPosition
	positionLegRight:IPosition
	positionHandLeft:IPosition
	positionHandRight:IPosition
	constructor({position, player,side}:IConstructor) {
        this.stateDoubleJump = 0
		this.player = player
		this.side = "right"
		this.statusHit = 0
		this.health=20
		this.hit=0
		this.positionHead = {x: position.x + 18.5, y: position.y - 25,	sizeX: 25,
			sizeY: 25}
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
		if(side=="left"){
			this.positionHead.x = position.x + 15.5,
			this.positionLegLeft.x = position.x + 28,
			this.positionLegRight.x = position.x - 5,
			this.positionHandLeft.x = position.x - 40,
			this.positionHandRight.x = position.x - 10
		this.side = "left"
		}
		
	}
	draw(ctx: CanvasRenderingContext2D) {
        ctx.fillRect(this.positionBody.x, this.positionBody.y, this.positionBody.sizeX, this.positionBody.sizeY);
        ctx.fillRect(this.positionHead.x, this.positionHead.y, this.positionHead.sizeX, this.positionHead.sizeY);
        ctx.fillRect(this.positionHandRight.x, this.positionHandRight.y, this.positionHandRight.sizeX, this.positionHandRight.sizeY);
        ctx.fillRect(this.positionHandLeft.x, this.positionHandLeft.y, this.positionHandLeft.sizeX, this.positionHandLeft.sizeY);
        ctx.fillRect(this.positionLegLeft.x, this.positionLegLeft.y, this.positionLegRight.sizeX, this.positionLegRight.sizeY);
        ctx.fillRect(this.positionLegRight.x, this.positionLegRight.y, this.positionLegLeft.sizeX, this.positionLegLeft.sizeY);
    }
}


export class HealBarAndHit {
	positionBody1: Person;
	positionBody2: Person;

	constructor({ positionBody1, positionBody2 }: { positionBody1: Person, positionBody2: Person }) {
		this.positionBody1 = positionBody1;
		this.positionBody2 = positionBody2;
	}
	checkHit(player:1|2){
		let playerHit=this.positionBody1
		let playerGetHit=this.positionBody2
	
       if(player==this.positionBody2.player){
		playerHit=this.positionBody2
		playerGetHit=this.positionBody1
	
	   }
	if(playerHit.statusHit ==0){
	   if(playerHit.positionHandLeft.x+playerHit.positionHandLeft.sizeX>=playerGetHit.positionHead.x
		&& playerHit.positionHandLeft.x+playerHit.positionHandLeft.sizeX<=playerGetHit.positionHead.x+playerGetHit.positionHead.sizeX+playerHit.positionHandLeft.sizeX){

		if(playerHit.positionHandLeft.y>=playerGetHit.positionHead.y
			&& playerHit.positionHandLeft.y<=playerGetHit.positionHead.y+playerGetHit.positionHead.sizeY+playerHit.positionHandLeft.sizeY){
				playerHit.statusHit=1

				this.positionBody1=playerHit
		 this.positionBody2=playerGetHit
		 if(player==this.positionBody2.player){
			this.positionBody2=playerHit
		 this.positionBody1=playerGetHit
		
		   }
		  return true 
}
	   }
	}
return false

	}
}



