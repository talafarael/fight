"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reclining = void 0;
class Reclining {
    constructor(positionBody) {
        this.positionBody = positionBody;
    }
    leftReclining(amount) {
        this.positionBody.positionHead.x += amount;
        this.positionBody.positionLegLeft.x += amount;
        this.positionBody.positionBody.x += amount;
        this.positionBody.positionLegRight.x += amount;
        this.positionBody.positionHandLeft.x += amount;
        this.positionBody.positionHandRight.x += amount;
    }
    rightReclining(amount) {
        this.positionBody.positionHead.x -= amount;
        this.positionBody.positionLegLeft.x -= amount;
        this.positionBody.positionBody.x -= amount;
        this.positionBody.positionLegRight.x -= amount;
        this.positionBody.positionHandLeft.x -= amount;
        this.positionBody.positionHandRight.x -= amount;
    }
    recliningHeadHit(side) {
        if ('left' == side) {
            this.leftReclining(10.5);
        }
        else {
            this.rightReclining(10.5);
        }
    }
}
exports.Reclining = Reclining;
