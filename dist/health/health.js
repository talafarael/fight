"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Health = void 0;
class Health {
    constructor(positionBody) {
        this.positionBody = positionBody;
    }
    minusHp(health) {
        this.positionBody.health -= health;
    }
    headHitHealth() {
        this.minusHp(3);
    }
}
exports.Health = Health;
