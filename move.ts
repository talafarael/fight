import { Person } from "./class"
export interface Movable {
	
    moveForward(): void;
    moveBack(): void;
}
export class Move  implements Movable {
	positionBody:Person
	constructor(Position:Person) {
		this.positionBody = Position
		// this.positionBody.stateDoubleJump = 0
	}
    moveForward() {
		if (this.positionBody.positionBody.x < 725) {
			this._move(10);
		}
	}

	moveBack() {
		if (this.positionBody.positionBody.x > 25) {
			this._move(-10);
		}
	}

	_move(distance:number) {
		this.positionBody.positionBody.x += distance;
		this.positionBody.positionHead.x += distance;
		this.positionBody.positionLegLeft.x += distance;
		this.positionBody.positionLegRight.x += distance;
		this.positionBody.positionHandRight.x += distance;
		this.positionBody.positionHandLeft.x += distance;
	}

}