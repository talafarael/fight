import { Person } from "./class"
export interface Movable {
	
    moveForward(): void;
    moveBack(): void;
}
export class Move implements Movable {
    private positionBody: Person;

    constructor(positionBody: Person) {
        this.positionBody = positionBody;
    }

    moveForward() {
        if (this.positionBody.positionBody.x < 725) {
            const distance = this.positionBody.side === 'left' ? 5 : 10;
            this._move(distance);
        }
    }

    moveBack() {
        if (this.positionBody.positionBody.x > 25) {
            const distance = this.positionBody.side === 'left' ? -10 : -5;
            this._move(distance);
        }
    }

    private _move(distance: number) {
        this.positionBody.positionBody.x += distance;
        this.positionBody.positionHead.x += distance;
        this.positionBody.positionLegLeft.x += distance;
        this.positionBody.positionLegRight.x += distance;
        this.positionBody.positionHandLeft.x += distance;
        this.positionBody.positionHandRight.x += distance;
    }
}