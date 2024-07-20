"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reclining = void 0;
class Reclining {
    constructor(positionBody) {
        this.positionBody = positionBody;
    }
    recliningHeadHit() {
        if (this.positionBody.side == "left") {
            this.positionBody.positionHead.x = this.positionBody.positionHead.x + 10.5;
        }
    }
}
exports.Reclining = Reclining;
