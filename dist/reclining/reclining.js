"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reclining = void 0;
class Reclining {
    constructor(positionBody) {
        this.positionBody = positionBody;
    }
    left() {
        this.positionBody.positionHead.x = this.positionBody.positionHead.x + 10.5;
    }
    recliningHeadHit(side) {
        if ('left' == side) {
            this.left();
        }
    }
}
exports.Reclining = Reclining;
