"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeSide = void 0;
class ChangeSide {
    constructor(Position) {
        this.positionBody = Position;
        // this.positionBody.stateDoubleJump = 0
    }
    changeSide() {
        const position = this.positionBody.positionBody;
        if (this.positionBody.side == "left") {
            ;
            (this.positionBody.positionHead.x = position.x + 18.5),
                (this.positionBody.positionLegLeft.x = position.x + 35),
                (this.positionBody.positionLegRight.x = position.x + 3),
                (this.positionBody.positionHandLeft.x = position.x),
                (this.positionBody.positionHandRight.x = position.x);
            this.positionBody.side = "right";
            return this.positionBody;
        }
        ;
        (this.positionBody.positionHead.x = position.x + 15.5),
            (this.positionBody.positionLegLeft.x = position.x + 28),
            (this.positionBody.positionLegRight.x = position.x - 5),
            (this.positionBody.positionHandLeft.x = position.x - 40),
            (this.positionBody.positionHandRight.x = position.x - 10);
        this.positionBody.side = "left";
        return this.positionBody;
    }
}
exports.ChangeSide = ChangeSide;
