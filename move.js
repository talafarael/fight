"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Move = void 0;
class Move {
    constructor(Position) {
        this.positionBody = Position;
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
    _move(distance) {
        this.positionBody.positionBody.x += distance;
        this.positionBody.positionHead.x += distance;
        this.positionBody.positionLegLeft.x += distance;
        this.positionBody.positionLegRight.x += distance;
        this.positionBody.positionHandRight.x += distance;
        this.positionBody.positionHandLeft.x += distance;
    }
}
exports.Move = Move;
